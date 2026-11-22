/* =====================================================================
   فایل معلومات شفاخانه رهنورد — فقط همین فایل را ادیت کنید
   دری = fa ، پښتو = ps ، English = en
   S("دری","پښتو","English")  ← هر متن در سه زبان
   S("دری","پښتو","English","نام-عکس.jpg")  ← با عکس: با کلیک روی خدمت، عکس نمایش داده می‌شود
   (عکس‌ها را در همین ریپازیتوری GitHub آپلود کنید؛ نام عکس باید دقیقاً مثل نام فایل باشد)
   برای عکس بالای بخش: در خود بخش بعد از icon یک سطر  img: "نام-عکس.jpg",  اضافه کنید
   برای اضافه کردن خدمت: یک سطر S(...) در بخش services اضافه کنید
   برای حذف خدمت: همان سطر را پاک کنید (کامای آخر سطر را فراموش نکنید)
   ===================================================================== */

const S = (fa, ps, en, img) => ({ fa, ps, en, img });

window.APP_DATA = {

  /* ---------- معلومات عمومی ---------- */
  hospital: {
    name: S("شفاخانه بین المللی رهنورد", "د رهنورد نړیوال روغتون", "Rahnaward International Hospital"),
    tagline: S("تشخیص دقیق‌تر و تداوی بهتر", "دقیق تشخیص او غوره درملنه", "Precise diagnosis, better treatment"),
    phone: "+93780797979",          // برای زنگ زدن (بدون فاصله)
    phoneShow: "+93 (0) 780 797 979", // برای نمایش
    whatsapp: "93780797979",        // واتساپ (بدون +)
    facebook: "https://www.facebook.com/share/1CNiV2QQB9/",
    address: S("", "", "")          // آدرس را اینجا بنویسید؛ اگر خالی باشد نمایش داده نمی‌شود
  },

  /* ---------- متن‌های برنامه ---------- */
  ui: {
    hours: S("خدمات ۲۴ ساعته", "۲۴ ساعته خدمتونه", "24-hour service"),
    ambulance: S("آمبولانس رایگان", "وړیا امبولانس", "Free ambulance"),
    call: S("زنگ بزنید", "زنګ ووهئ", "Call"),
    search: S("جستجوی بخش یا خدمت…", "د څانګې یا خدمت لټون…", "Search a department or service…"),
    departments: S("بخش‌های شفاخانه", "د روغتون څانګې", "Our departments"),
    diagnostics: S("لابراتوار و تشخیصیه", "لابراتوار او تشخیصیه", "Laboratory & diagnostics"),
    services: S("خدمات این بخش", "د دې څانګې خدمتونه", "Services in this department"),
    tests: S("معاینات موجود", "شته معاینات", "Available tests"),
    contact: S("تماس با ما", "له موږ سره اړیکه", "Contact us"),
    whatsapp: S("واتساپ", "واټساپ", "WhatsApp"),
    facebook: S("فیسبوک", "فیسبوک", "Facebook"),
    close: S("بستن", "تړل", "Close"),
    none: S("چیزی پیدا نشد", "هیڅ نه ولیدل شول", "Nothing found"),
    note: S("برای وقت‌گیری و معلومات بیشتر با ما تماس بگیرید.", "د وخت اخیستلو او نورو معلوماتو لپاره موږ سره اړیکه ونیسئ.", "Call us to book an appointment or for more information."),
    imgNote: S("تصویر تزئینی است و برای نمایش خدمات می‌باشد؛ عکس واقعی بخش نیست.", "دا انځور سینګاریز دی او یوازې د خدمتونو د ښودلو لپاره دی؛ د څانګې ریښتینی عکس نه دی.", "Decorative illustration to show the service; not a real photo of the department."),
    developer: S("طراح و توسعه‌دهنده: لطیف امانی — متخصص بازاریابی شفاخانه رهنورد", "جوړونکی: لطیف امانی — د رهنورد روغتون د بازارموندنې متخصص", "Developer: Latif Amani — Marketing Specialist, Rahnaward Hospital")
  },

  /* ---------- بخش‌ها ---------- */
  departments: [
    {
      id: "emergency", icon: "🚑",
      name: S("بخش عاجل (اورژانس)", "بیړنی (عاجل) څانګه", "Emergency"),
      services: [
        S("پذیرش و کمک‌های اولیه ۲۴ ساعته", "۲۴ ساعته منل او لومړنۍ مرستې", "24-hour admission and first aid", "emergency-01.jpg"),
        S("آمبولانس رایگان", "وړیا امبولانس", "Free ambulance", "emergency-02.jpg")
      ]
    },
    {
      id: "ent", icon: "👂", img: "ent.jpg",
      name: S("گوش، گلو و بینی", "غوږ، ستونی او پوزه", "Ear, Nose & Throat (ENT)"),
      services: [
        S("تداوی و عملیات جاغور", "د جاغور درملنه او عملیات", "Tonsil treatment and surgery", "ent-01.jpg"),
        S("تداوی حساسیت بینی", "د پوزې حساسیت درملنه", "Nasal allergy treatment", "ent-02.jpg"),
        S("تداوی سینوزیت", "د سینوزایټس درملنه", "Sinusitis treatment", "ent-03.jpg"),
        S("تداوی کری و ناشنوایی", "د کاڼه والي او نه اورېدلو درملنه", "Treatment of hearing loss", "ent-04.jpg"),
        S("تداوی التهابات گوش و گلو", "د غوږ او ستونې د التهاب درملنه", "Ear and throat infection treatment", "ent-05.jpg"),
        S("عملیات پولیپ بینی", "د پوزې پولیپ عملیات", "Nasal polyp surgery", "ent-06.jpg"),
        S("عملیات گوشت اضافه گلو", "د ستونې د اضافي غوښې عملیات", "Adenoid surgery", "ent-07.jpg"),
        S("عملیات کجی پرده و استخوان بینی", "د پوزې د پردې او هډوکي کوږوالي عملیات", "Deviated septum surgery", "ent-08.jpg"),
        S("عملیات کسر بینی", "د پوزې د مات والي عملیات", "Nasal fracture surgery", "ent-09.jpg"),
        S("جراحی زیبایی بینی (ریپلاستی)", "د پوزې ښکلا جراحي (رینوپلاستي)", "Cosmetic nose surgery (rhinoplasty)", "ent-10.jpg")
      ]
    },
    {
      id: "neurosurgery", icon: "🧠", img: "surgery.jpg",
      name: S("جراحی مغز و اعصاب", "د مغزو او اعصابو جراحي", "Neurosurgery"),
      services: [
        S("عملیات تومورهای مغزی", "د مغزو د تومورونو عملیات", "Brain tumor surgery", "neurosurgery-01.jpg"),
        S("تداوی خونریزی و سکته‌های مغزی", "د مغزو د وینې بهېدو او سکتې درملنه", "Brain hemorrhage and stroke care", "neurosurgery-02.jpg"),
        S("تداوی ترضیضات دماغی", "د سر او مغزو د ټکر درملنه", "Head injury treatment", "neurosurgery-03.jpg"),
        S("تداوی کسرهای جمجمه", "د کوپړۍ د مات والي درملنه", "Skull fracture treatment", "neurosurgery-04.jpg"),
        S("جراحی دیسک کمر و گردن", "د ملا او غاړې د ډیسک جراحي", "Lumbar and cervical disc surgery", "neurosurgery-05.jpg"),
        S("عملیات ساده و مغلق ستون فقرات", "د ملا تیر ساده او پیچلي عملیات", "Simple and complex spine surgery", "neurosurgery-06.jpg"),
        S("تداوی اعصاب محیطی", "د محیطي اعصابو درملنه", "Peripheral nerve treatment", "neurosurgery-07.jpg"),
        S("تداوی درد کمر، گردن و سردردی‌ها", "د ملا، غاړې درد او سر دردونو درملنه", "Back, neck pain and headache treatment", "neurosurgery-08.jpg")
      ]
    },
    {
      id: "gyn", icon: "🤰", img: "gyn.jpg",
      name: S("نسائی و ولادی", "ښځینه او ولادي", "Gynecology & Obstetrics"),
      services: [
        S("تداوی عقامت و بی‌اولادی (مرد و زن)", "د شندتوب او بې اولادۍ درملنه (نر او ښځه)", "Infertility treatment (men and women)", "gyn-01.jpg"),
        S("مراقبت‌های قبل و بعد از ولادت", "د زېږون څخه مخکې او وروسته پاملرنه", "Pre- and post-natal care", "gyn-02.jpg"),
        S("ولادت‌های نارمل زیر نظر متخصص", "د متخصص تر څارنې لاندې نورمال زېږون", "Normal deliveries under specialist care", "gyn-03.jpg"),
        S("کورتاژ", "کورتاژ", "Curettage", "gyn-04.jpg"),
        S("عملیات‌های جراحی نسائی (هسترکتومی، تیوب لایگیشن، سیستوسل، رکتوسل)", "د ښځینه جراحي عملیات (هسترکتومي، ټیوب لایګېشن، سیستوسیل، رکتوسیل)", "Gynecologic surgeries (hysterectomy, tubal ligation, cystocele, rectocele)", "gyn-05.jpg"),
        S("H.S.G", "H.S.G", "H.S.G", "gyn-06.jpg"),
        S("تنظیم خانواده (آی‌یودی، تابلیت، امپلانت، تزریق)", "کورنۍ پلان (IUD، ټابلیټ، امپلانټ، ستنه)", "Family planning (IUD, tablet, implant, injection)", "gyn-07.jpg")
      ]
    },
    {
      id: "internal", icon: "🩺",
      name: S("داخله عمومی", "عمومي داخله", "Internal Medicine"),
      services: [
        S("معاینه و تداوی امراض داخلی", "د داخلي ناروغیو معاینه او درملنه", "Examination and treatment of internal diseases", "internal-01.jpg"),
        S("پروفایل‌های تشخیصی (کبد، کلیه، لپید، قند)", "د تشخیص پروفایلونه (ینه، پښتورګي، لپیډ، قند)", "Diagnostic profiles (liver, kidney, lipid, sugar)", "internal-02.jpg")
      ]
    },
    {
      id: "cardiology", icon: "❤️",
      name: S("داخله قلبی", "د زړه داخله", "Cardiology"),
      services: [
        S("معاینه و تداوی امراض قلبی", "د زړه ناروغیو معاینه او درملنه", "Heart disease examination and treatment", "cardiology-01.jpg"),
        S("ECG، اکو و ETT/TMT", "ECG، ایکو او ETT/TMT", "ECG, Echo and ETT/TMT", "cardiology-02.jpg"),
        S("تحلیل نشانگرهای قلبی (تروپونین، CK-MB)", "د زړه نښو ازموینه (تروپونین، CK-MB)", "Cardiac markers (Troponin, CK-MB)", "cardiology-03.jpg")
      ]
    },
    {
      id: "cardiacsurgery", icon: "🫀",
      name: S("جراحی قلب", "د زړه جراحي", "Cardiac Surgery"),
      services: [
        S("مشوره و ارزیابی جراحی قلب", "د زړه جراحي مشوره او ارزونه", "Cardiac surgery consultation", "cardiacsurgery-01.jpg"),
        S("مراقبت قبل و بعد از عملیات", "د عملیاتو مخکې او وروسته پاملرنه", "Pre- and post-operative care", "cardiacsurgery-02.jpg")
      ]
    },
    {
      id: "pediatrics", icon: "👶",
      name: S("داخله اطفال", "د ماشومانو داخله", "Pediatrics"),
      services: [
        S("معاینه و تداوی امراض اطفال", "د ماشومانو د ناروغیو معاینه او درملنه", "Child health examination and treatment", "pediatrics-01.jpg"),
        S("واکسین‌ها (هپاتیت B، انفلونزا، نموکوک، رابیس)", "واکسینونه (هپاتیت B، انفلونزا، نموکوک، رابیس)", "Vaccines (Hepatitis B, influenza, pneumococcal, rabies)", "pediatrics-02.jpg")
      ]
    },
    {
      id: "surgery", icon: "🔪", img: "surgery.jpg",
      name: S("جراحی عمومی", "عمومي جراحي", "General Surgery"),
      services: [
        S("عملیات‌های جراحی عمومی", "عمومي جراحي عملیات", "General surgical operations", "surgery-01.jpg"),
        S("مشوره قبل و بعد از عملیات", "د عملیاتو مخکې او وروسته مشوره", "Pre- and post-operative consultation", "surgery-02.jpg")
      ]
    },
    {
      id: "ortho", icon: "🦴",
      name: S("ارتوپیدی", "ارتوپیدي", "Orthopedics"),
      services: [
        S("تداوی شکستگی‌ها و مشکلات استخوان و مفصل", "د مات والي او هډوکو او مفصلونو ستونزو درملنه", "Fractures and bone and joint problems", "ortho-01.jpg"),
        S("عملیات‌های ارتوپیدی", "ارتوپیدي عملیات", "Orthopedic surgery", "ortho-02.jpg")
      ]
    },
    {
      id: "derm", icon: "✨",
      name: S("جلدی و زیبایی", "پوستکی او ښکلا", "Dermatology & Cosmetic"),
      services: [
        S("تداوی امراض جلدی", "د پوستکي ناروغیو درملنه", "Skin disease treatment", "derm-01.jpg"),
        S("تداوی حساسیت‌های پوستی", "د پوستکي د حساسیت درملنه", "Skin allergy treatment", "derm-02.jpg"),
        S("خدمات زیبایی", "د ښکلا خدمتونه", "Cosmetic services", "derm-03.jpg")
      ]
    },
    {
      id: "urology", icon: "💧",
      name: S("یورولوژی (امراض مجاری ادرار)", "یورولوژي (د متیازو لارو ناروغۍ)", "Urology"),
      services: [
        S("تداوی سنگ کلیه و مثانه", "د پښتورګو او مثانې د ډبرو درملنه", "Kidney and bladder stone treatment", "urology-01.jpg"),
        S("تداوی التهاب مجاری ادرار", "د متیازو لارو د التهاب درملنه", "Urinary tract infection treatment", "urology-02.jpg"),
        S("تداوی مشکلات پروستات", "د پروستات د ستونزو درملنه", "Prostate treatment", "urology-03.jpg")
      ]
    },
    {
      id: "nephrology", icon: "🫘",
      name: S("امراض گرده", "د پښتورګو ناروغۍ", "Nephrology"),
      services: [
        S("معاینه و تداوی امراض کلیه", "د پښتورګو د ناروغیو معاینه او درملنه", "Kidney disease examination and treatment", "nephrology-01.jpg"),
        S("آزمایش وظیفه کلیه", "د پښتورګو د دندې ازموینه", "Renal function tests", "nephrology-02.jpg")
      ]
    },
    {
      id: "gastro", icon: "🍽️",
      name: S("امراض معده و روده", "د معدې او کولمو ناروغۍ", "Gastroenterology"),
      services: [
        S("اندوسکوپی (EGD)", "اندوسکوپي (EGD)", "Upper endoscopy (EGD)", "gastro-01.jpg"),
        S("کولونوسکوپی و سیگموئیدوسکوپی", "کولونوسکوپي او سیګموئیډوسکوپي", "Colonoscopy and sigmoidoscopy", "gastro-02.jpg"),
        S("بایوپسی و آزمایش H. pylori", "بایوپسي او د H. pylori ازموینه", "H. pylori biopsy and tests", "gastro-03.jpg")
      ]
    },
    {
      id: "endocrine", icon: "⚖️",
      name: S("امراض غدد و هورمون", "د غدو او هورمونونو ناروغۍ", "Endocrinology"),
      services: [
        S("تداوی دیابت (شکر)", "د شکرې ناروغۍ درملنه", "Diabetes treatment", "endocrine-01.jpg"),
        S("تداوی امراض تایرایید", "د تایرایډ ناروغیو درملنه", "Thyroid disease treatment", "endocrine-02.jpg"),
        S("آزمایش‌های هورمونی", "د هورمونونو ازموینې", "Hormonal assays", "endocrine-03.jpg")
      ]
    },
    {
      id: "pulmonology", icon: "🫁",
      name: S("امراض شش و تنفس", "د سږو او تنفس ناروغۍ", "Pulmonology"),
      services: [
        S("تداوی آسم و التهابات ریوی", "د استما او سږو د التهاب درملنه", "Asthma and lung infection treatment", "pulmonology-01.jpg"),
        S("تست اسپیرومتری", "د سپیرومیټري ازموینه", "Spirometry test", "pulmonology-02.jpg")
      ]
    },
    {
      id: "oncology", icon: "🎗️",
      name: S("سرطان‌شناسی", "سرطان پېژندنه (انکالوجي)", "Oncology"),
      services: [
        S("مشوره و تشخیص سرطان", "د سرطان مشوره او تشخیص", "Cancer consultation and diagnosis", "oncology-01.jpg"),
        S("پیگیری و مراقبت بیماران", "د ناروغانو تعقیب او پاملرنه", "Patient follow-up and care", "oncology-02.jpg")
      ]
    },
    {
      id: "psychiatry", icon: "🧘",
      name: S("روان‌پزشکی", "رواني ناروغۍ (روان‌پوهنه)", "Psychiatry"),
      services: [
        S("مشوره و تداوی مشکلات روانی", "د رواني ستونزو مشوره او درملنه", "Counseling and treatment for mental health", "psychiatry-01.jpg")
      ]
    },
    {
      id: "dental", icon: "🦷",
      name: S("دندان‌پزشکی", "د غاښونو درملنه", "Dentistry"),
      services: [
        S("معاینه و ترمیم دندان", "د غاښ معاینه او ډکول", "Dental exam and fillings", "dental-01.jpg"),
        S("تداوی ریشه دندان", "د غاښ د ریښې درملنه", "Root canal treatment", "dental-02.jpg"),
        S("کشیدن دندان", "د غاښ ایستل", "Tooth extraction", "dental-03.jpg")
      ]
    },
    {
      id: "anesthesia", icon: "😴",
      name: S("بیهوشی", "بې‌هوشي", "Anesthesia"),
      services: [
        S("بیهوشی عمومی و موضعی", "عمومي او موضعي بې‌هوشي", "General and local anesthesia", "anesthesia-01.jpg"),
        S("پایش بیمار در جریان عملیات", "د عملیاتو پر مهال د ناروغ څارنه", "Patient monitoring during surgery", "anesthesia-02.jpg")
      ]
    },
    {
      id: "physio", icon: "🏃",
      name: S("فیزیوتراپی", "فزیوتراپي", "Physiotherapy"),
      services: [
        S("تداوی درد مفاصل و عضلات", "د مفصلونو او عضلاتو د درد درملنه", "Joint and muscle pain therapy", "physio-01.jpg"),
        S("توانبخشی بعد از جراحی و حادثه", "له جراحي او پیښې وروسته بیا رغونه", "Rehabilitation after surgery or injury", "physio-02.jpg")
      ]
    }
  ],

  /* ---------- لابراتوار و تشخیصیه ----------
     نام معاینات به انگلیسی (معمول در همه زبان‌ها) نوشته می‌شود */
  diagnostics: [
    { id: "lab", icon: "🔬", img: "lab.jpg",
      name: S("لابراتوار کاملاً مجهز", "بشپړ سمبال لابراتوار", "Fully equipped laboratory"),
      groups: [
        { title: S("خون‌شناسی", "د وینې پېژندنه", "Hematology"),
          items: ["CBC", "ESR", "Blood group", "HbA1c", "Bleeding time", "Clotting time", "PT / INR", "APTT", "D-Dimer"] },
        { title: S("قند و چربی", "شکر او غوړ", "Sugar & lipid"),
          items: ["FBS", "RBS", "PP", "GTT", "Cholesterol", "Triglycerides", "HDL", "LDL", "VLDL"] },
        { title: S("کلیه و کبد", "پښتورګي او ینه", "Kidney & liver"),
          items: ["Urea", "BUN", "Creatinine", "Calcium", "Phosphorus", "Magnesium", "Bilirubin", "ALT (SGPT)", "AST (SGOT)", "ALP", "Albumin", "GGT", "Amylase", "Lipase"] },
        { title: S("هورمون‌ها", "هورمونونه", "Hormones"),
          items: ["TFT", "T3", "T4", "TSH", "Free T3", "Free T4", "Vitamin D3", "LH", "FSH", "Prolactin", "Progesterone", "Testosterone", "Total IgE", "Beta HCG"] },
        { title: S("سرولوژی", "سیرولوژي", "Serology"),
          items: ["HBsAg", "HBsAb", "HAV", "HCV Ab", "HIV Ab", "VDRL", "H. pylori", "Pregnancy test", "TB", "Typhoid", "PSA", "Malaria", "TORCH", "Troponin I / T", "Brucellosis", "Widal", "ASO", "CRP", "RF", "ANA"] },
        { title: S("بیولوژی مالیکولی (PCR)", "مالیکولي بیولوژي (PCR)", "Molecular biology (PCR)"),
          items: ["Hepatitis B DNA", "Hepatitis C RNA", "COVID-19 PCR"] },
        { title: S("نشانگرهای قلبی", "د زړه نښې", "Cardiac markers"),
          items: ["CPK", "CK-MB", "LDH", "SGOT"] },
        { title: S("ادرار، مدفوع و مایع منی", "متيازې، مدفوع او مني", "Urine, stool & semen"),
          items: ["Urine routine", "Urine 24h protein", "Ketone body", "Multi drug test", "Stool routine", "Stool H. pylori Ag", "Stool occult blood", "Semen analysis"] },
        { title: S("کشت و حساسیت", "کلچر او حساسیت", "Culture & sensitivity"),
          items: ["Urine culture", "Pus culture", "Vaginal swab", "Stool culture", "Blood culture"] },
        { title: S("واکسین‌ها و آلرژی", "واکسینونه او الرژي", "Vaccines & allergy"),
          items: ["HBs vaccine (adult)", "HBs vaccine (child)", "Influenza vaccine", "Pneumococcal vaccine", "Rabies vaccine", "Seasonal allergy test", "Food allergy test"] }
      ]
    },
    { id: "imaging", icon: "🩻",
      name: S("رادیولوژی و تصویربرداری", "رادیولوژي او انځورګري", "Radiology & imaging"),
      groups: [
        { title: S("سونوگرافی", "سونوګرافي", "Ultrasound"),
          items: ["Abdomen", "Pelvis", "Transvaginal", "Testicle", "Chest", "Breast", "Thyroid"] },
        { title: S("ایکس‌ری", "ایکسری", "X-ray"),
          items: ["Skull", "Cervical", "Chest", "Abdomen", "Pelvis", "Hip joint", "Thigh", "Leg", "Knee", "Ankle", "Foot", "Hand / Fingers", "Wrist", "Forearm", "Shoulder", "Humerus", "L.S. spine", "D.L. spine", "KUB", "IVP", "Barium swallow", "PNS", "Calcaneus"] },
        { title: S("سی‌تی اسکن و ام‌آر‌آی", "سي‌ټي سکن او ام‌ار‌آی", "CT scan & MRI"),
          items: ["Brain", "Abdomen", "Cervical spine", "Lumbar spine", "Chest", "Knee"] },
        { title: S("اعصاب و قلب", "اعصاب او زړه", "Neurology & cardiology"),
          items: ["EEG", "ECG", "Echo", "ETT / TMT"] },
        { title: S("اندوسکوپی", "اندوسکوپي", "Endoscopy"),
          items: ["Upper endoscopy (EGD)", "H. pylori biopsy", "Colonoscopy", "Sigmoidoscopy"] }
      ]
    }
  ]
};
