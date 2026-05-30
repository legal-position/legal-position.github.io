/* =========================================================================
   SITE_DATA — РЕДАГУЙТЕ ТУТ. Усі тексти, посилання й контакти в одному місці.
   Замініть приклади-заглушки на справжні дані об'єднання.
   ========================================================================= */
const SITE_DATA = {
  brand: {
    name: "Правова Позиція",
    tagline: "Адвокатське об'єднання",
    heroTitle: "Захищаємо ваші права професійно та до результату",
    heroSubtitle: "Юридична допомога фізичним особам і бізнесу. Чесна оцінка перспектив справи на першій консультації."
  },
  stats: [
    { num: "15+", label: "років практики" },
    { num: "1200+", label: "справ" },
    { num: "94%", label: "виграних справ" }
  ],
  about: {
    text: "Наше адвокатське об'єднання — це команда досвідчених юристів, які працюють заради результату клієнта. Ми поєднуємо глибоке знання права з людяним підходом до кожної справи.",
    advantages: [
      { icon: "shield", title: "Досвід і репутація", text: "Понад 15 років успішної практики в різних галузях права." },
      { icon: "scale", title: "Чесність", text: "Реалістична оцінка перспектив справи без порожніх обіцянок." },
      { icon: "clock", title: "Оперативність", text: "Швидко реагуємо та тримаємо вас у курсі на кожному етапі." },
      { icon: "lock", title: "Конфіденційність", text: "Гарантуємо повну адвокатську таємницю." }
    ]
  },
  team: [
    { name: "Олена Ковальчук", role: "Керуючий партнер · судовий захист", bio: "Спеціалізується на складних судових спорах та представництві в усіх інстанціях.", photo: "" },
    { name: "Андрій Мельник", role: "Партнер · корпоративне право", bio: "Супровід бізнесу, договірне та податкове право, due diligence.", photo: "" },
    { name: "Ірина Шевченко", role: "Адвокат · сімейне право", bio: "Сімейні, спадкові та житлові спори, захист інтересів дітей.", photo: "" }
  ],
  services: [
    { icon: "gavel", title: "Судовий захист", text: "Представництво в судах усіх інстанцій у цивільних, господарських та адміністративних справах." },
    { icon: "home", title: "Нерухомість", text: "Супровід угод, оформлення та спори щодо майна." },
    { icon: "doc", title: "Договірне право", text: "Складання, аналіз та супровід будь-яких договорів." },
    { icon: "briefcase", title: "Бізнес і корпоративне", text: "Реєстрація, супровід та захист інтересів компаній." },
    { icon: "family", title: "Сімейне право", text: "Розлучення, аліменти, поділ майна, спадщина." },
    { icon: "shield", title: "Кримінальний захист", text: "Захист на всіх стадіях кримінального провадження." }
  ],
  testimonials: [
    { text: "Виграли справу, яку інші вважали безнадійною. Дуже вдячна за професіоналізм!", author: "Марія К." },
    { text: "Чітко, швидко й по суті. Супроводжували угоду без жодних проблем.", author: "Олександр В." },
    { text: "Пояснили все простою мовою й вели справу від початку до кінця.", author: "Тетяна Л." }
  ],
  faq: [
    { q: "Скільки коштує перша консультація?", a: "Перша консультація для оцінки перспектив справи безкоштовна." },
    { q: "Чи працюєте ви дистанційно?", a: "Так, ми консультуємо онлайн і ведемо справи по всій Україні." },
    { q: "Скільки триває розгляд справи?", a: "Залежить від категорії справи; на консультації ми надамо реалістичні строки." },
    { q: "Як відбувається оплата послуг?", a: "Вартість фіксуємо в договорі заздалегідь — без прихованих платежів." }
  ],
  social: {
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    tiktok: "https://tiktok.com/",
    telegram: "https://t.me/"
  },
  contacts: {
    phone: "+38 (000) 000-00-00",
    email: "info@example.com",
    address: "м. Київ, вул. Прикладна, 1",
    hours: "Пн–Пт, 9:00–18:00",
    telegramUrl: "https://t.me/",
    // Google Maps embed: Maps -> Поділитися -> Вбудувати карту -> вставте сюди значення src з iframe (https://www.google.com/maps/embed?pb=...)
    mapEmbedUrl: ""
  }
};

/* Inline SVG icons keyed by name used in SITE_DATA. */
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
  instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  youtube:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none"/></svg>',
  tiktok:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 3c.3 2.2 1.7 3.9 3.9 4.2v2.8c-1.4 0-2.7-.4-3.9-1.1v5.6c0 3-2.4 5.5-5.5 5.5S5 17.6 5 14.5 7.4 9 10.5 9c.3 0 .6 0 .9.1v2.9c-.3-.1-.6-.2-.9-.2-1.5 0-2.6 1.2-2.6 2.7s1.1 2.7 2.6 2.7 2.6-1.2 2.6-2.7V3H16z"/></svg>',
  telegram:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 4L3 11l5 2 2 6 3-4 4 3 4-14zM9 13l8-5-6 6-.3 3z"/></svg>'
};
function icon(name){ return ICONS[name] || ICONS.scale; }

function renderHero(){
  document.getElementById('hero-eyebrow').textContent = SITE_DATA.brand.tagline;
  document.getElementById('hero-title').textContent = SITE_DATA.brand.heroTitle;
  document.getElementById('hero-subtitle').textContent = SITE_DATA.brand.heroSubtitle;
  document.getElementById('nav-logo').textContent = SITE_DATA.brand.name;
  document.title = SITE_DATA.brand.name + " — " + SITE_DATA.brand.tagline;
  document.getElementById('hero-stats').innerHTML = SITE_DATA.stats
    .map(s => `<div><div class="num">${s.num}</div><div class="cap">${s.label}</div></div>`).join('');
}

