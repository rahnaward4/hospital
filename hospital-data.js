// hospital-data.js  — fa (Dari) / ps (Pashto) / en (English)
// Each item = [fa, ps, en]. Medical wording must be reviewed by a hospital doctor before release.

window.HOSPITAL_DATA = {

  credit: {
    fa: "برنامه‌ساز: لطیف امانی - مدیر بازاریابی",
    ps: "جوړوونکی: لطیف اماني - د بازارموندنې مدیر",
    en: "Developer: Latif Amani - Marketing Manager"
  },

  services: [
    { id: "internal", title: ["داخله عمومی", "عمومي داخله", "General Internal Medicine"], items: [
      ["فشار بلند خون", "د وینې لوړ فشار", "High blood pressure"],
      ["تکلیف معده", "د معدې ستونزې", "Stomach problems"],
      ["دیابیت یا مرض شکر", "ديابېټ یا د شکرې ناروغي", "Diabetes"],
      ["تکلیف گرده", "د پښتورګو ستونزې", "Kidney problems"],
      ["تکلیف جگر", "د ینې ستونزې", "Liver problems"],
      ["چربی خون", "د وینې غوړ", "High cholesterol"],
      ["تب و تیفوئید", "تبه او ټايفايډ", "Fever and typhoid"],
      ["کم‌خونی", "کمخوني", "Anemia"],
      ["سردرد و میگرن", "سرخوږی او مايګرېن", "Headache and migraine"],
      ["مشکلات تنفسی و آسم", "د تنفس ستونزې او ربړ", "Breathing problems and asthma"],
      ["درد مفاصل", "د مفصلونو درد", "Joint pain"],
      ["تکلیف تایرویید", "د تايرايډ ستونزې", "Thyroid problems"]
    ]},
    { id: "pediatrics", title: ["اطفال", "ماشومان", "Pediatrics"], items: [
      ["معاینه نوزاد", "د نوي زېږېدلي ماشوم معاینه", "Newborn checkup"],
      ["واکسین کودکان", "د ماشومانو واکسین", "Child vaccination"],
      ["اسهال و کم‌آبی", "اسهال او د اوبو کموالی", "Diarrhea and dehydration"],
      ["سرفه و سینه‌بغل", "ټوخی او سینه بغل", "Cough and pneumonia"],
      ["تب کودکان", "د ماشومانو تبه", "Fever in children"],
      ["تغذیه و رشد", "تغذیه او وده", "Nutrition and growth"],
      ["کم‌وزنی و سوءتغذی", "کم وزن او بدخوراکي", "Underweight and malnutrition"],
      ["زردی نوزاد", "د نوي زېږېدلي ماشوم ژېړوالی", "Newborn jaundice"],
      ["حساسیت پوستی", "د پوستکي حساسیت", "Skin allergies"],
      ["کرم‌های شکمی", "د خېټې چنجي", "Intestinal worms"],
      ["مشکلات گوش کودکان", "د ماشومانو د غوږ ستونزې", "Ear problems in children"]
    ]},
    { id: "gyn", title: ["زنان و ولادی", "ښځینه او زېږون", "Gynecology & Obstetrics"], items: [
      ["مراقبت دوران حاملگی", "د حمل مراقبت", "Pregnancy care"],
      ["ولادت نورمال", "نورمال زېږون", "Normal delivery"],
      ["عملیات سزارین", "د سيزرين عملیات", "Cesarean section"],
      ["تنظیم خانواده", "د کورنۍ پلان", "Family planning"],
      ["بی‌نظمی عادت ماهوار", "د میاشتنۍ عادت بې نظمي", "Irregular periods"],
      ["عفونت‌های زنانه", "ښځینه عفونتونه", "Female infections"],
      ["مشکل بچه‌دار نشدن", "د اولاد نه کېدو ستونزه", "Infertility"],
      ["سونوگرافی حاملگی", "د حمل سونوګرافي", "Pregnancy ultrasound"],
      ["کم‌خونی در حاملگی", "په حمل کې کمخوني", "Anemia in pregnancy"],
      ["مراقبت بعد از ولادت", "د زېږون وروسته مراقبت", "Postnatal care"],
      ["درد زیر شکم", "د ښکتنۍ خېټې درد", "Lower abdominal pain"]
    ]},
    { id: "surgery", title: ["جراحی عمومی", "عمومي جراحي", "General Surgery"], items: [
      ["عملیات آپاندیس", "د اپنډکس عملیات", "Appendix surgery"],
      ["عملیات فتق", "د ایرې (هرنیا) عملیات", "Hernia repair"],
      ["عملیات کیسه صفرا", "د صفرا کڅوړې عملیات", "Gallbladder surgery"],
      ["عملیات سنگ گرده", "د پښتورګو د تيږو عملیات", "Kidney stone surgery"],
      ["بواسیر", "بواسير", "Hemorrhoids"],
      ["پاک‌کاری زخم و بخیه", "د ټپ پاکول او ګنډل", "Wound care and stitches"],
      ["دمل و آبسه", "غوټه او چرک", "Abscess"],
      ["عملیات غدود و گوشت‌زیاده", "د غدودو او اضافي غوښې عملیات", "Lump and gland removal"],
      ["ختنه", "ختنه", "Circumcision"],
      ["درمان سوختگی", "د سوځېدنې درملنه", "Burn treatment"]
    ]},
    { id: "ent", title: ["گوش، گلو و بینی", "غوږ، ستوني او پوزه", "ENT"], items: [
      ["عفونت گوش", "د غوږ عفونت", "Ear infection"],
      ["کم‌شنوایی", "کمه اورېدنه", "Hearing loss"],
      ["التهاب حلق و لوزه", "د ستوني او ټانسل پړسوب", "Sore throat and tonsillitis"],
      ["سینوزیت", "د پوزې سينوس", "Sinusitis"],
      ["خونریزی بینی", "د پوزې وینه بهېدل", "Nosebleed"],
      ["حساسیت بینی", "د پوزې حساسیت", "Nasal allergy"],
      ["خرخر شب", "د شپې خرخر", "Snoring"],
      ["جسم خارجی در گوش و بینی", "په غوږ او پوزه کې بهرنی جسم", "Foreign body in ear or nose"],
      ["شستشوی گوش", "د غوږ مينځل", "Ear wash"],
      ["سرگیجه", "چکر", "Dizziness"]
    ]},
    { id: "dental", title: ["دندان‌پزشکی", "د غاښونو درملنه", "Dentistry"], items: [
      ["معاینه دندان", "د غاښونو معاینه", "Dental checkup"],
      ["پرکاری دندان", "د غاښ ډکول", "Filling"],
      ["کشیدن دندان", "د غاښ ایستل", "Extraction"],
      ["عصب‌کشی", "د غاښ عصب درملنه", "Root canal"],
      ["جرم‌گیری", "د غاښونو پاکول", "Scaling"],
      ["درد و ورم لثه", "د مسو درد او پړسوب", "Gum pain and swelling"],
      ["دندان مصنوعی", "مصنوعي غاښونه", "Dentures"],
      ["ارتودنسی", "د غاښونو سمول", "Braces"],
      ["دندان کودکان", "د ماشومانو غاښونه", "Children's dentistry"],
      ["سفید کردن دندان", "د غاښونو سپينول", "Teeth whitening"]
    ]}
  ],

  // [abbr, fa, ps, en full name]
  lab: [
    ["FBS", "قند خون ناشتا", "په ناشتا د وینې شکر", "Fasting Blood Sugar"],
    ["RBS", "قند خون تصادفی", "په هر وخت د وینې شکر", "Random Blood Sugar"],
    ["HbA1c", "شکر سه ماهه", "د درې میاشتو شکر", "Glycated Hemoglobin"],
    ["CBC", "شمارش کامل خون", "د وینې بشپړ شمېرنه", "Complete Blood Count"],
    ["Hb", "هموگلوبین", "هيموګلوبين", "Hemoglobin"],
    ["ESR", "سرعت رسوب خون", "د وینې د رسوب سرعت", "Erythrocyte Sedimentation Rate"],
    ["CRP", "پروتئین التهابی", "د پړسوب پروتین", "C-Reactive Protein"],
    ["LFT", "وظیفه جگر", "د ینې دندې ازموینه", "Liver Function Test"],
    ["RFT", "وظیفه گرده", "د پښتورګو دندې ازموینه", "Renal Function Test"],
    ["Creat", "کریاتینین", "کریاټينين", "Creatinine"],
    ["BUN", "نایتروجن اوره خون", "د وینې یوریا", "Blood Urea Nitrogen"],
    ["LP", "چربی‌های خون", "د وینې غوړ", "Lipid Profile"],
    ["TG", "تری‌گلیسرید", "ټرايګلسرايډ", "Triglycerides"],
    ["UA", "اسید یوریک", "یوریک اسيډ", "Uric Acid"],
    ["TSH", "هورمون تایرویید", "د تايرايډ هورمون", "Thyroid Stimulating Hormone"],
    ["Urine R/E", "معاینه ادرار", "د متیازو معاینه", "Urine Routine & Examination"],
    ["Stool R/E", "معاینه مواد غایط", "د مدفوعاتو معاینه", "Stool Routine & Examination"],
    ["Widal", "تست تیفوئید", "د ټايفايډ ازموینه", "Widal Test (Typhoid)"],
    ["MP", "ملاریا", "ملاريا", "Malaria Parasite"],
    ["HBsAg", "هپاتیت B", "د ینې التهاب B", "Hepatitis B Surface Antigen"],
    ["HCV", "هپاتیت C", "د ینې التهاب C", "Hepatitis C Antibody"],
    ["HIV", "ایدز", "ايډز", "Human Immunodeficiency Virus"],
    ["BG", "گروپ خون", "د وینې ګروپ", "Blood Group & Rh"],
    ["H. pylori", "میکروب معده", "د معدې مایکروب", "Helicobacter pylori"],
    ["PT/INR", "انعقاد خون", "د وینې کنګل کېدل", "Prothrombin Time / INR"],
    ["Vit D", "ویتامین دی", "ويټامين ډي", "Vitamin D"],
    ["Ferritin", "ذخیره آهن", "د اوسپنې زېرمه", "Ferritin (Iron Stores)"],
    ["Ca", "کلسیم", "کلسیم", "Calcium"],
    ["Na/K", "الکترولیت‌ها", "الکټرولايټونه", "Sodium / Potassium"],
    ["PSA", "تست پروستات", "د پروستات ازموینه", "Prostate Specific Antigen"]
  ],

  radiology: [
    ["X-Ray", "اکس‌ری سینه", "د سينې ایکس‌رې", "Chest X-Ray"],
    ["X-Ray", "اکس‌ری استخوان", "د هډوکو ایکس‌رې", "Bone X-Ray"],
    ["US", "سونوگرافی شکم", "د خېټې سونوګرافي", "Abdominal Ultrasound"],
    ["US-OB", "سونوگرافی حاملگی", "د حمل سونوګرافي", "Obstetric Ultrasound"],
    ["KUB", "گرده و مثانه", "پښتورګي او متیازو کڅوړه", "Kidney, Ureter, Bladder"],
    ["Doppler", "داپلر رگ‌ها", "د رګونو ډاپلر", "Vascular Doppler"],
    ["ECG", "نوار قلب", "د زړه نوار", "Electrocardiogram"],
    ["Echo", "اکو قلب", "د زړه اېکو", "Echocardiography"],
    ["CT", "سی‌تی اسکن", "سي‌ټي سکن", "Computed Tomography"],
    ["MRI", "ام‌آر‌آی", "ایم‌آر‌آی", "Magnetic Resonance Imaging"],
    ["OPG", "عکس دندان", "د غاښونو انځور", "Orthopantomogram (Dental X-Ray)"],
    ["Mammo", "ماموگرافی سینه", "د تی ماموګرافي", "Mammography"],
    ["DEXA", "تراکم استخوان", "د هډوکو کثافت", "Bone Density Scan"]
  ]
};
