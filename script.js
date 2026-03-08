const WHATSAPP_NUMBER = '41765221262';

const I18N = {
  de: {
    'topbar.pill': 'Schweiz • Film + Foto • Luxury Visuals',
    'topbar.phone': 'WhatsApp/Anruf: +41 76 522 12 62',
    'nav.services': 'Services',
    'nav.showreel': 'Showreel',
    'nav.gallery': 'Galerie',
    'nav.testimonials': 'Testimonials',
    'nav.about': 'Über mich',
    'nav.contact': 'Kontakt',
    'hero.kicker': 'Luxury Hochzeitsfotografie • Schweiz',
    'hero.title': 'Cinematic Luxury — zeitlose Visual Stories.',
    'hero.text': 'Elegante Hochzeiten, traditionelle Looks und emotionale Portraits — modern, hochwertig und mit viel Gefühl erzählt.',
    'hero.cta1': 'Galerie ansehen',
    'hero.cta2': 'Datum reservieren',
    'trust.1t': 'Diskret', 'trust.1s': 'Professionelle Präsenz',
    'trust.2t': 'Cineastisch', 'trust.2s': 'Elegantes Storytelling',
    'trust.3t': 'Zuverlässig', 'trust.3s': 'Strukturierter Ablauf',
    'form.title': 'Schnellanfrage','form.text':'Datum + Ort senden. Ich antworte schnell.','form.name':'Name','form.type':'Event-Typ','form.date':'Datum','form.place':'Ort','form.message':'Nachricht','form.submit':'Per WhatsApp senden',
    'services.eyebrow':'Services','services.title':'Mehr Premium. Mehr Klarheit. Mehr Vertrauen.','services.text':'Leistungen klar präsentiert, elegant gestaltet und mit starkem Premium-Gefühl für Brautpaare in der Schweiz.',
    'services.badge1':'Hochzeiten','services.badge2':'Tradition','services.badge3':'Editorial',
    'services.s1t':'Ganztägige Begleitung','services.s1d':'Vom Getting Ready bis zur Feier — ruhige Begleitung, starke Momente und elegante Bildsprache.','services.s1l1':'Emotionale Reportage','services.s1l2':'Portraits mit Führung','services.s1l3':'Luxuriöse Auswahl & Bearbeitung',
    'services.s2t':'Traditionelle Looks','services.s2d':'Kulturelle Kleidung, edle Details und zeitlose Portraits mit Respekt und moderner Veredelung.','services.s2l1':'Saubere Farben','services.s2l2':'Premium Retusche','services.s2l3':'Starke Close-ups',
    'services.s3t':'Editorial Portraits','services.s3d':'Für Paare, die ihre Hochzeit mit einem luxuriösen, modernen und selbstbewussten Look zeigen möchten.','services.s3l1':'Magazin-Feeling','services.s3l2':'Feine Komposition','services.s3l3':'Eleganter Abschluss',
    'showreel.eyebrow':'Showreel','showreel.title':'Premium Preview','showreel.text':'Eine ruhige, hochwertige Vorschau deiner Bildsprache — optimiert für Smartphone und Desktop.','showreel.caption':'Hochwertige Hochzeitsreportagen, klassische Eleganz und starke Momente für eine luxuriöse Präsentation.',
    'gallery.eyebrow':'Galerie','gallery.title':'Echte Bilder. Premium Look.','gallery.text':'Eine ausgewählte Galerie mit 15 echten Bildern, hochwertigem Crop und klickbarer Lightbox.',
    'testimonials.eyebrow':'Testimonials','testimonials.title':'Worte, die Vertrauen geben','testimonials.text':'Eine etwas luxuriösere Präsentation mit Bild, Bewertung und ruhigem Layout.',
    'testimonials.q1':'„Kirubel captured every emotion with elegance and peace. The result feels premium and timeless.“',
    'testimonials.q2':'„Traditional photos and modern editing together — exactly the confidence and beauty we wanted.“',
    'testimonials.q3':'„Very calm guidance, professional presence and a wow result on both phone and desktop.“','testimonials.q4':'„We loved the balance of romance, culture and clean premium editing. The photos feel rich and alive.“',
    'about.eyebrow':'Über mich','about.title':'Freundlich. Elegant. Mit Herz.','about.text':'Kirubel Photo & Video 4U steht für moderne Hochzeitsfotografie mit ruhiger Begleitung, starker Bildsprache und einem Premium-Look, der auf Smartphone und Desktop sauber funktioniert.','about.noteTitle':'Warum diese Version besser ist','about.li1':'Mobiler Hero jetzt edler und ruhiger','about.li2':'Services wirken stärker und hochwertiger','about.li3':'Hamburger-Menü bleibt sichtbar','about.li4':'Galerie und Testimonials sind wieder vollständig',
    'contact.eyebrow':'Kontakt','contact.title':'Datum reservieren','contact.text':'Schreib direkt per WhatsApp oder Telefon für Verfügbarkeit, Preise und Buchung.',
    'footer.partners':'Partner:','footer.rights':'Alle Rechte vorbehalten.'
  },
  en: {
    'topbar.pill': 'Switzerland • Film + Photo • Luxury Visuals',
    'topbar.phone': 'WhatsApp/Call: +41 76 522 12 62',
    'nav.services': 'Services','nav.showreel': 'Showreel','nav.gallery': 'Gallery','nav.testimonials':'Testimonials','nav.about':'About','nav.contact':'Contact',
    'hero.kicker':'Luxury Wedding Photography • Switzerland','hero.title':'Cinematic Luxury — timeless visual stories.','hero.text':'Elegant weddings, traditional looks and emotional portraits — modern, premium and full of feeling.','hero.cta1':'View gallery','hero.cta2':'Reserve your date',
    'trust.1t':'Discreet','trust.1s':'Professional presence','trust.2t':'Cinematic','trust.2s':'Elegant storytelling','trust.3t':'Reliable','trust.3s':'Structured process',
    'form.title':'Quick inquiry','form.text':'Send date + location. I reply quickly.','form.name':'Name','form.type':'Event type','form.date':'Date','form.place':'Location','form.message':'Message','form.submit':'Send via WhatsApp',
    'services.eyebrow':'Services','services.title':'More premium. More clarity. More confidence.','services.text':'Services presented clearly, elegantly and with a strong premium feeling for couples in Switzerland.',
    'services.badge1':'Weddings','services.badge2':'Tradition','services.badge3':'Editorial',
    'services.s1t':'Full-day coverage','services.s1d':'From getting ready to celebration — calm guidance, strong moments and elegant visual language.','services.s1l1':'Emotional reportage','services.s1l2':'Directed portraits','services.s1l3':'Luxury selection & editing',
    'services.s2t':'Traditional looks','services.s2d':'Cultural clothing, refined details and timeless portraits handled with respect and modern finishing.','services.s2l1':'Clean colors','services.s2l2':'Premium retouching','services.s2l3':'Strong close-ups',
    'services.s3t':'Editorial portraits','services.s3d':'For couples who want to show their wedding with a luxurious, modern and confident look.','services.s3l1':'Magazine feel','services.s3l2':'Fine composition','services.s3l3':'Elegant finish',
    'showreel.eyebrow':'Showreel','showreel.title':'Premium preview','showreel.text':'A calm, high-quality preview of your visual language — optimized for smartphone and desktop.','showreel.caption':'High-end wedding storytelling, classic elegance and strong moments for a luxurious presentation.',
    'gallery.eyebrow':'Gallery','gallery.title':'Real images. Premium look.','gallery.text':'A selected gallery with 15 real images, refined crop and clickable lightbox.',
    'testimonials.eyebrow':'Testimonials','testimonials.title':'Words that build trust','testimonials.text':'A more luxurious presentation with image, rating and calm layout.',
    'testimonials.q1':'“Kirubel captured every emotion with elegance and peace. The result feels premium and timeless.”',
    'testimonials.q2':'“Traditional photos and modern editing together — exactly the confidence and beauty we wanted.”',
    'testimonials.q3':'“Very calm guidance, professional presence and a wow result on both phone and desktop.”','testimonials.q4':'“We loved the balance of romance, culture and clean premium editing. The photos feel rich and alive.”',
    'about.eyebrow':'About','about.title':'Friendly. Elegant. Heart-led.','about.text':'Kirubel Photo & Video 4U stands for modern wedding photography with calm guidance, strong visual language and a premium look that works cleanly on smartphone and desktop.','about.noteTitle':'Why this version is better','about.li1':'Mobile hero feels more refined','about.li2':'Service cards look stronger and more premium','about.li3':'Hamburger menu stays visible','about.li4':'Gallery and testimonials are fully restored',
    'contact.eyebrow':'Contact','contact.title':'Reserve your date','contact.text':'Write directly on WhatsApp or call for availability, pricing and booking.',
    'footer.partners':'Partners:','footer.rights':'All rights reserved.'
  }
};

