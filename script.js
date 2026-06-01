/* =========================================================================
   App logic. The content lives in site-data.js (loaded BEFORE this file)
   as the global SITE_DATA object — edit your texts/links/contacts there.
   ========================================================================= */

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
