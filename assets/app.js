/* ============================================================
   AD Navigator — app logic (bilingual EN / 繁中)
   Renders the scenario navigator, sliding "path" panel, search,
   the auto-updated research feed, and the reference library.
   Data: window.AD_CONTENT, window.AD_RESEARCH, window.AD_REFERENCES
   ============================================================ */
(function () {
  "use strict";

  var DATA = window.AD_CONTENT || { groups: {}, scenarios: [] };
  var RESEARCH = window.AD_RESEARCH || null;
  var REFS = window.AD_REFERENCES || null;
  var VOICES = window.AD_VOICES || null;
  var GROUPS = DATA.groups;
  var SCENARIOS = DATA.scenarios;
  var byId = {};
  SCENARIOS.forEach(function (s) { byId[s.id] = s; });

  var GROUP_ORDER = ["symptom", "decision", "life", "daily"];
  var QUICK = ["itch", "sleep", "biologics", "steroid", "pregnancy", "child", "travel", "stopping"];

  /* ---------------------- language --------------------------- */
  var LANG = "en";
  try { LANG = localStorage.getItem("adnav_lang") || "en"; } catch (e) {}
  if (LANG !== "zh") LANG = "en";

  function t(field) {                       // field is {en, zh} or a plain string
    if (field == null) return "";
    if (typeof field === "string") return field;
    return field[LANG] || field.en || "";
  }

  // UI strings
  var STR = {
    tagline:      { en: "Atopic Dermatitis · by situation", zh: "異位性皮膚炎・情境導航" },
    topbar:       { en: "AD Navigator — you don't need to figure out all of dermatology. Let's start with what you're facing right now.", zh: "AD Navigator — 別擔心，你不需要先讀懂整本皮膚科；我們從你眼前的狀況開始，陪你慢慢來。" },
    nav_scen:     { en: "Situations", zh: "情境" },
    nav_voices:   { en: "You're not alone", zh: "你不孤單" },
    nav_latest:   { en: "Latest research", zh: "最新研究" },
    nav_refs:     { en: "References", zh: "參考資料庫" },
    nav_how:      { en: "How it works", zh: "怎麼用" },
    nav_about:    { en: "About", zh: "關於" },
    hero_eyebrow: { en: "Tell us where you are", zh: "告訴我你的狀況" },
    hero_h1:      { en: "Tell us your <span class='accent'>situation</span><br>we'll help you find the next step", zh: "告訴我你<span class='accent'>現在的狀況</span><br>我幫你找到下一步" },
    hero_p:       { en: "This isn't an encyclopedia. You don't need to figure out all of dermatology first — just pick the situation closest to where you are, and we'll gather the care advice, common questions, public-guideline sources, and real community support into one clear path, then walk you toward what to look at next.", zh: "這裡不是厚厚的百科。你不需要先讀懂整本皮膚科——只要選一個最貼近你現在處境的狀況，我們會把照護建議、常見的疑問、公開指南出處和真實病友社群，整理成一條清楚好走的路，再陪你看看下一步可以往哪裡走。" },
    finder_label: { en: "🔎 What are you dealing with right now?", zh: "🔎 你現在遇到什麼狀況？" },
    finder_ph:    { en: "e.g. really itchy, can't sleep, biologics, pregnant, travel, my child…", zh: "例如：一直很癢、睡不好、生物製劑、懷孕、旅行、小孩…" },
    disclaimer:   { en: "General education summarized from public guidelines & patient organizations — <b>not individual medical advice</b>. Discuss medication, dosage, and stopping treatment with your own doctor.", zh: "本站為公開指南與病友組織的一般衛教整理 — <b>非個別醫療建議</b>。用藥、劑量與停藥請與您的主治醫師討論。" },
    scen_eyebrow: { en: "Situations", zh: "情境導航" },
    scen_h2:      { en: "Pick what's closest to where you are", zh: "選一個最像你現在的處境" },
    scen_p:       { en: "Click a card to open the full path. Can't find yours? Type a few keywords above.", zh: "點一張卡片就會展開完整路徑。找不到？在上面打幾個關鍵字。" },
    no_result:    { en: "No matching situation. Try a shorter keyword, or browse the groups above.", zh: "找不到符合的情境。試試更短的關鍵字，或瀏覽上面的分類。" },
    voices_eye:   { en: "You're not alone", zh: "你不孤單" },
    voices_h2:    { en: "Voices from others living with eczema", zh: "其他病友的真實心聲" },
    voices_p:     { en: "Real, publicly shared experiences — grouped by the situations many of us share, and linked back to the source so you can read the full story.", zh: "真實、公開分享的經驗——依大家共同的處境整理，並連回原始出處，讓你能讀到完整故事。" },
    v_stories:    { en: "Real stories & sources", zh: "真實故事與出處" },
    latest_eye:   { en: "Today in AD", zh: "每日新知" },
    latest_h2:    { en: "Latest research & clinical trials", zh: "最新研究與臨床試驗" },
    latest_p:     { en: "Pulled automatically from PubMed and ClinicalTrials.gov so you always see what's new — while the care paths above stay clinician-reviewed.", zh: "自動從 PubMed 與 ClinicalTrials.gov 抓取，讓你隨時看到最新進展——上面的照護內容則維持醫師審閱。" },
    latest_note:  { en: "How to read this: below are the newest research papers and clinical trials, listed automatically. Titles are in the original English and are technical — we don't rewrite them into summaries, to avoid errors. These are NOT treatment advice; if something looks relevant, click through to read it or bring it to your doctor.", zh: "怎麼看這一區：以下是自動整理的「最新研究論文與臨床試驗」，標題是原文英文、屬專業內容。為避免出錯，我們不會自行改寫成摘要。這些不是治療建議——如果覺得跟你有關，點進去看原文，或截圖拿去問醫師。" },
    refs_eye:     { en: "Reference library", zh: "參考資料庫" },
    refs_h2:      { en: "Official & guideline sources", zh: "官方與指南來源" },
    refs_p:       { en: "Government health agencies, professional-society guidelines, and key literature — all public, all linked so you can read the originals.", zh: "政府衛生機關、專業醫學會指南與重要文獻——全部公開、附連結，讓你能讀原始資料。" },
    how_eye:      { en: "How it works", zh: "怎麼用" },
    how_h2:       { en: "Three steps, one path", zh: "三步，一條路徑" },
    how_1t:       { en: "Pick your situation", zh: "選你的處境" },
    how_1p:       { en: "No need to know disease names or drug names — just choose what you're facing.", zh: "不用先懂病名或藥名，只要挑「我現在遇到的狀況」。" },
    how_2t:       { en: "Follow a path", zh: "看一條路徑" },
    how_2p:       { en: "What's going on → what to do now → common questions → guideline sources.", zh: "發生什麼事 → 現在可以做 → 常見問題 → 指南出處。" },
    how_3t:       { en: "Find the next step", zh: "找到下一步" },
    how_3p:       { en: "Every path ends by pointing you to the related situations worth reading next.", zh: "每條路徑結尾都會導向值得接著看的相關情境。" },
    about_eye:    { en: "About", zh: "關於" },
    about_h2:     { en: "Why a navigator, not an encyclopedia", zh: "為什麼是導航，不是百科" },
    cite_h:       { en: "How to cite this page", zh: "如何引用本站" },
    cite_copy:    { en: "Copy citation", zh: "複製引用" },
    cite_copied:  { en: "Copied ✓", zh: "已複製 ✓" },
    about_p:      { en: "When you're unwell, you usually don't want to study all of dermatology — you just want to gently sort out what's troubling you right now. That's what this is for. Care content is summarized from public treatment guidelines and government/patient organizations (AAD, National Eczema Association, NHS, NICE, DermNet, NIH/NIAMS, ACAAI and official agencies), and every path lists its sources. The research feed updates automatically from PubMed and ClinicalTrials.gov. We don't publish made-up patient stories — we link real communities instead. And nothing here replaces the care of your own doctor.", zh: "生病或不舒服的時候，多數人並不想從頭研究整個皮膚科，只想好好把眼前的困擾理清楚——這個網站就是為此而生。照護內容整理自公開治療指南與政府／病友組織（AAD、國家濕疹協會、NHS、NICE、DermNet、NIH/NIAMS、ACAAI 及官方機關），每一條路徑都會附上出處。研究快訊自動更新自 PubMed 與 ClinicalTrials.gov。我們不會刊登虛構的病友故事，而是連到真實的病友社群。當然，這裡的一切都不能取代你的醫師親自診斷與治療。" },
    foot_tag:     { en: "Starting from where you are, helping you find the next step. General education and community support — never a substitute for diagnosis and treatment.", zh: "從你此刻的處境出發，陪你找到下一步。一般衛教與社群支持，不能取代診斷與治療。" },
    foot_credit:  { en: 'Created &amp; curated by <b>Yen-Hsiang Wang, MD, MSc</b> · <a href="mailto:rogerwang890928@gmail.com">Contact</a>', zh: '製作・整理：<b>Yen-Hsiang Wang, MD, MSc</b> · <a href="mailto:rogerwang890928@gmail.com">聯絡</a>' },
    foot_popular: { en: "Popular situations", zh: "熱門情境" },
    foot_site:    { en: "Site", zh: "網站" },
    foot_copy:    { en: "© 2026 AD Navigator · Atopic dermatitis, by your situation", zh: "© 2026 AD Navigator · 異位性皮膚炎・情境導航" },
    foot_note:    { en: "Summarized from public guidelines · not individual medical advice", zh: "整理自公開指南 · 非個別醫療建議" },
    // path panel
    p_your_path:  { en: "your path", zh: "你的路徑" },
    p_plain:      { en: "In plain words", zh: "一句話重點" },
    p_whatsgoing: { en: "What's going on", zh: "這是怎麼回事" },
    p_donow:      { en: "What you can do now", zh: "現在可以做的事" },
    p_faq:        { en: "Common questions", zh: "常見問題" },
    p_flags:      { en: "See a doctor promptly if…", zh: "出現這些狀況請儘速就醫" },
    p_flags_lbl:  { en: "Red flags", zh: "紅旗警訊" },
    p_guide:      { en: "Guideline basis & sources", zh: "指南依據與出處" },
    p_next:       { en: "Where to go next", zh: "接下來你可能想看" },
    p_foot:       { en: "⚕️ General education, not individual medical advice. Discuss any changes to medication with your own doctor.", zh: "⚕️ 一般衛教，非個別醫療建議。任何用藥調整請與您的主治醫師討論。" },
    p_see:        { en: "See this path", zh: "看這條路徑" },
    // research cards
    r_papers:     { en: "📄 Latest papers", zh: "📄 最新論文" },
    r_trials:     { en: "🧪 Recent clinical trials", zh: "🧪 最新臨床試驗" },
    r_readpubmed: { en: "Read on PubMed →", zh: "到 PubMed 看 →" },
    r_viewtrial:  { en: "View trial →", zh: "看試驗 →" },
    r_updated:    { en: "Auto-updated", zh: "自動更新於" },
    r_more:       { en: "Show archived (older) ▾", zh: "看更多封存（較舊）▾" },
    r_less:       { en: "Show less ▴", zh: "收合 ▴" },
    r_archived:   { en: "Older items are archived, never deleted.", zh: "較舊的項目會封存保留、不會刪除。" },
    // community
    c_label:      { en: "Real communities & support", zh: "真實社群與支持" },
    c_intro:      { en: "We don't publish made-up patient stories. For real experiences and peer support, visit these patient organizations:", zh: "我們不刊登虛構的病友故事。想看真實經驗與同儕支持，可到這些病友組織：" }
  };

  // Faithful translation of ClinicalTrials.gov controlled-vocabulary statuses (not fabrication).
  var STATUS_ZH = {
    "Recruiting": "招募中", "Not Yet Recruiting": "尚未招募",
    "Active Not Recruiting": "進行中（不再招募）", "Enrolling By Invitation": "邀請制招募",
    "Completed": "已完成", "Terminated": "已終止", "Withdrawn": "已撤回",
    "Suspended": "已暫停", "Unknown Status": "狀態不明",
    "Available": "可取得", "No Longer Available": "不再提供"
  };

  // Icons for the kind of source behind each patient voice.
  var SRC_IC = { paper: "📄", article: "✍️", story: "💬", media: "📰", org: "🤝" };

  var COMMUNITY_LINKS = [
    { name: { en: "National Eczema Association", zh: "美國國家濕疹協會（NEA）" }, url: "https://nationaleczema.org/" },
    { name: { en: "National Eczema Society (UK)", zh: "英國國家濕疹協會" }, url: "https://www.eczema.org.uk/" }
  ];

  var $ = function (sel) { return document.querySelector(sel); };
  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* ---------------------- static i18n ------------------------ */
  function applyI18n() {
    document.documentElement.lang = (LANG === "zh") ? "zh-Hant" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(STR[el.getAttribute("data-i18n")]);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(STR[el.getAttribute("data-i18n-html")]);
    });
    var inp = $("#scnSearch");
    if (inp) inp.placeholder = t(STR.finder_ph);
    var lb = $("#langBtn");
    if (lb) lb.textContent = (LANG === "zh") ? "EN" : "中文";
  }

  /* ---------------------- scenario grid ---------------------- */
  function renderScenarios(list) {
    var wrap = $("#scnContainer");
    var html = "";
    GROUP_ORDER.forEach(function (gk) {
      var items = list.filter(function (s) { return s.group === gk; });
      if (!items.length || !GROUPS[gk]) return;
      html += '<div class="group"><h3 class="group-title"><span class="g-ic">' +
        GROUPS[gk].ic + "</span>" + esc(t(GROUPS[gk].name)) + '</h3><div class="scn-grid">';
      items.forEach(function (s) {
        html += '<button class="scn-card" data-id="' + esc(s.id) + '">' +
          '<span class="ic">' + s.ic + "</span>" +
          "<h3>" + esc(t(s.title)) + "</h3>" +
          "<p>" + esc(t(s.sub)) + "</p>" +
          '<span class="go">' + t(STR.p_see) + "</span></button>";
      });
      html += "</div></div>";
    });
    wrap.innerHTML = html;
    $("#noResult").style.display = list.length ? "none" : "block";
  }

  /* ---------------------- path panel ------------------------- */
  var currentPath = null;

  function sourcesHTML(sources) {
    if (!sources || !sources.length) return "";
    return '<ul class="src-list">' + sources.map(function (s) {
      return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' +
        esc(s.title) + '</a> <span class="src-org">— ' + esc(s.org) + "</span></li>";
    }).join("") + "</ul>";
  }

  function communityHTML() {
    return '<div class="community-card"><b>' + t(STR.c_label) + "</b><p>" + t(STR.c_intro) + "</p>" +
      '<div class="community-links">' + COMMUNITY_LINKS.map(function (l) {
        return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(t(l.name)) + " ↗</a>";
      }).join("") + "</div></div>";
  }

  function openPath(id) {
    var s = byId[id];
    if (!s) return;
    currentPath = id;
    var html =
      '<div class="path-head">' +
        '<button class="path-close" aria-label="Close">✕</button>' +
        '<div class="kicker">' + GROUPS[s.group].ic + " " + esc(t(GROUPS[s.group].name)) + " · " + t(STR.p_your_path) + "</div>" +
        "<h2>" + s.ic + " " + esc(t(s.title)) + "</h2>" +
        '<p class="lead">' + esc(t(s.sub)) + "</p>" +
      "</div>" +
      '<div class="path-body">';

    if (s.plain) {
      html += '<div class="plain-card"><span class="plain-tag">' + t(STR.p_plain) + "</span>" + esc(t(s.plain)) + "</div>";
    }

    html +=
        '<div class="pblock"><h3 class="p-label"><span class="p-ic">💡</span>' + t(STR.p_whatsgoing) + "</h3>" +
          '<div class="intro-card">' + esc(t(s.intro)) + "</div></div>" +

        '<div class="pblock"><h3 class="p-label"><span class="num">1</span>' + t(STR.p_donow) + "</h3>" +
          '<ol class="step-list">' + s.steps.map(function (x) { return "<li>" + t(x) + "</li>"; }).join("") + "</ol></div>" +

        '<div class="pblock"><h3 class="p-label"><span class="p-ic">❓</span>' + t(STR.p_faq) + "</h3>" +
          s.faq.map(function (f) {
            return '<div class="faq-item"><div class="faq-q">' + esc(t(f.q)) +
              '<span class="tw">＋</span></div><div class="faq-a"><div class="faq-a-inner">' + esc(t(f.a)) + "</div></div></div>";
          }).join("") + "</div>";

    if (s.flags && s.flags.length) {
      html += '<div class="pblock"><h3 class="p-label"><span class="p-ic">🚩</span>' + t(STR.p_flags) + "</h3>" +
        '<div class="flag-card"><b>' + t(STR.p_flags_lbl) + "</b><ul>" +
        s.flags.map(function (f) { return "<li>" + esc(t(f)) + "</li>"; }).join("") + "</ul></div></div>";
    }

    html +=
        '<div class="pblock"><h3 class="p-label"><span class="p-ic">📖</span>' + t(STR.p_guide) + "</h3>" +
          '<div class="guide-card">' + esc(t(s.guide.text)) + sourcesHTML(s.guide.sources) + "</div></div>" +

        '<div class="pblock"><h3 class="p-label"><span class="p-ic">💬</span>' + t(STR.c_label) + "</h3>" +
          communityHTML() + "</div>" +

        '<div class="pblock next-block"><h3 class="p-label"><span class="p-ic">🧭</span>' + t(STR.p_next) + "</h3>" +
          '<div class="next-chips">' +
          s.next.map(function (nid) {
            return byId[nid] ? '<button class="next-chip" data-id="' + esc(nid) + '"><span class="nx-ic">' +
              byId[nid].ic + "</span>" + esc(t(byId[nid].title)) + "</button>" : "";
          }).join("") + "</div></div>" +

        '<p class="path-foot">' + t(STR.p_foot) + "</p></div>";

    var panel = $("#pathPanel");
    panel.innerHTML = html;
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    $("#pathOverlay").classList.add("open");
    document.body.style.overflow = "hidden";
    panel.scrollTop = 0;
    hideSuggest();
    if (window.location.hash !== "#/" + id) history.replaceState(null, "", "#/" + id);
  }

  function closePath() {
    currentPath = null;
    $("#pathPanel").classList.remove("open");
    $("#pathPanel").setAttribute("aria-hidden", "true");
    $("#pathOverlay").classList.remove("open");
    document.body.style.overflow = "";
    if (window.location.hash.indexOf("#/") === 0) history.replaceState(null, "", "#");
  }

  /* ---------------------- search ---------------------------- */
  function matchList(q) {
    q = (q || "").trim().toLowerCase();
    if (!q) return SCENARIOS.slice();
    var terms = q.split(/\s+/);
    return SCENARIOS.filter(function (s) {
      var hay = (t(s.title) + " " + t(s.sub) + " " + (s.keywords || []).join(" ") + " " + t(s.intro)).toLowerCase();
      return terms.some(function (x) { return hay.indexOf(x) !== -1; });
    });
  }
  function filterScenarios(q) { renderScenarios(matchList(q)); buildSuggest(q); }

  function buildSuggest(q) {
    var box = $("#scnSuggest");
    if (!box) return;
    if (!(q || "").trim()) { box.classList.remove("open"); box.innerHTML = ""; return; }
    var list = matchList(q).slice(0, 8);
    if (!list.length) { box.classList.remove("open"); box.innerHTML = ""; return; }
    box.innerHTML = list.map(function (s) {
      return '<div class="suggest-item" data-id="' + esc(s.id) + '"><span class="si-ic">' + s.ic +
        '</span><span class="si-t">' + esc(t(s.title)) + '</span><span class="si-g">' +
        esc(t(GROUPS[s.group].name)) + "</span></div>";
    }).join("");
    box.classList.add("open");
  }
  function hideSuggest() { var b = $("#scnSuggest"); if (b) b.classList.remove("open"); }

  /* ---------------------- research feed --------------------- */
  var researchExpanded = false;
  var RESEARCH_LIMIT = 12;
  function renderResearch() {
    var box = $("#researchFeed");
    if (!box) return;
    if (!RESEARCH) { box.innerHTML = ""; return; }
    var stamp = $("#researchStamp");
    if (stamp) stamp.textContent = t(STR.r_updated) + " " + (RESEARCH.generatedAt || "—") + " · " + (RESEARCH.source || "");
    var note = $("#researchNote");
    if (note) note.textContent = t(STR.latest_note);

    function paperCard(p) {
      return '<a class="res-card" href="' + esc(p.url) + '" target="_blank" rel="noopener">' +
        '<div class="res-meta">' + esc(p.journal || "") + (p.date ? " · " + esc(p.date) : "") + "</div>" +
        '<div class="res-title">' + esc(p.title) + "</div>" +
        (p.authors ? '<div class="res-auth">' + esc(p.authors) + "</div>" : "") +
        '<span class="res-go">' + t(STR.r_readpubmed) + "</span></a>";
    }
    function trialCard(x) {
      var st = (LANG === "zh" && STATUS_ZH[x.status]) ? STATUS_ZH[x.status] : x.status;
      return '<a class="res-card" href="' + esc(x.url) + '" target="_blank" rel="noopener">' +
        '<div class="res-meta">' + (st ? '<span class="res-badge">' + esc(st) + "</span>" : "") +
          (x.date ? " " + esc(x.date) : "") + "</div>" +
        '<div class="res-title">' + esc(x.title) + "</div>" +
        (x.conditions ? '<div class="res-auth">' + esc(x.conditions) + "</div>" : "") +
        '<span class="res-go">' + t(STR.r_viewtrial) + "</span></a>";
    }
    // Prefer the accumulated archive (older items preserved); fall back to the live lists.
    var allP = RESEARCH.archivePapers || RESEARCH.papers || [];
    var allT = RESEARCH.archiveTrials || RESEARCH.trials || [];
    var shownP = researchExpanded ? allP : allP.slice(0, RESEARCH_LIMIT);
    var shownT = researchExpanded ? allT : allT.slice(0, RESEARCH_LIMIT);
    var hidden = Math.max(0, allP.length - RESEARCH_LIMIT) + Math.max(0, allT.length - RESEARCH_LIMIT);

    var toggle = "";
    if (hidden > 0) {
      var lbl = researchExpanded ? t(STR.r_less) : (t(STR.r_more) + " (" + hidden + ")");
      toggle = '<div class="res-toggle-wrap"><button id="researchToggle" class="res-toggle">' + lbl +
        '</button><span class="res-archive-note">' + t(STR.r_archived) + "</span></div>";
    }

    box.innerHTML =
      '<div class="res-col"><h3 class="res-col-title">' + t(STR.r_papers) + '</h3><div class="res-list">' +
        shownP.map(paperCard).join("") + "</div></div>" +
      '<div class="res-col"><h3 class="res-col-title">' + t(STR.r_trials) + '</h3><div class="res-list">' +
        shownT.map(trialCard).join("") + "</div></div>" +
      toggle;
  }

  /* ---------------------- patient voices -------------------- */
  function renderVoices() {
    var grid = $("#voiceGrid");
    if (!grid) return;
    var sec = $("#voices");
    if (!VOICES || !VOICES.themes || !VOICES.themes.length) {
      if (sec) sec.style.display = "none";
      return;
    }
    var note = $("#voiceNote");
    if (note) note.textContent = t(VOICES.note);

    grid.innerHTML = VOICES.themes.map(function (v) {
      var stories = (v.stories || []).map(function (st) {
        var badge = (st.lang === "zh") ? "中文" : "EN";
        var tic = SRC_IC[st.type] || "🔗";
        return '<a class="voice-src" href="' + esc(st.url) + '" target="_blank" rel="noopener">' +
          '<span class="vs-ic" title="' + esc(st.type || "") + '">' + tic + "</span>" +
          '<span class="vs-text"><span class="vs-title">' + esc(t(st.title)) + "</span>" +
          '<span class="vs-org">' + esc(t(st.org)) + "</span></span>" +
          '<span class="vs-badge vs-' + esc(st.lang) + '">' + badge + "</span>" +
          '<span class="vs-go">↗</span></a>';
      }).join("");

      var pathBtn = (v.scn && byId[v.scn])
        ? '<button class="voice-path" data-id="' + esc(v.scn) + '">' + t(STR.p_see) + "</button>"
        : "";

      return '<article class="voice-card reveal">' +
          '<div class="voice-top"><span class="v-ic">' + v.ic + "</span>" +
            "<h3>" + esc(t(v.title)) + "</h3></div>" +
          '<p class="voice-say">' + esc(t(v.voice)) + "</p>" +
          '<div class="voice-stories"><span class="v-lbl">' + t(STR.v_stories) + "</span>" +
            stories + "</div>" +
          pathBtn +
        "</article>";
    }).join("");
  }

  /* ---------------------- reference library ----------------- */
  function renderRefs() {
    var box = $("#refsList");
    if (!box) return;
    if (!REFS || !REFS.categories) { var sec = $("#references"); if (sec) sec.style.display = "none"; return; }
    box.innerHTML = REFS.categories.map(function (cat) {
      var items = (cat.items || []).map(function (it) {
        var meta = [it.org, it.year].filter(Boolean).join(" · ");
        return '<li><a href="' + esc(it.url) + '" target="_blank" rel="noopener">' + esc(t(it.title)) + "</a>" +
          (meta ? ' <span class="src-org">— ' + esc(meta) + "</span>" : "") + "</li>";
      }).join("");
      return '<div class="ref-col"><h3 class="ref-col-title">' + esc(t(cat.label)) + "</h3><ul class='src-list'>" + items + "</ul></div>";
    }).join("");
  }

  /* ---------------------- cite this page -------------------- */
  var citeText = "", citeBib = "";
  function copyToClipboard(text, btn) {
    var original = btn.textContent;
    function done() {
      btn.textContent = t(STR.cite_copied);
      setTimeout(function () { btn.textContent = original; }, 1600);
    }
    function fallback() {
      try {
        var ta = document.createElement("textarea");
        ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.focus(); ta.select();
        document.execCommand("copy"); document.body.removeChild(ta); done();
      } catch (e) {}
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else { fallback(); }
  }

  function renderCite() {
    var box = $("#citeBox");
    if (!box) return;
    var url = "https://rogerking928.github.io/ad-navigator/";
    var today = new Date().toISOString().slice(0, 10);
    citeText = "Wang Y-H. AD Navigator: Atopic Dermatitis by Situation. 2026. " +
      "Available from: " + url + " (accessed " + today + ").";
    citeBib = "@misc{wang2026adnavigator,\n" +
      "  author       = {Wang, Yen-Hsiang},\n" +
      "  title        = {{AD Navigator: Atopic Dermatitis by Situation}},\n" +
      "  year         = {2026},\n" +
      "  howpublished = {\\url{" + url + "}},\n" +
      "  note         = {Accessed: " + today + "}\n}";
    box.innerHTML =
      '<div class="cite-label">📑 ' + t(STR.cite_h) + "</div>" +
      '<div class="cite-text">' + esc(citeText) + "</div>" +
      '<div class="cite-actions">' +
        '<button class="cite-btn" data-cite="text">' + t(STR.cite_copy) + "</button>" +
        '<button class="cite-btn cite-btn--ghost" data-cite="bib">BibTeX</button>' +
      "</div>";
  }

  /* ---------------------- chips + footer -------------------- */
  function renderChips() {
    $("#quickChips").innerHTML = QUICK.map(function (id) {
      return byId[id] ? '<span class="quick-chip" data-id="' + esc(id) + '">' + byId[id].ic + " " + esc(t(byId[id].title)) + "</span>" : "";
    }).join("");
    $("#footerScn").innerHTML = QUICK.slice(0, 6).map(function (id) {
      return byId[id] ? '<li><span data-id="' + esc(id) + '">' + esc(t(byId[id].title)) + "</span></li>" : "";
    }).join("");
  }

  /* ---------------------- render all ----------------------- */
  function renderAll() {
    applyI18n();
    renderScenarios(SCENARIOS);
    renderChips();
    renderVoices();
    renderResearch();
    renderRefs();
    renderCite();
    if (currentPath) openPath(currentPath);
    observeReveals();
  }

  function setLang(lang) {
    LANG = (lang === "zh") ? "zh" : "en";
    try { localStorage.setItem("adnav_lang", LANG); } catch (e) {}
    var q = $("#scnSearch") ? $("#scnSearch").value : "";
    renderAll();
    if (q) filterScenarios(q);
  }

  /* ---------------------- reveal --------------------------- */
  var revealObserver = null;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      // No observer support: just show everything.
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); } });
      }, { threshold: 0.12 });
    }
    // Observe any reveal element not yet shown (covers re-rendered cards after a language switch).
    document.querySelectorAll(".reveal:not(.in)").forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------------------- events --------------------------- */
  document.addEventListener("click", function (e) {
    if (e.target.closest("#langBtn")) { setLang(LANG === "zh" ? "en" : "zh"); return; }
    if (e.target.closest("#researchToggle")) { researchExpanded = !researchExpanded; renderResearch(); return; }
    var cbtn = e.target.closest(".cite-btn");
    if (cbtn) { copyToClipboard(cbtn.getAttribute("data-cite") === "bib" ? citeBib : citeText, cbtn); return; }
    var open = e.target.closest("[data-id]");
    if (open) { openPath(open.getAttribute("data-id")); return; }
    if (e.target.closest(".path-close")) { closePath(); return; }
    if (e.target.id === "pathOverlay") { closePath(); return; }
    if (e.target.closest(".js-home")) { window.scrollTo({ top: 0, behavior: "smooth" }); }
    var faq = e.target.closest(".faq-q");
    if (faq) { faq.parentElement.classList.toggle("open"); }
    if (!e.target.closest(".finder")) hideSuggest();
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePath(); });
  $("#scnSearch").addEventListener("input", function (e) { filterScenarios(e.target.value); });

  /* ---------------------- boot ----------------------------- */
  renderAll();
  if (window.location.hash.indexOf("#/") === 0) openPath(window.location.hash.slice(2));
})();
