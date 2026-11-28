/* =====================================================================
   فایل اصلی معلومات شفاخانه رهنورد — بخش‌ها، خدمات، لابراتوار
   دری = fa ، پښتو = ps ، English = en
   هر خدمت یک سطر است:  ["دری","پښتو","English"],
   برای اضافه کردن: یک سطر مثل بالا اضافه کنید. برای حذف: همان سطر را پاک کنید.
   (محتوای صحی: امراض، پرهیز غذایی، سلامت جنسی در فایل‌های health-*.js است)
   ===================================================================== */

const S = (fa, ps, en) => ({ fa, ps, en });

/* نام فایل‌های صدا: section-01.mp3 … section-10.mp3
   اگر برای هر زبان فایل جدا ضبط کردید، در بخش profile همان بخش بنویسید:
   audio: { fa: "section-01-dari.mp3", ps: "section-01-pashto.mp3", en: "section-01-english.mp3" } */
const AUD = (n) => { const f = "section-" + String(n).padStart(2, "0") + ".mp3"; return { fa: f, ps: f, en: f }; };

window.APP_DATA = {

  /* پوشه فایل‌های صدا (داخل همین ریپازیتوری). اگر فایل‌ها را بدون پوشه آپلود کردید، بنویسید: audioDir: "" */
  audioDir: "audio/",

  hospital: {
    name: S("شفاخانه بین المللی رهنورد", "د رهنورد نړیوال روغتون", "Rahnaward International Hospital"),
    tagline: S("تشخیص دقیق‌تر و تداوی بهتر", "دقیق تشخیص او غوره درملنه", "Precise diagnosis, better treatment"),
    phone: "+93780797979",
    phoneShow: "+93 (0) 780 797 979",
    whatsapp: "93780797979",
    facebook: "https://www.facebook.com/share/1CNiV2QQB9/",
    shareLink: "https://t.me/Rahnaward_bot",
    address: S("شهر مزارشریف، جوار محبس کهنه، مقابل بلاک‌های رهایشی آشیانه سبز", "مزارشریف ښار، د زاړه زندان ته نږدې، د آشیانه سبز استوګنیزو بلاکونو مقابل", "Mazar-i-Sharif, near the old prison, opposite Ashiana Sabz residential blocks")
  },

  ui: {
    hours: S("خدمات ۲۴ ساعته", "۲۴ ساعته خدمتونه", "24-hour service"),
    ambulance: S("آمبولانس رایگان", "وړیا امبولانس", "Free ambulance"),
    call: S("زنگ بزنید", "زنګ ووهئ", "Call"),
    search: S("جستجو…", "لټون…", "Search…"),
    departments: S("بخش‌های شفاخانه", "د روغتون څانګې", "Our departments"),
    services: S("خدمات این بخش", "د دې څانګې خدمتونه", "Services in this department"),
    contact: S("تماس با ما", "له موږ سره اړیکه", "Contact us"),
    whatsapp: S("واتساپ", "واټساپ", "WhatsApp"),
    facebook: S("فیسبوک", "فیسبوک", "Facebook"),
    close: S("بستن", "تړل", "Close"),
    back: S("برگشت", "شاته", "Back"),
    none: S("چیزی پیدا نشد", "هیڅ نه ولیدل شول", "Nothing found"),
    note: S("برای وقت‌گیری و معلومات بیشتر با ما تماس بگیرید.", "د وخت اخیستلو او نورو معلوماتو لپاره موږ سره اړیکه ونیسئ.", "Call us to book an appointment or for more information."),
    developer: S("طراح و توسعه‌دهنده: لطیف امانی - مدیر بازاریابی", "جوړونکی: لطیف امانی - د بازارموندنې مدیر", "Developer: Latif Amani - Marketing Manager"),
    tDiseases: S("معرفی امراض", "د ناروغیو پېژندنه", "Disease guide"),
    tDiet: S("پرهیز غذایی", "د خوراکي پرهېزونه", "Diet guide"),
    tSexual: S("سلامت جنسی", "جنسي روغتیا", "Sexual health"),
    tLab: S("لابراتوار و رادیولوژی", "لابراتوار او رادیولوژي", "Lab & radiology"),
    tDanger: S("علایم خطر", "د خطر نښې", "Danger signs"),
    telegram: S("تلگرام", "تلیګرام", "Telegram"),
    shareHow: S("اپ شفاخانه را از کدام طریق برای دوستان می‌فرستید؟", "د روغتون اپ ملګرو ته په کوم ډول لېږئ؟", "How do you want to send the hospital app to your friends?"),
    dietPrefix: S("پرهیز ", "پرهېز: ", "Diet: "),
    dietAvoid: S("غذاهای ممنوع", "منع شوي خواړه", "Foods to avoid"),
    dietLimit: S("غذاهای قابل مصرف به‌اندازه (در صورت ضرورت)", "په اندازه د مصرف وړ خواړه (په اړتیا)", "Foods in moderation (when necessary)"),
    dietEat: S("غذاهای توصیه‌شده", "سپارل شوي خواړه", "Recommended foods"),
    tProfile: S("پروفایل شفاخانه", "د روغتون پروفایل", "Hospital Profile"),
    play: S("پخش صدا", "غږ واورئ", "Play"),
    stop: S("توقف", "ودروئ", "Stop"),
    playing: S("در حال پخش…", "په غږېدو کې…", "Playing…"),
    audioError: S("فایل صدا هنوز اضافه نشده یا در این دستگاه پخش نمی‌شود.", "غږیز فایل لا نه دی ایښودل شوی یا په دې وسیله نه غږېږي.", "The audio file has not been added yet or cannot be played on this device."),
    listenHint: S("برای شنیدن این بخش دکمه پخش را بزنید.", "د دې برخې اورېدو لپاره د غږولو تڼۍ ووهئ.", "Press Play to listen to this section."),
    callNow: S("زنگ بزنید", "زنګ ووهئ", "Call now"),
    address: S("آدرس", "پته", "Address"),
    phoneLbl: S("تلفون", "تلیفون", "Phone"),
    tShare: S("دعوت دوستان", "ملګرو ته ولېږئ", "Share with friends"),
    shareText: S("اپ رسمی شفاخانه بین المللی رهنورد: خدمات، رهنمای صحی و پرهیز غذایی", "د رهنورد نړیوال روغتون رسمي اپ: خدمتونه، روغتیايي لارښود او خوراکي پرهېزونه", "Rahnaward International Hospital app: services, health guide and diet advice"),
    healthNote: S("این معلومات فقط برای آگاهی عمومی است و جای معاینه داکتر را نمی‌گیرد.", "دا معلومات یوازې د عمومي پوهاوي لپاره دي او د ډاکټر معاینه نه ځای نیسي.", "This information is for general awareness only and does not replace a doctor's examination."),
    dariOnly: S("", "دا برخه اوس مهال په دري ژبه ده.", "This section is currently in Dari."),
    eat: S("بخورید", "وخورئ", "Eat"),
    avoid: S("نخورید", "مه خورئ", "Avoid"),
    searchDisease: S("جستجوی مرض…", "د ناروغۍ لټون…", "Search a disease…"),
    forWomen: S("برای خانم‌ها", "د ښځو لپاره", "For women"),
    forMen: S("برای آقایان", "د نارینه وو لپاره", "For men"),
    forBoth: S("برای هر دو", "د دواړو لپاره", "For both"),
    dangerIntro: S("اگر یکی از این علایم را دیدید، فوراً به بخش عاجل بیایید یا زنگ بزنید:", "که له دې نښو څخه یوه وګورئ، سمدستي عاجل څانګې ته راشئ یا زنګ ووهئ:", "If you see any of these signs, come to the emergency department at once or call:")
  },

  departments: [
    { id: "emergency", icon: "🚑", name: S("بخش عاجل (اورژانس)", "بیړنی (عاجل) څانګه", "Emergency"), services: [
      ["پذیرش و کمک‌های اولیه ۲۴ ساعته", "۲۴ ساعته منل او لومړنۍ مرستې", "24-hour admission and first aid"],
      ["آمبولانس رایگان", "وړیا امبولانس", "Free ambulance"],
      ["تداوی تب بلند و ضعف شدید", "د لوړې تبې او سخت کمزورتیا درملنه", "High fever and severe weakness"],
      ["تداوی زخم‌ها و دوخت", "د ټپونو درملنه او ګنډل", "Wound care and stitching"],
      ["تداوی سوختگی", "د سوځېدنې درملنه", "Burn treatment"],
      ["جا انداختن و گچ‌گیری شکستگی", "د مات والي برابرول او ګچ", "Fracture setting and casting"],
      ["تداوی مسمومیت غذایی", "د خوړو د زهرجنېدو درملنه", "Food poisoning treatment"],
      ["تداوی اسهال و کم‌آبی (سیروم)", "د اسهالو او اوبو کمښت درملنه (سیروم)", "Diarrhea and dehydration (IV fluids)"],
      ["کمک به حادثه‌های ترافیکی", "د ترافیکي پېښو سره مرسته", "Road accident care"],
      ["تداوی درد شدید سینه و شکم", "د سینې او خېټې د سختې درد درملنه", "Severe chest and abdominal pain"],
      ["تداوی تشنج و غش", "د تشنج او غش درملنه", "Seizure and fainting care"],
      ["تداوی حمله آسم و تنگی نفس", "د استما حملې او ساه تنګۍ درملنه", "Asthma attack and breathing difficulty"]
    ]},
    { id: "ent", icon: "👂", name: S("گوش، گلو و بینی", "غوږ، ستونی او پوزه", "Ear, Nose & Throat (ENT)"), services: [
      ["تداوی و عملیات جاغور", "د جاغور درملنه او عملیات", "Tonsil treatment and surgery"],
      ["تداوی حساسیت بینی", "د پوزې حساسیت درملنه", "Nasal allergy treatment"],
      ["تداوی سینوزیت", "د سینوزایټس درملنه", "Sinusitis treatment"],
      ["تداوی کری و ناشنوایی", "د کاڼه والي او نه اورېدلو درملنه", "Treatment of hearing loss"],
      ["تداوی التهابات گوش و گلو", "د غوږ او ستونې د التهاب درملنه", "Ear and throat infection treatment"],
      ["عملیات پولیپ بینی", "د پوزې پولیپ عملیات", "Nasal polyp surgery"],
      ["عملیات گوشت اضافه گلو", "د ستونې د اضافي غوښې عملیات", "Adenoid surgery"],
      ["عملیات کجی پرده و استخوان بینی", "د پوزې د پردې او هډوکي کوږوالي عملیات", "Deviated septum surgery"],
      ["عملیات کسر بینی", "د پوزې د مات والي عملیات", "Nasal fracture surgery"],
      ["جراحی زیبایی بینی (ریپلاستی)", "د پوزې ښکلا جراحي (رینوپلاستي)", "Cosmetic nose surgery (rhinoplasty)"],
      ["پاک کردن گوش از موم و چرک", "د غوږ له شمعې او زخم پاکول", "Ear cleaning and wax removal"],
      ["تداوی خونریزی بینی", "د پوزې د وینې بهېدو درملنه", "Nosebleed treatment"],
      ["تداوی درد گلو و مشکل بلعیدن", "د ستونې درد او تېرولو ستونزې درملنه", "Sore throat and swallowing problems"]
    ]},
    { id: "neurosurgery", icon: "🧠", name: S("جراحی مغز و اعصاب", "د مغزو او اعصابو جراحي", "Neurosurgery"), services: [
      ["عملیات تومورهای مغزی", "د مغزو د تومورونو عملیات", "Brain tumor surgery"],
      ["تداوی خونریزی و سکته‌های مغزی", "د مغزو د وینې بهېدو او سکتې درملنه", "Brain hemorrhage and stroke care"],
      ["تداوی ترضیضات دماغی", "د سر او مغزو د ټکر درملنه", "Head injury treatment"],
      ["تداوی کسرهای جمجمه", "د کوپړۍ د مات والي درملنه", "Skull fracture treatment"],
      ["جراحی دیسک کمر و گردن", "د ملا او غاړې د ډیسک جراحي", "Lumbar and cervical disc surgery"],
      ["عملیات ساده و مغلق ستون فقرات", "د ملا تیر ساده او پیچلي عملیات", "Simple and complex spine surgery"],
      ["تداوی اعصاب محیطی", "د محیطي اعصابو درملنه", "Peripheral nerve treatment"],
      ["تداوی درد کمر، گردن و سردردی‌ها", "د ملا، غاړې درد او سر دردونو درملنه", "Back, neck pain and headache treatment"],
      ["تداوی سرگیجه", "د سرګرځېدو درملنه", "Dizziness treatment"],
      ["تداوی بی‌حسی و سوزن‌سوزن شدن دست و پا", "د لاسو او پښو بې‌حسي او ګزېدنې درملنه", "Numbness and tingling in hands and feet"],
      ["تداوی فلج و ضعف اعضا", "د فلج او غړو د کمزورتیا درملنه", "Paralysis and limb weakness"],
      ["تداوی صرع (غش)", "د مرګي (غش) درملنه", "Epilepsy treatment"],
      ["تداوی میگرن و سردردی شدید", "د مایګرین او سخت سر درد درملنه", "Migraine and severe headache"]
    ]},
    { id: "gyn", icon: "🤰", name: S("نسائی و ولادی", "ښځینه او ولادي", "Gynecology & Obstetrics"), services: [
      ["تداوی عقامت و بی‌اولادی (مرد و زن)", "د شندتوب او بې اولادۍ درملنه (نر او ښځه)", "Infertility treatment (men and women)"],
      ["مراقبت‌های قبل و بعد از ولادت", "د زېږون څخه مخکې او وروسته پاملرنه", "Pre- and post-natal care"],
      ["ولادت‌های نارمل زیر نظر متخصص", "د متخصص تر څارنې لاندې نورمال زېږون", "Normal deliveries under specialist care"],
      ["کورتاژ", "کورتاژ", "Curettage"],
      ["عملیات‌های جراحی نسائی (هسترکتومی، تیوب لایگیشن، سیستوسل، رکتوسل)", "د ښځینه جراحي عملیات (هسترکتومي، ټیوب لایګېشن، سیستوسیل، رکتوسیل)", "Gynecologic surgeries (hysterectomy, tubal ligation, cystocele, rectocele)"],
      ["H.S.G", "H.S.G", "H.S.G"],
      ["تنظیم خانواده (آی‌یودی، تابلیت، امپلانت، تزریق)", "کورنۍ پلان (IUD، ټابلیټ، امپلانټ، ستنه)", "Family planning (IUD, tablet, implant, injection)"],
      ["تداوی بی‌نظمی عادت ماهوار", "د میاشتنۍ عادت د بې‌نظمۍ درملنه", "Irregular menstruation"],
      ["تداوی درد و خونریزی زیاد دوران عادت", "د عادت د درد او ډېرې وینې بهېدو درملنه", "Painful or heavy periods"],
      ["تداوی ترشحات و خارش ناحیه تناسلی", "د تناسلي برخې د افرازاتو او خارښت درملنه", "Vaginal discharge and itching"],
      ["تداوی کیست تخمدان", "د هګیو دانې (تخمدان) د کیست درملنه", "Ovarian cyst treatment"],
      ["سونوگرافی حاملگی", "د حاملګۍ سونوګرافي", "Pregnancy ultrasound"],
      ["مشوره پیش از ازدواج", "له واده مخکې مشوره", "Premarital counseling"]
    ]},
    { id: "internal", icon: "🩺", name: S("داخله عمومی", "عمومي داخله", "Internal Medicine"), services: [
      ["فشار بلند خون", "لوړ وینې فشار", "High blood pressure"],
      ["فشار پایین خون و سرگیجه", "ټیټ وینې فشار او سرګرځېدنه", "Low blood pressure and dizziness"],
      ["دیابت یا مرض شکر", "د شکرې ناروغي", "Diabetes (sugar disease)"],
      ["تکلیف معده و سوزش سینه", "د معدې ستونزې او د سینې سوځېدنه", "Stomach problems and heartburn"],
      ["تکلیف جگر و زردی", "د ینې ستونزې او ژېړې", "Liver problems and jaundice"],
      ["تکلیف گرده و التهاب مجاری ادرار", "د پښتورګو ستونزې او د متیازو لارو التهاب", "Kidney problems and urinary infections"],
      ["کم‌خونی و ضعف", "د وینې کموالی او کمزورتیا", "Anemia and weakness"],
      ["تب‌های میعادی (تایفوئید، ملاریا)", "میعادي تبې (تایفایډ، ملاریا)", "Typhoid and malaria"],
      ["سرفه، سرماخوردگی و التهاب شش", "ټوخی، زکام او د سږو التهاب", "Cough, cold and chest infection"],
      ["امراض تایرایید", "د تایرایډ ناروغۍ", "Thyroid diseases"],
      ["درد مفاصل و نقرس", "د مفصلونو درد او نقرس", "Joint pain and gout"],
      ["چربی بلند خون", "د وینې لوړه غوړي", "High blood cholesterol"],
      ["معاینات عمومی و کنترول سالانه", "عمومي معاینات او کلنی کنترول", "General check-up and annual screening"]
    ]},
    { id: "cardiology", icon: "❤️", name: S("داخله قلبی", "د زړه داخله", "Cardiology"), services: [
      ["معاینه و تداوی امراض قلبی", "د زړه د ناروغیو معاینه او درملنه", "Heart disease examination and treatment"],
      ["نوار قلب (ECG)", "د زړه نوار (ECG)", "Electrocardiogram (ECG)"],
      ["اکو قلب (Echo)", "د زړه ایکو (Echo)", "Echocardiography (Echo)"],
      ["تست ورزش قلب (ETT/TMT)", "د زړه د تمرین ازموینه (ETT/TMT)", "Exercise stress test (ETT/TMT)"],
      ["تداوی فشار بلند خون", "د لوړ وینې فشار درملنه", "High blood pressure treatment"],
      ["تداوی درد سینه (انجین)", "د سینې د درد (انجین) درملنه", "Chest pain (angina)"],
      ["تداوی تپش و بی‌نظمی ضربان قلب", "د زړه د درزا او بې‌نظمۍ درملنه", "Palpitations and irregular heartbeat"],
      ["تداوی ضعف قلب و ورم پاها", "د زړه کمزورتیا او د پښو پړسوب درملنه", "Heart weakness and swollen legs"],
      ["مراقبت عاجل سکته قلبی", "د زړه د سکتې بیړنۍ پاملرنه", "Emergency care for heart attack"],
      ["کنترول چربی خون", "د وینې د غوړو کنټرول", "Cholesterol control"],
      ["پیگیری و مراقبت بعد از سکته قلبی", "د زړه له سکتې وروسته تعقیب", "Follow-up after a heart attack"],
      ["تحلیل نشانگرهای قلبی (تروپونین، CK-MB)", "د زړه نښې (تروپونین، CK-MB)", "Cardiac markers (Troponin, CK-MB)"]
    ]},
    { id: "cardiacsurgery", icon: "🫀", name: S("جراحی قلب", "د زړه جراحي", "Cardiac Surgery"), services: [
      ["مشوره و ارزیابی نیاز به عملیات قلب", "د زړه عملیاتو اړتیا مشوره او ارزونه", "Consultation and assessment for heart surgery"],
      ["معاینات قبل از عملیات (ECG، اکو، تحلیل‌ها)", "له عملیات مخکې معاینات (ECG، ایکو، ازموینې)", "Pre-operative tests (ECG, Echo, labs)"],
      ["کنترول فشار و شکر قبل از عملیات", "له عملیات مخکې د فشار او شکرې کنټرول", "Blood pressure and sugar control before surgery"],
      ["مشوره درباره نوع عملیات و خطرات آن", "د عملیاتو د ډول او خطرونو په اړه مشوره", "Counseling about surgery type and risks"],
      ["مراقبت بعد از عملیات", "له عملیات وروسته پاملرنه", "Post-operative care"],
      ["مراقبت از زخم و دوخت‌ها", "د ټپ او ګنډلو پاملرنه", "Wound and stitch care"],
      ["توانبخشی و ورزش بعد از عملیات قلب", "له عملیات وروسته بیا رغونه او تمرین", "Rehabilitation and exercise after heart surgery"],
      ["مشوره غذایی و دوایی بعد از عملیات", "له عملیات وروسته د خوړو او درملو مشوره", "Diet and medicine advice after surgery"],
      ["آموزش علایم خطر بعد از عملیات", "له عملیات وروسته د خطر د نښو زده کړه", "Teaching warning signs after surgery"],
      ["پیگیری ماهوار بیمار", "د ناروغ میاشتنی تعقیب", "Monthly patient follow-up"]
    ]},
    { id: "pediatrics", icon: "👶", name: S("داخله اطفال", "د ماشومانو داخله", "Pediatrics"), services: [
      ["واکسین‌های اطفال", "د ماشومانو واکسینونه", "Child vaccinations"],
      ["تداوی تب و سرماخوردگی اطفال", "د ماشومانو د تبې او زکام درملنه", "Fever and cold in children"],
      ["تداوی اسهال و قی اطفال", "د ماشومانو د اسهالو او کانګو درملنه", "Diarrhea and vomiting in children"],
      ["تداوی نیمونیا و سرفه اطفال", "د ماشومانو د سینه بغل او ټوخي درملنه", "Pneumonia and cough in children"],
      ["کنترول رشد و وزن طفل", "د ماشوم د ودې او وزن کنټرول", "Growth and weight check"],
      ["تداوی سوءتغذیه", "د خوراکي کمښت درملنه", "Malnutrition treatment"],
      ["تداوی کم‌خونی اطفال", "د ماشومانو د وینې کموالي درملنه", "Anemia in children"],
      ["تداوی آسم و حساسیت اطفال", "د ماشومانو د استما او حساسیت درملنه", "Asthma and allergy in children"],
      ["تداوی التهاب گوش و گلو اطفال", "د ماشومانو د غوږ او ستونې د التهاب درملنه", "Ear and throat infections in children"],
      ["مراقبت نوزاد و زردی نوزاد", "د نوي زېږېدلي پاملرنه او ژېړې", "Newborn care and newborn jaundice"],
      ["تداوی کرم‌ها و مشکلات هاضمه", "د چینجیو او هاضمې ستونزو درملنه", "Worms and digestive problems"]
    ]},
    { id: "surgery", icon: "🔪", name: S("جراحی عمومی", "عمومي جراحي", "General Surgery"), services: [
      ["عملیات آپاندیس", "د اپنډکس عملیات", "Appendix surgery"],
      ["عملیات فتق (ریخ‌شدگی)", "د هرنیا عملیات", "Hernia surgery"],
      ["عملیات سنگ کیسه صفرا", "د صفرا کڅوړې د ډبرو عملیات", "Gallbladder stone surgery"],
      ["عملیات بواسیر و شقاق", "د بواسیر او ماتې عملیات", "Hemorrhoid and fissure surgery"],
      ["عملیات کیست و غده‌های زیر جلد", "د پوستکي لاندې کیست او غدو عملیات", "Cyst and lump removal"],
      ["تداوی ابسه و چرک", "د غوښې د زخم او زوو درملنه", "Abscess drainage"],
      ["تداوی زخم‌های مزمن و دوخت", "د اوږدمهالو ټپونو درملنه او ګنډل", "Chronic wound care and stitching"],
      ["ختنه اطفال", "د ماشومانو ختنه", "Child circumcision"],
      ["عملیات‌های عاجل شکم", "د خېټې بیړني عملیات", "Emergency abdominal surgery"],
      ["مشوره قبل و بعد از عملیات", "له عملیات مخکې او وروسته مشوره", "Pre- and post-operative counseling"]
    ]},
    { id: "ortho", icon: "🦴", name: S("ارتوپیدی", "ارتوپیدي", "Orthopedics"), services: [
      ["تداوی شکستگی‌ها", "د مات والي درملنه", "Fracture treatment"],
      ["جا انداختن و گچ‌گیری", "د ټکان برابرول او ګچ", "Reduction and casting"],
      ["عملیات پلیت و میخ استخوان", "د هډوکي پلیټ او میخ عملیات", "Plate and nail fixation surgery"],
      ["تداوی درد زانو", "د ګونډې د درد درملنه", "Knee pain treatment"],
      ["تداوی درد شانه", "د اوږې د درد درملنه", "Shoulder pain treatment"],
      ["تداوی درد کمر و دیسک", "د ملا درد او ډیسک درملنه", "Back pain and disc treatment"],
      ["تداوی آرتروز", "د آرتروز درملنه", "Arthritis treatment"],
      ["تداوی پوکی استخوان", "د هډوکو د ماتېدو (پوکۍ) درملنه", "Osteoporosis treatment"],
      ["تداوی پیچ‌خوردگی و درد رگ و پی", "د رګ او پړي درد او مروړ درملنه", "Sprains and ligament pain"],
      ["تداوی درد پاشنه", "د پښې د پاشنې د درد درملنه", "Heel pain treatment"]
    ]},
    { id: "derm", icon: "✨", name: S("جلدی و زیبایی", "پوستکی او ښکلا", "Dermatology & Cosmetic"), services: [
      ["تداوی امراض جلدی", "د پوستکي د ناروغیو درملنه", "Skin disease treatment"],
      ["تداوی اگزما و خارش", "د اګزیما او خارښت درملنه", "Eczema and itching"],
      ["تداوی جرب", "د خارښت (جرب) درملنه", "Scabies treatment"],
      ["تداوی سالک (لیشمانیا)", "د سالک (لیشمانیا) درملنه", "Cutaneous leishmaniasis"],
      ["تداوی قارچ جلدی", "د پوستکي د فنګس درملنه", "Skin fungus treatment"],
      ["تداوی جوش‌های صورت (آکنه)", "د مخ د دانو (اکنې) درملنه", "Acne treatment"],
      ["تداوی حساسیت‌های پوستی", "د پوستکي د حساسیت درملنه", "Skin allergy treatment"],
      ["تداوی ریزش مو", "د ویښتو د ورېدو درملنه", "Hair loss treatment"],
      ["تداوی لکه‌ها و تیره شدن پوست", "د ګون او توروالي درملنه", "Spots and skin darkening"],
      ["تداوی زگیل", "د زګیل درملنه", "Wart treatment"],
      ["خدمات زیبایی و مراقبت پوست", "د ښکلا خدمتونه او د پوستکي پاملرنه", "Cosmetic services and skin care"]
    ]},
    { id: "urology", icon: "💧", name: S("یورولوژی (امراض مجاری ادرار)", "یورولوژي (د متیازو لارو ناروغۍ)", "Urology"), services: [
      ["تداوی سنگ گرده", "د پښتورګو د ډبرو درملنه", "Kidney stone treatment"],
      ["تداوی سنگ مثانه", "د مثانې د ډبرو درملنه", "Bladder stone treatment"],
      ["تداوی التهاب مجاری ادرار", "د متیازو لارو د التهاب درملنه", "Urinary tract infection treatment"],
      ["تداوی بزرگی پروستات", "د پروستات د لوییدو درملنه", "Enlarged prostate treatment"],
      ["تداوی تکرر و سوزش ادرار", "د ډیرو متیازو او سوځېدو درملنه", "Frequent urination and burning"],
      ["تداوی درد کمر کلیوی", "د پښتورګو د ملا درد درملنه", "Kidney-related back pain"],
      ["تداوی مشکلات جنسی مردان", "د نارینه وو جنسي ستونزو درملنه", "Male sexual problems"],
      ["تداوی عقامت مردان", "د نارینه وو د شندتوب درملنه", "Male infertility"],
      ["تداوی آب‌آوردگی خصیه", "د خصیې د اوبو درملنه", "Hydrocele treatment"],
      ["ختنه و عملیات‌های کوچک", "ختنه او کوچني عملیات", "Circumcision and minor procedures"]
    ]},
    { id: "nephrology", icon: "🫘", name: S("امراض گرده", "د پښتورګو ناروغۍ", "Nephrology"), services: [
      ["معاینه و تداوی امراض گرده", "د پښتورګو د ناروغیو معاینه او درملنه", "Kidney disease examination and treatment"],
      ["تداوی ناتوانی گرده", "د پښتورګو د کمزورتیا درملنه", "Kidney failure care"],
      ["تداوی ورم صورت و پاها", "د مخ او پښو د پړسوب درملنه", "Face and leg swelling"],
      ["تداوی پروتئین در ادرار", "په متیازو کې د پروټین درملنه", "Protein in urine"],
      ["تداوی فشار بلند ناشی از گرده", "د پښتورګو له امله د لوړ فشار درملنه", "Kidney-related high blood pressure"],
      ["تداوی التهاب گرده", "د پښتورګو د التهاب درملنه", "Kidney infection treatment"],
      ["تداوی سنگ گرده", "د پښتورګو د ډبرو درملنه", "Kidney stone treatment"],
      ["تحلیل کریاتینین و اوره", "د کریاتینین او یوریا ازموینه", "Creatinine and urea tests"],
      ["مشوره غذایی برای مریضان گرده", "د پښتورګو ناروغانو ته د خوړو مشوره", "Diet advice for kidney patients"],
      ["مشوره و ارجاع برای دیالیز", "د ډیالیز لپاره مشوره او لیږد", "Counseling and referral for dialysis"]
    ]},
    { id: "gastro", icon: "🍽️", name: S("امراض معده و روده", "د معدې او کولمو ناروغۍ", "Gastroenterology"), services: [
      ["اندوسکوپی (EGD)", "اندوسکوپي (EGD)", "Upper endoscopy (EGD)"],
      ["کولونوسکوپی", "کولونوسکوپي", "Colonoscopy"],
      ["سیگموئیدوسکوپی", "سیګموئیډوسکوپي", "Sigmoidoscopy"],
      ["بایوپسی و آزمایش H. pylori", "بایوپسي او د H. pylori ازموینه", "H. pylori biopsy and tests"],
      ["تداوی تکلیف و زخم معده", "د معدې ستونزې او زخم درملنه", "Stomach problems and ulcers"],
      ["تداوی سوزش سینه و ریفلاکس", "د سینې سوځېدنې او ریفلکس درملنه", "Heartburn and reflux"],
      ["تداوی قبضیت", "د قبضیت درملنه", "Constipation treatment"],
      ["تداوی اسهال دوامدار", "د اوږدمهالو اسهالو درملنه", "Chronic diarrhea"],
      ["تداوی هپاتیت و تکلیف جگر", "د هپاتیت او ینې د ستونزو درملنه", "Hepatitis and liver problems"],
      ["تداوی سنگ صفرا", "د صفرا د ډبرو درملنه", "Gallstone treatment"],
      ["تداوی نفخ و گاز شکم", "د خېټې د پړسوب او ګاز درملنه", "Bloating and gas"]
    ]},
    { id: "endocrine", icon: "⚖️", name: S("امراض غدد و هورمون", "د غدو او هورمونونو ناروغۍ", "Endocrinology"), services: [
      ["تداوی دیابت (شکر)", "د شکرې ناروغۍ درملنه", "Diabetes treatment"],
      ["تداوی کم‌کاری و پرکاری تایرایید", "د تایرایډ کمکاري او ډیرکاري درملنه", "Underactive and overactive thyroid"],
      ["تداوی چاقی", "د چاغۍ درملنه", "Obesity treatment"],
      ["تداوی کم‌وزنی", "د کم وزن درملنه", "Underweight treatment"],
      ["تداوی کمبود ویتامین D", "د ویټامین D د کمښت درملنه", "Vitamin D deficiency"],
      ["تداوی مشکلات هورمونی خانم‌ها", "د ښځو د هورموني ستونزو درملنه", "Women's hormonal problems"],
      ["تداوی بی‌نظمی عادت ماهوار (هورمونی)", "د میاشتني عادت د بې‌نظمۍ (هورموني) درملنه", "Irregular periods (hormonal)"],
      ["تداوی مشکلات رشد اطفال", "د ماشومانو د ودې ستونزو درملنه", "Child growth problems"],
      ["کنترول چربی خون", "د وینې د غوړو کنټرول", "Cholesterol control"],
      ["آزمایش‌های هورمونی (TSH، T3، T4 و غیره)", "هورموني ازموینې (TSH، T3، T4 او نور)", "Hormone tests (TSH, T3, T4 and more)"]
    ]},
    { id: "pulmonology", icon: "🫁", name: S("امراض شش و تنفس", "د سږو او تنفس ناروغۍ", "Pulmonology"), services: [
      ["تداوی آسم", "د استما درملنه", "Asthma treatment"],
      ["تداوی برونشیت", "د برانشایټس درملنه", "Bronchitis treatment"],
      ["تداوی نیمونیا (التهاب شش)", "د نیمونیا (د سږو التهاب) درملنه", "Pneumonia treatment"],
      ["تشخیص و تداوی سل", "د ټي بي تشخیص او درملنه", "TB diagnosis and treatment"],
      ["تداوی سرفه دوامدار", "د اوږدمهال ټوخي درملنه", "Persistent cough"],
      ["تداوی تنگی نفس", "د ساه تنګۍ درملنه", "Shortness of breath"],
      ["تست اسپیرومتری", "د سپیرومیټري ازموینه", "Spirometry test"],
      ["تداوی حساسیت فصلی", "د فصلي حساسیت درملنه", "Seasonal allergy treatment"],
      ["مشوره ترک سگرت", "د سګرټ پرېښودو مشوره", "Quit-smoking counseling"],
      ["تداوی با اکسیجن", "د اکسیجن درملنه", "Oxygen therapy"]
    ]},
    { id: "oncology", icon: "🎗️", name: S("سرطان‌شناسی", "سرطان پېژندنه (انکالوجي)", "Oncology"), services: [
      ["مشوره و تشخیص سرطان", "د سرطان مشوره او تشخیص", "Cancer consultation and diagnosis"],
      ["معاینه پستان", "د تی معاینه", "Breast examination"],
      ["معاینه غده‌ها و توده‌ها", "د غدو او پړسوبونو معاینه", "Examination of lumps"],
      ["تحلیل PSA برای پروستات", "د پروستات لپاره PSA ازموینه", "PSA test for prostate"],
      ["بایوپسی و ارجاع نمونه", "بایوپسي او نمونې لیږل", "Biopsy and sample referral"],
      ["پیگیری و مراقبت بیماران", "د ناروغانو تعقیب او پاملرنه", "Patient follow-up and care"],
      ["مشوره غذایی برای مریضان", "د ناروغانو ته د خوړو مشوره", "Diet advice for patients"],
      ["کنترول درد", "د درد کنټرول", "Pain control"],
      ["حمایت روانی بیمار و خانواده", "د ناروغ او کورنۍ رواني ملاتړ", "Emotional support for patient and family"],
      ["ارجاع برای تداوی تخصصی", "د ځانګړې درملنې لپاره لېږد", "Referral for specialized treatment"]
    ]},
    { id: "psychiatry", icon: "🧘", name: S("روان‌پزشکی", "رواني ناروغۍ (روان‌پوهنه)", "Psychiatry"), services: [
      ["تداوی افسردگی", "د خپګان درملنه", "Depression treatment"],
      ["تداوی اضطراب و پریشانی", "د اضطراب او پریشانۍ درملنه", "Anxiety treatment"],
      ["تداوی بی‌خوابی", "د بې‌خوبۍ درملنه", "Insomnia treatment"],
      ["تداوی ترس و وسواس", "د ویرې او وسواس درملنه", "Fears and obsessions"],
      ["تداوی فشار روانی و عصبانیت", "د رواني فشار او غوسې درملنه", "Stress and anger"],
      ["مشوره مشکلات خانوادگی", "د کورنیو ستونزو مشوره", "Family counseling"],
      ["مشوره مشکلات رفتاری کودکان", "د ماشومانو د چلند ستونزو مشوره", "Child behavior counseling"],
      ["مشوره و رهنمایی ترک اعتیاد", "د روږدتیا پرېښودو مشوره", "Addiction counseling"],
      ["تداوی ضربه‌های روحی و غم", "د رواني ټکان او غم درملنه", "Trauma and grief support"],
      ["تداوی مشکلات روانی همراه با صرع", "له مرګي سره د رواني ستونزو درملنه", "Mental health with epilepsy"]
    ]},
    { id: "dental", icon: "🦷", name: S("دندان‌پزشکی", "د غاښونو درملنه", "Dentistry"), services: [
      ["معاینه و مشوره دندان", "د غاښ معاینه او مشوره", "Dental exam and advice"],
      ["پر کردن دندان", "د غاښ ډکول", "Dental fillings"],
      ["تداوی ریشه دندان", "د غاښ د ریښې درملنه", "Root canal treatment"],
      ["کشیدن دندان", "د غاښ ایستل", "Tooth extraction"],
      ["تداوی درد دندان", "د غاښ د درد درملنه", "Toothache treatment"],
      ["جرم‌گیری و پاک کردن دندان", "د غاښ د جرم پاکول", "Scaling and cleaning"],
      ["تداوی التهاب لثه", "د غاښو د غوښې د التهاب درملنه", "Gum infection treatment"],
      ["دندان مصنوعی", "مصنوعي غاښ", "Dentures"],
      ["کشیدن دندان عقل", "د عقل د غاښ ایستل", "Wisdom tooth removal"],
      ["تداوی دندان اطفال", "د ماشومانو د غاښ درملنه", "Children's dental care"]
    ]},
    { id: "anesthesia", icon: "😴", name: S("بیهوشی", "بې‌هوشي", "Anesthesia"), services: [
      ["بیهوشی عمومی", "عمومي بې‌هوشي", "General anesthesia"],
      ["بیهوشی موضعی", "موضعي بې‌هوشي", "Local anesthesia"],
      ["بیهوشی نخاعی (کمر)", "د ملا بې‌هوشي (نخاعي)", "Spinal anesthesia"],
      ["بیهوشی برای عملیات سزارین", "د سیزرین عملیاتو لپاره بې‌هوشي", "Anesthesia for cesarean section"],
      ["بیهوشی اطفال", "د ماشومانو بې‌هوشي", "Pediatric anesthesia"],
      ["معاینه قبل از بیهوشی", "له بې‌هوشۍ مخکې معاینه", "Pre-anesthesia check"],
      ["پایش بیمار در جریان عملیات", "د عملیاتو پر مهال د ناروغ څارنه", "Patient monitoring during surgery"],
      ["مراقبت بعد از بیهوشی", "له بې‌هوشۍ وروسته پاملرنه", "Recovery care after anesthesia"],
      ["کنترول درد بعد از عملیات", "له عملیات وروسته د درد کنټرول", "Pain control after surgery"],
      ["مشوره درباره خوردن و آشامیدن قبل از عملیات", "له عملیات مخکې د خوړو او څښلو په اړه مشوره", "Advice on eating and drinking before surgery"]
    ]},
    { id: "physio", icon: "🏃", name: S("فیزیوتراپی", "فزیوتراپي", "Physiotherapy"), services: [
      ["تداوی درد کمر", "د ملا د درد درملنه", "Back pain therapy"],
      ["تداوی درد گردن", "د غاړې د درد درملنه", "Neck pain therapy"],
      ["تداوی درد زانو", "د ګونډې د درد درملنه", "Knee pain therapy"],
      ["تداوی درد شانه", "د اوږې د درد درملنه", "Shoulder pain therapy"],
      ["تداوی درد مفاصل و عضلات", "د مفصلونو او عضلاتو د درد درملنه", "Joint and muscle pain therapy"],
      ["توانبخشی بعد از شکستگی", "له مات والي وروسته بیا رغونه", "Rehabilitation after fracture"],
      ["توانبخشی بعد از سکته مغزی", "د مغزي سکتې وروسته بیا رغونه", "Rehabilitation after stroke"],
      ["تداوی فلج و ضعف عضلات", "د فلج او عضلاتو د کمزورتیا درملنه", "Paralysis and muscle weakness"],
      ["ورزش‌های درمانی", "درملنیز تمرینونه", "Therapeutic exercises"],
      ["ماساژ طبی و تحریک برقی", "طبي مالش او بریښنايي هڅونه", "Medical massage and electrical stimulation"]
    ]}
  ],

  /* ---------- لابراتوار و رادیولوژی: [مخفف, نام کامل, معنی به دری] ---------- */
  diagnostics: [
    { id: "lab", icon: "🔬",
      name: S("لابراتوار کاملاً مجهز", "بشپړ سمبال لابراتوار", "Fully equipped laboratory"),
      groups: [
        { title: S("خون‌شناسی", "د وینې پېژندنه", "Hematology"), items: [
          ["CBC","Complete Blood Count","شمارش کامل خون"],
          ["ESR","Erythrocyte Sedimentation Rate","سرعت رسوب خون (التهاب)"],
          ["Blood Group","ABO & Rh Blood Grouping","گروپ خون"],
          ["HbA1c","Glycated Hemoglobin","اوسط قند ۳ ماه اخیر"],
          ["BT","Bleeding Time","وقت خون‌ریزی"],
          ["CT","Clotting Time","وقت لخته شدن خون"],
          ["PT","Prothrombin Time","لخته شدن خون"],
          ["INR","International Normalized Ratio","کنترول رقیق بودن خون"],
          ["APTT","Activated Partial Thromboplastin Time","لخته شدن خون"],
          ["D-Dimer","Fibrin Degradation Product","لخته در رگ‌ها"]
        ]},
        { title: S("قند و چربی خون", "شکر او د وینې غوړي", "Sugar & lipids"), items: [
          ["FBS","Fasting Blood Sugar","قند خون ناشتا"],
          ["RBS","Random Blood Sugar","قند خون تصادفی"],
          ["PP","Post-Prandial Blood Sugar","قند بعد از غذا"],
          ["GTT","Glucose Tolerance Test","آزمایش تحمل قند"],
          ["Cholesterol","Total Cholesterol","چربی کل خون"],
          ["TG","Triglycerides","چربی ترای‌گلیسرید"],
          ["HDL","High-Density Lipoprotein","چربی خوب"],
          ["LDL","Low-Density Lipoprotein","چربی بد"],
          ["VLDL","Very-Low-Density Lipoprotein","چربی بسیار بد"]
        ]},
        { title: S("گرده و الکترولیت", "پښتورګي او الکترولیت", "Kidney & electrolytes"), items: [
          ["Urea","Blood Urea","کار گرده"],
          ["BUN","Blood Urea Nitrogen","کار گرده"],
          ["Creatinine","Serum Creatinine","وضعیت گرده"],
          ["Ca","Calcium","کلسیم (استخوان)"],
          ["P","Phosphorus","فاسفورس"],
          ["Mg","Magnesium","مگنیزیم"],
          ["Na","Sodium","سودیم (نمک خون)"],
          ["K","Potassium","پوتاشیم"],
          ["Cl","Chloride","کلورید"]
        ]},
        { title: S("جگر و لوزالمعده", "ینه او پانقراس", "Liver & pancreas"), items: [
          ["T. Bilirubin","Total Bilirubin","زردی (کل)"],
          ["D. Bilirubin","Direct Bilirubin","زردی مستقیم"],
          ["I. Bilirubin","Indirect Bilirubin","زردی غیرمستقیم"],
          ["ALT (SGPT)","Alanine Aminotransferase","کار جگر"],
          ["AST (SGOT)","Aspartate Aminotransferase","کار جگر و قلب"],
          ["ALP","Alkaline Phosphatase","جگر و استخوان"],
          ["GGT","Gamma-Glutamyl Transferase","کار جگر"],
          ["T. Protein","Total Protein","پروتئین کل"],
          ["Albumin","Serum Albumin","البومین"],
          ["Globulin","Serum Globulin","گلوبولین"],
          ["A/G Ratio","Albumin/Globulin Ratio","نسبت البومین به گلوبولین"],
          ["Amylase","Serum Amylase","لوزالمعده"],
          ["Lipase","Serum Lipase","لوزالمعده"]
        ]},
        { title: S("نشانگرهای قلبی", "د زړه نښې", "Cardiac markers"), items: [
          ["CPK","Creatine Phosphokinase","آسیب عضله و قلب"],
          ["CK-MB","Creatine Kinase-MB","آسیب عضله قلب"],
          ["LDH","Lactate Dehydrogenase","آسیب بافت‌ها"],
          ["Troponin I / T","Cardiac Troponin I / T","سکته قلبی"]
        ]},
        { title: S("هورمون‌ها", "هورمونونه", "Hormones"), items: [
          ["TFT","Thyroid Function Test","کار تایرایید"],
          ["T3","Triiodothyronine","هورمون تایرایید"],
          ["T4","Thyroxine","هورمون تایرایید"],
          ["TSH","Thyroid-Stimulating Hormone","هورمون محرک تایرایید"],
          ["FT3","Free Triiodothyronine","T3 آزاد"],
          ["FT4","Free Thyroxine","T4 آزاد"],
          ["Vit D3","Vitamin D3 (Cholecalciferol)","ویتامین دی"],
          ["LH","Luteinizing Hormone","هورمون جنسی"],
          ["FSH","Follicle-Stimulating Hormone","هورمون جنسی"],
          ["Prolactin","Prolactin","هورمون شیر"],
          ["Progesterone","Progesterone","هورمون جنسی خانم‌ها"],
          ["Testosterone","Testosterone","هورمون جنسی آقایان"],
          ["Total IgE","Immunoglobulin E","حساسیت"],
          ["β-hCG","Human Chorionic Gonadotropin","حاملگی"]
        ]},
        { title: S("سرولوژی (امراض ساری)", "سیرولوژي", "Serology"), items: [
          ["HBsAg","Hepatitis B surface Antigen","هپاتیت B"],
          ["HBsAb","Hepatitis B surface Antibody","مصونیت از هپاتیت B"],
          ["HBeAg","Hepatitis B e Antigen","فعال بودن هپاتیت B"],
          ["HAV Ab","Hepatitis A Antibody","هپاتیت A"],
          ["HCV Ab","Hepatitis C Antibody","هپاتیت C"],
          ["HIV Ab","Human Immunodeficiency Virus Antibody","ایدز"],
          ["VDRL","Venereal Disease Research Laboratory","سفلس"],
          ["H. pylori","Helicobacter pylori Antibody","میکروب معده"],
          ["Pregnancy","Pregnancy Test","حاملگی"],
          ["TB-ICT","TB Immunochromatographic Test","سل"],
          ["Widal","Widal Test","تایفوئید"],
          ["Typhidot","Typhidot IgG & IgM","تایفوئید"],
          ["PSA","Prostate-Specific Antigen","پروستات"],
          ["MP","Malaria Parasite","ملاریا"],
          ["TORCH","Toxoplasma, Rubella, CMV, Herpes","امراض دوران حاملگی"],
          ["Brucella","Brucellosis Test","تب مالت"],
          ["ASO","Anti-Streptolysin O","میکروب گلو و روماتیزم"],
          ["CRP","C-Reactive Protein","التهاب"],
          ["RF","Rheumatoid Factor","روماتیزم مفاصل"],
          ["ANA","Antinuclear Antibody","امراض خودایمنی"]
        ]},
        { title: S("بیولوژی مالیکولی", "مالیکولي بیولوژي", "Molecular biology"), items: [
          ["HBV DNA PCR","Hepatitis B Virus DNA (PCR)","مقدار ویروس هپاتیت B"],
          ["HCV RNA PCR","Hepatitis C Virus RNA (PCR)","مقدار ویروس هپاتیت C"],
          ["COVID-19 PCR","Polymerase Chain Reaction","کرونا"]
        ]},
        { title: S("ادرار، مدفوع و منی", "متيازې، مدفوع او مني", "Urine, stool & semen"), items: [
          ["Urine R/E","Urine Routine Examination","معاینه ادرار"],
          ["24h Protein","24-hour Urine Protein","پروتئین ادرار در یک شبانه‌روز"],
          ["Ketone","Ketone Body","کیتون (در شکر)"],
          ["Multi-Drug","Multi-Drug Screening Test","تست مواد مخدر"],
          ["Stool R/E","Stool Routine Examination","معاینه مدفوع"],
          ["Stool H. pylori Ag","Stool H. pylori Antigen","میکروب معده"],
          ["FOBT","Fecal Occult Blood Test","خون پنهان در مدفوع"],
          ["Semen","Semen Analysis","تحلیل اسپرم"]
        ]},
        { title: S("کشت و حساسیت", "کلچر او حساسیت", "Culture & sensitivity"), items: [
          ["C/S Urine","Culture & Sensitivity — Urine","کشت میکروب ادرار"],
          ["C/S Pus","Culture & Sensitivity — Pus","کشت چرک"],
          ["HVS","High Vaginal Swab","نمونه ناحیه تناسلی"],
          ["C/S Stool","Culture & Sensitivity — Stool","کشت مدفوع"],
          ["C/S Blood","Culture & Sensitivity — Blood","کشت خون"]
        ]},
        { title: S("مایعات بدن", "د بدن مایعات", "Body fluids"), items: [
          ["Ascitic","Ascitic Fluid Analysis","آب شکم"],
          ["Pleural","Pleural Fluid Analysis","آب سینه"],
          ["CSF","Cerebrospinal Fluid","مایع مغز و نخاع"],
          ["SAAG","Serum-Ascites Albumin Gradient","علت آب شکم"]
        ]},
        { title: S("واکسین و حساسیت", "واکسین او حساسیت", "Vaccines & allergy"), items: [
          ["HBs Vaccine","Hepatitis B Vaccine (adult / child)","واکسین هپاتیت B"],
          ["Influenza","Influenza Vaccine","واکسین انفلونزا"],
          ["Pneumococcal","Pneumococcal Vaccine","واکسین نیمونیا"],
          ["Rabies","Rabies Vaccine","واکسین سگ‌گزیدگی"],
          ["Allergy Test","Seasonal & Food Allergy Test","تست حساسیت فصلی و غذایی"]
        ]}
      ]
    },
    { id: "imaging", icon: "🩻",
      name: S("رادیولوژی و تصویربرداری", "رادیولوژي او انځورګري", "Radiology & imaging"),
      groups: [
        { title: S("سونوگرافی (USG)", "سونوګرافي", "Ultrasound (USG)"), items: [
          ["Abd-USG","Abdominal Ultrasonography","سونوگرافی شکم"],
          ["Pelvis-USG","Pelvic Ultrasonography","سونوگرافی لگن"],
          ["TVS","Transvaginal Sonography","سونوگرافی داخلی خانم‌ها"],
          ["Testicle-USG","Testicular Ultrasonography","سونوگرافی خصیه"],
          ["Chest-USG","Chest Ultrasonography","سونوگرافی سینه"],
          ["Breast-USG","Breast Ultrasonography","سونوگرافی پستان"],
          ["Thyroid-USG","Thyroid Ultrasonography","سونوگرافی تایرایید"]
        ]},
        { title: S("ایکس‌ری (X-ray)", "ایکسری", "X-ray"), items: [
          ["Skull","Skull X-ray","جمجمه"],
          ["Cervical","Cervical Spine X-ray","مهره‌های گردن"],
          ["Chest","Chest X-ray","سینه و شش"],
          ["Abdomen","Abdominal X-ray","شکم"],
          ["Pelvis / Hip","Pelvis & Hip Joint X-ray","لگن و مفصل ران"],
          ["Limbs","Thigh, Leg, Knee, Ankle, Foot","ران، ساق، زانو، مچ و پا"],
          ["Upper limb","Shoulder, Humerus, Forearm, Wrist, Hand","شانه، بازو، ساعد، مچ و دست"],
          ["LS Spine","Lumbosacral Spine X-ray","مهره‌های کمر"],
          ["DL Spine","Dorso-Lumbar Spine X-ray","مهره‌های پشت و کمر"],
          ["KUB","Kidney, Ureter, Bladder X-ray","گرده و مثانه"],
          ["IVP","Intravenous Pyelogram","نقشه گرده و مجاری ادرار"],
          ["Barium Swallow","Barium Swallow Study","مری و معده"],
          ["PNS","Paranasal Sinuses X-ray","سینوس‌های بینی"],
          ["Water's View","Water's View X-ray","سینوس و استخوان صورت"],
          ["Calcaneus","Calcaneus (Heel) X-ray","استخوان پاشنه"]
        ]},
        { title: S("سی‌تی اسکن و ام‌آر‌آی", "سي‌ټي سکن او ام‌ار‌آی", "CT scan & MRI"), items: [
          ["CT","Computed Tomography","عکس مقطعی"],
          ["MRI","Magnetic Resonance Imaging","عکس رزونانس مغناطیسی"],
          ["Brain","CT / MRI — Brain","مغز"],
          ["Abdomen","CT / MRI — Abdomen","شکم"],
          ["Cervical spine","CT / MRI — Cervical Spine","مهره‌های گردن"],
          ["Lumbar spine","CT / MRI — Lumbar Spine","مهره‌های کمر"],
          ["Chest","CT / MRI — Chest","سینه"],
          ["Knee","CT / MRI — Knee","زانو"]
        ]},
        { title: S("قلب و اعصاب", "زړه او اعصاب", "Heart & nerves"), items: [
          ["ECG","Electrocardiogram","نوار قلب"],
          ["Echo","Echocardiography","سونوگرافی قلب"],
          ["ETT / TMT","Exercise Tolerance Test / Treadmill Test","تست ورزش قلب"],
          ["EEG","Electroencephalogram","نوار مغز"]
        ]},
        { title: S("اندوسکوپی و دیگر", "اندوسکوپي او نور", "Endoscopy & others"), items: [
          ["EGD","Esophagogastroduodenoscopy","اندوسکوپی مری و معده"],
          ["Colonoscopy","Colonoscopy","اندوسکوپی روده بزرگ"],
          ["Sigmoidoscopy","Sigmoidoscopy","اندوسکوپی قسمت آخر روده"],
          ["H. pylori Biopsy","Helicobacter pylori Biopsy","نمونه معده برای میکروب"],
          ["Fluoroscopy","Fluoroscopy","ایکس‌ری متحرک"],
          ["DR","Digital Radiography","ایکس‌ری دیجیتال"],
          ["Spirometry","Spirometry","تست کار شش"]
        ]}
      ]
    }
  ],

  /* ---------- پروفایل شفاخانه: ۱۰ بخش (فقط معلومات موجود؛ جاهای ⚠️ را خودتان پر کنید) ----------
     intro = متن بالا، auto = لیست خودکار، after = جای‌گذار (placeholder) */
  profile: [
    { id: "intro", icon: "🏥", title: S("معرفی شفاخانه", "د روغتون پېژندنه", "Hospital Introduction"), audio: AUD(1),
      intro: { fa: ["شفاخانه بین المللی رهنورد", "تشخیص دقیق‌تر و تداوی بهتر.", "شفاخانه رهنورد با داشتن امکانات تشخیصی مدرن و حضور متخصصان افغانی، هندی و پاکستانی، به‌صورت ۲۴ ساعته آماده خدمت‌رسانی است."],
               ps: ["د رهنورد نړیوال روغتون", "دقیق تشخیص او غوره درملنه.", "د رهنورد روغتون د مدرنو تشخیصي امکاناتو او د افغاني، هندي او پاکستاني متخصصینو په شتون سره، ۲۴ ساعته د خدمت لپاره چمتو دی."],
               en: ["Rahnaward International Hospital", "Precise diagnosis, better treatment.", "With modern diagnostic facilities and Afghan, Indian and Pakistani specialists, Rahnaward Hospital is ready to serve 24 hours a day."] },
      after: { fa: ["⚠️ [جای‌گذار: سال تأسیس، تاریخچه و مأموریت شفاخانه را اینجا بنویسید]"],
               ps: ["⚠️ [ځای ناستی: د روغتون د تاسیس کال، تاریخچه او ماموریت دلته ولیکئ]"],
               en: ["⚠️ [Placeholder: add the founding year, history and mission of the hospital here]"] } },
    { id: "contact", icon: "📍", title: S("موقعیت و معلومات تماس", "موقعیت او د اړیکې معلومات", "Location and Contact Information"), audio: AUD(2), auto: "contact",
      after: { fa: ["⚠️ [جای‌گذار: ایمیل، لینک نقشه و ساعات کاری دفتر را در صورت نیاز اینجا بنویسید]"],
               ps: ["⚠️ [ځای ناستی: ایمیل، د نقشې لینک او د دفتر د کار ساعتونه په اړتیا دلته ولیکئ]"],
               en: ["⚠️ [Placeholder: add email, map link and office hours here if needed]"] } },
    { id: "departments", icon: "🩺", title: S("بخش‌های طبی", "طبي څانګې", "Medical Departments"), audio: AUD(3), auto: "departments",
      intro: { fa: ["شفاخانه رهنورد این بخش‌ها را دارد:"], ps: ["د رهنورد روغتون دا څانګې لري:"], en: ["Rahnaward Hospital has these departments:"] },
      after: { fa: ["⚠️ [جای‌گذار: در صورت نیاز، ساعات کاری هر بخش را اضافه کنید]"], ps: ["⚠️ [ځای ناستی: په اړتیا د هرې څانګې د کار ساعتونه دلته اضافه کړئ]"], en: ["⚠️ [Placeholder: add each department's working hours here if needed]"] } },
    { id: "doctors", icon: "👨‍⚕️", title: S("داکتران و متخصصان", "ډاکټران او متخصصین", "Doctors and Specialists"), audio: AUD(4),
      intro: { fa: ["شفاخانه با حضور متخصصان افغانی، هندی و پاکستانی خدمت می‌کند."], ps: ["روغتون د افغاني، هندي او پاکستاني متخصصینو په شتون سره خدمت کوي."], en: ["The hospital serves with Afghan, Indian and Pakistani specialists."] },
      after: { fa: ["⚠️ [جای‌گذار: نام داکتران، تخصص و ساعات کاری هر داکتر را اینجا بنویسید]"], ps: ["⚠️ [ځای ناستی: د ډاکټرانو نومونه، تخصص او د هر ډاکټر د کار ساعتونه دلته ولیکئ]"], en: ["⚠️ [Placeholder: add the doctors' names, specialties and working hours here]"] } },
    { id: "lab", icon: "🔬", title: S("خدمات لابراتوار", "د لابراتوار خدمتونه", "Laboratory Services"), audio: AUD(5), auto: "lab",
      intro: { fa: ["لابراتوار شفاخانه کاملاً مجهز است و این گروه‌های معاینات را انجام می‌دهد:"], ps: ["د روغتون لابراتوار بشپړ سمبال دی او دا د معایناتو ډلې ترسره کوي:"], en: ["The hospital laboratory is fully equipped and performs these groups of tests:"] },
      after: { fa: ["⚠️ [جای‌گذار: ساعات کاری لابراتوار و طرز نمونه‌گیری را اینجا بنویسید]"], ps: ["⚠️ [ځای ناستی: د لابراتوار د کار ساعتونه او د نمونې اخیستلو طریقه دلته ولیکئ]"], en: ["⚠️ [Placeholder: add laboratory hours and sample collection details here]"] } },
    { id: "radiology", icon: "🩻", title: S("خدمات رادیولوژی و تصویربرداری", "د رادیولوژي او انځورګرۍ خدمتونه", "Radiology and Imaging Services"), audio: AUD(6), auto: "imaging",
      intro: { fa: ["بخش رادیولوژی و تصویربرداری این خدمات را دارد:"], ps: ["د رادیولوژۍ او انځورګرۍ څانګه دا خدمتونه لري:"], en: ["The radiology and imaging department offers these services:"] },
      after: { fa: ["⚠️ [جای‌گذار: ساعات کاری رادیولوژی را اینجا بنویسید]"], ps: ["⚠️ [ځای ناستی: د رادیولوژۍ د کار ساعتونه دلته ولیکئ]"], en: ["⚠️ [Placeholder: add radiology working hours here]"] } },
    { id: "admission", icon: "📝", title: S("پذیرش و ثبت مریض", "د ناروغ منل او ثبتول", "Patient Admission and Registration"), audio: AUD(7),
      intro: { fa: ["هر مریض با شماره ثبت مریض ثبت می‌شود. در فورم OPD نام مریض، نام پدر، سن و جنس، داکتر معرف، علایم حیاتی (حرارت بدن، نبض، تنفس و فشار خون) و شکایت اصلی مریض نوشته می‌شود."],
               ps: ["هر ناروغ د ناروغ د ثبت شمېرې سره ثبتېږي. د OPD په فورم کې د ناروغ نوم، د پلار نوم، عمر او جنس، معرفي ډاکټر، حیاتي نښې (د بدن تودوخه، نبض، تنفس او د وینې فشار) او د ناروغ اصلي شکایت لیکل کېږي."],
               en: ["Every patient is registered with a patient registration number. The OPD form records the patient's name, father's name, age and sex, referring doctor, vital signs (body temperature, pulse, respiration rate and blood pressure) and the main complaint."] },
      after: { fa: ["⚠️ [جای‌گذار: مدارک لازم برای پذیرش]", "⚠️ [جای‌گذار: مراحل پذیرش و بستری شدن]", "⚠️ [جای‌گذار: طرز پرداخت و فیس‌ها]"],
               ps: ["⚠️ [ځای ناستی: د منلو لپاره اړین اسناد]", "⚠️ [ځای ناستی: د منلو او بستر کېدو پړاوونه]", "⚠️ [ځای ناستی: د پیسو ورکولو طریقه او فیسونه]"],
               en: ["⚠️ [Placeholder: documents required for admission]", "⚠️ [Placeholder: admission and hospitalization steps]", "⚠️ [Placeholder: payment method and fees]"] } },
    { id: "emergency", icon: "🚑", title: S("خدمات عاجل", "بیړني خدمتونه", "Emergency Services"), audio: AUD(8), auto: "emergency",
      intro: { fa: ["شفاخانه بخش عاجل دارد و به‌صورت ۲۴ ساعته خدمت می‌کند.", "آمبولانس شفاخانه رایگان است."], ps: ["روغتون بیړنۍ څانګه لري او ۲۴ ساعته خدمت کوي.", "د روغتون امبولانس وړیا دی."], en: ["The hospital has an emergency department and serves 24 hours a day.", "The hospital ambulance is free."] },
      after: { fa: ["⚠️ [جای‌گذار: اگر شماره جداگانه برای عاجل دارید، اینجا بنویسید]"], ps: ["⚠️ [ځای ناستی: که د بیړنیو لپاره جلا شمېره لرئ، دلته ولیکئ]"], en: ["⚠️ [Placeholder: if you have a separate emergency number, add it here]"] } },
    { id: "visiting", icon: "🕒", title: S("ساعات ملاقات و معلومات مریض", "د لیدنې ساعتونه او د ناروغ معلومات", "Visiting Hours and Patient Information"), audio: AUD(9),
      after: { fa: ["⚠️ [جای‌گذار: ساعات ملاقات مریض‌ها]", "⚠️ [جای‌گذار: قوانین ملاقات و تعداد ملاقات‌کننده]", "⚠️ [جای‌گذار: معلومات و رهنمایی برای مریض‌ها و همراهان]"],
               ps: ["⚠️ [ځای ناستی: د ناروغانو د لیدنې ساعتونه]", "⚠️ [ځای ناستی: د لیدنې قوانین او د لیدونکو شمېر]", "⚠️ [ځای ناستی: ناروغانو او همراهانو ته معلومات او لارښوونې]"],
               en: ["⚠️ [Placeholder: patient visiting hours]", "⚠️ [Placeholder: visiting rules and number of visitors]", "⚠️ [Placeholder: information and guidance for patients and companions]"] } },
    { id: "other", icon: "✨", title: S("سایر خدمات و امکانات", "نور خدمتونه او امکانات", "Other Services and Facilities"), audio: AUD(10),
      intro: { fa: ["• خدمات ۲۴ ساعته", "• آمبولانس رایگان"], ps: ["• ۲۴ ساعته خدمتونه", "• وړیا امبولانس"], en: ["• 24-hour service", "• Free ambulance"] },
      after: { fa: ["⚠️ [جای‌گذار: سایر خدمات و امکانات شفاخانه را اینجا بنویسید — فقط آنچه واقعاً موجود است]"], ps: ["⚠️ [ځای ناستی: د روغتون نور خدمتونه او امکانات دلته ولیکئ — یوازې هغه چې رښتیا شته]"], en: ["⚠️ [Placeholder: add other hospital services and facilities here — only what actually exists]"] } }
  ],

  /* ---------- علایم خطر ---------- */
  danger: [
    ["درد شدید و فشاری در سینه که به بازو یا فک می‌رود", "د سینې سخت درد چې لاس یا ژامې ته ځي", "Severe chest pain spreading to the arm or jaw"],
    ["تنگی نفس شدید یا کبود شدن لب‌ها", "سخته ساه تنګي یا د شونډو شین کېدل", "Severe shortness of breath or blue lips"],
    ["بیهوشی یا گیج شدن ناگهانی", "ناڅاپي بې‌هوشي یا ګنګسیدل", "Sudden fainting or confusion"],
    ["ضعف یا کج شدن یک طرف صورت و بدن، لکنت زبان", "د مخ یا بدن یو اړخ کمزوری یا کوږوالی، د ژبې ګړېدل", "Weakness or drooping on one side, slurred speech"],
    ["خونریزی شدید که بند نمی‌شود", "سخته وینه بهېدنه چې نه درېږي", "Heavy bleeding that does not stop"],
    ["تشنج و غش", "تشنج او غش", "Seizure"],
    ["تب بلند در طفل کوچک (به‌خصوص نوزاد)", "په کوچني ماشوم کې لوړه تبه (په ځانګړي ډول نوي زېږېدلی)", "High fever in a small child, especially a newborn"],
    ["درد شدید ناگهانی شکم یا قی دوامدار", "ناڅاپي سخت د خېټې درد یا دوامداره کانګې", "Sudden severe abdominal pain or constant vomiting"],
    ["خونریزی یا درد شدید در دوران حاملگی", "د حاملګۍ پر مهال سخته وینه بهېدنه یا درد", "Bleeding or severe pain during pregnancy"],
    ["مسمومیت، سوختگی شدید یا حادثه", "زهرجنېدل، سخته سوځېدنه یا پېښه", "Poisoning, severe burn or accident"],
    ["اسهال و قی زیاد با خشک شدن بدن (به‌خصوص در اطفال)", "ډېر اسهال او کانګې د بدن وچېدو سره (په ځانګړي ډول په ماشومانو کې)", "Heavy diarrhea and vomiting with dehydration, especially in children"]
  ]
};

/* تبدیل سطرهای خدمات به شکل سه‌زبانه */
window.APP_DATA.departments.forEach(function (d) {
  d.services = d.services.map(function (a) { return S(a[0], a[1], a[2]); });
});
window.APP_DATA.danger = window.APP_DATA.danger.map(function (a) { return S(a[0], a[1], a[2]); });
