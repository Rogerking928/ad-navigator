#!/usr/bin/env python3
"""
AD Navigator — research feed updater
====================================
Fetches the latest atopic-dermatitis papers (PubMed / NCBI E-utilities)
and clinical trials (ClinicalTrials.gov API v2), then writes
data/research.js as `window.AD_RESEARCH = {...};`.

Run locally:   python scripts/update_research.py
Runs daily in CI via .github/workflows/update.yml

No API key required. Standard library only (no pip installs).
Set env var NCBI_EMAIL to a contact address (polite + higher rate limit).
"""

import json
import os
import sys
import time
import datetime
import urllib.parse
import urllib.request

# --- config ---------------------------------------------------------------
TERM         = "atopic dermatitis"
RECENT_DAYS  = 365          # only papers from the last N days
N_PAPERS     = 12
N_TRIALS     = 12
ARCHIVE_MAX  = 500          # cap the accumulated archive so the file can't grow forever
NCBI_EMAIL   = os.environ.get("NCBI_EMAIL", "")   # optional but recommended
TOOL_NAME    = "ad-navigator"
TIMEOUT      = 30
OUT_PATH     = os.path.join(os.path.dirname(__file__), "..", "data", "research.js")

EUTILS = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/"
CT_API = "https://clinicaltrials.gov/api/v2/studies"

UA = {"User-Agent": "ad-navigator/1.0 (+https://github.com/) research-feed-updater"}


def _get_json(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
        return json.loads(resp.read().decode("utf-8"))


# --- PubMed ---------------------------------------------------------------
def fetch_papers():
    """esearch (most recent by pub_date, last RECENT_DAYS) -> esummary (JSON)."""
    common = {"db": "pubmed", "retmode": "json", "tool": TOOL_NAME}
    if NCBI_EMAIL:
        common["email"] = NCBI_EMAIL

    search_params = dict(common)
    search_params.update({
        # humans[Filter] keeps out veterinary/animal-only papers
        "term": TERM + " AND humans[Filter]",
        "sort": "pub_date",          # verified: most-recent-first (sort=date is invalid)
        "datetype": "pdat",
        "reldate": str(RECENT_DAYS),
        "retmax": str(N_PAPERS),
    })
    search = _get_json(EUTILS + "esearch.fcgi?" + urllib.parse.urlencode(search_params))
    ids = search.get("esearchresult", {}).get("idlist", [])
    if not ids:
        return []

    time.sleep(0.4)  # stay under 3 req/s without an API key

    sum_params = dict(common)
    sum_params.update({"id": ",".join(ids)})
    summary = _get_json(EUTILS + "esummary.fcgi?" + urllib.parse.urlencode(sum_params))
    result = summary.get("result", {})

    papers = []
    for pmid in result.get("uids", []):
        rec = result.get(pmid, {})
        authors = [a.get("name", "") for a in rec.get("authors", []) if a.get("name")]
        author_str = ", ".join(authors[:3]) + (" et al." if len(authors) > 3 else "")
        papers.append({
            "title": rec.get("title", "").rstrip("."),
            "journal": rec.get("fulljournalname") or rec.get("source", ""),
            "date": rec.get("pubdate", ""),
            "authors": author_str,
            "url": "https://pubmed.ncbi.nlm.nih.gov/%s/" % pmid,
        })
    return papers


# --- ClinicalTrials.gov ---------------------------------------------------
def fetch_trials():
    params = {
        "query.cond": TERM,
        "sort": "LastUpdatePostDate:desc",   # verified: most recently updated first
        "pageSize": str(N_TRIALS),
        "fields": "NCTId,BriefTitle,OverallStatus,LastUpdatePostDate,Condition",
    }
    data = _get_json(CT_API + "?" + urllib.parse.urlencode(params))
    trials = []
    for study in data.get("studies", []):
        ps = study.get("protocolSection", {})
        ident = ps.get("identificationModule", {})
        status = ps.get("statusModule", {})
        conds = ps.get("conditionsModule", {}).get("conditions", [])
        nct = ident.get("nctId", "")
        trials.append({
            "title": ident.get("briefTitle", ""),
            "status": (status.get("overallStatus", "") or "").replace("_", " ").title(),
            "date": status.get("lastUpdatePostDateStruct", {}).get("date", ""),
            "conditions": ", ".join(conds[:3]),
            "url": "https://clinicaltrials.gov/study/%s" % nct if nct else "",
        })
    return trials


# --- archive (preserve older items, never drop) ---------------------------
def load_existing():
    """Read the previous research.js so we can keep its archived items."""
    try:
        with open(os.path.abspath(OUT_PATH), encoding="utf-8") as f:
            txt = f.read()
        start = txt.index("window.AD_RESEARCH")
        brace = txt.index("{", start)
        end = txt.rindex("}")
        return json.loads(txt[brace:end + 1])
    except Exception as e:
        print("Note: no reusable previous research.js (%s)" % e, file=sys.stderr)
        return {}


def merge_archive(new_items, old_items):
    """Newest fetch first, then older archived items, deduped by url. Nothing is lost."""
    seen, merged = set(), []
    for it in list(new_items) + list(old_items):
        key = it.get("url", "")
        if not key or key in seen:
            continue
        seen.add(key)
        merged.append(it)
    return merged[:ARCHIVE_MAX]


# --- write ----------------------------------------------------------------
def write_js(payload):
    header = (
        "/* ============================================================\n"
        "   AD Navigator - Latest research & trials feed\n"
        "   ------------------------------------------------------------\n"
        "   AUTO-GENERATED by scripts/update_research.py - do not edit.\n"
        "   ============================================================ */\n"
        "window.AD_RESEARCH = "
    )
    body = json.dumps(payload, ensure_ascii=False, indent=2)
    out = os.path.abspath(OUT_PATH)
    with open(out, "w", encoding="utf-8") as f:
        f.write(header + body + ";\n")
    return out


def main():
    today = datetime.date.today().isoformat()
    papers, trials = [], []
    try:
        papers = fetch_papers()
        print("Fetched %d papers from PubMed" % len(papers))
    except Exception as e:              # keep going even if one source fails
        print("WARN: PubMed fetch failed: %s" % e, file=sys.stderr)
    try:
        trials = fetch_trials()
        print("Fetched %d trials from ClinicalTrials.gov" % len(trials))
    except Exception as e:
        print("WARN: ClinicalTrials fetch failed: %s" % e, file=sys.stderr)

    if not papers and not trials:
        print("ERROR: both sources returned nothing; leaving research.js unchanged.",
              file=sys.stderr)
        return 1

    # Accumulate into an archive that keeps older items instead of overwriting them.
    existing = load_existing()
    archive_papers = merge_archive(papers, existing.get("archivePapers", []))
    archive_trials = merge_archive(trials, existing.get("archiveTrials", []))

    # Live feed = newest N; fall back to the archive if a source failed today so
    # a transient outage never blanks the feed.
    live_papers = papers if papers else archive_papers[:N_PAPERS]
    live_trials = trials if trials else archive_trials[:N_TRIALS]

    payload = {
        "generatedAt": today,
        "source": "PubMed (NCBI E-utilities) + ClinicalTrials.gov API v2",
        "papers": live_papers,
        "trials": live_trials,
        "archivePapers": archive_papers,
        "archiveTrials": archive_trials,
    }
    out = write_js(payload)
    print("Wrote %s (archive: %d papers, %d trials)"
          % (out, len(archive_papers), len(archive_trials)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