function renderCard({ icon: iconName, title, text }){
  return `<div class="card"><div class="card__ico">${icon(iconName)}</div><h3>${title}</h3><p>${text}</p></div>`;
}

function renderAbout(){
  document.getElementById('about-text').textContent = SITE_DATA.about.text;
  document.getElementById('about-advantages').innerHTML = SITE_DATA.about.advantages.map(renderCard).join('');
}

function initials(name){ return name.split(' ').filter(Boolean).map(w => w[0]).slice(0,2).join('').toUpperCase(); }
function renderTeam(){
  document.getElementById('team-grid').innerHTML = SITE_DATA.team.map(m => {
    const photo = m.photo
      ? `<img class="member__photo" src="${m.photo}" alt="${m.name}">`
      : `<div class="member__photo">${initials(m.name)}</div>`;
    return `<div class="card member">${photo}<h3>${m.name}</h3><div class="member__role">${m.role}</div><p>${m.bio}</p></div>`;
  }).join('');
}

function renderServices(){
  document.getElementById('services-grid').innerHTML = SITE_DATA.services.map(renderCard).join('');
}

function renderTestimonials(){
  document.getElementById('testimonials-grid').innerHTML = SITE_DATA.testimonials
    .map(t => `<div class="quote"><p>${t.text}</p><div class="quote__author">${t.author}</div></div>`).join('');
}

function renderFAQ(){
  document.getElementById('faq-list').innerHTML = SITE_DATA.faq.map(f =>
    `<div class="faq__item">
       <button class="faq__q" type="button" aria-expanded="false">${f.q}<span class="mark" aria-hidden="true">+</span></button>
       <div class="faq__a"><p>${f.a}</p></div>
     </div>`).join('');

  document.querySelectorAll('.faq__q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq__item').forEach(i => {
        i.classList.remove('is-open');
        i.querySelector('.faq__a').style.maxHeight = null;
        i.querySelector('.faq__q').setAttribute('aria-expanded','false');
      });
      if(!isOpen){
        item.classList.add('is-open');
        const ans = item.querySelector('.faq__a');
        ans.style.maxHeight = ans.scrollHeight + 'px';
        btn.setAttribute('aria-expanded','true');
      }
    });
  });
}

function renderSocial(){
  const s = SITE_DATA.social;
  const items = [
    { key:'instagram', label:'Instagram', url:s.instagram },
    { key:'youtube', label:'YouTube', url:s.youtube },
    { key:'tiktok', label:'TikTok', url:s.tiktok },
    { key:'telegram', label:'Telegram', url:s.telegram }
  ];
  document.getElementById('social-links').innerHTML = items
    .map(i => `<a class="social__btn" href="${i.url}" target="_blank" rel="noopener">${icon(i.key)}<span>${i.label}</span></a>`).join('');
}

function renderContacts(){
  const c = SITE_DATA.contacts;
  const telHref = 'tel:' + c.phone.replace(/[^+\d]/g,'');
  document.getElementById('contacts-list').innerHTML = `
    <li><span class="k">Телефон</span><span class="v">${c.phone}</span></li>
    <li><span class="k">Email</span><span class="v">${c.email}</span></li>
    <li><span class="k">Адреса</span><span class="v">${c.address}</span></li>
    <li><span class="k">Графік</span><span class="v">${c.hours}</span></li>`;
  document.getElementById('contacts-actions').innerHTML = `
    <a class="btn btn--primary" href="${c.telegramUrl}" target="_blank" rel="noopener">Написати в Telegram</a>
    <a class="btn btn--ghost" href="${telHref}">Зателефонувати</a>
    <a class="btn btn--ghost" href="mailto:${c.email}">Email</a>`;
  if (c.mapEmbedUrl) { document.getElementById('contacts-map').src = c.mapEmbedUrl; }
}

function renderFooter(){
  const year = new Date().getFullYear();
  document.getElementById('footer').innerHTML = `
    <div class="container footer__inner">
      <div class="footer__brand">${SITE_DATA.brand.name}</div>
      <nav class="footer__links" aria-label="Нижнє меню">
        <a href="#about">Про нас</a>
        <a href="#services">Послуги</a>
        <a href="#faq">FAQ</a>
        <a href="#contacts">Контакти</a>
      </nav>
      <div class="footer__copy">© ${year} ${SITE_DATA.brand.name}. Усі права захищено.</div>
    </div>`;
}

function initInteractions(){
  // Mobile burger menu
  const burger = document.getElementById('nav-burger');
  const menu = document.getElementById('nav-menu');
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('is-open');
    burger.setAttribute('aria-expanded','false');
  }));

  // Back-to-top button
  const toTop = document.getElementById('to-top');
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('is-visible', window.scrollY > 500);
  });
  toTop.addEventListener('click', () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top:0, behavior: reduced ? 'auto' : 'smooth' });
  });

  // Scroll reveal
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('is-in'); obs.unobserve(e.target); } });
  }, { threshold:0.12 });
  document.querySelectorAll('.section, .hero').forEach(el => { el.classList.add('reveal'); obs.observe(el); });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderAbout();
  renderTeam();
  renderServices();
  renderTestimonials();
  renderFAQ();
  renderSocial();
  renderContacts();
  renderFooter();
  initInteractions();
});
