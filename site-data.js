/* =========================================================================
   ICONS - усі SVG іконки, які можна використовувати в SITE_DATA.
   SITE_DATA — РЕДАГУЙТЕ ТУТ. Усі тексти, посилання й контакти в одному місці.
   Замініть приклади-заглушки на справжні дані об'єднання.
   Цей файл підключається ПЕРЕД script.js і визначає глобальний об'єкт SITE_DATA.
   ========================================================================= */
const ICONS = {
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/></svg>',
  scale:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v18M5 7h14M7 7l-3 6a3 3 0 006 0L7 7zm10 0l-3 6a3 3 0 006 0l-3-6zM8 21h8"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',
  gavel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 4l6 6-3 3-6-6 3-3zM9 9l-5 5 3 3 5-5M4 21h8"/></svg>',
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 11l8-7 8 7M6 10v9h12v-9"/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 3h7l4 4v14H7zM14 3v4h4M9 12h6M9 16h6"/></svg>',
  briefcase:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>',
  family:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M3 20c0-3 2-5 5-5s5 2 5 5M13 20c0-3 2-5 5-5"/></svg>',
  hammer_and_wrench:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/></svg>',
  dollar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8"/><path d="M12 7v10"/><path d="M9 9c0-1 1-2 3-2s3 1 3 2-1 2-3 2-3 1-3 3 1 3 3 3 3-1 3-2"/></svg>',
  hammer:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4l5.5 5.5-2 2L12.5 6.5 14.5 4z"/><path d="M12.5 6.5L4 15l3 3 8.5-8.5"/><path d="M3 21h7"/></svg>',
  car:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 15V10.5L7 6h10l2 4.5V15"/><path d="M5 15h14"/><path d="M7 18v-3"/><path d="M17 18v-3"/><path d="M8 12h2"/><path d="M14 12h2"/><path d="M7 6h10"/></svg>',
  fine:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M9 9h5"/><path d="M9 13h3"/><path d="M14 10v8"/><path d="M12.5 12c0-1 0.7-2 1.5-2s1.5 1 1.5 2-0.7 2-1.5 2-1.5 1-1.5 2 0.7 2 1.5 2 1.5-1 1.5-2"/></svg>',
  credit_card:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/><path d="M7 15h3"/></svg>',
  unlock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 017-2"/></svg>',
  handshake:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 12l4 4 4-4"/><path d="M4 9l4 3"/><path d="M20 9l-4 3"/><path d="M8 12v4"/><path d="M16 12v4"/></svg>',
  herb:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V10"/><path d="M12 10c-4 0-7-3-7-7 4 0 7 3 7 7z"/><path d="M12 10c4 0 7-3 7-7-4 0-7 3-7 7z"/><path d="M12 14c-3 0-5-2-5-5 3 0 5 2 5 5z"/><path d="M12 14c3 0 5-2 5-5-3 0-5 2-5 5z"/></svg>',
  instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  youtube:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none"/></svg>',
  tiktok:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 3c.3 2.2 1.7 3.9 3.9 4.2v2.8c-1.4 0-2.7-.4-3.9-1.1v5.6c0 3-2.4 5.5-5.5 5.5S5 17.6 5 14.5 7.4 9 10.5 9c.3 0 .6 0 .9.1v2.9c-.3-.1-.6-.2-.9-.2-1.5 0-2.6 1.2-2.6 2.7s1.1 2.7 2.6 2.7 2.6-1.2 2.6-2.7V3H16z"/></svg>',
  telegram:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 4L3 11l5 2 2 6 3-4 4 3 4-14zM9 13l8-5-6 6-.3 3z"/></svg>'
};
const SITE_DATA = {
  brand: {
    name: 'А.О. "Правова Позиція"',
    tagline: "Адвокатське об'єднання",
    heroTitle: "Захищаємо ваші права професійно та до результату",
    heroSubtitle: "Юридична допомога фізичним особам і бізнесу. Об'єктивна оцінка перспектив справи на першій консультації."
  },
  stats: [
    { num: "15", label: "років практики" },
    { num: "1200+", label: "справ" },
    { num: "99%", label: "виграних справ" }
  ],
  about: {
   text: "Наше адвокатське об'єднання — це команда висококваліфікованих адвокатів та юристів із багаторічним практичним досвідом, об'єднаних спільною метою — забезпечення максимально ефективного захисту інтересів клієнтів. Ми супроводжуємо справи будь-якої складності, пропонуючи професійні правові рішення, орієнтовані на результат, довіру та бездоганну репутацію. \n Ми не нав'язуємо клієнту непотрібних послуг! Ми не працюємо на його опонента! Та в жодному разі не ставимо якість роботи в залежність від розміру гонорару!",
   advantages: [
      { icon: "shield", title: "Досвід і репутація", text: "15 років успішної практики в різних галузях права." },
      { icon: "scale", title: "Чесність", text: "Реалістична оцінка перспектив справи без порожніх обіцянок." },
      { icon: "clock", title: "Оперативність", text: "Швидко реагуємо та тримаємо вас у курсі на кожному етапі." },
      { icon: "lock", title: "Конфіденційність", text: "Гарантуємо повну адвокатську таємницю." }
    ]
  },
  team: [
    { name: "Тарасенко Андрій Юрійович", role: "Керуючий партнер адвокатського об'єднання", bio: "", photo: "./images/participant_2.png" },
    { name: "Ковтун Андрій Володимирович", role: "Старший партнер адвокатського об'єднання", bio: "", photo: "./images/participant_1.jpg" },
  ],
  services: [
    { icon: "scale", title: "Судовий захист", text: "Представництво інтересів юридичних та фізичних осіб у судах усіх інстанцій у кримінальних, цивільних, господарських, адміністративних справах та справах про адміністративні правопорушення." },
    { icon: "handshake", title: "Представництво інтересів", text: "Представництво інтересів юридичних та фізичних осіб в державних органах, органах місцевого самоврядування, на підприємствах, установах та організаціях всіх форм власності, перед третіми особами." },
    { icon: "home", title: "Нерухомість", text: "Супровід та оформлення угод щодо нерухомого майна." },
    { icon: "doc", title: "Договірне право", text: "Складання, аналіз та супровід будь-яких договорів." },
    { icon: "briefcase", title: "Бізнес і корпоративне право", text: "Реєстрація, супровід та захист інтересів Вашого бізнесу." },
    { icon: "family", title: "Сімейне право", text: "Розлучення, аліменти, поділ майна, спадщина, визначення місця проживання дітей, визначення порядку участі батьків у житті дітей, позбавлення батьківських прав." },
    { icon: "shield", title: "Кримінальний захист", text: "Захист на всіх стадіях кримінального провадження." },
    { icon: "fine", title: "Адміністративні правопорушення", text: "Оскарження протоколів про адмінстративні правопорушення." },
    { icon: "car", title: "ДТП", text: "Вирішення спорів пов'язаних з дорожньо-транспортними пригодами" },
    { icon: "credit_card", title: "Пенсійні справи", text: "Вирішення спорів пов'язаних з призначенням та перерахунком пенсій" },
    { icon: "herb", title: "Земельні спори", text: "Вирішення земельних спорів" },
    { icon: "dollar", title: "Боргові зобов'язання", text: "Вирішення кредитних спорів та спорів пов'язаних зі стягненням грошових коштів (боргів)" },
    { icon: "hammer", title: "Трудові спори", text: "Вирішення трудових спорів" },
    { icon: "hammer_and_wrench", title: "Житлово-комунальні послуги", text: "Вирішення спорів у сфері житлово-комунальних послуг" },
    { icon: "unlock", title: "Зняття арешту", text: "Зняття арешту з майна у кримінальному, цивільному та господарському процесах" }
  ],
  testimonials: [
    { text: "Виграли справу, яку інші вважали безнадійною. Дуже вдячна за професіоналізм!", author: "Марія К." },
    { text: "Чітко, швидко й по суті! Супроводжували нашу угоду без жодних проблем.", author: "Олександр В." },
    { text: "Пояснили все простою мовою, вели справу від початку до кінця. Виграли там, де навіть я вже не вірила!", author: "Тетяна Л." },
    { text: "I am shocked by what you did! You did a great job... everything is exactly as We've repeatedly discussed. THANK YOU AGAIN for doing such an outstanding job!", author: "James" },
    { text: "Вы – супер!!! Я в Вас никогда не сомневалась! Я на 100% знала, что Вы выиграете наш суд! Огромное спасибо!!!", author: "Наталия Б." },
    { text: "Професіонали своєї справи. Все швидко та оперативно. При тому, що я весь цей час була за кордоном. Тепер по всіх питаннях тільки до Вас.", author: "Марія Т." },
  ],
  faq: [
    { q: "Скільки коштує консультація?", a: "Вартість консультації залежить від складності питання, вирішення якого бажає досягти клієнт та форми консультації, яку він бажає отримати. Консультація клієнта в межах справи, яку ми ведемо - безкоштовна." },
    { q: "Чи працюєте ви дистанційно?", a: "Так, ми консультуємо онлайн і ведемо справи по всій Україні." },
    { q: "Скільки триває розгляд справи?", a: "Тривалість розгляду справи залежить від її категорії та складності, обставин справи та позицій сторін. Реалістичні строки розгляду справи можна дізнатися на консультації." },
    { q: "Як відбувається оплата послуг?", a: "Вартість послуг визначається заздалегідь (при укладенні договору), — без прихованих платежів." }
  ],
  social: {
    instagram: "https://www.instagram.com/legal.position.lf?igsh=MXdmcndnNGhzMnlpeg%3D%3D",
    youtube: "https://www.youtube.com/channel/UCmn8I7dikRwsEzdSkTHGGwg",
    tiktok: "https://www.tiktok.com/@andriy_tarasenko?_r=1&_t=ZS-95EgqRKq2uy",
    telegram: "https://t.me/legalposition"
  },
  contacts: {
    phone: "+38 (097) 315-66-92",
    email: "legalpositionlf@gmail.com",
    address: "м. Черкаси, бульв. Шевченка, 222, оф. 3, 5",
    hours: "Пн–Пт, 9:00–18:00",
    telegramUrl: "https://t.me/andriytarasenko",
    // Google Maps embed: Maps -> Поділитися -> Вбудувати карту -> вставте сюди значення src з iframe (https://www.google.com/maps/embed?pb=...)
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.191187973137!2d32.05421338622563!3d49.44310339771926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b7de3148405%3A0x3e0a04b69cf5df94!2sShevchenka%20Blvd%2C%20222%2C%20Cherkasy%2C%20Cherkas&#39;ka%20oblast%2C%2018000!5e0!3m2!1sen!2sua!4v1781200369447!5m2!1sen!2sua"
  }
};
