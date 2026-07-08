"""
AD Navigator — Streamlit entry point
====================================
Deploys the AD Navigator site on Streamlit Community Cloud, exactly like the
id-intel-platform workflow: push to GitHub, then point Streamlit Cloud at this
file (streamlit_app.py).

It reuses the static site (index.html + assets/ + data/content.js) and injects
a LIVE research feed fetched at runtime from PubMed + ClinicalTrials.gov,
cached for a day. No GitHub Actions needed for the Streamlit deployment.

Run locally:   streamlit run streamlit_app.py
"""
import json
import time
import datetime
import urllib.parse
import urllib.request
from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components

ROOT = Path(__file__).resolve().parent

# --- research config (mirrors scripts/update_research.py) ------------------
TERM        = "atopic dermatitis"
RECENT_DAYS = 365
N_PAPERS    = 12
N_TRIALS    = 12
TIMEOUT     = 30
EUTILS      = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/"
CT_API      = "https://clinicaltrials.gov/api/v2/studies"
UA          = {"User-Agent": "ad-navigator/1.0 research-feed"}


def _get_json(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
        return json.loads(resp.read().decode("utf-8"))


def _fetch_papers():
    common = {"db": "pubmed", "retmode": "json", "tool": "ad-navigator"}
    email = st.secrets.get("NCBI_EMAIL", "") if hasattr(st, "secrets") else ""
    if email:
        common["email"] = email
    sp = dict(common)
    sp.update({"term": TERM + " AND humans[Filter]", "sort": "pub_date",
               "datetype": "pdat", "reldate": str(RECENT_DAYS), "retmax": str(N_PAPERS)})
    ids = _get_json(EUTILS + "esearch.fcgi?" + urllib.parse.urlencode(sp)) \
        .get("esearchresult", {}).get("idlist", [])
    if not ids:
        return []
    time.sleep(0.4)
    res = _get_json(EUTILS + "esummary.fcgi?" +
                    urllib.parse.urlencode({**common, "id": ",".join(ids)})).get("result", {})
    out = []
    for pmid in res.get("uids", []):
        rec = res.get(pmid, {})
        auth = [a.get("name", "") for a in rec.get("authors", []) if a.get("name")]
        out.append({
            "title": rec.get("title", "").rstrip("."),
            "journal": rec.get("fulljournalname") or rec.get("source", ""),
            "date": rec.get("pubdate", ""),
            "authors": ", ".join(auth[:3]) + (" et al." if len(auth) > 3 else ""),
            "url": "https://pubmed.ncbi.nlm.nih.gov/%s/" % pmid,
        })
    return out


def _fetch_trials():
    params = {"query.cond": TERM, "sort": "LastUpdatePostDate:desc",
              "pageSize": str(N_TRIALS),
              "fields": "NCTId,BriefTitle,OverallStatus,LastUpdatePostDate,Condition"}
    data = _get_json(CT_API + "?" + urllib.parse.urlencode(params))
    out = []
    for s in data.get("studies", []):
        ps = s.get("protocolSection", {})
        ident = ps.get("identificationModule", {})
        status = ps.get("statusModule", {})
        conds = ps.get("conditionsModule", {}).get("conditions", [])
        nct = ident.get("nctId", "")
        out.append({
            "title": ident.get("briefTitle", ""),
            "status": (status.get("overallStatus", "") or "").replace("_", " ").title(),
            "date": status.get("lastUpdatePostDateStruct", {}).get("date", ""),
            "conditions": ", ".join(conds[:3]),
            "url": "https://clinicaltrials.gov/study/%s" % nct if nct else "",
        })
    return out


@st.cache_data(ttl=60 * 60 * 24, show_spinner=False)   # refresh once a day
def get_research():
    """Live feed; falls back to the committed data/research.js if a fetch fails."""
    papers, trials = [], []
    try:
        papers = _fetch_papers()
    except Exception:
        pass
    try:
        trials = _fetch_trials()
    except Exception:
        pass
    if papers or trials:
        return {"generatedAt": datetime.date.today().isoformat(),
                "source": "PubMed (NCBI E-utilities) + ClinicalTrials.gov API v2 · live",
                "papers": papers, "trials": trials}
    # fallback: parse the committed research.js
    try:
        raw = (ROOT / "data" / "research.js").read_text(encoding="utf-8")
        body = raw[raw.index("{"): raw.rstrip().rstrip(";").rindex("}") + 1]
        return json.loads(body)
    except Exception:
        return {"generatedAt": "", "source": "", "papers": [], "trials": []}


def build_html():
    css = (ROOT / "assets" / "styles.css").read_text(encoding="utf-8")
    content_js = (ROOT / "data" / "content.js").read_text(encoding="utf-8")
    app_js = (ROOT / "assets" / "app.js").read_text(encoding="utf-8")
    research = get_research()
    research_js = "window.AD_RESEARCH = " + json.dumps(research, ensure_ascii=False) + ";"

    html = (ROOT / "index.html").read_text(encoding="utf-8")
    # inline the external files so it works inside the component iframe
    html = html.replace('<link rel="stylesheet" href="assets/styles.css" />',
                        "<style>\n" + css + "\n</style>")
    html = html.replace('<script src="data/content.js"></script>',
                        "<script>\n" + content_js + "\n</script>")
    html = html.replace('<script src="data/research.js"></script>',
                        "<script>\n" + research_js + "\n</script>")
    try:
        refs_js = (ROOT / "data" / "references.js").read_text(encoding="utf-8")
    except Exception:
        refs_js = "window.AD_REFERENCES=null;"
    html = html.replace('<script src="data/references.js"></script>',
                        "<script>\n" + refs_js + "\n</script>")
    html = html.replace('<script src="assets/app.js"></script>',
                        "<script>\n" + app_js + "\n</script>")
    return html, research


# --- page ------------------------------------------------------------------
st.set_page_config(page_title="AD Navigator", page_icon="🧭", layout="wide")

# remove Streamlit chrome/padding so the site fills the width
st.markdown("""
<style>
  #MainMenu, header, footer {visibility: hidden;}
  .block-container {padding: 0 !important; max-width: 100% !important;}
  [data-testid="stAppViewContainer"] {background: #f8f1ec;}
</style>
""", unsafe_allow_html=True)

html, research = build_html()
components.html(html, height=1100, scrolling=True)

st.caption(
    "AD Navigator · general education summarized from public guidelines "
    "(AAD, National Eczema Association, NHS, DermNet, NIH/NIAMS, ACAAI) — not "
    "individual medical advice. Research feed auto-updated "
    f"{research.get('generatedAt', '')} from PubMed + ClinicalTrials.gov."
)
