/* ============================================================
   AD Navigator — curated care-path content (bilingual EN / 繁中)
   ------------------------------------------------------------
   CLINICIAN-REVIEWED, not auto-generated.
   Summarized from PUBLIC guidelines & patient organizations
   (AAD, National Eczema Association, National Eczema Society UK,
   NHS, DermNet, NIH/NIAMS, ACAAI). Every path carries its real
   sources. No invented facts and no fabricated patient stories —
   real community links are shown instead.

   Each text field is {en, zh}. "plain" is a one-line, everyday-
   language takeaway for patients. To add a scenario, copy a block,
   change its id, and add that id to other scenarios' "next".
   ============================================================ */
window.AD_CONTENT = {
  reviewedOn: "2026-07-08",

  groups: {
    symptom:  { ic: "🔥", name: { en: "Right now / symptoms", zh: "現在的狀況" } },
    decision: { ic: "💊", name: { en: "Treatment decisions",  zh: "治療決策" } },
    life:     { ic: "🌱", name: { en: "Life stages",          zh: "人生階段" } },
    daily:    { ic: "☀️", name: { en: "Everyday life",        zh: "日常生活" } }
  },

  scenarios: [
    /* ---------------------------------------------------- itch */
    {
      id: "itch", ic: "🔥", group: "symptom",
      title: { en: "I've been really itchy lately", zh: "我最近一直很癢" },
      sub: { en: "A flare that itches so much you can't stop scratching.", zh: "癢到受不了、忍不住一直抓。" },
      plain: { en: "Being itchy usually means the inflammation isn't controlled yet — the fix is to calm the inflammation and repair the skin, not just fight the itch.", zh: "會一直癢，通常代表發炎還沒被壓下來——重點是「壓發炎＋修皮膚」，而不是只跟癢對抗。" },
      keywords: ["itch","itchy","scratch","flare","red","rash","癢","抓","發作","惡化","紅"],
      intro: {
        en: "The itch–scratch cycle drives flares: scratching feels good for a second but damages the skin barrier and releases inflammatory chemicals, which makes the skin even itchier. Getting a flare under control is less about anti-itch pills and more about doing two things together — calming the inflammation and repairing the barrier.",
        zh: "「癢—抓—更癢」是異膚的惡性循環：抓一下很爽，但會破壞皮膚屏障、釋放發炎物質，讓皮膚更癢。要讓這一波好起來，重點不是止癢藥，而是同時做兩件事——把發炎壓下來、把皮膚屏障修回來。"
      },
      steps: [
        { en: "<b>Moisturize generously and often.</b> Use a fragrance-free thick cream or ointment; smooth it on, don't rub. This is the foundation for everything else.", zh: "<b>大量、頻繁地保濕。</b>用無香料的乳霜或藥膏，輕輕抹上、不要用力搓。這是後面所有步驟的地基。" },
        { en: "<b>Apply your prescribed anti-inflammatory.</b> Put your topical steroid (or OTC hydrocortisone) on the inflamed areas — don't try to ride it out on moisturizer alone.", zh: "<b>照醫師指示擦抗發炎藥。</b>發紅、發炎的地方要擦外用類固醇（或藥局的弱效氫化可體松），別只靠保濕硬撐。" },
        { en: "<b>Cool the itch instead of scratching.</b> A cold, damp cloth on itchy skin (then moisturize) breaks the urge without breaking the skin.", zh: "<b>用「冰敷」代替「抓」。</b>拿冰涼的濕毛巾敷在癢的地方（之後補保濕），能止癢又不會把皮膚抓破。" },
        { en: "<b>Bathe short and lukewarm, then seal.</b> 5–10 minutes in lukewarm water with a gentle fragrance-free cleanser, then moisturize while the skin is still damp.", zh: "<b>洗澡短、溫水，洗完馬上鎖水。</b>用溫水、無香料清潔品洗 5–10 分鐘，趁皮膚還微濕時立刻擦保濕。" },
        { en: "<b>Find this flare's trigger.</b> Heat, sweat, stress, dust, fragrances, wool — note what set it off. Keep nails short.", zh: "<b>找出這次的誘因。</b>悶熱、流汗、壓力、灰塵、香精、羊毛——記下來下次好預防。指甲剪短。" }
      ],
      faq: [
        { q: { en: "Why does scratching make it worse, not better?", zh: "為什麼愈抓愈嚴重？" },
          a: { en: "Scratching feels good for a second but damages the skin barrier and releases inflammatory chemicals, causing more inflammation and more itch — that's the itch–scratch cycle.", zh: "抓的當下很舒服，但會破壞皮膚屏障、釋放發炎物質，結果更發炎、更癢，就是所謂的癢–抓循環。" } },
        { q: { en: "Can't I just take an antihistamine to stop the itch?", zh: "吃抗組織胺（過敏藥）就能止癢嗎？" },
          a: { en: "Eczema itch is not mainly histamine-driven, so non-sedating antihistamines usually do little. Controlling inflammation (moisturizer + topical steroid) works better; a sedating antihistamine may occasionally help you sleep at night.", zh: "異膚的癢主要不是組織胺造成的，所以不嗜睡的抗組織胺通常幫助有限。控制發炎（保濕＋外用藥）才有效；會想睡的抗組織胺偶爾可幫助夜間入睡。" } },
        { q: { en: "How much moisturizer is enough during a flare?", zh: "發作時保濕要擦多少才夠？" },
          a: { en: "More than you'd think — at least twice a day and more as needed. Keep using it even after the skin looks clear.", zh: "比你想像的更多——一天至少兩次，需要時再加。就算皮膚看起來好了也要繼續擦。" } }
      ],
      flags: [
        { en: "Skin that becomes painful, swollen, warm, weeping, crusted, or has pus-filled spots — possible bacterial infection; seek same-day care.", zh: "皮膚變痛、腫、發熱、流組織液、結痂或有膿皰——可能是細菌感染，當天就要就醫。" },
        { en: "A rapidly spreading rash of painful, uniform fluid-filled or blood-stained blisters (often on face/neck), especially with fever — possible eczema herpeticum, a medical emergency.", zh: "快速擴散、成群、疼痛的水泡（常在臉/頸），尤其合併發燒——可能是疱疹性濕疹，屬急症，要立刻就醫。" }
      ],
      guide: {
        text: { en: "Itch-management advice (emollients, topical corticosteroids, cool compresses, trigger avoidance) follows the American Academy of Dermatology atopic dermatitis guidelines and National Eczema Association guidance.", zh: "止癢建議（保濕、外用類固醇、冰敷、避開誘因）依據美國皮膚科醫學會（AAD）異位性皮膚炎治療指南與美國國家濕疹協會（NEA）衛教整理。" },
        sources: [
          { title: "Ways to Relieve Itch from Eczema", org: "National Eczema Association", url: "https://nationaleczema.org/eczema-management/itchy-skin/" },
          { title: "Atopic dermatitis: Self-care", org: "American Academy of Dermatology", url: "https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis/self-care" },
          { title: "Atopic eczema — Treatment", org: "NHS", url: "https://www.nhs.uk/conditions/atopic-eczema/treatment/" },
          { title: "Atopic dermatitis — self-care", org: "NIH / MedlinePlus", url: "https://medlineplus.gov/ency/patientinstructions/000418.htm" },
          { title: "AAD guideline: topical therapies (2023)", org: "American Academy of Dermatology · JAAD", url: "https://doi.org/10.1016/j.jaad.2022.12.029" }
        ]
      },
      next: ["sleep","steroid","seasonal","newly"]
    },

    /* ---------------------------------------------------- sleep */
    {
      id: "sleep", ic: "🌙", group: "symptom",
      title: { en: "I can't sleep because of the itching", zh: "我癢到晚上睡不好" },
      sub: { en: "Waking up scratching, itching worst at night, exhausted by day.", zh: "半夜癢醒、抓到天亮，白天沒精神。" },
      plain: { en: "Better sleep comes from controlling the eczema by day, plus a cool bedroom and bedtime moisturizing at night.", zh: "想睡好，關鍵是白天把異膚控制好，晚上再加上「臥室涼一點、睡前厚厚保濕」。" },
      keywords: ["sleep","night","insomnia","awake","tired","睡","失眠","半夜","睡不著","累"],
      intro: {
        en: "Night is the hardest time: skin gets warmer near bedtime and loses more water overnight, and with fewer daytime distractions the itch feels more intense. The most effective fix is getting the eczema itself under control — then layering on a few bedtime and bedroom habits.",
        zh: "晚上最難熬：睡前體溫升高、夜裡皮膚更容易流失水分，加上沒有其他事分心，癢感被放大。最有效的辦法是先把異膚本身控制好，再搭配幾個睡前與臥室的小習慣。"
      },
      steps: [
        { en: "<b>Do a bedtime 'seal'.</b> Apply an oil-based ointment or your medicated cream at bedtime to calm the skin overnight.", zh: "<b>睡前做一次「鎖水」。</b>睡前擦上較油的藥膏或你的藥用乳霜，幫皮膚撐過整夜。" },
        { en: "<b>Keep the bedroom cool.</b> Around 15–19°C. A warm body and warm bedding make nighttime itch worse.", zh: "<b>臥室保持涼爽。</b>大約 15–19°C。身體悶熱、被子太暖都會讓夜間更癢。" },
        { en: "<b>Use soft cotton bedding and nightwear</b>, and wash linens regularly to cut irritants and dust.", zh: "<b>用柔軟純棉的寢具與睡衣</b>，並定期清洗，減少刺激與灰塵。" },
        { en: "<b>Make scratching harder.</b> Short nails, soft cotton gloves at night; ask your clinician about wet-wrap therapy for severe itch.", zh: "<b>讓「抓」變困難。</b>指甲剪短、睡覺戴純棉手套；癢得嚴重可問醫師「濕敷療法」。" },
        { en: "<b>Protect the wind-down.</b> Screens off ~30 min before bed; a sedating antihistamine may occasionally help during a bad flare (ask your clinician first).", zh: "<b>顧好睡前放鬆。</b>睡前約 30 分鐘關螢幕；嚴重發作時，會想睡的抗組織胺偶爾可幫助入睡（先問醫師）。" }
      ],
      faq: [
        { q: { en: "Why is my eczema so much itchier at night?", zh: "為什麼一到晚上就特別癢？" },
          a: { en: "Skin warms up and loses more water overnight, and your brain's control over the urge to scratch relaxes as you get sleepy — so the itch feels stronger.", zh: "夜裡皮膚變暖、更容易流失水分，加上想睡時大腦對「忍住不抓」的控制變弱，所以癢感更明顯。" } },
        { q: { en: "Should I rely on antihistamines to sleep?", zh: "可以靠抗組織胺幫助睡覺嗎？" },
          a: { en: "A sedating antihistamine may help you fall asleep during a bad flare, but it treats drowsiness, not the eczema. Short-term only, and after checking with your clinician.", zh: "會想睡的抗組織胺在嚴重發作時可幫助入睡，但它處理的是「想睡」，不是異膚本身。只建議短期，且先問過醫師。" } },
        { q: { en: "Do wet wraps really help nighttime itch?", zh: "濕敷真的能改善夜間癢嗎？" },
          a: { en: "Yes — a damp layer over emollient or medication cools and rehydrates skin and blocks scratching, which can improve sleep. Have a clinician show you the technique first.", zh: "可以——在保濕或藥膏外包一層濕布，能降溫、補水又擋住抓，有助睡眠。第一次請醫護人員示範作法。" } }
      ],
      flags: [
        { en: "Itch and sleep loss that stay severe despite good skin care — see your clinician to step up treatment; poor sleep is a sign the disease needs better control.", zh: "已認真照護仍嚴重失眠、癢——回診請醫師升級治療；睡不好代表控制得不夠。" },
        { en: "Signs of infection (painful, weeping, pus, fever) or rapidly spreading painful blisters — seek urgent care.", zh: "出現感染跡象（痛、流液、膿、發燒）或快速擴散的疼痛水泡——盡快就醫。" }
      ],
      guide: {
        text: { en: "Nighttime-itch and sleep advice reflects American Academy of Dermatology and National Eczema Association guidance emphasizing disease control, bedtime moisturizing, a cool environment, and scratch prevention.", zh: "夜間止癢與睡眠建議依據 AAD 與 NEA 衛教，重點在控制疾病、睡前保濕、環境涼爽與防止抓傷。" },
        sources: [
          { title: "What can help a child with eczema sleep?", org: "American Academy of Dermatology", url: "https://www.aad.org/public/diseases/eczema/childhood/health-concerns/sleep" },
          { title: "Why people with eczema have a hard time sleeping — and what to do", org: "National Eczema Association", url: "https://nationaleczema.org/blog/eczema-leads-to-problems-sleeping/" },
          { title: "6 Tips to Get a Good Night's Sleep Tonight", org: "National Eczema Association", url: "https://nationaleczema.org/blog/sleep-well-with-eczema/" },
          { title: "AAD guideline: comorbidities of AD (incl. sleep)", org: "American Academy of Dermatology · JAAD", url: "https://doi.org/10.1016/j.jaad.2022.01.009" },
          { title: "Atopic eczema — overview", org: "NHS (UK)", url: "https://www.nhs.uk/conditions/atopic-eczema/" }
        ]
      },
      next: ["itch","steroid","biologics","stress"]
    },

    /* ---------------------------------------------------- newly */
    {
      id: "newly", ic: "🧭", group: "symptom",
      title: { en: "I was just diagnosed and don't know where to start", zh: "我剛確診，不知道怎麼開始" },
      sub: { en: "First time hearing 'atopic dermatitis' and feeling a bit lost.", zh: "第一次聽到「異位性皮膚炎」，有點慌。" },
      plain: { en: "Eczema is a common, controllable, non-contagious long-term skin condition — the goal isn't a cure, it's steady control so it doesn't run your life.", zh: "異膚是常見、可控制、不會傳染的慢性皮膚病——目標不是根治，而是穩定控制，讓它不影響你的生活。" },
      keywords: ["diagnosed","new","start","basics","what is","確診","剛診斷","新手","怎麼開始"],
      intro: {
        en: "Feeling overwhelmed at diagnosis is normal. Atopic dermatitis (eczema) is a common, chronic, non-contagious inflammatory skin condition with a weakened skin barrier. It flares and settles over time, it isn't caused by poor hygiene, and it is very manageable. The goal isn't a cure — it's steady control that lets you live normally.",
        zh: "剛確診覺得慌很正常。異位性皮膚炎（異膚/濕疹）是一種常見、慢性、不會傳染的皮膚發炎，和皮膚屏障較脆弱有關。它會反覆發作又平息，不是因為你不夠乾淨，而且很能被控制。目標不是「斷根」，而是穩定控制、正常生活。"
      },
      steps: [
        { en: "<b>Build the foundation: daily moisturizer.</b> Use a fragrance-free thick cream or ointment every day, even when skin looks clear.", zh: "<b>打好地基：每天保濕。</b>每天擦無香料的乳霜或藥膏，就算皮膚看起來好了也要擦。" },
        { en: "<b>Learn 'flare' vs 'calm'.</b> Anti-inflammatory creams go on during flares; moisturizer maintains the calm periods.", zh: "<b>學會分「發作」和「穩定」。</b>發作時擦抗發炎藥；穩定時靠保濕維持。" },
        { en: "<b>Understand the treatment ladder.</b> Start with emollients and gentle care; add topical steroids for flares; step up to stronger options only if needed.", zh: "<b>認識「治療階梯」。</b>先保濕與溫和照護；發作加外用類固醇；真的不夠才往上加強治療。" },
        { en: "<b>Track your triggers.</b> Heat/sweat, harsh soaps, fragrances, dust, certain fabrics — find your personal ones.", zh: "<b>記錄你的誘因。</b>悶熱流汗、強效肥皂、香精、灰塵、某些衣料——找出你個人的地雷。" },
        { en: "<b>Prepare questions for your clinician.</b> Write down what worries you so visits are more useful.", zh: "<b>準備回診問題清單。</b>把擔心的事寫下來，看診更有效率。" }
      ],
      faq: [
        { q: { en: "Will my eczema ever go away?", zh: "異膚會好嗎？" },
          a: { en: "It's a long-term condition that flares and improves over time; many children improve as they grow. There's no cure, but with the right routine most people control it well.", zh: "它是慢性、會反覆的疾病；很多小孩長大後會改善。雖然沒有「斷根」，但用對方法多數人都能控制得很好。" } },
        { q: { en: "Did I cause this somehow?", zh: "是不是我做錯什麼才會得？" },
          a: { en: "No. Eczema is tied to an inherited skin-barrier and immune tendency — not to being 'unclean.' What you can do is control it.", zh: "不是。異膚和先天的皮膚屏障與免疫體質有關，不是因為不乾淨。你能做的就是好好控制它。" } },
        { q: { en: "Do I need strong drugs right away?", zh: "一開始就要用很強的藥嗎？" },
          a: { en: "Not necessarily. Mild disease is managed with moisturizer plus topical creams; stronger, step-up treatments are only for moderate-to-severe disease that isn't responding.", zh: "不一定。輕度靠保濕加外用藥就好；比較強的治療是留給中重度、反應不佳的情況。" } }
      ],
      flags: [
        { en: "Eczema not improving with standard treatment, or severely affecting sleep and daily life — see a clinician.", zh: "照標準方式治療仍沒改善，或嚴重影響睡眠與生活——請就醫。" },
        { en: "Infected eczema (painful, warm, swollen, weeping, crusted, or pus) — same-day care.", zh: "感染的濕疹（痛、熱、腫、流液、結痂或膿）——當天就醫。" },
        { en: "Eczema herpeticum: rapidly spreading painful blisters with fever or feeling unwell — a medical emergency.", zh: "疱疹性濕疹：快速擴散的疼痛水泡合併發燒或不舒服——屬急症。" }
      ],
      guide: {
        text: { en: "The 'emollients first, then topical anti-inflammatories, then step up' ladder reflects the American Academy of Dermatology atopic dermatitis guidelines and NICE/NHS management guidance.", zh: "「先保濕、再外用抗發炎藥、不夠再往上加」的階梯，依據 AAD 異位性皮膚炎指南與英國 NICE／NHS 的照護建議。" },
        sources: [
          { title: "Atopic Dermatitis: Diagnosis, Treatment, and Steps to Take", org: "NIAMS (NIH)", url: "https://www.niams.nih.gov/health-topics/atopic-dermatitis/diagnosis-treatment-and-steps-to-take" },
          { title: "Atopic dermatitis: Diagnosis and treatment", org: "American Academy of Dermatology", url: "https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis/treatment" },
          { title: "Atopic eczema", org: "NHS", url: "https://www.nhs.uk/conditions/atopic-eczema/" },
          { title: "Atopic Dermatitis (Eczema) — overview", org: "NIH / NIAMS", url: "https://www.niams.nih.gov/health-topics/atopic-dermatitis" },
          { title: "Atopic dermatitis — Medical Encyclopedia", org: "NIH / MedlinePlus", url: "https://medlineplus.gov/ency/article/000853.htm" }
        ]
      },
      next: ["itch","steroid","daily","child"]
    },

    /* ---------------------------------------------------- biologics */
    {
      id: "biologics", ic: "💉", group: "decision",
      title: { en: "I'm about to start a biologic (e.g. Dupixent)", zh: "我準備開始打生物製劑（如 Dupixent）" },
      sub: { en: "My doctor suggested dupilumab and I'm weighing it up.", zh: "醫師建議打度普利尤單抗，我還在考慮。" },
      plain: { en: "Biologics are injections for moderate-to-severe eczema that topicals can't control; they're generally safe but work gradually over weeks, not overnight.", zh: "生物製劑是打針，給外用藥控制不住的中重度異膚；整體算安全，但效果是幾週慢慢出來，不是打一針隔天就好。" },
      keywords: ["biologic","dupixent","dupilumab","injection","jak","生物製劑","打針","注射","標靶"],
      intro: {
        en: "Biologics like dupilumab are lab-made antibody proteins for moderate-to-severe eczema that topical treatment alone isn't controlling. They calm the specific immune signals (IL-4/IL-13) that drive eczema, are given by injection under the skin, have a well-established safety profile, and work gradually over weeks — not overnight.",
        zh: "像度普利尤單抗（Dupixent）這類生物製劑，是實驗室製造的抗體蛋白，用於外用藥控制不佳的中重度異膚。它精準地安撫驅動異膚的免疫訊號（IL-4/IL-13），以皮下注射給藥，安全性資料成熟，效果是幾週內慢慢出現，不是打一針就立刻好。"
      },
      steps: [
        { en: "<b>Confirm you fit the indication.</b> Biologics are for moderate-to-severe disease not controlled by topicals; your dermatologist assesses this (local reimbursement rules may also apply).", zh: "<b>確認你符合適應症。</b>生物製劑用於外用藥控制不佳的中重度異膚；由皮膚科醫師評估（各地健保給付條件可能不同）。" },
        { en: "<b>Learn the routine.</b> Dupilumab in adults is a loading dose then 300 mg every 2 weeks, and can be self-injected at home after training.", zh: "<b>了解施打方式。</b>成人度普利尤單抗是先一次負荷劑量，之後每 2 週打 300 mg，受訓後可在家自己打。" },
        { en: "<b>Set realistic expectations.</b> Itch often eases within ~2 weeks, with fuller skin improvement over about 16 weeks.", zh: "<b>抓對期待。</b>癢通常約 2 週開始減輕，皮膚較完整的改善大約要到 16 週。" },
        { en: "<b>Know the common side effects.</b> Conjunctivitis (pink/irritated eyes), injection-site reactions, cold sores; dupilumab needs no routine blood monitoring.", zh: "<b>認識常見副作用。</b>結膜炎（眼睛乾癢紅）、注射部位反應、唇皰疹；度普利尤單抗不需要例行抽血追蹤。" },
        { en: "<b>Plan follow-up.</b> Agree on a review schedule to judge response and adjust.", zh: "<b>安排追蹤。</b>和醫師約好回診節奏，評估效果與調整。" }
      ],
      faq: [
        { q: { en: "How soon will it work?", zh: "多久會有效？" },
          a: { en: "Itch often eases within about 2 weeks, but give it up to ~16 weeks to judge the full effect. It's not an instant fix.", zh: "癢常在約 2 週改善，但完整效果要看到約 16 週。它不是立即見效的。" } },
        { q: { en: "Is the injection dangerous — can I do it at home?", zh: "打針危險嗎？可以自己在家打嗎？" },
          a: { en: "It goes just under the skin and most people self-inject at home after training. The commonest issues are mild redness/soreness at the site and eye irritation (conjunctivitis).", zh: "是打在皮下，多數人受訓後可在家自己打。最常見的只是注射處輕微紅或痠，以及眼睛不適（結膜炎）。" } },
        { q: { en: "Biologic injection or a JAK pill — which is better?", zh: "生物製劑（打針）和 JAK 抑制劑（口服）怎麼選？" },
          a: { en: "Both treat moderate-to-severe eczema. JAK pills can act faster on itch but carry more serious safety warnings (infections, clots, cardiovascular events, cancer) and need blood monitoring; biologics like dupilumab are generally slower but have a well-established safety profile without routine bloods. Decide with your dermatologist.", zh: "兩者都治中重度異膚。JAK 口服藥止癢較快，但有較嚴重的安全警語（感染、血栓、心血管事件、癌症）且要定期抽血；度普利尤單抗這類生物製劑通常較慢，但安全性資料成熟、不用例行抽血。請和皮膚科醫師一起決定。" } }
      ],
      flags: [
        { en: "New/worsening eye pain, marked redness, or vision changes on dupilumab — tell your doctor.", zh: "打藥期間眼睛疼痛加劇、明顯紅或視力改變——告訴醫師。" },
        { en: "Signs of serious infection (fever, spreading redness, feeling very unwell), especially on a JAK inhibitor — prompt medical advice.", zh: "嚴重感染跡象（發燒、紅腫擴散、很不舒服），尤其在用 JAK 時——盡快就醫。" },
        { en: "On a JAK inhibitor: chest pain, breathlessness, or leg swelling/pain (possible clot) — urgent care.", zh: "用 JAK 時出現胸痛、喘、單腿腫痛（可能血栓）——立即就醫。" },
        { en: "Never abruptly stop a biologic on your own — eczema can rebound; contact your prescriber first.", zh: "別自行突然停生物製劑——可能反彈；先聯絡開藥醫師。" }
      ],
      guide: {
        text: { en: "Major dermatology guidelines, including the American Academy of Dermatology guidelines on managing atopic dermatitis with phototherapy and systemic therapies, recommend dupilumab and other biologics as a preferred systemic option for moderate-to-severe disease inadequately controlled by topical therapy.", zh: "主要皮膚科指南（含 AAD 關於以照光及系統性治療處理異膚的指南）建議：對外用治療控制不佳的中重度異膚，度普利尤單抗等生物製劑是優先的系統性選項。" },
        sources: [
          { title: "Dupixent (Dupilumab) FAQ", org: "National Eczema Association", url: "https://nationaleczema.org/dupilumab-faq/" },
          { title: "Biologics & Injectables for Eczema", org: "National Eczema Association", url: "https://nationaleczema.org/eczema/treatment/injectibles/" },
          { title: "Rinvoq (Upadacitinib) FAQ", org: "National Eczema Association", url: "https://nationaleczema.org/faq-upadacitinib/" },
          { title: "Dupilumab (Dupixent) — patient drug info", org: "NIH / MedlinePlus", url: "https://medlineplus.gov/druginfo/meds/a617021.html" },
          { title: "Dupilumab for moderate-to-severe AD (TA534)", org: "NICE (UK)", url: "https://www.nice.org.uk/guidance/ta534" }
        ]
      },
      next: ["stopping","steroid","sleep","travel"]
    },

    /* ---------------------------------------------------- steroid */
    {
      id: "steroid", ic: "🧴", group: "decision",
      title: { en: "I'm scared of using topical steroids", zh: "我很擔心擦類固醇" },
      sub: { en: "You've heard steroids are dangerous and you're afraid to apply them.", zh: "聽說類固醇很可怕，愈想愈不敢擦。" },
      plain: { en: "Used at the right strength, on the right area, for the right time, topical steroids are safe and effective — the real risk is under-treating out of fear.", zh: "只要用對強度、用對部位、用對療程，外用類固醇是安全又有效的——真正的風險反而是「因為怕而不敢擦」，讓發炎一直好不了。" },
      keywords: ["steroid","corticosteroid","afraid","thinning","tsw","withdrawal","類固醇","恐懼","變薄","戒斷","不敢擦"],
      intro: {
        en: "Fear of topical steroids is common — but both extremes cause problems. Never using them leaves inflammation uncontrolled and you suffer longer; overusing strong ones on the wrong areas is where side effects come from. The key is using the right strength, on the right site, for the right time under medical guidance — done that way, topical corticosteroids are a safe, effective first-line treatment.",
        zh: "怕類固醇很常見，但兩個極端都不好。完全不敢用，發炎壓不下來、只會更久受苦；把強效的長期亂擦在薄皮膚上，才是副作用的來源。關鍵是在醫師指示下，用對強度、對部位、對療程——這樣的外用類固醇是安全又有效的第一線治療。"
      },
      steps: [
        { en: "<b>Match potency to the body site.</b> Mild steroids (e.g. hydrocortisone) for face, eyelids, and folds; stronger ones for thicker skin like hands, limbs, trunk — as prescribed, not borrowed from others.", zh: "<b>依部位選強度。</b>臉、眼皮、皺褶處用弱效（如氫化可體松）；手、四肢、軀幹等厚皮膚可用較強——由醫師開立，別拿別人的藥膏來擦。" },
        { en: "<b>Use the fingertip unit (FTU).</b> One FTU (fingertip crease to tip, ~0.5 g) covers about two adult handprints. Apply a thin layer to active eczema.", zh: "<b>用「指尖單位（FTU）」抓用量。</b>一個指尖單位（從指尖到第一指節、約 0.5 g）可塗大約兩個成人手掌的面積。薄薄擦在發作處即可。" },
        { en: "<b>Treat the flare fully, then step down.</b> Don't dab-and-stop at the first sign of clearing — that invites relapse.", zh: "<b>發作要壓好，再慢慢遞減。</b>別一有好轉就馬上完全停，容易復發。" },
        { en: "<b>Ask about proactive 'weekend' maintenance.</b> Applying a steroid or calcineurin inhibitor to old trouble spots ~2 days/week once clear helps prevent flares.", zh: "<b>問醫師「主動維持治療」。</b>好轉後在容易復發的地方一週擦約 2 天（類固醇或鈣調神經磷酸酶抑制劑），能減少復發。" },
        { en: "<b>Know the non-steroid options.</b> Calcineurin inhibitors (tacrolimus/pimecrolimus), topical PDE4 (crisaborole), topical JAK (ruxolitinib) — none thin the skin, good for the face or steroid-sparing.", zh: "<b>認識非類固醇選項。</b>鈣調神經磷酸酶抑制劑（他克莫司「普特皮」、匹美莫司「醫立妥」）、外用 PDE4、外用 JAK——都不會讓皮膚變薄，適合臉部或替換使用。" }
      ],
      faq: [
        { q: { en: "Will topical steroids thin my skin?", zh: "外用類固醇會讓皮膚變薄嗎？" },
          a: { en: "Thinning mainly occurs with prolonged or excessive use of potent steroids. Used at the correct strength for flares (often once daily for days to a couple of weeks), they're safe for most people.", zh: "變薄主要發生在「長期、大量使用強效類固醇」。在發作時用對強度（常是一天一次、擦幾天到一兩週），對多數人是安全的。" } },
        { q: { en: "What is 'topical steroid withdrawal' (TSW) — will I get it?", zh: "什麼是「類固醇戒斷（TSW）」？我會遇到嗎？" },
          a: { en: "TSW is thought to be rare and linked to prolonged/improper use of stronger steroids, especially on the face or genitals. Using steroids as directed for flares — not continuously at high potency — keeps that risk low.", zh: "TSW 一般認為少見，多與長期、不當使用較強類固醇（尤其臉部或生殖器）有關。依指示在發作時使用、不是長期高強度連續擦，風險就很低。" } },
        { q: { en: "Are there steroid-free alternatives?", zh: "有不含類固醇的選擇嗎？" },
          a: { en: "Yes — calcineurin inhibitors (tacrolimus/pimecrolimus) for face and folds, and crisaborole (PDE4) or ruxolitinib cream (JAK) for mild-to-moderate eczema, none of which thin the skin.", zh: "有——鈣調神經磷酸酶抑制劑（普特皮、醫立妥）適合臉與皺褶，外用 PDE4、外用 JAK 適合輕中度，且都不會讓皮膚變薄。" } }
      ],
      flags: [
        { en: "Spreading burning redness beyond your usual eczema, or flares each time you stop a long-used potent steroid — discuss possible TSW with a dermatologist.", zh: "出現超出平常範圍、灼熱的擴散性紅疹，或每次停用長期強效類固醇就爆發——請找皮膚科討論是否為 TSW。" },
        { en: "Infected eczema (weeping, yellow crusts, fever, rapidly worsening) — needs medical review; steroids alone won't treat infection.", zh: "感染的濕疹（流液、黃色結痂、發燒、快速惡化）——要就醫；光擦類固醇無法治感染。" },
        { en: "Don't self-prescribe potent steroids for face, eyelids, or genitals — use mild strength and get advice for these sites.", zh: "別自行把強效類固醇用在臉、眼皮或生殖器——這些部位用弱效並請醫師指示。" }
      ],
      guide: {
        text: { en: "The American Academy of Dermatology 2023 guidelines on topical therapy for atopic dermatitis (aligned with NICE/NHS) strongly recommend topical corticosteroids as first-line anti-inflammatory treatment, with calcineurin inhibitors, crisaborole, and topical ruxolitinib as options and proactive maintenance to reduce flares.", zh: "AAD 2023 年外用治療指南（與英國 NICE／NHS 一致）強烈建議外用類固醇為第一線抗發炎藥，並以鈣調神經磷酸酶抑制劑、crisaborole、外用 ruxolitinib 為選項，搭配主動維持治療減少復發。" },
        sources: [
          { title: "Topical steroids (corticosteroid creams)", org: "DermNet", url: "https://dermnetnz.org/topics/topical-steroid" },
          { title: "Topical Steroid Withdrawal (TSW)", org: "National Eczema Association", url: "https://nationaleczema.org/treatments/topical-steroid-withdrawal/" },
          { title: "Updated guidelines: atopic dermatitis with topical therapies", org: "American Academy of Dermatology", url: "https://www.aad.org/news/updated-atopic-dermatitis-guidelines-topical-therapies" },
          { title: "Atopic dermatitis — self-care", org: "NIH / MedlinePlus", url: "https://medlineplus.gov/ency/patientinstructions/000418.htm" },
          { title: "Topical anti-inflammatory treatments for eczema (network meta-analysis)", org: "Cochrane", url: "https://doi.org/10.1002/14651858.CD015064.pub2" }
        ]
      },
      next: ["itch","biologics","newly","stopping"]
    },

    /* ---------------------------------------------------- stopping */
    {
      id: "stopping", ic: "⏸️", group: "decision",
      title: { en: "Can I stop my medication?", zh: "我可以停藥嗎？" },
      sub: { en: "Your skin's been clear for a while and you'd love to quit the creams.", zh: "皮膚好一陣子了，很想把藥停掉。" },
      plain: { en: "Don't stop everything abruptly — step down gradually, keep moisturizing, and let your doctor guide reducing any pills or injections.", zh: "別突然全停——要一步步減、保濕繼續，口服藥或針劑要不要減由醫師帶著調。" },
      keywords: ["stop","quit","taper","reduce","relapse","停藥","停用","減量","好了","復發"],
      intro: {
        en: "Wanting to stop once your skin is calm is completely natural — but eczema is chronic and relapsing, and stopping everything abruptly is a common cause of flares. The right move isn't all-or-nothing; it's working with your clinician to step down gradually and hold the gains with the least maintenance needed.",
        zh: "皮膚穩定了想停藥很正常——但異膚是慢性、會反覆的，突然全停常常就是復發的原因。正確做法不是「用或不用」二選一，而是和醫師一起慢慢減量，用最少的維持治療守住成果。"
      },
      steps: [
        { en: "<b>Don't quit cold-turkey — especially systemics.</b> Stopping a biologic or systemic without a plan can cause a rebound flare. Any stop or reduction starts with your doctor.", zh: "<b>別突然停——尤其是系統性藥物。</b>沒計畫地停生物製劑或口服藥可能反彈。任何停／減都先問醫師。" },
        { en: "<b>Shift to maintenance, not zero.</b> Once a flare clears, step topicals down in potency/frequency; keep moisturizing daily.", zh: "<b>改成「維持」，不是「歸零」。</b>發作好了之後，外用藥降強度、降頻率；保濕每天照舊。" },
        { en: "<b>Consider proactive maintenance.</b> Applying a topical steroid or calcineurin inhibitor to old trouble spots ~2 days/week can keep remission.", zh: "<b>考慮主動維持治療。</b>在容易復發處一週擦約 2 天（類固醇或鈣調神經磷酸酶抑制劑），能維持穩定。" },
        { en: "<b>Track what happens as you reduce.</b> Where it itches first, how soon it returns — this helps your clinician set the pace.", zh: "<b>記錄減量後的反應。</b>哪裡先癢、多久復發——幫醫師抓減量節奏。" },
        { en: "<b>Keep moisturizer as the permanent baseline.</b> Even if every drug stops, daily emollient is the foundation that keeps flares away.", zh: "<b>把保濕當成永遠的底線。</b>就算所有藥都停了，每天保濕仍是維持穩定的地基。" }
      ],
      faq: [
        { q: { en: "Can I stop my cream once the skin is clear?", zh: "皮膚好了就可以停藥膏嗎？" },
          a: { en: "Stop the active steroid on cleared areas, but keep moisturizing daily and consider proactive twice-weekly treatment to problem spots. Step down gradually rather than stopping everything at once.", zh: "已好的地方可停類固醇，但保濕每天照擦，容易復發處可一週擦兩次預防。要慢慢降，別一次全停。" } },
        { q: { en: "Can I stop my biologic or JAK pill if I feel better?", zh: "覺得好多了，可以自己停生物製劑或 JAK 嗎？" },
          a: { en: "Not on your own. Eczema often rebounds if systemic treatment is stopped abruptly. Talk to your prescriber about whether and how to reduce it.", zh: "不要自己停。突然停系統性治療常會反彈。要不要減、怎麼減，請和開藥醫師討論。" } },
        { q: { en: "If it always comes back, is treatment even working?", zh: "如果一直復發，治療到底有沒有用？" },
          a: { en: "Yes — controlling flares and maintaining remission is the realistic goal. Ongoing moisturizing and proactive maintenance keep the disease quiet even though there's no permanent cure.", zh: "有用——控制發作、維持穩定就是實際的目標。持續保濕與主動維持能讓它保持安靜，即使沒有永久斷根。" } }
      ],
      flags: [
        { en: "A severe rebound flare after abruptly stopping a systemic/biologic or a long-used potent steroid — contact your clinician promptly.", zh: "突然停系統性／生物製劑或長期強效類固醇後嚴重反彈——盡快聯絡醫師。" },
        { en: "Widespread redness, fever, or weeping/infected skin — seek medical review rather than just stopping treatment.", zh: "大面積發紅、發燒或流液／感染——就醫評估，而不是自行停藥。" },
        { en: "Never discontinue a prescribed systemic or biologic without first speaking to the prescriber.", zh: "沒先和開藥醫師談過，別自行停用處方的系統性藥或生物製劑。" }
      ],
      guide: {
        text: { en: "NICE CKS (Eczema — atopic) and AAD guidance support a stepped-care approach — continuing emollients continuously and stepping treatment up and down with severity, plus proactive maintenance — rather than abruptly stopping treatment.", zh: "英國 NICE CKS（異位性濕疹）與 AAD 建議採「階梯式照護」——保濕持續不停、依嚴重度上下調整用藥、加上主動維持治療——而不是突然停藥。" },
        sources: [
          { title: "Atopic eczema — Treatment", org: "NHS", url: "https://www.nhs.uk/conditions/atopic-eczema/treatment/" },
          { title: "Updated guidelines: atopic dermatitis with topical therapies", org: "American Academy of Dermatology", url: "https://www.aad.org/news/updated-atopic-dermatitis-guidelines-topical-therapies" },
          { title: "Dupixent (Dupilumab) FAQ", org: "National Eczema Association", url: "https://nationaleczema.org/dupilumab-faq/" },
          { title: "Dupilumab for moderate-to-severe AD — response/stopping rule (TA534)", org: "NICE (UK)", url: "https://www.nice.org.uk/guidance/ta534" },
          { title: "AAD guideline: topical therapies — proactive maintenance (2023)", org: "American Academy of Dermatology · JAAD", url: "https://doi.org/10.1016/j.jaad.2022.12.029" }
        ]
      },
      next: ["steroid","biologics","seasonal","itch"]
    },

    /* ---------------------------------------------------- child */
    {
      id: "child", ic: "🧸", group: "life",
      title: { en: "My child was just diagnosed", zh: "我的小孩剛確診" },
      sub: { en: "Your little one has eczema and you're worried and anxious.", zh: "孩子被診斷異膚，既心疼又焦慮。" },
      plain: { en: "Moisturize a lot, bathe gently, use steroid creams as the doctor directs, and don't cut out foods on your own — most kids improve as they grow.", zh: "大量保濕、溫和洗澡、照醫師指示擦類固醇、別自己亂忌口——多數孩子長大會改善。" },
      keywords: ["child","kid","baby","infant","toddler","parent","小孩","孩子","嬰兒","寶寶","家長"],
      intro: {
        en: "Watching your child scratch until they bleed is hard — the anxiety is understandable. The reassuring news: childhood eczema is common, usually controllable with frequent moisturizing, correct medication use, and trigger avoidance, and many children improve as they grow. You don't need to become a dermatologist — just a few key principles.",
        zh: "看著孩子抓到流血很煎熬，焦慮是正常的。好消息是：兒童異膚很常見，通常靠頻繁保濕、正確用藥、避開誘因就能控制得不錯，而且很多孩子長大會改善。你不用變成皮膚科醫師，掌握幾個關鍵就好。"
      },
      steps: [
        { en: "<b>Moisturize often — at least twice a day and after every bath.</b> Thick fragrance-free creams/ointments (not thin lotions), within ~3 minutes of patting skin dry.", zh: "<b>頻繁保濕——一天至少兩次、每次洗澡後都擦。</b>用無香料的乳霜或藥膏（不是稀的乳液），在拍乾後 3 分鐘內擦。" },
        { en: "<b>Bathe gently.</b> Lukewarm water 5–10 minutes, wash only dirty areas with a mild fragrance-free cleanser, no scrubbing, then moisturize immediately.", zh: "<b>溫和洗澡。</b>溫水洗 5–10 分鐘，只洗髒的地方、用溫和無香料清潔品、不要搓，洗完馬上保濕。" },
        { en: "<b>Use topical steroids as directed — don't skip them out of fear.</b> They're safe and effective for flares when used per your dermatologist's instructions. Under-treating prolongs your child's suffering.", zh: "<b>照醫師指示擦類固醇——別因為害怕而不敢擦。</b>依指示使用時，它對發作是安全有效的。因為怕而沒控制好，反而讓孩子受更久的苦。" },
        { en: "<b>Don't start broad food-elimination diets on your own.</b> Foods are usually not the cause; unnecessary restriction risks poor growth and can even raise the chance of a true food allergy.", zh: "<b>別自己大範圍忌口。</b>食物通常不是主因；沒必要的忌口會影響生長，甚至可能增加真正食物過敏的機會。" },
        { en: "<b>Reduce scratch damage.</b> Short nails, soft cotton gloves at night, breathable cotton clothing.", zh: "<b>減少抓傷。</b>指甲剪短、睡覺戴純棉手套、穿透氣純棉衣物。" }
      ],
      faq: [
        { q: { en: "Are steroid creams dangerous for my baby's skin?", zh: "類固醇藥膏對寶寶皮膚危險嗎？" },
          a: { en: "Used correctly for flares under a dermatologist's guidance, they're safe and effective. Thinning comes from overuse of strong steroids over long periods; daily moisturizing reduces how much steroid is needed.", zh: "在醫師指示下、發作時正確使用是安全有效的。變薄來自長期過度使用強效類固醇；每天保濕能減少需要用到的類固醇量。" } },
        { q: { en: "Should I cut out milk, eggs, or other foods?", zh: "要不要把牛奶、蛋等食物戒掉？" },
          a: { en: "Not without medical evaluation. Empiric elimination diets aren't recommended — foods are rarely the cause, and cutting them can harm growth and even trigger new allergies. See a doctor or allergist if you suspect a reaction.", zh: "沒經醫療評估別戒。不建議「憑感覺忌口」——食物很少是主因，亂戒可能影響生長、甚至誘發新的過敏。懷疑有反應請找醫師或過敏專科評估。" } },
        { q: { en: "Will my child grow out of it?", zh: "孩子長大會好嗎？" },
          a: { en: "Many do. Eczema often peaks in the toddler years and improves with age, with most children having little or no persistent disease by adolescence.", zh: "很多會。異膚常在幼兒期最明顯、隨年齡改善，多數孩子到青春期時已很少或不再持續發作。" } }
      ],
      flags: [
        { en: "Signs of skin infection — weeping, yellow crusting, pus, painful red swelling, or fever — need prompt review.", zh: "皮膚感染跡象——流液、黃色結痂、膿、紅腫疼痛或發燒——盡快就醫。" },
        { en: "Widespread painful blisters/punched-out sores or a rapidly spreading rash with fever (possible eczema herpeticum) — a medical emergency.", zh: "大範圍疼痛水泡／凹陷潰爛或快速擴散合併發燒（可能疱疹性濕疹）——屬急症。" },
        { en: "Poor weight gain or faltering growth in a child on a self-imposed elimination diet — get medical/dietitian evaluation.", zh: "自行忌口的孩子出現體重不增或生長遲滯——請找醫師／營養師評估。" }
      ],
      guide: {
        text: { en: "Consistent with American Academy of Dermatology infant eczema guidance and ACAAI/AAAAI/AAD positions that emollients plus appropriately used topical corticosteroids are first-line, and that empiric food-elimination diets are not recommended in children tolerating their foods.", zh: "與 AAD 嬰兒濕疹衛教及 ACAAI／AAAAI／AAD 立場一致：保濕加上適當使用的外用類固醇為第一線；對能正常吃的孩子，不建議憑感覺忌口。" },
        sources: [
          { title: "How to treat eczema in babies", org: "American Academy of Dermatology", url: "https://www.aad.org/public/diseases/eczema/childhood/treating/treat-babies" },
          { title: "Severe eczema — should I eliminate certain foods?", org: "ACAAI", url: "https://acaai.org/resource/my-child-has-severe-eczema-should-i-eliminate-certain-foods-from-their-diet/" },
          { title: "Eczema in Children", org: "National Eczema Association", url: "https://nationaleczema.org/eczema/children/" },
          { title: "Atopic dermatitis in children — home care", org: "NIH / MedlinePlus", url: "https://medlineplus.gov/ency/patientinstructions/000939.htm" },
          { title: "Atopic eczema in under-12s: diagnosis & management (CG57)", org: "NICE (UK)", url: "https://www.nice.org.uk/guidance/cg57" }
        ]
      },
      next: ["itch","steroid","newly","seasonal"]
    },

    /* ---------------------------------------------------- pregnancy */
    {
      id: "pregnancy", ic: "🤰", group: "life",
      title: { en: "I'm pregnant (or planning to be)", zh: "我懷孕了（或準備懷孕）" },
      sub: { en: "Worried about how treatment might affect the baby.", zh: "擔心用藥會不會影響寶寶。" },
      plain: { en: "Don't just tough it out with no treatment — moisturizers and (appropriately used) steroid creams are considered safe, while some pills must be avoided; plan with your doctors.", zh: "別完全不擦硬撐——保濕和（適當使用的）類固醇藥膏被視為安全，但有些口服藥必須避免；請和醫師一起規劃。" },
      keywords: ["pregnant","pregnancy","planning","breastfeeding","懷孕","孕婦","備孕","哺乳","餵母乳"],
      intro: {
        en: "Pregnancy hormones can make eczema better or worse — it varies. The key message: don't just white-knuckle it with no treatment, because uncontrolled inflammation and lost sleep aren't good for you either. Many treatments have reasonably safe options in pregnancy; the important thing is to plan ahead with your dermatologist and obstetrician together.",
        zh: "懷孕的荷爾蒙變化可能讓異膚變好或變壞，因人而異。重點是：不要什麼都不擦硬撐，因為失控的發炎和睡不好對你也不好。孕期很多治療都有相對安全的選擇，關鍵是提早和皮膚科與婦產科一起規劃。"
      },
      steps: [
        { en: "<b>Keep moisturizing — it's a top recommendation.</b> Fragrance-free creams/ointments generously and often; no need to switch away from one that works.", zh: "<b>保濕照舊——這是首要建議。</b>無香料乳霜或藥膏，大量且頻繁地擦；有效的就不用換。" },
        { en: "<b>Topical steroids are considered safe.</b> Used appropriately (often short courses), with clinicians generally favoring the lowest effective potency.", zh: "<b>外用類固醇被視為安全。</b>適當使用（常為短療程），醫師通常會用「能控制的最低強度」。" },
        { en: "<b>Avoid clearly harmful systemics.</b> Methotrexate and mycophenolate are contraindicated; PUVA is avoided; oral JAK inhibitors aren't advised in pregnancy/breastfeeding.", zh: "<b>避開明確有害的系統性藥物。</b>methotrexate 與 mycophenolate 為禁用；避免 PUVA；孕期／哺乳期不建議口服 JAK 抑制劑。" },
        { en: "<b>Discuss newer treatments individually.</b> For dupilumab, tralokinumab, crisaborole and others, pregnancy evidence is limited — don't start or stop on your own; weigh risk/benefit with your specialist.", zh: "<b>較新的治療要個別討論。</b>度普利尤單抗、tralokinumab、crisaborole 等孕期資料有限——別自行開始或停用，和專科醫師一起權衡。" },
        { en: "<b>Plan ahead and mind sleep and stress.</b> Review your plan before or early in pregnancy; you can generally breastfeed while treating eczema (avoid applying medication directly on the nipple).", zh: "<b>提早規劃，並顧好睡眠與壓力。</b>備孕或懷孕早期就檢視治療計畫；治療異膚時通常仍可哺乳（避免把藥直接擦在乳頭上）。" }
      ],
      faq: [
        { q: { en: "Can I keep using my steroid cream while pregnant?", zh: "懷孕可以繼續擦類固醇藥膏嗎？" },
          a: { en: "Yes — topical steroids are considered safe when used appropriately, typically in short courses. Milder potencies are often preferred; your doctor will tailor strength and duration.", zh: "可以——適當使用（通常短療程）時被視為安全。常優先用較弱的強度；由醫師依部位與週數調整。" } },
        { q: { en: "Which medicines must I avoid?", zh: "哪些藥一定要避免？" },
          a: { en: "Methotrexate and mycophenolate (both can harm the baby) and PUVA. Oral JAK inhibitors aren't recommended. For dupilumab and other newer agents, evidence is limited — decide with your specialist.", zh: "methotrexate 與 mycophenolate（都可能傷害胎兒）以及 PUVA。不建議口服 JAK。度普利尤單抗等較新藥物資料有限，和專科醫師一起決定。" } },
        { q: { en: "Is it safe to moisturize and breastfeed?", zh: "哺乳時可以保濕嗎？" },
          a: { en: "Yes — emollients are safe and encouraged. When breastfeeding, avoid putting medicated cream directly on the nipple; if you use a topical steroid there, let it absorb (about an hour) and wipe/wash before feeding.", zh: "可以——保濕是安全且鼓勵的。哺乳時別把藥膏直接擦在乳頭；若該處用了類固醇，讓它吸收（約一小時）並在餵奶前擦掉／洗掉。" } }
      ],
      flags: [
        { en: "Don't stop or start systemic eczema medication without medical advice — abrupt changes can cause severe flares, and some drugs must be stopped well before conception.", zh: "沒有醫囑別自行停或開始系統性藥物——突然更動可能嚴重發作，有些藥需在受孕前提早停用。" },
        { en: "Infected eczema (weeping, crusting, spreading redness, fever) — prompt care.", zh: "感染的濕疹（流液、結痂、紅腫擴散、發燒）——盡快就醫。" },
        { en: "A sudden very itchy rash or blistering in pregnancy should be assessed to rule out specific pregnancy skin conditions.", zh: "懷孕期間突然出現很癢的疹子或水泡，應就醫排除孕期特有的皮膚病。" }
      ],
      guide: {
        text: { en: "Aligned with American Academy of Dermatology pregnancy guidance and UK National Eczema Society advice: emollients and appropriately potent topical corticosteroids are mainstays in pregnancy, teratogenic systemics (methotrexate/mycophenolate) and PUVA are avoided, and newer systemics need specialist shared decision-making.", zh: "與 AAD 孕期衛教及英國國家濕疹協會建議一致：孕期以保濕與適當強度的外用類固醇為主，避免致畸胎的系統性藥（methotrexate／mycophenolate）與 PUVA，較新的系統性治療需與專科醫師共同決策。" },
        sources: [
          { title: "How to treat eczema during pregnancy", org: "American Academy of Dermatology", url: "https://www.aad.org/public/diseases/eczema/adult/pregnancy" },
          { title: "Pregnancy and eczema", org: "National Eczema Society (UK)", url: "https://www.eczema.org.uk/support/pregnancy-and-eczema" },
          { title: "Atopic dermatitis", org: "DermNet", url: "https://dermnetnz.org/topics/atopic-dermatitis" },
          { title: "EuroGuiDerm guideline on atopic eczema — Part I (systemic; special populations)", org: "EADV / ETFAD · JEADV", url: "https://doi.org/10.1111/jdv.18345" }
        ]
      },
      next: ["itch","steroid","stress","biologics"]
    },

    /* ---------------------------------------------------- stress */
    {
      id: "stress", ic: "🧠", group: "life",
      title: { en: "My skin gets worse when I'm stressed", zh: "壓力大時皮膚就變差" },
      sub: { en: "Busy or anxious, and your skin acts up in response.", zh: "一忙、一焦慮，皮膚就跟著鬧。" },
      plain: { en: "Stress and eczema feed each other — it's real, not 'in your head,' and looking after your mental health is part of treating the skin.", zh: "壓力和異膚會互相影響——這是真的，不是「你想太多」，照顧心理健康本來就是治療的一部分。" },
      keywords: ["stress","anxiety","mood","mental","depression","壓力","焦慮","情緒","心情","心理"],
      intro: {
        en: "Skin and mind run both ways: stress can worsen eczema through nerve and immune pathways, and living with eczema — the itch, lost sleep, appearance — feeds stress right back. Breaking the loop means treating the skin and taking mental health seriously. This isn't 'overthinking it' — psychosocial support is part of eczema care.",
        zh: "皮膚和情緒是雙向的：壓力會透過神經與免疫途徑讓異膚變差；而異膚帶來的癢、睡不好、外觀困擾，又反過來造成壓力。打破循環要同時治皮膚、也認真看待心理。這不是「想太多」——身心支持本就是異膚照護的一環。"
      },
      steps: [
        { en: "<b>Get the skin under control first.</b> When itch and sleep improve, stress often drops noticeably — it's the most direct lever.", zh: "<b>先把皮膚控制好。</b>當癢和睡眠改善，壓力通常會明顯下降——這是最直接的一環。" },
        { en: "<b>Build a stress-reduction routine.</b> Regular sleep, exercise, and relaxation/mindfulness all help lower flares.", zh: "<b>建立減壓的日常。</b>規律睡眠、運動、放鬆／正念，都有助減少發作。" },
        { en: "<b>Notice the 'stress → scratch' link.</b> Many people scratch unconsciously when anxious; use a replacement action (squeeze a stress ball, cold compress) to interrupt it.", zh: "<b>覺察「壓力→抓」的連結。</b>很多人焦慮時會無意識地抓；用替代動作（握壓力球、冰敷）打斷它。" },
        { en: "<b>Don't tough it out alone.</b> Talking with family or a patient community — knowing others get it — is itself healing.", zh: "<b>別獨自硬撐。</b>和家人或病友社群聊聊——知道有人懂——本身就有療癒力。" },
        { en: "<b>Seek professional help when needed.</b> CBT, relaxation, mindfulness, and support groups can reduce anxiety, depression, and scratching. If low mood or anxiety affects daily life, ask for support alongside skin treatment.", zh: "<b>需要時尋求專業協助。</b>認知行為治療（CBT）、放鬆、正念、支持團體都能減少焦慮、憂鬱與抓的行為。若情緒低落或焦慮影響生活，可與皮膚治療並行尋求協助。" }
      ],
      faq: [
        { q: { en: "Can stress really flare my eczema, or am I imagining it?", zh: "壓力真的會讓異膚發作嗎？還是我想太多？" },
          a: { en: "It's real. Stress raises hormones like cortisol and inflammatory chemicals and can switch on itch nerves, worsening inflammation and scratching, which leads to flares.", zh: "是真的。壓力會升高皮質醇等荷爾蒙與發炎物質，還會活化癢的神經，讓發炎與抓變嚴重，進而發作。" } },
        { q: { en: "Is it normal to feel anxious or down because of my eczema?", zh: "因為異膚而焦慮或低落，正常嗎？" },
          a: { en: "Yes, and it's common — people with eczema have a substantially higher risk of anxiety and depression. Tell your care team; support is a legitimate part of treatment.", zh: "正常，而且常見——異膚患者焦慮與憂鬱的風險明顯較高。告訴你的醫療團隊；尋求支持是治療的正當一環。" } },
        { q: { en: "Does sweaty exercise make it worse?", zh: "運動流汗會不會更糟？" },
          a: { en: "Sweat can briefly irritate skin, but exercise helps mood, sleep, and stress — a net win. Wear breathable clothing and rinse off and moisturize soon after.", zh: "汗水可能短暫刺激皮膚，但運動對情緒、睡眠、壓力都有幫助，整體是加分。穿透氣衣物、運動後盡快沖洗補保濕即可。" } }
      ],
      flags: [
        { en: "Thoughts of self-harm or suicide, or persistent hopelessness/severe depression — seek urgent help immediately.", zh: "有自傷或輕生念頭，或持續絕望／嚴重憂鬱——請立即尋求緊急協助。" },
        { en: "Anxiety or low mood that interferes with daily life, work, or sleep — ask your doctor for mental-health support.", zh: "焦慮或低落已影響生活、工作或睡眠——請醫師協助轉介心理支持。" },
        { en: "Scratching that breaks the skin with signs of infection (oozing, crusting, spreading redness, fever) — needs medical care.", zh: "抓破皮並出現感染跡象（滲液、結痂、紅腫擴散、發燒）——需就醫。" }
      ],
      guide: {
        text: { en: "Reflects National Eczema Association patient guidance summarizing peer-reviewed evidence that stress and eczema interact bidirectionally, that anxiety and depression are elevated comorbidities that rise with severity, and that psychosocial support (including CBT) belongs within comprehensive eczema care.", zh: "依據 NEA 衛教（彙整同儕審查證據）：壓力與異膚雙向影響，焦慮與憂鬱是隨嚴重度上升的共病，身心社會支持（含 CBT）應納入完整的異膚照護。" },
        sources: [
          { title: "Managing Stress from Eczema", org: "National Eczema Association", url: "https://nationaleczema.org/eczema-management/stress/" },
          { title: "Eczema and Mental Health", org: "National Eczema Association", url: "https://nationaleczema.org/mental-health/" },
          { title: "AAD guideline: comorbidities of AD (mental health)", org: "American Academy of Dermatology · JAAD", url: "https://doi.org/10.1016/j.jaad.2022.01.009" }
        ]
      },
      next: ["sleep","itch","daily","newly"]
    },

    /* ---------------------------------------------------- travel */
    {
      id: "travel", ic: "✈️", group: "daily",
      title: { en: "I want to travel", zh: "我想出國旅行" },
      sub: { en: "Worried about climate, carrying meds, and flares away from home.", zh: "擔心氣候、帶藥、在外地發作。" },
      plain: { en: "Eczema shouldn't stop you traveling — pack meds and moisturizer in your carry-on, keep biologics cool, and adjust for the climate.", zh: "異膚不該讓你不能旅行——把藥和保濕放隨身行李、生物製劑保冷、依當地氣候調整就好。" },
      keywords: ["travel","trip","flight","holiday","abroad","旅行","出國","旅遊","飛機","帶藥"],
      intro: {
        en: "Eczema shouldn't stop you traveling — it just needs planning. The three big variables are climate (dry/humid/cold/hot), a disrupted routine, and carrying/storing medication. Sort those out in advance and you can travel with confidence.",
        zh: "異膚不該是你不能旅行的理由，只要事先準備。三大變數是：氣候（乾／濕／冷／熱）、生活節奏被打亂、以及藥物的攜帶與保存。先安排好就能玩得安心。"
      },
      steps: [
        { en: "<b>Pack meds + at least 2 days of emollient in your carry-on.</b> A lost suitcase should never leave you without treatment. Clearly labelled prescription items can usually exceed the 100 ml liquid limit.", zh: "<b>藥＋至少 2 天份保濕放隨身行李。</b>行李遺失也不會沒藥可用。清楚標示的處方藥品通常可超過 100 ml 液體限制。" },
        { en: "<b>Beat the dry cabin air.</b> Apply a generous layer of your usual emollient before and during the flight, and re-moisturize often.", zh: "<b>對抗乾燥的機艙空氣。</b>登機前與飛行中厚擦平常的保濕，並整趟頻繁補擦。" },
        { en: "<b>Transport refrigerated biologics correctly.</b> Insulated cooler bag with cold packs at ~2–8°C, carried in the cabin with a doctor's letter, never frozen — check your product's storage leaflet.", zh: "<b>正確攜帶需冷藏的生物製劑。</b>用保冷袋加冰寶維持約 2–8°C，隨身帶上機並備醫師證明，切勿結凍——並看產品保存說明。" },
        { en: "<b>Protect from sun and sweat.</b> Fragrance-free SPF30+ with high UVA protection, applied ~30 min after your emollient, reapplied every 2 hours and after swimming/sweating; seek shade midday.", zh: "<b>防曬與流汗。</b>無香料 SPF30+（高 UVA 防護），在保濕後約 30 分鐘擦，每 2 小時及游泳／流汗後補擦；正午找陰涼。" },
        { en: "<b>Manage water and bedding.</b> Rinse off chlorine/salt water with fresh water and re-moisturize; ask accommodation for hypoallergenic/cotton bedding or bring your own cotton sheet.", zh: "<b>處理泳池水與寢具。</b>碰到氯水／海水後用清水沖洗並補保濕；向住宿詢問低敏／棉質寢具，或自備棉質床單。" }
      ],
      faq: [
        { q: { en: "Can I take creams over 100 ml through airport security?", zh: "超過 100 ml 的藥膏可以過安檢嗎？" },
          a: { en: "Yes — prescribed medicines and medical creams can go in hand luggage even above the usual liquid limit if clearly labelled with your name; carry the prescription and declare them at screening.", zh: "可以——清楚標示你名字的處方藥與醫用藥膏，即使超過液體限制仍可放隨身行李；帶著處方箋並於安檢時主動告知。" } },
        { q: { en: "How do I keep a biologic injection cold on a plane?", zh: "生物製劑針劑在飛機上怎麼保冷？" },
          a: { en: "Use an insulated cooler bag with cold packs, keep it in the cabin (not the hold, where it could freeze), carry a doctor's letter, aim for ~2–8°C, and check your product's leaflet for room-temperature tolerance.", zh: "用保冷袋加冰寶，隨身帶進機艙（別放貨艙，可能結凍），備醫師證明，維持約 2–8°C，並看產品說明可耐受的室溫時間。" } },
        { q: { en: "Will a hot-humid or cold-dry destination make it worse?", zh: "去濕熱或乾冷的地方會不會惡化？" },
          a: { en: "Either can trigger a flare — heat and sweat irritate, cold/dry/air-conditioned air draws out moisture. Anticipate it: moisturize more, wear light breathable cotton, stay cool and hydrated, and pack your flare treatment.", zh: "兩種都可能誘發——悶熱流汗會刺激，乾冷／冷氣會帶走水分。提前因應：多保濕、穿輕薄透氣純棉、保持涼爽補水，並帶好發作用藥。" } }
      ],
      flags: [
        { en: "Signs of infected eczema (rapidly worsening redness, weeping, yellow crusts, pain, fever, or fluid-filled blisters) — seek care before or during travel.", zh: "感染跡象（紅腫快速惡化、流液、黃色結痂、疼痛、發燒或水泡）——出發前或旅途中就醫。" },
        { en: "Widespread painful blistering with feeling unwell can indicate eczema herpeticum — a medical emergency.", zh: "大範圍疼痛水泡合併不舒服，可能是疱疹性濕疹——屬急症。" }
      ],
      guide: {
        text: { en: "Advice reflects patient guidance from the National Eczema Association and National Eczema Society plus NHS self-care recommendations on emollients, sun protection, and carrying labelled medication when traveling.", zh: "建議依據 NEA 與英國國家濕疹協會的衛教，以及 NHS 關於保濕、防曬、旅行時攜帶標示藥品的自我照護建議。" },
        sources: [
          { title: "How to Travel Without Triggering an Eczema Flare", org: "National Eczema Association", url: "https://nationaleczema.org/blog/travel-with-eczema/" },
          { title: "Sun and eczema", org: "National Eczema Society (UK)", url: "https://www.eczema.org.uk/support/sun-and-eczema" },
          { title: "Atopic eczema — Treatment", org: "NHS", url: "https://www.nhs.uk/conditions/atopic-eczema/treatment/" },
          { title: "Atopic eczema — overview & self-care", org: "NHS (UK)", url: "https://www.nhs.uk/conditions/atopic-eczema/" }
        ]
      },
      next: ["daily","seasonal","itch","biologics"]
    },

    /* ---------------------------------------------------- seasonal */
    {
      id: "seasonal", ic: "🍂", group: "daily",
      title: { en: "My eczema flares with the weather / seasons", zh: "換季／天氣一變就惡化" },
      sub: { en: "Dry cold winters or sweaty humid summers set it off.", zh: "秋冬乾冷、或濕熱悶汗就發作。" },
      plain: { en: "Get ahead of it: moisturize more (and richer) before the season that usually hits you, and control indoor temperature and humidity.", zh: "提前部署：在容易發作的季節「之前」就加強、換更滋潤的保濕，並控制室內溫濕度。" },
      keywords: ["season","weather","winter","summer","dry","sweat","humidity","換季","秋冬","乾燥","流汗","季節"],
      intro: {
        en: "Season changes are among the most common flare triggers: cold, dry winter air and indoor heating strip water from the skin barrier, while summer heat and trapped sweat irritate it. Rather than waiting for the flare, get ahead of it — adjust your routine before the season that usually affects you.",
        zh: "換季是最常見的發作時機：秋冬乾冷與暖氣會抽走皮膚水分，夏天悶熱與汗水則刺激皮膚。與其等它爆發，不如提前部署——在容易影響你的季節「之前」就調整。"
      },
      steps: [
        { en: "<b>Moisturize more before and during the tough season.</b> Don't wait for cracking; step up frequency and richness.", zh: "<b>在難熬的季節前與期間加強保濕。</b>別等到乾裂；提高頻率、換更滋潤的。" },
        { en: "<b>Switch emollient richness by season.</b> Richer, greasier ointments in cold dry weather; lighter creams in warmer months.", zh: "<b>依季節換保濕劑型。</b>乾冷時用較滋潤、較油的藥膏；溫暖時用較清爽的乳霜。" },
        { en: "<b>In summer, manage heat and sweat.</b> Stay cool, wear light breathable cotton, rinse and re-moisturize after sweating, change out of sweaty clothes promptly.", zh: "<b>夏天處理悶熱與汗。</b>保持涼爽、穿輕薄透氣純棉、流汗後沖洗補保濕、盡快換掉濕衣物。" },
        { en: "<b>Control your indoor environment.</b> Comfortable temperature (~18°C), avoid overheating, air rooms regularly.", zh: "<b>控制室內環境。</b>舒適溫度（約 18°C）、別過熱、定期通風。" },
        { en: "<b>Be proactive.</b> Keep up daily emollients even when clear, and have your flare treatment ready before your usual bad season; protect exposed skin with emollient in wind and sunscreen in summer.", zh: "<b>主動預防。</b>即使好了也每天保濕，並在容易發作的季節前備好發作用藥；出門在風中先擦保濕、夏天防曬保護暴露部位。" }
      ],
      faq: [
        { q: { en: "Why does my eczema get worse every winter?", zh: "為什麼每到冬天就惡化？" },
          a: { en: "Cold outdoor air and dry, heated indoor air both have low humidity, pulling moisture from the skin and weakening its barrier. Moisturize more often and use a richer ointment through winter.", zh: "戶外冷空氣和室內暖氣都很乾、濕度低，會抽走皮膚水分、削弱屏障。冬天要更常保濕並改用較滋潤的藥膏。" } },
        { q: { en: "Should I use a different moisturizer in summer vs winter?", zh: "夏天和冬天要用不同的保濕嗎？" },
          a: { en: "Often yes — a thicker, greasier ointment in cold dry months and a lighter cream in hot humid weather. Keep moisturizing all year; just adjust the richness.", zh: "常常是的——乾冷時用較厚較油的藥膏，濕熱時用較清爽的乳霜。全年都要保濕，只是調整滋潤度。" } },
        { q: { en: "Does summer sweat trigger flares — what helps?", zh: "夏天流汗會誘發嗎？怎麼辦？" },
          a: { en: "Sweat can irritate eczema-prone skin. Stay cool, wear loose breathable cotton, take heat breaks, rinse off sweat and re-apply emollient, and change out of damp clothing quickly.", zh: "汗會刺激易敏的皮膚。保持涼爽、穿寬鬆透氣純棉、避開高溫、流汗後沖洗補保濕、盡快換掉濕衣物。" } }
      ],
      flags: [
        { en: "A seasonal flare that spreads, weeps, crusts yellow, becomes painful, or comes with fever may be infected — get it assessed.", zh: "季節性發作若擴散、流液、黃色結痂、變痛或發燒，可能已感染——請就醫評估。" }
      ],
      guide: {
        text: { en: "Advice reflects National Eczema Society and American Academy of Dermatology patient guidance that low humidity/cold and heat/sweat are common triggers, and DermNet recommendations to moisturize liberally and continuously while avoiding humidity and temperature extremes.", zh: "建議依據英國國家濕疹協會與 AAD 衛教（低濕度／寒冷與悶熱／流汗為常見誘因），以及 DermNet 關於「大量且持續保濕、避免溫濕度極端」的建議。" },
        sources: [
          { title: "Weather and eczema", org: "National Eczema Society (UK)", url: "https://www.eczema.org.uk/information-and-advice/triggers-for-eczema/weather-and-eczema/" },
          { title: "Atopic dermatitis: Tips for managing", org: "American Academy of Dermatology", url: "https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis/atopic-dermatitis-coping" },
          { title: "Treatment of atopic dermatitis", org: "DermNet", url: "https://dermnetnz.org/topics/treatment-of-atopic-dermatitis" },
          { title: "Atopic dermatitis — self-care", org: "NIH / MedlinePlus", url: "https://medlineplus.gov/ency/patientinstructions/000418.htm" },
          { title: "EuroGuiDerm guideline on atopic eczema — Part II (emollients, triggers)", org: "EADV / ETFAD · JEADV", url: "https://doi.org/10.1111/jdv.18429" }
        ]
      },
      next: ["itch","steroid","travel","daily"]
    },

    /* ---------------------------------------------------- daily */
    {
      id: "daily", ic: "👕", group: "daily",
      title: { en: "How should I set up daily life?", zh: "日常生活怎麼安排比較好？" },
      sub: { en: "Clothing, bathing, diet, skincare, sun — everyday choices.", zh: "衣服、洗澡、飲食、保養、防曬——每天的選擇。" },
      plain: { en: "A few habits do most of the work: gentle bathing + moisturize right after, soft cotton clothes, fragrance-free products, and don't cut foods on your own.", zh: "幾個習慣就能搞定大半：溫和洗澡後馬上保濕、穿柔軟純棉、用無香料產品、不要自己亂忌口。" },
      keywords: ["daily","clothing","bathing","diet","food","skincare","sunscreen","日常","衣服","洗澡","飲食","保養","防曬"],
      intro: {
        en: "Controlling eczema is half medication, half daily habits. Many people assume they must 'give up' lots of things — but it really comes down to a few habits that genuinely help: gentle cleansing, smart clothing, generous moisturizing, and avoiding your personal triggers. Get these right and flares drop noticeably.",
        zh: "控制異膚一半靠藥、一半靠生活習慣。很多人以為要「戒掉很多東西」，其實重點是幾個真正有幫助的習慣：溫和清潔、聰明穿衣、足量保濕、避開你個人的誘因。做對這些，發作會明顯變少。"
      },
      steps: [
        { en: "<b>Moisturize daily — at least twice, and whenever skin feels dry.</b> Fragrance-free creams or ointments (not thin lotions); dispense with a pump or spoon rather than fingers in the pot.", zh: "<b>每天保濕——至少兩次、覺得乾就補。</b>用無香料乳霜或藥膏（不是稀的乳液）；用壓頭或挖棒取用，別用手指伸進罐子。" },
        { en: "<b>Bathe short and 'soak and seal'.</b> 5–10 min lukewarm (never hot), pat dry, moisturize immediately on still-damp skin; use an emollient soap substitute instead of ordinary soap.", zh: "<b>洗澡短、做「泡後鎖水」。</b>溫水（別燙）洗 5–10 分鐘，輕拍乾，趁微濕立刻保濕；用保濕型的清潔替代品，別用一般肥皂。" },
        { en: "<b>Wear soft, loose 100% cotton.</b> Avoid wool and tight synthetics next to skin, remove scratchy tags, wash new clothes first, use fragrance-free dye-free detergent.", zh: "<b>穿柔軟寬鬆的純棉。</b>避免羊毛與貼身的合成布料、剪掉粗糙標籤、新衣先洗過、用無香料無染料的洗衣精。" },
        { en: "<b>Choose fragrance-free, low-irritant skincare and cosmetics.</b> 'Unscented' can still contain masking fragrance; patch-test a new product for several days first.", zh: "<b>選無香料、低刺激的保養與化妝品。</b>標「無味」也可能含遮蔽用香精；新產品先在小範圍試用幾天。" },
        { en: "<b>Don't do broad food-elimination diets unless a doctor advises.</b> They rarely help and can be harmful. Also reduce home allergens (dust mites) with regular cleaning and washable cotton bedding; use SPF30+ for sun.", zh: "<b>沒有醫囑別大範圍忌口。</b>通常沒幫助又可能有害。同時減少居家過敏原（塵蟎）：定期清潔、可清洗的棉質寢具；防曬用 SPF30+。" }
      ],
      faq: [
        { q: { en: "When exactly should I moisturize after a bath?", zh: "洗完澡到底什麼時候擦保濕？" },
          a: { en: "Within a few minutes, while skin is still slightly damp. Pat (don't rub) dry, then seal in the water with a fragrance-free cream or ointment — 'soak and seal' is one of the most important daily steps.", zh: "幾分鐘內、趁皮膚還微濕時。輕拍（別搓）乾，再用無香料乳霜或藥膏把水分鎖住——「泡後鎖水」是每天最重要的步驟之一。" } },
        { q: { en: "Should I cut out dairy or eggs to control eczema?", zh: "要戒奶或蛋來控制異膚嗎？" },
          a: { en: "No, not on your own. Most eczema isn't caused by food, and broad elimination diets aren't recommended — they seldom help and can cause nutritional harm and even trigger new allergies. Only restrict foods if a doctor/allergist directs you after assessment.", zh: "別自己戒。多數異膚不是食物造成，也不建議大範圍忌口——通常沒幫助，還可能營養不良、甚至誘發新過敏。只有在醫師／過敏專科評估後指示才需限制。" } },
        { q: { en: "What clothing and detergent are best?", zh: "衣服和洗衣精怎麼選？" },
          a: { en: "Soft, loose 100% cotton; avoid wool and tight synthetics against the skin, remove irritating tags. Wash clothes (including new ones) in fragrance-free, dye-free detergent and skip scented softeners.", zh: "柔軟寬鬆的純棉；避免貼身的羊毛與合成布料、剪掉刺激的標籤。衣服（含新衣）用無香料無染料洗衣精，別用有香味的柔軟精。" } }
      ],
      flags: [
        { en: "Eczema that becomes increasingly red, swollen, weepy, crusted, painful, or comes with fever may be infected — needs medical care.", zh: "濕疹愈來愈紅、腫、流液、結痂、疼痛或發燒，可能已感染——需就醫。" },
        { en: "Sudden widespread painful blisters or clustered sores can signal eczema herpeticum — urgent attention.", zh: "突然大範圍疼痛水泡或成群潰爛，可能是疱疹性濕疹——盡快就醫。" },
        { en: "A history of immediate food reactions (hives, swelling, wheeze, vomiting) should be assessed by a doctor/allergist rather than managed by self-directed dieting.", zh: "曾對食物立即反應（蕁麻疹、腫、喘、嘔吐）應由醫師／過敏專科評估，而非自行忌口。" }
      ],
      guide: {
        text: { en: "Advice reflects American Academy of Dermatology and NHS self-care recommendations on moisturizing, soak-and-seal bathing, fragrance-free products, and cotton clothing, plus AAAAI/ACAAI and NHS guidance that broad empiric food-elimination diets are not recommended for atopic dermatitis.", zh: "建議依據 AAD 與 NHS 的自我照護建議（保濕、泡後鎖水、無香料產品、棉質衣物），以及 AAAAI／ACAAI 與 NHS 的立場：不建議對異膚憑感覺大範圍忌口。" },
        sources: [
          { title: "Atopic dermatitis: Self-care", org: "American Academy of Dermatology", url: "https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis/self-care" },
          { title: "Atopic dermatitis: Tips for managing", org: "American Academy of Dermatology", url: "https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis/atopic-dermatitis-coping" },
          { title: "Atopic eczema — Treatment", org: "NHS", url: "https://www.nhs.uk/conditions/atopic-eczema/treatment/" },
          { title: "Atopic dermatitis — self-care", org: "NIH / MedlinePlus", url: "https://medlineplus.gov/ency/patientinstructions/000418.htm" },
          { title: "Emollients and moisturisers for eczema (systematic review)", org: "Cochrane", url: "https://doi.org/10.1002/14651858.CD012119.pub2" }
        ]
      },
      next: ["seasonal","stress","travel","itch"]
    }
  ]
};