function applyTranslations(lang){
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n; if(dict[k]) el.textContent = dict[k];
  });
  const sel = document.getElementById('eventTypeSelect');
  if(sel){
    const current = sel.value;
    const opts = lang === 'de' ? ['Hochzeit','Traditionell','Verlobung','Anderes'] : ['Wedding','Traditional','Engagement','Other'];
    sel.innerHTML='';
    opts.forEach(v=>{const o=document.createElement('option');o.value=v;o.textContent=v;sel.appendChild(o)});
    if(current) sel.value=current;
  }
}

function setLanguage(lang){
  const safe = lang === 'en' ? 'en' : 'de';
  localStorage.setItem('kv_lang', safe);
  document.documentElement.lang = safe;
  document.querySelectorAll('.langBtn').forEach(btn => {
    const active = btn.dataset.lang === safe;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  applyTranslations(safe);
}

function setupNav(){
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  const backdrop = document.getElementById('navBackdrop');
  if(!toggle || !nav || !backdrop) return;
  const isMobile = () => window.innerWidth <= 980;
  const closeMenu = () => {
    nav.classList.remove('is-open'); backdrop.classList.remove('is-open');
    document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false');
  };
  const openMenu = () => {
    if(!isMobile()) return;
    nav.classList.add('is-open'); backdrop.classList.add('is-open');
    document.body.classList.add('nav-open'); toggle.setAttribute('aria-expanded', 'true');
  };
  toggle.addEventListener('click', e => {
    e.preventDefault(); e.stopPropagation();
    nav.classList.contains('is-open') ? closeMenu() : openMenu();
  });
  backdrop.addEventListener('click', closeMenu);
  nav.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', () => { if(isMobile()) closeMenu(); }));
  window.addEventListener('resize', () => { if(!isMobile()) closeMenu(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeMenu(); });
}

function setupYear(){ const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear(); }

function setupForm(){
  const form = document.getElementById('leadForm');
  if(!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    const msg = `Hallo Kirubel,%0A%0AName: ${fd.get('name')}%0AEvent: ${fd.get('type')}%0ADate: ${fd.get('date')}%0ALocation: ${fd.get('location')}%0AMessage: ${fd.get('msg')}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener');
  });
}

function setupShowreel(){
  const slides = Array.from(document.querySelectorAll('.showreel__img'));
  const dotsWrap = document.getElementById('showreelDots');
  if(!slides.length || !dotsWrap) return;
  let idx = 0;
  const dots = slides.map((_, i) => {
    const b = document.createElement('button');
    if(i===0) b.classList.add('is-active');
    b.addEventListener('click', ()=>activate(i));
    dotsWrap.appendChild(b); return b;
  });
  function activate(i){ idx=i; slides.forEach((s,n)=>s.classList.toggle('is-active', n===idx)); dots.forEach((d,n)=>d.classList.toggle('is-active', n===idx)); }
  setInterval(()=>activate((idx+1)%slides.length), 4200);
}

function setupTestimonials(){
  const track = document.getElementById('testimonialTrack');
  if(!track) return;
  const cards = Array.from(track.children); let idx = 0;
  const apply = ()=> track.style.transform = `translateX(${-idx*100}%)`;
  document.getElementById('tPrev')?.addEventListener('click', ()=>{ idx=(idx-1+cards.length)%cards.length; apply(); });
  document.getElementById('tNext')?.addEventListener('click', ()=>{ idx=(idx+1)%cards.length; apply(); });
  setInterval(()=>{ idx=(idx+1)%cards.length; apply(); }, 5500);
}

function setupLightbox(){
  const items = Array.from(document.querySelectorAll('.galleryItem'));
  const box = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  if(!items.length || !box || !img) return;
  let idx = 0;
  const open = i => { idx=i; img.src = items[idx].href; box.classList.add('is-open'); box.setAttribute('aria-hidden', 'false'); document.body.style.overflow='hidden'; };
  const close = ()=>{ box.classList.remove('is-open'); box.setAttribute('aria-hidden', 'true'); document.body.style.overflow=''; };
  const prev = ()=> open((idx-1+items.length)%items.length);
  const next = ()=> open((idx+1)%items.length);
  items.forEach((a,i)=>a.addEventListener('click', e=>{ e.preventDefault(); open(i); }));
  document.getElementById('lightboxClose')?.addEventListener('click', close);
  document.getElementById('lightboxPrev')?.addEventListener('click', prev);
  document.getElementById('lightboxNext')?.addEventListener('click', next);
  box.addEventListener('click', e=>{ if(e.target===box) close(); });
  document.addEventListener('keydown', e=>{ if(!box.classList.contains('is-open')) return; if(e.key==='Escape') close(); if(e.key==='ArrowLeft') prev(); if(e.key==='ArrowRight') next(); });
}

document.addEventListener('DOMContentLoaded', () => {
  setupNav(); setupYear(); setupForm(); setupShowreel(); setupTestimonials(); setupLightbox();
  document.querySelectorAll('.langBtn').forEach(btn => btn.addEventListener('click', ()=>setLanguage(btn.dataset.lang)));
  setLanguage(localStorage.getItem('kv_lang') || 'de');
});
