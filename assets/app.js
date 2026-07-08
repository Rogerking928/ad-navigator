/* ============================================================
   AD Navigator — app logic
   Renders the scenario navigator, the sliding "path" panel,
   search, and the auto-updated research feed.
   Data comes from window.AD_CONTENT and window.AD_RESEARCH.
   ============================================================ */
(function () {
  "use strict";

  var DATA = window.AD_CONTENT || { groups: {}, scenarios: [] };
  var RESEARCH = window.AD_RESEARCH || null;
  var GROUPS = DATA.groups;
  var SCENARIOS = DATA.scenarios;
  var byId = {};
  SCENARIOS.forEach(function (s) { byId[s.id] = s; });

  var GROUP_ORDER = ["symptom", "decision", "life", "daily"];
  var QUICK = ["itch", "sleep", "biologics", "steroid", "pregnancy", "child", "travel", "stopping"];

  var $ = function (sel) { return document.querySelector(sel); };
  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---------------------- scenario grid ---------------------- */
  function renderScenarios(list) {
    var wrap = $("#scnContainer");
    var html = "";
    GROUP_ORDER.forEach(function (gk) {
      var items = list.filter(function (s) { return s.group === gk; });
      if (!items.length || !GROUPS[gk]) return;
      html += '<div class="group"><h3 class="group-title"><span class="g-ic">' +
        GROUPS[gk].ic + "</span>" + esc(GROUPS[gk].name) + '</h3><div class="scn-grid">';
      items.forEach(function (s) {
        html += '<button class="scn-card" data-id="' + esc(s.id) + '">' +
          '<span class="ic">' + s.ic + "</span>" +
          "<h3>" + esc(s.title) + "</h3>" +
          "<p>" + esc(s.sub) + "</p>" +
          '<span class="go">See this path</span>' +
          "</button>";
      });
      html += "</div></div>";
    });
    wrap.innerHTML = html;
    $("#noResult").style.display = list.length ? "none" : "block";
  }

  /* ---------------------- path panel ------------------------ */
  function sourcesHTML(sources) {
    if (!sources || !sources.length) return "";
    return '<ul class="src-list">' + sources.map(function (s) {
      return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' +
        esc(s.title) + '</a> <span class="src-org">— ' + esc(s.org) + "</span></li>";
    }).join("") + "</ul>";
  }

  function openPath(id) {
    var s = byId[id];
    if (!s) return;
    var html =
      '<div class="path-head">' +
        '<button class="path-close" aria-label="Close">✕</button>' +
        '<div class="kicker">' + GROUPS[s.group].ic + " " + esc(GROUPS[s.group].name) + ' · your path</div>' +
        "<h2>" + s.ic + " " + esc(s.title) + "</h2>" +
        '<p class="lead">' + esc(s.sub) + "</p>" +
      "</div>" +
      '<div class="path-body">' +

        '<div class="pblock">' +
          '<h3 class="p-label"><span class="p-ic">💡</span>What\'s going on</h3>' +
          '<div class="intro-card">' + esc(s.intro) + "</div>" +
        "</div>" +

        '<div class="pblock">' +
          '<h3 class="p-label"><span class="num">1</span>What you can do now</h3>' +
          '<ol class="step-list">' + s.steps.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ol>" +
        "</div>" +

        '<div class="pblock">' +
          '<h3 class="p-label"><span class="p-ic">❓</span>Common questions</h3>' +
          s.faq.map(function (f) {
            return '<div class="faq-item"><div class="faq-q">' + esc(f.q) +
              '<span class="tw">＋</span></div><div class="faq-a"><div class="faq-a-inner">' +
              esc(f.a) + "</div></div></div>";
          }).join("") +
        "</div>";

    if (s.flags && s.flags.length) {
      html +=
        '<div class="pblock">' +
          '<h3 class="p-label"><span class="p-ic">🚩</span>See a doctor promptly if…</h3>' +
          '<div class="flag-card"><b>Red flags</b><ul>' +
          s.flags.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") +
          "</ul></div>" +
        "</div>";
    }

    html +=
        '<div class="pblock">' +
          '<h3 class="p-label"><span class="p-ic">📖</span>Guideline basis &amp; sources</h3>' +
          '<div class="guide-card">' + esc(s.guide.text) + sourcesHTML(s.guide.sources) + "</div>" +
        "</div>" +

        '<div class="pblock">' +
          '<h3 class="p-label"><span class="p-ic">💬</span>Community voice</h3>' +
          '<div class="story-card"><div class="story-by"><span class="av">' +
            esc(s.story.name.slice(0, 1)) + '</span><div><b>' + esc(s.story.name) +
            "</b><span>" + esc(s.story.meta) + "</span></div></div><p>“" + esc(s.story.text) +
          '”</p><span class="story-note">Illustrative composite — not a specific real patient.</span></div>' +
        "</div>" +

        '<div class="pblock next-block">' +
          '<h3 class="p-label"><span class="p-ic">🧭</span>Where to go next</h3>' +
          '<div class="next-chips">' +
          s.next.map(function (nid) {
            return byId[nid] ? '<button class="next-chip" data-id="' + esc(nid) + '"><span class="nx-ic">' +
              byId[nid].ic + "</span>" + esc(byId[nid].title) + "</button>" : "";
          }).join("") +
          "</div>" +
        "</div>" +

        '<p class="path-foot">⚕️ General education, not individual medical advice. Discuss any changes to medication with your own doctor.</p>' +
      "</div>";

    var panel = $("#pathPanel");
    panel.innerHTML = html;
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    $("#pathOverlay").classList.add("open");
    document.body.style.overflow = "hidden";
    panel.scrollTop = 0;
    if (window.location.hash !== "#/" + id) {
      history.replaceState(null, "", "#/" + id);
    }
  }

  function closePath() {
    $("#pathPanel").classList.remove("open");
    $("#pathPanel").setAttribute("aria-hidden", "true");
    $("#pathOverlay").classList.remove("open");
    document.body.style.overflow = "";
    if (window.location.hash.indexOf("#/") === 0) history.replaceState(null, "", "#");
  }

  /* ---------------------- search ---------------------------- */
  function filterScenarios(q) {
    q = (q || "").trim().toLowerCase();
    if (!q) { renderScenarios(SCENARIOS); return; }
    var terms = q.split(/\s+/);
    var list = SCENARIOS.filter(function (s) {
      var hay = (s.title + " " + s.sub + " " + (s.keywords || []).join(" ") + " " + s.intro).toLowerCase();
      return terms.some(function (t) { return hay.indexOf(t) !== -1; });
    });
    renderScenarios(list);
  }

  /* ---------------------- research feed --------------------- */
  function renderResearch() {
    var box = $("#researchFeed");
    if (!box) return;
    if (!RESEARCH) { box.innerHTML = '<p class="muted">No research data loaded.</p>'; return; }

    var stamp = $("#researchStamp");
    if (stamp) stamp.textContent = "Auto-updated " + (RESEARCH.generatedAt || "—") + " · " + (RESEARCH.source || "");

    function paperCard(p) {
      return '<a class="res-card" href="' + esc(p.url) + '" target="_blank" rel="noopener">' +
        '<div class="res-meta">' + esc(p.journal || "") + (p.date ? " · " + esc(p.date) : "") + "</div>" +
        '<div class="res-title">' + esc(p.title) + "</div>" +
        (p.authors ? '<div class="res-auth">' + esc(p.authors) + "</div>" : "") +
        '<span class="res-go">Read on PubMed →</span></a>';
    }
    function trialCard(t) {
      return '<a class="res-card" href="' + esc(t.url) + '" target="_blank" rel="noopener">' +
        '<div class="res-meta">' + (t.status ? '<span class="res-badge">' + esc(t.status) + "</span>" : "") +
          (t.date ? " updated " + esc(t.date) : "") + "</div>" +
        '<div class="res-title">' + esc(t.title) + "</div>" +
        (t.conditions ? '<div class="res-auth">' + esc(t.conditions) + "</div>" : "") +
        '<span class="res-go">View trial →</span></a>';
    }

    var papers = (RESEARCH.papers || []).slice(0, 12).map(paperCard).join("");
    var trials = (RESEARCH.trials || []).slice(0, 12).map(trialCard).join("");
    box.innerHTML =
      '<div class="res-col"><h3 class="res-col-title">📄 Latest papers</h3><div class="res-list">' + papers + "</div></div>" +
      '<div class="res-col"><h3 class="res-col-title">🧪 Recent clinical trials</h3><div class="res-list">' + trials + "</div></div>";
  }

  /* ---------------------- quick chips + footer -------------- */
  function renderChips() {
    $("#quickChips").innerHTML = QUICK.map(function (id) {
      return byId[id] ? '<span class="quick-chip" data-id="' + esc(id) + '">' + byId[id].ic + " " + esc(byId[id].title) + "</span>" : "";
    }).join("");
    $("#footerScn").innerHTML = QUICK.slice(0, 6).map(function (id) {
      return byId[id] ? '<li><span data-id="' + esc(id) + '">' + esc(byId[id].title) + "</span></li>" : "";
    }).join("");
  }

  /* ---------------------- reveal animation ----------------- */
  function initReveal() {
    if (!("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  }

  /* ---------------------- events (delegated) --------------- */
  document.addEventListener("click", function (e) {
    var open = e.target.closest("[data-id]");
    if (open) { openPath(open.getAttribute("data-id")); return; }
    if (e.target.closest(".path-close")) { closePath(); return; }
    if (e.target.id === "pathOverlay") { closePath(); return; }
    if (e.target.closest(".js-home")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    var faq = e.target.closest(".faq-q");
    if (faq) { faq.parentElement.classList.toggle("open"); }
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePath(); });
  $("#scnSearch").addEventListener("input", function (e) { filterScenarios(e.target.value); });

  /* ---------------------- boot ----------------------------- */
  renderScenarios(SCENARIOS);
  renderChips();
  renderResearch();
  initReveal();

  // deep link: #/itch opens that path
  if (window.location.hash.indexOf("#/") === 0) {
    openPath(window.location.hash.slice(2));
  }
})();
