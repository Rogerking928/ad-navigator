/* ============================================================
   AD Navigator — curated care-path content
   ------------------------------------------------------------
   This file is CLINICIAN-REVIEWED, not auto-generated.
   Content is summarized from public guidelines & patient
   organizations (AAD, National Eczema Association, NHS, DermNet,
   NIH/NIAMS, ACAAI). Every path carries its real sources.

   "story" entries are ILLUSTRATIVE composites, not real patients.

   Edit freely: each scenario is one object in AD_CONTENT.scenarios.
   To add a scenario, copy a block, change its id, and add that id
   to other scenarios' "next" arrays so they link to each other.
   ============================================================ */
window.AD_CONTENT = {
  reviewedOn: "2026-07-08",
  disclaimer:
    "This site provides general education summarized from public guidelines and patient organizations. It is not individual medical advice. Decisions about medication, dosage, or stopping treatment must be made with your own doctor.",

  groups: {
    symptom:  { ic: "🔥", name: "Right now / symptoms" },
    decision: { ic: "💊", name: "Treatment decisions" },
    life:     { ic: "🌱", name: "Life stages" },
    daily:    { ic: "☀️", name: "Everyday life" }
  },

  scenarios: [
    /* ---------------------------------------------------- itch */
    {
      id: "itch", ic: "🔥", group: "symptom",
      title: "I've been really itchy lately",
      sub: "A flare that itches so much you can't stop scratching.",
      keywords: ["itch", "itchy", "scratch", "flare", "flare-up", "worse", "red", "rash"],
      intro:
        "The itch–scratch cycle drives flares: scratching relieves itch for a moment but damages the skin barrier and releases inflammatory chemicals, which makes the skin even itchier. Getting a flare under control is less about anti-itch pills and more about doing two things together — calming the inflammation and repairing the barrier.",
      steps: [
        "<b>Moisturize generously and often.</b> Use a fragrance-free thick cream or ointment; apply in smooth downward strokes rather than rubbing. Emollients are the foundation of every next step.",
        "<b>Apply your prescribed anti-inflammatory.</b> Put your topical corticosteroid (or OTC hydrocortisone) on inflamed areas to bring down inflammation — don't try to ride it out on moisturizer alone.",
        "<b>Cool the itch instead of scratching.</b> A cold, damp washcloth on itchy skin (then moisturize afterward) breaks the urge without breaking the skin.",
        "<b>Bathe short, lukewarm, then seal.</b> 5–10 minutes in lukewarm water with a gentle fragrance-free cleanser, then moisturize while skin is still damp.",
        "<b>Find this flare's trigger.</b> Heat, sweat, stress, dust, fragrances, wool — note what set it off so it's easier to prevent next time. Keep nails short."
      ],
      faq: [
        { q: "Why does scratching make it worse, not better?",
          a: "Scratching feels good for a second but damages the skin barrier and releases inflammatory chemicals, causing more inflammation and more itch — that's the itch–scratch cycle." },
        { q: "Can't I just take an antihistamine to stop the itch?",
          a: "Eczema itch is not mainly histamine-driven, so non-sedating antihistamines usually do little. Controlling inflammation (moisturizer + topical steroid) works better; a sedating antihistamine may occasionally help you sleep at night." },
        { q: "How much moisturizer is enough during a flare?",
          a: "More than you'd think — at least twice a day and more as needed. Keep using it even after the skin looks clear." }
      ],
      flags: [
        "Skin that becomes painful, swollen, warm, weeping, crusted, or has pus-filled spots — this can signal a bacterial infection; seek same-day care.",
        "A rapidly spreading rash of painful, uniform fluid-filled or blood-stained blisters (often on the face/neck), especially with fever — possible eczema herpeticum, a medical emergency."
      ],
      guide: {
        text: "Itch-management advice (emollients, topical corticosteroids, cool compresses, trigger avoidance) follows the American Academy of Dermatology atopic dermatitis guidelines and National Eczema Association guidance.",
        sources: [
          { title: "Ways to Relieve Itch from Eczema", org: "National Eczema Association", url: "https://nationaleczema.org/eczema-management/itchy-skin/" },
          { title: "Atopic dermatitis: Self-care", org: "American Academy of Dermatology", url: "https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis/self-care" },
          { title: "Atopic eczema — Treatment", org: "NHS", url: "https://www.nhs.uk/conditions/atopic-eczema/treatment/" }
        ]
      },
      story: { name: "Sam", meta: "illustrative", text: "I used to scratch until I bled. My doctor told me to use 'an absurd amount' of moisturizer and stay consistent with my cream — two weeks later that claw-at-my-skin urge was so much quieter." },
      next: ["sleep", "steroid", "seasonal", "newly"]
    },

    /* ---------------------------------------------------- sleep */
    {
      id: "sleep", ic: "🌙", group: "symptom",
      title: "I can't sleep because of the itching",
      sub: "Waking up scratching, itching worst at night, exhausted by day.",
      keywords: ["sleep", "night", "insomnia", "can't sleep", "awake", "nighttime", "tired"],
      intro:
        "Night is the hardest time: skin gets warmer near bedtime and loses more water overnight, and with fewer daytime distractions the itch feels more intense. The single most effective fix is getting the eczema itself under control — then layering on a few bedtime and bedroom habits.",
      steps: [
        "<b>Do a bedtime 'seal'.</b> Apply an oil-based ointment or your medicated cream at bedtime to calm the skin overnight.",
        "<b>Keep the bedroom cool.</b> Around 15–19°C (60–67°F). A warm body and warm bedding make nighttime itch worse.",
        "<b>Use soft cotton bedding and nightwear</b>, and wash linens regularly to cut irritants and dust.",
        "<b>Make scratching harder.</b> Short nails, soft cotton gloves at night; ask your clinician about wet-wrap therapy for severe itch.",
        "<b>Protect the wind-down.</b> Screens off ~30 min before bed; a sedating antihistamine at night may occasionally help during a bad flare (check with your clinician first)."
      ],
      faq: [
        { q: "Why is my eczema so much itchier at night?",
          a: "Skin warms up and loses more water overnight, and your brain's control over the urge to scratch relaxes as you get sleepy — so the itch feels stronger." },
        { q: "Should I rely on antihistamines to sleep?",
          a: "A sedating antihistamine may help you fall asleep during a bad flare, but it treats drowsiness, not the eczema. Short-term only, and after checking with your clinician." },
        { q: "Do wet wraps really help nighttime itch?",
          a: "Yes — a damp layer over emollient or medication cools and rehydrates skin and blocks scratching, which can improve sleep. Have a clinician show you the technique first." }
      ],
      flags: [
        "Itch and sleep loss that stay severe despite good skin care — see your clinician to step up treatment; poor sleep is a sign the disease needs better control.",
        "Signs of infection (painful, weeping, pus, fever) or rapidly spreading painful blisters — seek urgent care."
      ],
      guide: {
        text: "Nighttime-itch and sleep advice reflects American Academy of Dermatology and National Eczema Association guidance emphasizing disease control, bedtime moisturizing, a cool environment, and scratch prevention.",
        sources: [
          { title: "What can help a child with eczema sleep?", org: "American Academy of Dermatology", url: "https://www.aad.org/public/diseases/eczema/childhood/health-concerns/sleep" },
          { title: "Why people with eczema have a hard time sleeping — and what to do", org: "National Eczema Association", url: "https://nationaleczema.org/blog/eczema-leads-to-problems-sleeping/" },
          { title: "6 Tips to Get a Good Night's Sleep Tonight", org: "National Eczema Association", url: "https://nationaleczema.org/blog/sleep-well-with-eczema/" }
        ]
      },
      story: { name: "Mara", meta: "illustrative", text: "3 a.m. was the worst. A cool room, a cold pack by the bed to press instead of scratch, and finally adjusting my treatment — the night I slept straight through, I almost cried." },
      next: ["itch", "steroid", "biologics", "stress"]
    },

    /* ---------------------------------------------------- newly */
    {
      id: "newly", ic: "🧭", group: "symptom",
      title: "I was just diagnosed and don't know where to start",
      sub: "First time hearing 'atopic dermatitis' and feeling a bit lost.",
      keywords: ["diagnosed", "new", "just diagnosed", "start", "beginner", "what is", "basics"],
      intro:
        "Feeling overwhelmed at diagnosis is normal. The first thing to know: atopic dermatitis (eczema) is a common, chronic, non-contagious inflammatory skin condition with a weakened skin barrier. It flares and settles over time, it isn't caused by poor hygiene, and it is very manageable. The goal isn't a cure — it's steady control that lets you live normally.",
      steps: [
        "<b>Build the foundation: daily moisturizer.</b> Use a fragrance-free thick cream or ointment liberally every day, even when skin looks clear.",
        "<b>Learn 'flare' vs 'calm'.</b> Anti-inflammatory creams go on during flares; moisturizer maintains the calm periods. This rhythm will be with you a long time.",
        "<b>Understand the treatment ladder.</b> Start with emollients and gentle care; add topical steroids for flares; step up to calcineurin inhibitors, newer non-steroid creams, phototherapy, biologics, or JAK inhibitors only if needed.",
        "<b>Track your triggers.</b> Heat/sweat, harsh soaps, fragrances, dust, certain fabrics — find your personal ones.",
        "<b>Prepare questions for your clinician.</b> Write down what worries you so visits are more useful."
      ],
      faq: [
        { q: "Will my eczema ever go away?",
          a: "It's a long-term condition that flares and improves over time; many children improve as they grow. There's no cure, but with the right routine most people control it well." },
        { q: "Did I cause this somehow?",
          a: "No. Eczema is tied to an inherited skin-barrier and immune tendency — not to being 'unclean.' What you can do is control it." },
        { q: "Do I need strong drugs right away?",
          a: "Not necessarily. Mild disease is managed with moisturizer plus topical creams; stronger, step-up treatments are only for moderate-to-severe disease that isn't responding." }
      ],
      flags: [
        "Eczema not improving with standard treatment, or severely affecting sleep and daily life — see a clinician.",
        "Infected eczema (painful, warm, swollen, weeping, crusted, or pus) — same-day care.",
        "Eczema herpeticum: rapidly spreading painful blisters with fever or feeling unwell — a medical emergency."
      ],
      guide: {
        text: "The 'emollients first, then topical anti-inflammatories, then step up' ladder reflects the American Academy of Dermatology atopic dermatitis guidelines and NICE/NHS management guidance.",
        sources: [
          { title: "Atopic Dermatitis: Diagnosis, Treatment, and Steps to Take", org: "NIAMS (NIH)", url: "https://www.niams.nih.gov/health-topics/atopic-dermatitis/diagnosis-treatment-and-steps-to-take" },
          { title: "Atopic dermatitis: Diagnosis and treatment", org: "American Academy of Dermatology", url: "https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis/treatment" },
          { title: "Atopic eczema", org: "NHS", url: "https://www.nhs.uk/conditions/atopic-eczema/" }
        ]
      },
      story: { name: "Devi", meta: "illustrative", text: "At first I thought it was a disaster. My doctor spent five minutes explaining it's a controllable chronic condition and I relaxed. Looking back, the biggest first step really was just getting moisturizing right." },
      next: ["itch", "steroid", "daily", "child"]
    },

    /* ---------------------------------------------------- biologics */
    {
      id: "biologics", ic: "💉", group: "decision",
      title: "I'm about to start a biologic (e.g. Dupixent)",
      sub: "My doctor suggested dupilumab and I'm weighing it up.",
      keywords: ["biologic", "dupixent", "dupilumab", "injection", "shot", "jak", "targeted"],
      intro:
        "Biologics like dupilumab are lab-made antibody proteins for moderate-to-severe eczema that topical treatment alone isn't controlling. They calm the specific immune signals (IL-4/IL-13) that drive eczema. They're given by injection under the skin, have a well-established safety profile, and work gradually over weeks — not overnight.",
      steps: [
        "<b>Confirm you fit the indication.</b> Biologics are for moderate-to-severe disease inadequately controlled by topicals; your dermatologist will assess this (local insurance/reimbursement rules may also apply).",
        "<b>Learn the routine.</b> Dupilumab in adults is a loading dose then 300 mg every 2 weeks, and can be self-injected at home after training.",
        "<b>Set realistic expectations.</b> Itch often eases within ~2 weeks, with fuller skin improvement over about 16 weeks.",
        "<b>Know the common side effects.</b> Conjunctivitis (pink/irritated eyes), injection-site reactions, and cold sores; dupilumab needs no routine blood monitoring.",
        "<b>Plan follow-up.</b> Agree on a review schedule to judge response and adjust."
      ],
      faq: [
        { q: "How soon will it work?",
          a: "Itch often eases within about 2 weeks, but give it up to ~16 weeks to judge the full effect on your skin. It's not an instant fix." },
        { q: "Is the injection dangerous — can I do it at home?",
          a: "It goes just under the skin and most people self-inject at home after training. The commonest issues are mild redness/soreness at the site and eye irritation (conjunctivitis)." },
        { q: "Biologic injection or a JAK pill — which is better?",
          a: "Both treat moderate-to-severe eczema. JAK pills can act faster on itch but carry more serious safety warnings (infections, clots, cardiovascular events, cancer) and need blood monitoring; biologics like dupilumab are generally slower but have a well-established safety profile without routine bloods. Decide with your dermatologist." }
      ],
      flags: [
        "New/worsening eye pain, marked redness, or vision changes on dupilumab — tell your doctor.",
        "Signs of serious infection (fever, spreading redness, feeling very unwell), especially on a JAK inhibitor — prompt medical advice.",
        "On a JAK inhibitor: chest pain, breathlessness, or leg swelling/pain (possible clot) — urgent care.",
        "Never abruptly stop a biologic on your own — eczema can rebound; contact your prescriber first."
      ],
      guide: {
        text: "Major dermatology guidelines, including the American Academy of Dermatology guidelines on managing atopic dermatitis with phototherapy and systemic therapies, recommend dupilumab and other biologics as a preferred systemic option for moderate-to-severe disease inadequately controlled by topical therapy.",
        sources: [
          { title: "Dupixent (Dupilumab) FAQ", org: "National Eczema Association", url: "https://nationaleczema.org/dupilumab-faq/" },
          { title: "Biologics & Injectables for Eczema", org: "National Eczema Association", url: "https://nationaleczema.org/eczema/treatment/injectibles/" },
          { title: "Rinvoq (Upadacitinib) FAQ", org: "National Eczema Association", url: "https://nationaleczema.org/faq-upadacitinib/" }
        ]
      },
      story: { name: "Tomás", meta: "illustrative", text: "By week 2 the itch dropped a lot and my face cleared first. Around week 6 my eyes got dry and irritated — my doctor said that's the common conjunctivitis, artificial tears sorted it and I didn't stop." },
      next: ["stopping", "steroid", "sleep", "travel"]
    },

    /* ---------------------------------------------------- steroid */
    {
      id: "steroid", ic: "🧴", group: "decision",
      title: "I'm scared of using topical steroids",
      sub: "You've heard steroids are dangerous and you're afraid to apply them.",
      keywords: ["steroid", "corticosteroid", "afraid", "scared", "side effect", "thinning", "tsw", "withdrawal"],
      intro:
        "Fear of topical steroids (steroid phobia) is common — but both extremes cause problems. Never using them leaves inflammation uncontrolled and you suffer longer; overusing strong ones on the wrong areas is where side effects come from. The key is using the right strength, on the right site, for the right time under medical guidance — done that way, topical corticosteroids are a safe, effective first-line treatment.",
      steps: [
        "<b>Match potency to the body site.</b> Mild steroids (e.g. hydrocortisone) for face, eyelids, and skin folds; stronger ones for thicker skin like hands, limbs, and trunk — prescribed by your clinician, not borrowed from someone else.",
        "<b>Use the fingertip unit (FTU).</b> One FTU (fingertip crease to tip, ~0.5 g) covers about two adult handprints of skin. Apply a thin layer to active eczema.",
        "<b>Treat the flare fully, then step down.</b> Don't dab-and-stop at the first sign of clearing — that invites relapse.",
        "<b>Ask about proactive 'weekend' maintenance.</b> Applying a steroid or calcineurin inhibitor to old trouble spots ~2 days/week once clear helps prevent flares and reduces total steroid used.",
        "<b>Know the non-steroid options.</b> Calcineurin inhibitors (tacrolimus/pimecrolimus), topical PDE4 (crisaborole), and topical JAK (ruxolitinib) — none cause skin thinning, good for the face or for steroid-sparing."
      ],
      faq: [
        { q: "Will topical steroids thin my skin?",
          a: "Thinning mainly occurs with prolonged or excessive use of potent steroids. Used at the correct strength for flares (often once daily for days to a couple of weeks), they're safe for most people." },
        { q: "What is 'topical steroid withdrawal' (TSW) — will I get it?",
          a: "TSW is thought to be rare and linked to prolonged/improper use of stronger steroids, especially on the face or genitals. Using steroids as directed for flares — not continuously at high potency — keeps that risk low." },
        { q: "Are there steroid-free alternatives?",
          a: "Yes — calcineurin inhibitors (tacrolimus/pimecrolimus) for face and folds, and crisaborole (PDE4) or ruxolitinib cream (JAK) for mild-to-moderate eczema, none of which thin the skin." }
      ],
      flags: [
        "Spreading burning redness beyond your usual eczema, or flares each time you stop a long-used potent steroid — discuss possible TSW with a dermatologist.",
        "Infected eczema (weeping, yellow crusts, fever, rapidly worsening) — needs medical review; steroids alone won't treat infection.",
        "Don't self-prescribe potent steroids for face, eyelids, or genitals — use mild strength and get advice for these sites."
      ],
      guide: {
        text: "The American Academy of Dermatology 2023 guidelines on topical therapy for atopic dermatitis (aligned with NICE/NHS advice) strongly recommend topical corticosteroids as first-line anti-inflammatory treatment, with calcineurin inhibitors, crisaborole, and topical ruxolitinib as options and proactive maintenance to reduce flares.",
        sources: [
          { title: "Topical steroids (corticosteroid creams)", org: "DermNet", url: "https://dermnetnz.org/topics/topical-steroid" },
          { title: "Topical Steroid Withdrawal (TSW)", org: "National Eczema Association", url: "https://nationaleczema.org/treatments/topical-steroid-withdrawal/" },
          { title: "Updated guidelines: atopic dermatitis with topical therapies", org: "American Academy of Dermatology", url: "https://www.aad.org/news/updated-atopic-dermatitis-guidelines-topical-therapies" }
        ]
      },
      story: { name: "Priya", meta: "illustrative", text: "I was so scared of steroids I let my skin get raw. My doctor taught me to zone it — a non-steroid cream on thin areas, a short steroid course on thick patches, then twice-weekly to prevent flares. Used properly, it wasn't scary at all." },
      next: ["itch", "biologics", "newly", "stopping"]
    },

    /* ---------------------------------------------------- stopping */
    {
      id: "stopping", ic: "⏸️", group: "decision",
      title: "Can I stop my medication?",
      sub: "Your skin's been clear for a while and you'd love to quit the creams.",
      keywords: ["stop", "quit", "taper", "reduce", "off medication", "cleared", "relapse"],
      intro:
        "Wanting to stop once your skin is calm is completely natural — but eczema is chronic and relapsing, and stopping everything abruptly is a common cause of flares. The right move isn't all-or-nothing; it's working with your clinician to step down gradually and hold the gains with the least maintenance needed.",
      steps: [
        "<b>Don't quit cold-turkey — especially systemics.</b> Stopping a biologic or systemic without a plan can cause a rebound flare. Any stop or reduction starts with your doctor.",
        "<b>Shift to maintenance, not zero.</b> Once a flare clears, step topicals down in potency/frequency; keep moisturizing daily.",
        "<b>Consider proactive maintenance.</b> Applying a topical steroid or calcineurin inhibitor to old trouble spots ~2 days/week can keep remission and reduce future flares.",
        "<b>Track what happens as you reduce.</b> Where it itches first, how soon it returns — this helps your clinician set the pace.",
        "<b>Keep moisturizer as the permanent baseline.</b> Even if every drug stops, daily emollient is the foundation that keeps flares away."
      ],
      faq: [
        { q: "Can I stop my cream once the skin is clear?",
          a: "Stop the active steroid on cleared areas, but keep moisturizing daily and consider proactive twice-weekly treatment to problem spots. Step down gradually rather than stopping everything at once." },
        { q: "Can I stop my biologic or JAK pill if I feel better?",
          a: "Not on your own. Eczema often rebounds if systemic treatment is stopped abruptly. Talk to your prescriber about whether and how to reduce it." },
        { q: "If it always comes back, is treatment even working?",
          a: "Yes — controlling flares and maintaining remission is the realistic goal. Ongoing moisturizing and proactive maintenance keep the disease quiet even though there's no permanent cure." }
      ],
      flags: [
        "A severe rebound flare after abruptly stopping a systemic/biologic or a long-used potent steroid — contact your clinician promptly.",
        "Widespread redness, fever, or weeping/infected skin — seek medical review rather than just stopping treatment.",
        "Never discontinue a prescribed systemic or biologic without first speaking to the prescriber."
      ],
      guide: {
        text: "NICE CKS (Eczema — atopic) and AAD guidance support a stepped-care approach — continuing emollients continuously and stepping treatment up and down with severity, plus proactive maintenance — rather than abruptly stopping treatment.",
        sources: [
          { title: "Atopic eczema — Treatment", org: "NHS", url: "https://www.nhs.uk/conditions/atopic-eczema/treatment/" },
          { title: "Updated guidelines: atopic dermatitis with topical therapies", org: "American Academy of Dermatology", url: "https://www.aad.org/news/updated-atopic-dermatitis-guidelines-topical-therapies" },
          { title: "Dupixent (Dupilumab) FAQ", org: "National Eczema Association", url: "https://nationaleczema.org/dupilumab-faq/" }
        ]
      },
      story: { name: "Jae", meta: "illustrative", text: "I used to stop everything the moment I cleared, and I relapsed every time. My doctor walked me down slowly — daily creams to twice a week, moisturizer as usual — and this has been my most stable year." },
      next: ["steroid", "biologics", "seasonal", "itch"]
    },

    /* ---------------------------------------------------- child */
    {
      id: "child", ic: "🧸", group: "life",
      title: "My child was just diagnosed",
      sub: "Your little one has eczema and you're worried and anxious.",
      keywords: ["child", "kid", "baby", "infant", "toddler", "diagnosed", "parent", "son", "daughter"],
      intro:
        "Watching your child scratch until they bleed is hard — the anxiety is understandable. The reassuring news: childhood eczema is common, usually controllable with frequent moisturizing, correct medication use, and trigger avoidance, and many children improve as they grow. You don't need to become a dermatologist — just a few key principles.",
      steps: [
        "<b>Moisturize often — at least twice a day and after every bath.</b> Thick fragrance-free creams or ointments (not thin lotions), applied within ~3 minutes of patting skin dry to lock in water.",
        "<b>Bathe gently.</b> Lukewarm (not hot) water for 5–10 minutes, wash only dirty areas with a mild fragrance-free cleanser, no scrubbing, then moisturize immediately.",
        "<b>Use topical steroids as directed — don't skip them out of fear.</b> They're safe and effective for flares when used per your dermatologist's instructions on strength, amount, and duration. Under-treating (steroid phobia) prolongs your child's suffering.",
        "<b>Don't start broad food-elimination diets on your own.</b> Foods are usually not the cause; unnecessary restriction risks poor growth and can even raise the chance of a true food allergy.",
        "<b>Reduce scratch damage.</b> Short nails, soft cotton gloves at night, breathable cotton clothing."
      ],
      faq: [
        { q: "Are steroid creams dangerous for my baby's skin?",
          a: "Used correctly for flares under a dermatologist's guidance, they're safe and effective. Thinning comes from overuse of strong steroids over long periods; daily moisturizing reduces how much steroid is needed." },
        { q: "Should I cut out milk, eggs, or other foods?",
          a: "Not without medical evaluation. Empiric elimination diets aren't recommended — foods are rarely the cause, and cutting them can harm growth and even trigger new allergies. See a doctor or allergist if you suspect a reaction." },
        { q: "Will my child grow out of it?",
          a: "Many do. Eczema often peaks in the toddler years and improves with age, with most children having little or no persistent disease by adolescence." }
      ],
      flags: [
        "Signs of skin infection — weeping, yellow crusting, pus, painful red swelling, or fever — need prompt review.",
        "Widespread painful blisters/punched-out sores or a rapidly spreading rash with fever (possible eczema herpeticum) — a medical emergency.",
        "Poor weight gain or faltering growth in a child on a self-imposed elimination diet — get medical/dietitian evaluation."
      ],
      guide: {
        text: "Consistent with American Academy of Dermatology infant eczema guidance and ACAAI/AAAAI/AAD positions that emollients plus appropriately used topical corticosteroids are first-line, and that empiric food-elimination diets are not recommended in children tolerating their foods.",
        sources: [
          { title: "How to treat eczema in babies", org: "American Academy of Dermatology", url: "https://www.aad.org/public/diseases/eczema/childhood/treating/treat-babies" },
          { title: "Severe eczema — should I eliminate certain foods?", org: "ACAAI", url: "https://acaai.org/resource/my-child-has-severe-eczema-should-i-eliminate-certain-foods-from-their-diet/" },
          { title: "Eczema in Children", org: "National Eczema Association", url: "https://nationaleczema.org/eczema/children/" }
        ]
      },
      story: { name: "A parent", meta: "illustrative", text: "At first I was afraid to use anything and cut out dairy and eggs — my child lost weight and got no better. Once I learned to moisturize a lot, treat flares properly, and stop the random dieting, my child slept through the night, and so did I." },
      next: ["itch", "steroid", "newly", "seasonal"]
    },

    /* ---------------------------------------------------- pregnancy */
    {
      id: "pregnancy", ic: "🤰", group: "life",
      title: "I'm pregnant (or planning to be)",
      sub: "Worried about how treatment might affect the baby.",
      keywords: ["pregnant", "pregnancy", "planning", "conceive", "breastfeeding", "nursing", "baby"],
      intro:
        "Pregnancy hormones can make eczema better or worse — it varies. The key message: don't just white-knuckle it with no treatment, because uncontrolled inflammation and lost sleep aren't good for you either. Many treatments have reasonably safe options in pregnancy; the important thing is to plan ahead with your dermatologist and obstetrician together.",
      steps: [
        "<b>Keep moisturizing — it's a top recommendation.</b> Fragrance-free creams/ointments generously and often; no need to switch away from an emollient that works.",
        "<b>Topical steroids are considered safe.</b> Used appropriately (often short courses), with clinicians generally favoring the lowest effective potency for the situation.",
        "<b>Avoid clearly harmful systemics.</b> Methotrexate and mycophenolate are contraindicated; PUVA is avoided; oral JAK inhibitors aren't advised in pregnancy/breastfeeding.",
        "<b>Discuss newer treatments individually.</b> For dupilumab, tralokinumab, crisaborole and others, pregnancy evidence is limited — don't start or stop on your own; weigh risk/benefit with your specialist.",
        "<b>Plan ahead and mind sleep and stress.</b> Review your plan before or early in pregnancy; know you can generally breastfeed while treating eczema (avoid applying medication directly on the nipple)."
      ],
      faq: [
        { q: "Can I keep using my steroid cream while pregnant?",
          a: "Yes — topical steroids are considered safe when used appropriately, typically in short courses. Milder potencies are often preferred where they control it; your doctor will tailor strength and duration." },
        { q: "Which medicines must I avoid?",
          a: "Methotrexate and mycophenolate (both can harm the baby) and PUVA. Oral JAK inhibitors aren't recommended. For dupilumab and other newer agents, evidence is limited — decide with your specialist." },
        { q: "Is it safe to moisturize and breastfeed?",
          a: "Yes — emollients are safe and encouraged. When breastfeeding, avoid putting medicated cream directly on the nipple; if you use a topical steroid there, let it absorb (about an hour) and wipe/wash before feeding." }
      ],
      flags: [
        "Don't stop or start systemic eczema medication without medical advice — abrupt changes can cause severe flares, and some drugs must be stopped well before conception.",
        "Infected eczema (weeping, crusting, spreading redness, fever) — prompt care.",
        "A sudden very itchy rash or blistering in pregnancy should be assessed to rule out specific pregnancy skin conditions."
      ],
      guide: {
        text: "Aligned with American Academy of Dermatology pregnancy guidance and UK National Eczema Society advice: emollients and appropriately potent topical corticosteroids are mainstays in pregnancy, teratogenic systemics (methotrexate/mycophenolate) and PUVA are avoided, and newer systemics need specialist shared decision-making.",
        sources: [
          { title: "How to treat eczema during pregnancy", org: "American Academy of Dermatology", url: "https://www.aad.org/public/diseases/eczema/adult/pregnancy" },
          { title: "Pregnancy and eczema", org: "National Eczema Society (UK)", url: "https://www.eczema.org.uk/support/pregnancy-and-eczema" },
          { title: "Atopic dermatitis", org: "DermNet", url: "https://dermnetnz.org/topics/atopic-dermatitis" }
        ]
      },
      story: { name: "Noor", meta: "illustrative", text: "My eczema got worse when I got pregnant and I was too scared to use anything — I couldn't sleep for the itch. Dermatology and obstetrics worked together on a safe plan, and I realized 'toughing it out' wasn't good for the baby either." },
      next: ["itch", "steroid", "stress", "biologics"]
    },

    /* ---------------------------------------------------- stress */
    {
      id: "stress", ic: "🧠", group: "life",
      title: "My skin gets worse when I'm stressed",
      sub: "Busy or anxious, and your skin acts up in response.",
      keywords: ["stress", "anxiety", "mood", "mental", "depression", "emotional", "mind"],
      intro:
        "Skin and mind run both ways: stress can worsen eczema through nerve and immune pathways, and living with eczema — the itch, lost sleep, appearance — feeds stress right back. Breaking the loop means treating the skin and taking mental health seriously. This isn't 'overthinking it' — psychosocial support is part of eczema care.",
      steps: [
        "<b>Get the skin under control first.</b> When itch and sleep improve, stress often drops noticeably — it's the most direct lever.",
        "<b>Build a stress-reduction routine.</b> Regular sleep, exercise, and relaxation/mindfulness all help lower flares.",
        "<b>Notice the 'stress → scratch' link.</b> Many people scratch unconsciously when anxious; practice a replacement action (squeeze a stress ball, cold compress) to interrupt it.",
        "<b>Don't tough it out alone.</b> Talking with family or a patient community — knowing others get it — is itself healing.",
        "<b>Seek professional help when needed.</b> CBT, relaxation, mindfulness, and support groups can reduce anxiety, depression, and scratching; if low mood or anxiety affects daily life, ask for support alongside skin treatment."
      ],
      faq: [
        { q: "Can stress really flare my eczema, or am I imagining it?",
          a: "It's real. Stress raises hormones like cortisol and inflammatory chemicals and can switch on itch nerves, worsening inflammation and scratching, which leads to flares." },
        { q: "Is it normal to feel anxious or down because of my eczema?",
          a: "Yes, and it's common — people with eczema have a substantially higher risk of anxiety and depression. Tell your care team; support is a legitimate part of treatment." },
        { q: "Does sweaty exercise make it worse?",
          a: "Sweat can briefly irritate skin, but exercise helps mood, sleep, and stress — a net win. Wear breathable clothing and rinse off and moisturize soon after." }
      ],
      flags: [
        "Thoughts of self-harm or suicide, or persistent hopelessness/severe depression — seek urgent help immediately.",
        "Anxiety or low mood that interferes with daily life, work, or sleep — ask your doctor for mental-health support.",
        "Scratching that breaks the skin with signs of infection (oozing, crusting, spreading redness, fever) — needs medical care."
      ],
      guide: {
        text: "Reflects National Eczema Association patient guidance summarizing peer-reviewed evidence that stress and eczema interact bidirectionally, that anxiety and depression are elevated comorbidities that rise with severity, and that psychosocial support (including CBT) belongs within comprehensive eczema care.",
        sources: [
          { title: "Managing Stress from Eczema", org: "National Eczema Association", url: "https://nationaleczema.org/eczema-management/stress/" },
          { title: "Eczema and Mental Health", org: "National Eczema Association", url: "https://nationaleczema.org/mental-health/" }
        ]
      },
      story: { name: "Leo", meta: "illustrative", text: "I thought 'what does a skin problem have to do with mood' — until exam season set off a huge flare. Now I exercise and I joined a patient group; at 3 a.m. knowing someone else is awake too makes it far less lonely." },
      next: ["sleep", "itch", "daily", "newly"]
    },

    /* ---------------------------------------------------- travel */
    {
      id: "travel", ic: "✈️", group: "daily",
      title: "I want to travel",
      sub: "Worried about climate, carrying meds, and flares away from home.",
      keywords: ["travel", "trip", "flight", "airplane", "holiday", "vacation", "abroad", "packing"],
      intro:
        "Eczema shouldn't stop you traveling — it just needs planning. The three big variables are climate (dry/humid/cold/hot), a disrupted routine, and carrying/storing medication. Sort those out in advance and you can travel with confidence.",
      steps: [
        "<b>Pack meds + at least 2 days of emollient in your carry-on.</b> A lost suitcase should never leave you without treatment. Clearly labelled prescription items can usually exceed the 100 ml liquid limit.",
        "<b>Beat the dry cabin air.</b> Apply a generous layer of your usual emollient before and during the flight, and re-moisturize often through the trip.",
        "<b>Transport refrigerated biologics correctly.</b> Insulated cooler bag with cold packs at fridge temp (~2–8°C), carried in the cabin with a doctor's letter, never frozen — check your product's storage leaflet.",
        "<b>Protect from sun and sweat.</b> Fragrance-free SPF30+ with high UVA protection, applied ~30 min after your emollient, reapplied every 2 hours and after swimming/sweating; seek shade midday.",
        "<b>Manage water and bedding.</b> Rinse off chlorine/salt water with fresh water and re-moisturize; ask accommodation for hypoallergenic/cotton bedding or bring your own cotton sheet."
      ],
      faq: [
        { q: "Can I take creams over 100 ml through airport security?",
          a: "Yes — prescribed medicines and medical creams can go in hand luggage even above the usual liquid limit if clearly labelled with your name; carry the prescription and declare them at screening." },
        { q: "How do I keep a biologic injection cold on a plane?",
          a: "Use an insulated medical cooler bag with cold packs, keep it in the cabin (not the hold, where it could freeze), carry a doctor's letter, aim for ~2–8°C, and check your product's leaflet for room-temperature tolerance." },
        { q: "Will a hot-humid or cold-dry destination make it worse?",
          a: "Either can trigger a flare — heat and sweat irritate, cold/dry/air-conditioned air draws out moisture. Anticipate it: moisturize more, wear light breathable cotton, stay cool and hydrated, and pack your flare treatment." }
      ],
      flags: [
        "Signs of infected eczema (rapidly worsening redness, weeping, yellow crusts, pain, fever, or fluid-filled blisters) — seek care before or during travel.",
        "Widespread painful blistering with feeling unwell can indicate eczema herpeticum — a medical emergency."
      ],
      guide: {
        text: "Advice reflects patient guidance from the National Eczema Association and National Eczema Society plus NHS self-care recommendations on emollients, sun protection, and carrying labelled medication when traveling.",
        sources: [
          { title: "How to Travel Without Triggering an Eczema Flare", org: "National Eczema Association", url: "https://nationaleczema.org/blog/travel-with-eczema/" },
          { title: "Sun and eczema", org: "National Eczema Society (UK)", url: "https://www.eczema.org.uk/support/sun-and-eczema" },
          { title: "Atopic eczema — Treatment", org: "NHS", url: "https://www.nhs.uk/conditions/atopic-eczema/treatment/" }
        ]
      },
      story: { name: "Ana", meta: "illustrative", text: "My first trip carrying a biologic terrified me — a cooler bag and a doctor's letter got me through customs easily. For the cold, dry destination I packed three tubes of moisturizer, and I used every bit. Best trip ever." },
      next: ["daily", "seasonal", "itch", "biologics"]
    },

    /* ---------------------------------------------------- seasonal */
    {
      id: "seasonal", ic: "🍂", group: "daily",
      title: "My eczema flares with the weather / seasons",
      sub: "Dry cold winters or sweaty humid summers set it off.",
      keywords: ["season", "weather", "winter", "summer", "dry", "cold", "heat", "sweat", "humidity"],
      intro:
        "Season changes are among the most common flare triggers: cold, dry winter air and indoor heating strip water from the skin barrier, while summer heat and trapped sweat irritate it. Rather than waiting for the flare, get ahead of it — adjust your routine before the season that usually affects you.",
      steps: [
        "<b>Moisturize more before and during the tough season.</b> Don't wait for cracking; step up frequency and richness.",
        "<b>Switch emollient richness by season.</b> Richer, greasier ointments in cold dry weather; lighter creams or humectant moisturizers in warmer months.",
        "<b>In summer, manage heat and sweat.</b> Stay cool, wear light breathable cotton layers, rinse and re-moisturize after sweating, and change out of sweaty clothes promptly.",
        "<b>Control your indoor environment.</b> Comfortable temperature (~18°C), avoid overheating, air rooms regularly (poorly ventilated warm rooms grow dust mites and mould).",
        "<b>Be proactive.</b> Keep up daily emollients even when clear, and have your flare treatment ready before your usual bad season; protect exposed skin (face, hands, lips) with emollient in wind and sunscreen in summer."
      ],
      faq: [
        { q: "Why does my eczema get worse every winter?",
          a: "Cold outdoor air and dry, heated indoor air both have low humidity, pulling moisture from the skin and weakening its barrier. Moisturize more often and use a richer ointment through winter." },
        { q: "Should I use a different moisturizer in summer vs winter?",
          a: "Often yes — a thicker, greasier ointment in cold dry months and a lighter cream in hot humid weather. Keep moisturizing all year; just adjust the richness." },
        { q: "Does summer sweat trigger flares — what helps?",
          a: "Sweat can irritate eczema-prone skin. Stay cool, wear loose breathable cotton, take heat breaks, rinse off sweat and re-apply emollient, and change out of damp clothing quickly." }
      ],
      flags: [
        "A seasonal flare that spreads, weeps, crusts yellow, becomes painful, or comes with fever may be infected — get it assessed."
      ],
      guide: {
        text: "Advice reflects National Eczema Society and American Academy of Dermatology patient guidance that low humidity/cold and heat/sweat are common triggers, and DermNet recommendations to moisturize liberally and continuously while avoiding humidity and temperature extremes.",
        sources: [
          { title: "Weather and eczema", org: "National Eczema Society (UK)", url: "https://www.eczema.org.uk/information-and-advice/triggers-for-eczema/weather-and-eczema/" },
          { title: "Atopic dermatitis: Tips for managing", org: "American Academy of Dermatology", url: "https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis/atopic-dermatitis-coping" },
          { title: "Treatment of atopic dermatitis", org: "DermNet", url: "https://dermnetnz.org/topics/treatment-of-atopic-dermatitis" }
        ]
      },
      story: { name: "Ken", meta: "illustrative", text: "Every autumn I used to flare badly. Since I learned to switch to a richer moisturizer before it cracks and to humidify the bedroom, the last two autumns have passed quietly — even my doctor noticed the difference." },
      next: ["itch", "steroid", "travel", "daily"]
    },

    /* ---------------------------------------------------- daily */
    {
      id: "daily", ic: "👕", group: "daily",
      title: "How should I set up daily life?",
      sub: "Clothing, bathing, diet, skincare, sun — everyday choices.",
      keywords: ["daily", "clothing", "clothes", "bathing", "diet", "food", "skincare", "cosmetics", "sunscreen", "routine", "life"],
      intro:
        "Controlling eczema is half medication, half daily habits. Many people assume they must 'give up' lots of things — but it really comes down to a few habits that genuinely help: gentle cleansing, smart clothing, generous moisturizing, and avoiding your personal triggers. Get these right and flares drop noticeably.",
      steps: [
        "<b>Moisturize daily — at least twice, and whenever skin feels dry.</b> Fragrance-free creams or ointments (not thin lotions); dispense with a pump or spoon rather than fingers in the pot.",
        "<b>Bathe short and 'soak and seal'.</b> 5–10 min lukewarm (never hot), pat dry, moisturize immediately on still-damp skin; use an emollient soap substitute instead of ordinary soap.",
        "<b>Wear soft, loose 100% cotton.</b> Avoid wool and tight synthetics next to skin, remove scratchy tags, wash new clothes first, and use fragrance-free, dye-free detergent.",
        "<b>Choose fragrance-free, low-irritant skincare and cosmetics.</b> 'Unscented' can still contain masking fragrance; patch-test a new product for several days first.",
        "<b>Don't do broad food-elimination diets to treat eczema unless a doctor advises.</b> They rarely help and can be harmful. Also reduce home allergens (dust mites) with regular cleaning and washable cotton bedding, and use SPF30+ for sun."
      ],
      faq: [
        { q: "When exactly should I moisturize after a bath?",
          a: "Within a few minutes, while skin is still slightly damp. Pat (don't rub) dry, then seal in the water with a fragrance-free cream or ointment — 'soak and seal' is one of the most important daily steps." },
        { q: "Should I cut out dairy or eggs to control eczema?",
          a: "No, not on your own. Most eczema isn't caused by food, and broad elimination diets aren't recommended — they seldom help and can cause nutritional harm and even trigger new allergies. Only restrict foods if a doctor/allergist directs you after assessment." },
        { q: "What clothing and detergent are best?",
          a: "Soft, loose 100% cotton; avoid wool and tight synthetics against the skin, remove irritating tags. Wash clothes (including new ones) in fragrance-free, dye-free detergent and skip scented softeners." }
      ],
      flags: [
        "Eczema that becomes increasingly red, swollen, weepy, crusted, painful, or comes with fever may be infected — needs medical care.",
        "Sudden widespread painful blisters or clustered sores can signal eczema herpeticum — urgent attention.",
        "A history of immediate food reactions (hives, swelling, wheeze, vomiting) should be assessed by a doctor/allergist rather than managed by self-directed dieting."
      ],
      guide: {
        text: "Advice reflects American Academy of Dermatology and NHS self-care recommendations on moisturizing, soak-and-seal bathing, fragrance-free products, and cotton clothing, plus AAAAI/ACAAI and NHS guidance that broad empiric food-elimination diets are not recommended for atopic dermatitis.",
        sources: [
          { title: "Atopic dermatitis: Self-care", org: "American Academy of Dermatology", url: "https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis/self-care" },
          { title: "Atopic dermatitis: Tips for managing", org: "American Academy of Dermatology", url: "https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis/atopic-dermatitis-coping" },
          { title: "Atopic eczema — Treatment", org: "NHS", url: "https://www.nhs.uk/conditions/atopic-eczema/treatment/" }
        ]
      },
      story: { name: "Ruth", meta: "illustrative", text: "I assumed I'd have to live like a monk. My doctor said it's really just a few things: cotton clothes, moisturize right after showering, don't randomly cut foods. I swapped to fragrance-free products and my skin got so much steadier — life isn't on hold at all." },
      next: ["seasonal", "stress", "travel", "itch"]
    }
  ]
};
