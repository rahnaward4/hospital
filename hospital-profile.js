/* =====================================================================
   hospital-profile.js — دسته «پروفایل شفاخانه» (۱۰ بخش، سه زبان)
   Hospital Profile: 10 sections, 3 languages (fa = دری, ps = پښتو, en = English)

   چگونه ویرایش کنم؟
   • text  : متن هر بخش. هر پاراگراف را با یک سطر خالی (\n\n) جدا کنید.
   • audio : مسیر فایل صوتی شما (داخل پوشه audio).
   • audioEnabled: وقتی فایل‌های صوتی را آپلود کردید، false را به true تغییر دهید
                   تا دکمه «پخش صدا» در همه بخش‌ها ظاهر شود.
   • بخش‌های 9 و 10 (تماس و عاجل) از data.js ساخته می‌شوند.
   ===================================================================== */
(function () {
  var S = function (fa, ps, en) { return { fa: fa, ps: ps, en: en }; };
  var P = function (arr) { return arr.join("\n\n"); };

  window.HOSPITAL_PROFILE = {
    title: S("پروفایل شفاخانه", "د روغتون پروفایل", "Hospital Profile"),

    /* ← وقتی صدا آماده شد: true */
    audioEnabled: false,

    labels: {
      play:     S("پخش صدا", "غږ پیل کړئ", "Play audio"),
      stop:     S("توقف", "ودروئ", "Stop"),
      playing:  S("در حال پخش…", "غږ روان دی…", "Playing…"),
      loading:  S("در حال بارگذاری…", "بارېږي…", "Loading…"),
      error:    S("فایل صوتی پیدا نشد یا پخش نشد.", "غږیز فایل ونه موندل شو یا نه غږېږي.", "The audio file was not found or cannot be played."),
      fullList: S("دیدن لیست کامل", "بشپړ لیست وګورئ", "See the full list"),
      missing:  S("", "", "")
    },

    sections: [

      /* 1 */
      { id: "about", icon: "🏥", audio: "audio/section-01.mp3",
        title: S("درباره ما", "زموږ په اړه", "About Us"),
        text: S(
          P(["شفاخانه بین‌المللی رهنورد، یکی از مراکز ارائه‌دهنده خدمات تخصصی صحی و درمانی در شهر مزارشریف، ولایت بلخ افغانستان است که با آرمان اعتلای سطح خدمات صحی، توسعه ظرفیت‌های تشخیصی و درمانی و فراهم‌آوری امکانات معیاری و مدرن طبی، فعالیت می‌نماید.",
             "این مرکز صحی با اتکا بر دانش و تخصص کادر طبی، بهره‌گیری از تکنالوژی پیشرفته و ایجاد همکاری‌های علمی و تخصصی در عرصه طبابت، می‌کوشد تا زمینه دسترسی هم‌وطنان عزیز را به خدمات صحی باکیفیت و معیارهای مطلوب بین‌المللی در داخل کشور فراهم سازد."]),
          P(["د رهنورد نړیوال روغتون د بلخ ولایت په مزارشریف ښار کې د تخصصي روغتیايي او درملنیزو خدمتونو وړاندې کوونکو مرکزونو څخه یو دی، چې د روغتیايي خدمتونو د کچې لوړولو، د تشخیصي او درملنیزو ظرفیتونو پراختیا، او د معیاري او عصري طبي امکاناتو برابرولو په هیله فعالیت کوي.",
             "دا روغتیايي مرکز د طبي کدر په پوهه او تخصص، د پرمختللې ټیکنالوژۍ په کارولو، او د طبابت په برخه کې د علمي او تخصصي همکاریو په رامنځته کولو تکیه کوي، او هڅه کوي چې ګرانو هیوادوالو ته په هیواد کې د کیفیتي او د نړیوالو مطلوبو معیارونو سره سم روغتیايي خدمتونو ته لاسرسی برابر کړي."]),
          P(["Rahnaward International Hospital is one of the centers providing specialized health and medical services in Mazar-i-Sharif, Balkh Province, Afghanistan. It works with the aim of raising the standard of health services, developing diagnostic and treatment capacity, and providing standard and modern medical facilities.",
             "Relying on the knowledge and expertise of its medical staff, the use of advanced technology, and scientific and professional cooperation in the field of medicine, this health center strives to give our dear countrymen access, inside the country, to high-quality health services that meet desirable international standards."])
        ) },

      /* 2 */
      { id: "founder", icon: "👤", audio: "audio/section-02.mp3",
        title: S("بنیان‌گذار و شخصیت مؤسس", "بنسټ‌ایښودونکی", "Founder & Visionary"),
        text: S(
          P(["شفاخانه بین‌المللی رهنورد از جمله دستاوردهای ارزشمند دیدگاه توسعه‌محور و خدمات‌گرای محترم غلام‌عباس ابراهیم‌زاده، شخصیت شناخته‌شده در عرصه‌های علمی، آموزشی، اجتماعی و سیاسی کشور، به‌شمار می‌رود.",
             "ایشان افزون بر بنیان‌گذاری شفاخانه بین‌المللی رهنورد، مؤسس پوهنتون رهنورد و از پیشگامان ایجاد و گسترش نهادهای آموزشی و تحصیلی خصوصی در افغانستان بوده‌اند؛ نهادی که با آرمان ارتقای سطح دانش، توسعه ظرفیت‌های علمی و تربیه نسل آگاه و متخصص، در راستای رشد و تعالی نظام آموزشی کشور فعالیت می‌نماید.",
             "همچنان، ایجاد و حمایت از انستیتوت‌ها و مکاتب خصوصی، بخشی از تلاش‌های ایشان در مسیر گسترش فرصت‌های آموزشی و فراهم‌آوری زمینه آموزش برای نسل جوان افغانستان به‌شمار می‌رود.",
             "محترم غلام‌عباس ابراهیم‌زاده در عرصه سیاسی نیز سابقه خدمت در شورای ملی افغانستان را داشته و به‌عنوان نماینده مردم در ولسی جرگه (پارلمان افغانستان)، در دوره مسئولیت خویش در امور تقنینی و نمایندگی از مردم ایفای وظیفه نموده‌اند.",
             "مجموعه این فعالیت‌ها، بازتاب‌دهنده دیدگاهی مبتنی بر توسعه انسانی، گسترش دانش، ارتقای ظرفیت‌های ملی و سرمایه‌گذاری در عرصه‌های حیاتی جامعه می‌باشد؛ دیدگاهی که آثار آن را می‌توان در ایجاد و حمایت از نهادهای آموزشی، تحصیلی و صحی رهنورد مشاهده نمود."]),
          P(["د رهنورد نړیوال روغتون د محترم غلام‌عباس ابراهیم‌زاده د پرمختیا‌محوره او خدمت‌ګره لیدلوري له ارزښتناکو لاسته‌راوړنو څخه شمېرل کېږي، چې په هیواد کې په علمي، تعلیمي، ټولنیزو او سیاسي برخو کې پېژندل شوې څېره دی.",
             "هغه د رهنورد نړیوال روغتون د بنسټ‌ایښودلو سربېره، د رهنورد پوهنتون بنسټ‌ایښودونکی او په افغانستان کې د خصوصي تعلیمي او تحصیلي بنسټونو د جوړولو او پراختیا له مخکښانو څخه دی؛ هغه بنسټ چې د پوهې د کچې لوړولو، د علمي ظرفیتونو پراختیا او د پوه او متخصص نسل روزلو په هیله، د هیواد د تعلیمي نظام د ودې او پرمختګ په لار کې فعالیت کوي.",
             "همدارنګه، د خصوصي انستیتوتونو او ښوونځیو جوړول او ملاتړ د هغه د هڅو یوه برخه ده، چې د تعلیمي فرصتونو د پراخولو او د افغانستان د ځوان نسل لپاره د زده‌کړې د زمینې برابرولو په لار کې ترسره کېږي.",
             "محترم غلام‌عباس ابراهیم‌زاده په سیاسي برخه کې هم د افغانستان په ملي شورا کې د خدمت سابقه لري، او د ولسي جرګې (د افغانستان د پارلمان) د خلکو د استازي په توګه، د خپل مسؤلیت په دوره کې د قانون‌جوړونې او د خلکو د استازیتوب په چارو کې دنده ترسره کړې ده.",
             "د دې ټولو فعالیتونو مجموعه د انساني پرمختیا، د پوهې د پراختیا، د ملي ظرفیتونو د لوړولو او د ټولنې په ژوندیو برخو کې د پانګونې پر بنسټ ولاړ لیدلوری څرګندوي؛ داسې لیدلوری چې اغېز یې د رهنورد په تعلیمي، تحصیلي او روغتیايي بنسټونو کې لیدلی شو."]),
          P(["Rahnaward International Hospital is among the valuable achievements of the development-oriented and service-minded vision of the respected Ghulam Abbas Ebrahimzada, a well-known figure in the scientific, educational, social and political fields of the country.",
             "In addition to founding Rahnaward International Hospital, he is the founder of Rahnaward University and a pioneer in creating and expanding private educational institutions in Afghanistan. This institution works to raise the level of knowledge, develop scientific capacity and train an informed and specialized generation, for the growth and advancement of the country's education system.",
             "Establishing and supporting private institutes and schools is also part of his efforts to expand educational opportunities and provide learning for the young generation of Afghanistan.",
             "In the political field, the respected Ghulam Abbas Ebrahimzada has also served in the National Assembly of Afghanistan. As a representative of the people in the Wolesi Jirga (the Afghan parliament), he carried out his duties in legislative affairs and in representing the people during his term.",
             "Together, these activities reflect a vision based on human development, the spread of knowledge, strengthening national capacity, and investing in the vital areas of society. The results of this vision can be seen in the educational, academic and health institutions of Rahnaward."])
        ) },

      /* 3 */
      { id: "team", icon: "👨‍⚕️", audio: "audio/section-03.mp3",
        title: S("کادر طبی داخلی و بین‌المللی", "کورنی او نړیوال طبي کدر", "International Medical Team"),
        text: S(
          P(["یکی از وجوه تمایز شفاخانه بین‌المللی رهنورد، بهره‌مندی از ظرفیت‌های تخصصی داکتران داخلی و متخصصان بین‌المللی است.",
             "این شفاخانه با حضور داکتران متخصص افغانستان و متخصصان طبی از کشورهای پاکستان و هندوستان، زمینه بهره‌گیری از دانش، تجارب بالینی و مهارت‌های تخصصی بین‌المللی را در داخل کشور فراهم ساخته است.",
             "همکاری متخصصان داخلی و خارجی، افزون بر ارتقای ظرفیت‌های تشخیصی و درمانی، زمینه تبادل دانش طبی، انتقال تجارب تخصصی و بهبود مستمر کیفیت خدمات صحی را مهیا می‌سازد.",
             "این رویکرد، گامی مؤثر در راستای کاهش نیاز به سفرهای درمانی به خارج از کشور و فراهم‌آوری زمینه دسترسی هم‌وطنان به خدمات تخصصی و معیاری در داخل افغانستان محسوب می‌گردد."]),
          P(["د رهنورد نړیوال روغتون یو ځانګړی ځانګړتیا دا ده چې له کورنیو ډاکټرانو او نړیوالو متخصصینو د تخصصي ظرفیتونو څخه برخمن دی.",
             "دې روغتون د افغانستان د متخصصو ډاکټرانو او د پاکستان او هندوستان له هیوادونو د طبي متخصصینو په شتون سره، په هیواد کې د نړیوالې پوهې، کلینیکي تجربو او تخصصي مهارتونو څخه د ګټې اخیستنې زمینه برابره کړې ده.",
             "د کورنیو او بهرنیو متخصصینو همکاري، د تشخیصي او درملنیزو ظرفیتونو د لوړولو سربېره، د طبي پوهې د تبادلې، د تخصصي تجربو د لېږد او د روغتیايي خدمتونو د کیفیت د دوامداره ښه والي زمینه برابروي.",
             "دا لیدلوری د درملنې لپاره بهرنیو هیوادونو ته د سفرونو اړتیا د کمولو او د هېوادوالو لپاره په افغانستان کې تخصصي او معیاري خدمتونو ته د لاسرسي د زمینې برابرولو په لور اغېزناک ګام ګڼل کېږي."]),
          P(["One of the distinguishing features of Rahnaward International Hospital is that it benefits from the specialized capacity of both local doctors and international specialists.",
             "With specialist doctors from Afghanistan and medical specialists from Pakistan and India, the hospital makes international knowledge, clinical experience and specialized skills available inside the country.",
             "The cooperation of local and foreign specialists, besides raising diagnostic and treatment capacity, allows the exchange of medical knowledge, the transfer of specialized experience and the steady improvement of the quality of health services.",
             "This approach is an effective step toward reducing the need to travel abroad for treatment and giving our countrymen access to specialized, standard services inside Afghanistan."])
        ) },

      /* 4 */
      { id: "tech", icon: "🩻", audio: "audio/section-04.mp3", link: "imaging",
        title: S("امکانات تشخیصی و تکنالوژی پیشرفته", "تشخیصي امکانات او پرمختللې ټیکنالوژي", "Advanced Medical Technology"),
        text: S(
          P(["شفاخانه بین‌المللی رهنورد با بهره‌گیری از تجهیزات پیشرفته تصویربرداری و تکنالوژی‌های تشخیصی، زمینه بررسی دقیق‌تر وضعیت صحی بیماران و شناسایی بهتر بیماری‌ها را فراهم نموده است.",
             "از جمله امکانات این بخش می‌توان به موارد ذیل اشاره نمود:",
             "• MRI: تصویربرداری رزونانس مقناطیسی جهت بررسی دقیق بافت‌ها و اندام‌های داخلی بدن.\n• CT-Scan: تصویربرداری مقطعی و پیشرفته از ساختارهای داخلی بدن.\n• Digital X-Ray: تصویربرداری دیجیتالی برای ارزیابی استخوان‌ها و سایر ساختارهای بدن.\n• Ultrasound: تصویربرداری التراسونیک جهت بررسی اعضای داخلی بدن و وضعیت دوران بارداری.",
             "این تجهیزات در کنار تخصص داکتران و ظرفیت‌های تشخیصی شفاخانه، نقش ارزنده‌ای در تشخیص دقیق‌تر و اتخاذ رویکرد مناسب درمانی ایفا می‌نمایند."]),
          P(["د رهنورد نړیوال روغتون د تصویربرداري د پرمختللو تجهیزاتو او تشخیصي ټیکنالوژیو په کارولو سره، د ناروغانو د روغتیايي حالت د دقیق‌تر څېړلو او د ناروغیو د ښه پېژندلو زمینه برابره کړې ده.",
             "د دې برخې له امکاناتو څخه کولای شو لاندې مواردو ته اشاره وکړو:",
             "• MRI: د مقناطیسي رزونانس انځورګري، د بدن د ننني نسجونو او غړو د دقیق څېړلو لپاره.\n• CT-Scan: د بدن د نننیو جوړښتونو مقطعي او پرمختللې انځورګري.\n• Digital X-Ray: ډیجیټل انځورګري، د هډوکو او د بدن د نورو جوړښتونو د ارزونې لپاره.\n• Ultrasound: التراسونیک انځورګري، د بدن د ننني غړو او د حاملګۍ د حالت د څېړلو لپاره.",
             "دا تجهیزات د ډاکټرانو د تخصص او د روغتون د تشخیصي ظرفیتونو سره یو ځای، د دقیق‌تر تشخیص او د مناسبې درملنیزې لارې د غوره کولو په برخه کې ارزښتناکه ونډه لري."]),
          P(["Using advanced imaging equipment and diagnostic technology, Rahnaward International Hospital makes it possible to examine patients' health more precisely and to identify diseases better.",
             "The facilities in this section include:",
             "• MRI: magnetic resonance imaging for a detailed look at the body's tissues and internal organs.\n• CT-Scan: advanced cross-sectional imaging of the body's internal structures.\n• Digital X-Ray: digital imaging to assess bones and other body structures.\n• Ultrasound: ultrasonic imaging to examine the internal organs and the state of pregnancy.",
             "Together with the expertise of the doctors and the hospital's diagnostic capacity, this equipment plays a valuable role in more accurate diagnosis and in choosing the right treatment approach."])
        ) },

      /* 5 */
      { id: "lab", icon: "🔬", audio: "audio/section-05.mp3", link: "lab",
        title: S("لابراتوار تخصصی", "تخصصي لابراتوار", "Specialized Laboratory"),
        text: S(
          P(["بخش لابراتوار شفاخانه بین‌المللی رهنورد با بهره‌مندی از تجهیزات و امکانات آزمایشگاهی، خدمات تشخیصی عمومی و تخصصی را در زمینه‌های گوناگون ارائه می‌نماید.",
             "این بخش با انجام آزمایش‌های طبی و ارزیابی نتایج لابراتواری، نقش اساسی در شناسایی، تشخیص، پیگیری و نظارت بر روند بیماری‌ها داشته و در هماهنگی با داکتران متخصص، زمینه اتخاذ تصمیم‌های درمانی دقیق‌تر را فراهم می‌سازد."]),
          P(["د رهنورد نړیوال روغتون لابراتوار برخه د لابراتواري تجهیزاتو او امکاناتو په درلودلو سره، په بېلابېلو برخو کې عمومي او تخصصي تشخیصي خدمتونه وړاندې کوي.",
             "دا برخه د طبي ازموینو په ترسره کولو او د لابراتواري پایلو په ارزونه سره، د ناروغیو په پېژندلو، تشخیص، تعقیب او د بهیر په څارنه کې بنسټیز رول لري، او له متخصصو ډاکټرانو سره په همغږۍ، د دقیق‌تر درملنیزو پرېکړو زمینه برابروي."]),
          P(["The laboratory department of Rahnaward International Hospital, with its laboratory equipment and facilities, provides general and specialized diagnostic services in many different areas.",
             "By carrying out medical tests and evaluating laboratory results, this department plays a key role in identifying, diagnosing, following up and monitoring the course of diseases, and, in coordination with specialist doctors, makes more accurate treatment decisions possible."])
        ) },

      /* 6 */
      { id: "departments", icon: "🩺", audio: "audio/section-06.mp3",
        title: S("بخش‌های تخصصی و خدمات درمانی", "تخصصي برخې او درملنیز خدمتونه", "Medical Departments"),
        text: S(
          P(["شفاخانه بین‌المللی رهنورد با فراهم‌آوری بخش‌های متعدد تخصصی، مجموعه‌ای از خدمات تشخیصی، مشورتی، درمانی و مراقبت‌های صحی را در عرصه‌های مختلف طبابت عرضه می‌نماید.",
             "هم‌افزایی میان داکتران متخصص داخلی و خارجی، بخش‌های تشخیصی و واحدهای درمانی، زمینه رسیدگی منسجم و مؤثر به نیازهای صحی بیماران را فراهم می‌آورد."]),
          P(["د رهنورد نړیوال روغتون د ډېرو تخصصي برخو په برابرولو سره، د طبابت په بېلابېلو برخو کې د تشخیصي، مشورتي، درملنیزو او روغتیايي پاملرنې خدمتونو یوه ټولګه وړاندې کوي.",
             "د کورنیو او بهرنیو متخصصو ډاکټرانو، تشخیصي برخو او درملنیزو واحدونو ترمنځ همکاري، د ناروغانو د روغتیايي اړتیاو ته د منظم او اغېزناک رسیدګۍ زمینه برابروي."]),
          P(["By providing many specialized departments, Rahnaward International Hospital offers a range of diagnostic, advisory, treatment and health care services across different fields of medicine.",
             "The combined work of local and foreign specialist doctors, diagnostic departments and treatment units makes it possible to meet patients' health needs in a coordinated and effective way."])
        ) },

      /* 7 */
      { id: "facilities", icon: "🛏️", audio: "audio/section-07.mp3",
        title: S("محیط و امکانات رفاهی", "چاپیریال او هوساینې امکانات", "Facilities and Accommodation"),
        text: S(
          P(["توجه به کرامت انسانی، آسایش بیماران و فراهم‌آوری محیط مناسب درمانی، از اصول مورد توجه شفاخانه بین‌المللی رهنورد می‌باشد.",
             "اتاق‌های بستری، اتاق‌های VIP و VVIP و سایر امکانات رفاهی، در راستای تأمین آسایش بیماران و همراهان آنان در نظر گرفته شده‌اند تا خدمات صحی در محیطی مناسب و شایسته ارائه گردد."]),
          P(["انساني کرامت ته پاملرنه، د ناروغانو آرام او د مناسب درملنیز چاپیریال برابرول د رهنورد نړیوال روغتون له هغو اصولو څخه دي چې ورته ځانګړې پاملرنه کېږي.",
             "د بستر خونې، VIP او VVIP خونې او نور هوساینې امکانات د ناروغانو او د هغوی د ملګرو د آرام د تأمین لپاره په پام کې نیول شوي، ترڅو روغتیايي خدمتونه په یو مناسب او لایق چاپیریال کې وړاندې شي."]),
          P(["Respect for human dignity, the comfort of patients and a suitable healing environment are among the principles Rahnaward International Hospital pays attention to.",
             "Inpatient rooms, VIP and VVIP rooms and other comfort facilities are provided for the comfort of patients and their companions, so that health services are delivered in a suitable and dignified environment."])
        ) },

      /* 8 */
      { id: "vision", icon: "🎯", audio: "audio/section-08.mp3",
        title: S("چشم‌انداز و رسالت", "لیدلوری او رسالت", "Vision and Mission"),
        text: S(
          P(["شفاخانه بین‌المللی رهنورد، با چشم‌انداز تبدیل‌شدن به یکی از مراکز پیشرو و معتبر خدمات صحی در افغانستان، رسالت خویش را بر مبنای ارتقای کیفیت خدمات درمانی، توسعه ظرفیت‌های تخصصی، بهره‌گیری از دانش بین‌المللی و استفاده مؤثر از تکنالوژی مدرن طبی استوار ساخته است.",
             "ما باورمندیم که سلامت، بنیاد توسعه و رفاه جامعه است و دسترسی به خدمات صحی باکیفیت، از حقوق اساسی هر انسان به‌شمار می‌رود.",
             "از همین‌رو، با اتکا بر تخصص، تعهد حرفه‌ای، تجارب داخلی و بین‌المللی و رویکردی انسان‌محور، در مسیر ارائه خدماتی شایسته، مطمئن و درخور اعتماد هم‌وطنان عزیز گام برمی‌داریم.",
             "شفاخانه بین‌المللی رهنورد؛ تبلور تخصص، دانش بین‌المللی و تعهد به سلامت جامعه."]),
          P(["د رهنورد نړیوال روغتون، په افغانستان کې د روغتیايي خدمتونو د یو مخکښ او معتبر مرکز په توګه د بدلېدو په لیدلوري سره، خپل رسالت د درملنیزو خدمتونو د کیفیت د لوړولو، د تخصصي ظرفیتونو د پراختیا، د نړیوالې پوهې څخه د ګټې اخیستنې او د عصري طبي ټیکنالوژۍ د اغېزمنې کارونې پر بنسټ ټینګ کړی دی.",
             "موږ باور لرو چې روغتیا د ټولنې د پرمختیا او هوساینې بنسټ دی، او د کیفیتي روغتیايي خدمتونو ته لاسرسی د هر انسان له بنسټیزو حقونو څخه ګڼل کېږي.",
             "له همدې امله، د تخصص، مسلکي ژمنې، کورنیو او نړیوالو تجربو او انسان‌محوره چلند په تکیه، د ګرانو هیوادوالو لپاره د لایقو، باوري او د باور وړ خدمتونو د وړاندې کولو په لار کې ګامونه اخلو.",
             "د رهنورد نړیوال روغتون؛ د تخصص، نړیوالې پوهې او د ټولنې د روغتیا ته د ژمنې څرګندونه."]),
          P(["With a vision of becoming one of the leading and trusted health service centers in Afghanistan, Rahnaward International Hospital has built its mission on raising the quality of treatment services, developing specialized capacity, using international knowledge, and making effective use of modern medical technology.",
             "We believe that health is the foundation of a society's development and wellbeing, and that access to quality health services is a basic right of every person.",
             "For this reason, relying on expertise, professional commitment, local and international experience, and a human-centered approach, we are working to provide dignified, reliable services worthy of the trust of our dear countrymen.",
             "Rahnaward International Hospital: the embodiment of expertise, international knowledge and commitment to the health of society."])
        ) },

      /* 9 — از data.js */
      { id: "contact", icon: "📍", audio: "audio/section-09.mp3",
        title: S("موقعیت و معلومات تماس", "موقعیت او د اړیکې معلومات", "Hospital Location and Contact Information"),
        text: S("", "", "") },

      /* 10 — از data.js */
      { id: "emergency", icon: "🚑", audio: "audio/section-10.mp3",
        title: S("خدمات عاجل (اورژانس)", "بیړني (عاجل) خدمتونه", "Emergency Services"),
        text: S("", "", "") }
    ]
  };
})();
