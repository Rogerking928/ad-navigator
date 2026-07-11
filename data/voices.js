/* ============================================================
   AD Navigator — "You're not alone" curated patient voices
   ------------------------------------------------------------
   NOT copied posts. We read real experiences that patients
   shared PUBLICLY — in news features, patient-organization
   stories, personal essays, AND peer-reviewed research that
   interviewed patients — then group them into a few shared
   situations (in OUR OWN words) and link back to the originals.
   This respects the authors' copyright and lets readers see the
   full source.

   Every URL below was checked to be a live, on-topic page
   (2026-07). Dead / access-blocked links were dropped. No
   invented studies, no copied text, no quotes attributed to
   named individuals.

   Source types (rendered as a small icon):
     paper   📄  peer-reviewed research / patient-reported study
     article ✍️  a named individual's personal essay
     story   💬  a first-person story hosted by an organization
     media   📰  a news / magazine feature
     org     🤝  a patient organization hub
   Shape: each theme = { id, ic, scn (a scenario id to link to
   or null), title{en,zh}, voice{en,zh} (our synthesis),
   stories:[{title{en,zh}, org{en,zh}, url, lang, type}] }.
   ============================================================ */
window.AD_VOICES = {
  reviewedOn: "2026-07-11",

  note: {
    en: "This section doesn't copy anyone's posts. We gather experiences shared publicly online — in news features, patient-organization stories, personal essays, and research that interviewed patients — sort them into situations many of us share (in our own words), and link back to each source so authors are credited and you can read the full story.",
    zh: "這一區不是複製別人的貼文。我們把網路上「公開分享」的真實經驗——包含媒體報導、病友組織故事、個人文章，以及有訪談病人的研究——整理成幾個大家共同的處境（用我們自己的話），再把連結指回每個來源，尊重原作者，也讓你能讀到完整內容。"
  },

  themes: [
    {
      id: "v-sleep", ic: "🌙", scn: "sleep",
      title: { en: "“I just want one good night's sleep”", zh: "「只求一夜好眠」" },
      voice: {
        en: "Across countless posts, the wish that comes up most is the simplest one — a full night's sleep. Some have lived with eczema for decades and still just want one night not broken by itching. If you're scratching till dawn, you are not alone.",
        zh: "翻遍網路上的分享，最常出現的心願其實最單純——好好睡一覺。有病友與異膚共處了三十幾年，最想要的仍是「一夜不被癢醒」。如果你也在半夜抓到天亮，你並不孤單。"
      },
      stories: [
        { title: { en: "Living with atopic dermatitis for 38 years — just wanting one good night's sleep", zh: "與異位性皮膚炎共存 38 年，只求一夜好眠" },
          org: { en: "Health GVM · patient story", zh: "健康遠見·病友故事" },
          url: "https://health.gvm.com.tw/article/86330", lang: "zh", type: "media" },
        { title: { en: "Why people with eczema have a hard time sleeping", zh: "為什麼異膚的人特別難睡" },
          org: { en: "National Eczema Association", zh: "美國國家濕疹協會（NEA）" },
          url: "https://nationaleczema.org/blog/eczema-leads-to-problems-sleeping/", lang: "en", type: "org" }
      ]
    },
    {
      id: "v-steroid", ic: "🧴", scn: "steroid",
      title: { en: "“Should I use the steroid or not?”", zh: "「到底該不該擦類固醇？」" },
      voice: {
        en: "This is a tug-of-war shared by patients and parents alike — afraid of side effects, yet afraid that not treating makes things worse. Some have also documented the hard road of steroid withdrawal. Many people have walked this; read their experience, then talk it through with your own doctor.",
        zh: "這是病友與家長共同的拉扯——既怕副作用，又怕不控制會更糟。也有人詳實記錄了戒斷的辛苦歷程。這條路很多人走過，你可以參考他們的經驗，再和自己的醫師討論。"
      },
      stories: [
        { title: { en: "Topical Steroid Withdrawal (TSW) — what it is", zh: "認識「類固醇戒斷（TSW）」" },
          org: { en: "National Eczema Association", zh: "美國國家濕疹協會（NEA）" },
          url: "https://nationaleczema.org/treatments/topical-steroid-withdrawal/", lang: "en", type: "org" },
        { title: { en: "Your Stories — what it's really like", zh: "病友真實故事（Sophie、Ruth 等）" },
          org: { en: "National Eczema Society (UK)", zh: "英國國家濕疹協會" },
          url: "https://www.eczema.org.uk/your-stories/", lang: "en", type: "org" }
      ]
    },
    {
      id: "v-social", ic: "🫂", scn: "stress",
      title: { en: "“I hid it, and skipped the plans”", zh: "「把自己藏起來、推掉聚會」" },
      voice: {
        en: "For many, it isn't only the skin — it's the instinct to hide: covering scratch marks, turning down invitations, the sting of being told “it's just a skin thing.” Mood and flares feed each other, and these feelings are real and common. You don't have to carry them silently.",
        zh: "很多人談的不只是皮膚，而是那份「把自己藏起來」的心情——遮住抓痕、推掉邀約，或被一句『不過是皮膚病』輕輕帶過的委屈。情緒和病情會互相牽動，這些感受都是真實而常見的，你不必自己默默扛著。"
      },
      stories: [
        { title: { en: "Irene's story — a lifetime with atopic dermatitis", zh: "Irene 的故事——與異膚共處一生" },
          org: { en: "UNION Therapeutics", zh: "UNION Therapeutics" },
          url: "https://uniontherapeutics.com/patient-story-irene/", lang: "en", type: "story" },
        { title: { en: "How Karina managed her eczema", zh: "Karina 如何面對她的濕疹" },
          org: { en: "National Eczema Association", zh: "美國國家濕疹協會（NEA）" },
          url: "https://nationaleczema.org/blog/confessions-of-an-eczema-warrior/", lang: "en", type: "story" },
        { title: { en: "My skin talks to me — 40 years living with eczema", zh: "我的皮膚會跟我說話——與濕疹共處 40 年" },
          org: { en: "Catie Coman · personal essay", zh: "Catie Coman・個人文章" },
          url: "https://nationaleczema.org/blog/my-skin-talks-to-me/", lang: "en", type: "article" }
      ]
    },
    {
      id: "v-biologics", ic: "💉", scn: "biologics",
      title: { en: "“The turning point that let me live again”", zh: "「讓我重新過生活的轉機」" },
      voice: {
        en: "In recent years, biologics have been a turning point for some people with moderate-to-severe disease — one patient could finally sleep and live normally after months of treatment; others share the fight to get the treatment covered. These are real reasons for hope, though whether to start any medicine is always decided with your doctor.",
        zh: "近年生物製劑讓一些中重度病友出現轉機——有人治療後半年，終於能正常睡覺、正常生活；也有人分享了爭取健保給付的過程。這些是真實的希望，但要不要用藥，仍要由你的醫師評估。"
      },
      stories: [
        { title: { en: "Patients who fought for biologic coverage", zh: "爭取生物製劑健保給付的病友故事" },
          org: { en: "Atopic Dermatitis Patient Association (Taiwan)", zh: "異位性皮膚炎病友協會" },
          url: "https://adpa.org.tw/", lang: "zh", type: "org" },
        { title: { en: "Finding success with moderate-to-severe AD", zh: "中重度異膚如何找到有效的治療" },
          org: { en: "WebMD", zh: "WebMD" },
          url: "https://www.webmd.com/skin-problems-and-treatments/eczema/features/relief-atopic-dermatitis", lang: "en", type: "media" }
      ]
    },
    {
      id: "v-research", ic: "📄", scn: null,
      title: { en: "What the research says about the patient experience", zh: "研究怎麼說病人的真實經驗" },
      voice: {
        en: "Studies that actually sat down and interviewed patients keep finding the same things: the itch is relentless and hard to stop, scratching damages skin, sleep and mood take a real hit, and many people quietly pull back from social life. If your experience ever feels “too much,” the evidence says it's real — and shared by many.",
        zh: "真的坐下來訪談病人的研究，反覆得到同樣的發現：癢是無止盡又難停下、抓會傷皮膚、睡眠與情緒都被明顯拖累，很多人默默地減少社交。如果你曾覺得自己「反應太over」，證據告訴你：這些都是真實的，而且很多人和你一樣。"
      },
      stories: [
        { title: { en: "Patient-reported burden in adults with AD — international qualitative study (88 patients, 15 countries)", zh: "成人異膚的病人自述負擔——跨 15 國、88 位病人的質性研究" },
          org: { en: "Archives of Dermatological Research · open access", zh: "Archives of Dermatological Research・開放取用" },
          url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11162389/", lang: "en", type: "paper" },
        { title: { en: "The burdens of living with itchiness — a qualitative study", zh: "與「癢」共處的負擔——質性研究" },
          org: { en: "J Clinical & Aesthetic Dermatology (PubMed)", zh: "臨床與美容皮膚科期刊（PubMed）" },
          url: "https://pubmed.ncbi.nlm.nih.gov/37560503/", lang: "en", type: "paper" },
        { title: { en: "How adults & teens experience AD: skin pain, sleep, fatigue (qualitative interviews)", zh: "成人與青少年如何經歷異膚：皮膚痛、睡眠、疲憊（質性訪談）" },
          org: { en: "J Patient-Reported Outcomes · open access", zh: "Journal of Patient-Reported Outcomes・開放取用" },
          url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11985738/", lang: "en", type: "paper" }
      ]
    },
    {
      id: "v-community", ic: "🤝", scn: null,
      title: { en: "You're not fighting this alone", zh: "你不是一個人在對抗它" },
      voice: {
        en: "The patient organizations below host many real stories shared with the tellers' consent — and they welcome you to submit your own. Whether you're looking for people who get it, or want to help those who come after you, this is a good place to start.",
        zh: "下面這些病友組織收錄了大量「經當事人同意」分享的真實故事，也歡迎你投稿自己的經歷。想找懂你的人，或想幫助後來的人，都可以從這裡開始。"
      },
      stories: [
        { title: { en: "Atopic Dermatitis Patient Association", zh: "異位性皮膚炎病友協會（台灣）" },
          org: { en: "Taiwan", zh: "台灣" },
          url: "https://adpa.org.tw/", lang: "zh", type: "org" },
        { title: { en: "Share your eczema story", zh: "分享你的濕疹故事" },
          org: { en: "National Eczema Association", zh: "美國國家濕疹協會（NEA）" },
          url: "https://nationaleczema.org/community-storytelling/", lang: "en", type: "org" },
        { title: { en: "Your Stories", zh: "病友故事集" },
          org: { en: "National Eczema Society (UK)", zh: "英國國家濕疹協會" },
          url: "https://www.eczema.org.uk/your-stories/", lang: "en", type: "org" }
      ]
    }
  ]
};
