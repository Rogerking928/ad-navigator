# AD Navigator

**Atopic dermatitis (eczema), organized by your situation — not an encyclopedia, a navigator.**

Instead of browsing topics, you pick the situation you're actually in ("I'm really itchy", "I can't sleep", "I'm about to start a biologic", "I'm pregnant", "my child was just diagnosed", "I want to travel"…) and get one clear **path**: what's going on → what to do now → common questions → guideline sources → community voice → where to go next.

A separate **Latest research & trials** feed updates automatically from PubMed and ClinicalTrials.gov, so what's new stays fresh while the care advice stays clinician-reviewed.

> ⚕️ General education summarized from public guidelines and patient organizations — **not individual medical advice**. Discuss medication, dosage, and stopping treatment with your own doctor.

---

## How it's built

Static site, no build step, no framework. Content is data, so it's easy to review and update.

```
ad-navigator/
├── index.html                 # the page
├── assets/
│   ├── styles.css             # design system (nude-rose palette)
│   └── app.js                 # renders scenarios, the path panel, search, research feed
├── data/
│   ├── content.js             # CURATED care paths (clinician-reviewed) — window.AD_CONTENT
│   └── research.js            # AUTO-GENERATED research feed        — window.AD_RESEARCH
├── scripts/
│   └── update_research.py     # fetches PubMed + ClinicalTrials.gov, rewrites data/research.js
└── .github/workflows/
    └── update.yml             # daily cron → runs the script → commits → Pages redeploys
```

**Why two data files?** Medical advice shouldn't be rewritten by a script with no human in the loop, so `content.js` is edited and reviewed by a clinician. Only `research.js` (new papers/trials, which is safe to surface automatically) is machine-generated.

## Content sources

Care paths are summarized from public guidelines and patient organizations, and every path lists its own sources: American Academy of Dermatology (AAD), National Eczema Association, National Eczema Society (UK), NHS, DermNet, NIH/NIAMS, ACAAI. The research feed comes from PubMed (NCBI E-utilities) and the ClinicalTrials.gov v2 API.

## Run locally

Just open `index.html` in a browser (double-click). Everything is local; no server needed.

To refresh the research feed manually (Python 3, standard library only — no `pip install`):

```bash
python scripts/update_research.py
```

Optional: set a contact email for the NCBI API (politeness + higher rate limit):

```bash
NCBI_EMAIL="you@example.com" python scripts/update_research.py
```

## Publish to GitHub Pages (free, global)

1. Create a new GitHub repo and push this folder to it.
2. Repo **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`. Your site goes live at `https://<you>.github.io/<repo>/`.
3. Auto-update is already wired: `.github/workflows/update.yml` runs daily (and on-demand from the **Actions** tab), refreshes `data/research.js`, commits it, and the commit triggers a Pages redeploy.
4. (Optional) Add repo secret `NCBI_EMAIL` under **Settings → Secrets and variables → Actions**.

## Editing the care content

Open `data/content.js`. Each situation is one object in `AD_CONTENT.scenarios` with: `title`, `sub`, `intro`, `steps[]`, `faq[]`, `flags[]`, `guide{text, sources[]}`, `story`, and `next[]` (the "where to go next" links). To add a new situation, copy a block, give it a new `id`, and add that `id` to other scenarios' `next` arrays so they link to it.

## License / disclaimer

Educational project. Content is summarized third-party guidance with sources linked; it is not a substitute for professional medical care.
