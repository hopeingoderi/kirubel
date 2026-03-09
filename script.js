const i18n = {
  en: {
    topline:"Switzerland • Weddings • Culture • Portraits",
    "nav.services":"Services","nav.portfolio":"Portfolio","nav.about":"About","nav.vision":"Vision","nav.contact":"Contact",
    "hero.eyebrow":"Kirubel Photo & Video 4U",
    "hero.title":"Visual stories for love, culture and unforgettable celebration.",
    "hero.text":"My brand is built on elegance, presence and ambition — capturing weddings, traditional moments and portraits with warmth, precision and cinematic beauty.",
    "hero.cta1":"Check availability","hero.cta2":"View portfolio",
    "card.title":"Why clients choose Kirubel",
    "card.1":"Cinematic wedding and engagement storytelling",
    "card.2":"Strong appreciation for culture and tradition",
    "card.3":"Natural portraits with refined editing",
    "card.4":"Reliable communication and personal care",
    "services.eyebrow":"Services","services.title":"A brand focused on memorable human stories.",
    "services.text":"From wedding days to bridal preparation, engagement portraits and cultural elegance, every gallery is shaped to feel heartfelt, clean and timeless.",
    "services.s1t":"Weddings","services.s1d":"Full-day coverage, bridal preparation, couple portraits and key celebration moments documented with cinematic calm.",
    "services.s2t":"Engagement & Couple","services.s2d":"Warm, elegant sessions that highlight connection, style and personality in a natural way.",
    "services.s3t":"Cultural Portraits","services.s3d":"Visuals that honour heritage, beauty and identity with respect, detail and artistic pride.",
    "portfolio.eyebrow":"Portfolio","portfolio.title":"A curated selection from Kirubel’s visual world.",
    "portfolio.text":"Preview any image, then zoom in, zoom out and move through the gallery in full screen.",
    "about.eyebrow":"About the brand","about.title":"Ambition with heart.",
    "about.p1":"Kirubel Photo & Video 4U exists to create visuals that feel personal, polished and proud. The ambition is not only to take beautiful photos, but to build a recognizable visual signature that clients trust for life’s most meaningful moments.",
    "about.p2":"The brand stands for elegance, reliability, cultural appreciation and a constant desire to grow into a stronger creative standard — one story, one family and one celebration at a time.",
    "vision.eyebrow":"Vision","vision.title":"To become a trusted visual name for weddings, portraits and culture-led storytelling.",
    "vision.text":"This website is designed to express your ambition clearly: a modern Swiss-based creative brand with a premium feel, stronger identity, and a growing portfolio that reflects love, beauty, dignity and celebration.",
    "contact.title":"Let’s create something meaningful.","contact.text":"For wedding dates, collaboration or questions, reach out by email or WhatsApp."
  },
  de: {
    topline:"Schweiz • Hochzeiten • Kultur • Portraits",
    "nav.services":"Leistungen","nav.portfolio":"Portfolio","nav.about":"Über mich","nav.vision":"Vision","nav.contact":"Kontakt",
    "hero.eyebrow":"Kirubel Photo & Video 4U",
    "hero.title":"Visuelle Geschichten für Liebe, Kultur und unvergessliche Feiern.",
    "hero.text":"Meine Marke steht für Eleganz, Präsenz und Ambition — Hochzeiten, traditionelle Momente und Portraits werden mit Wärme, Präzision und cineastischer Schönheit festgehalten.",
    "hero.cta1":"Verfügbarkeit prüfen","hero.cta2":"Portfolio ansehen",
    "card.title":"Warum Kundinnen und Kunden Kirubel wählen",
    "card.1":"Cineastisches Storytelling für Hochzeit und Verlobung",
    "card.2":"Starke Wertschätzung für Kultur und Tradition",
    "card.3":"Natürliche Portraits mit feiner Bearbeitung",
    "card.4":"Zuverlässige Kommunikation und persönliche Betreuung",
    "services.eyebrow":"Leistungen","services.title":"Eine Marke für bedeutungsvolle menschliche Geschichten.",
    "services.text":"Von Hochzeitstagen über Bridal Preparation bis zu Verlobungsportraits und kultureller Eleganz wird jede Galerie herzlich, sauber und zeitlos gestaltet.",
    "services.s1t":"Hochzeiten","services.s1d":"Ganztägige Begleitung, Bridal Preparation, Couple Portraits und zentrale Feiermomente mit cineastischer Ruhe.",
    "services.s2t":"Verlobung & Couple","services.s2d":"Warme, elegante Sessions, die Verbindung, Stil und Persönlichkeit natürlich zeigen.",
    "services.s3t":"Kulturelle Portraits","services.s3d":"Visuals, die Herkunft, Schönheit und Identität mit Respekt, Detail und künstlerischem Stolz ehren.",
    "portfolio.eyebrow":"Portfolio","portfolio.title":"Eine kuratierte Auswahl aus Kirubels visueller Welt.",
    "portfolio.text":"Jedes Bild kann geöffnet, vergrößert, verkleinert und im Vollbild betrachtet werden.",
    "about.eyebrow":"Über die Marke","about.title":"Ambition mit Herz.",
    "about.p1":"Kirubel Photo & Video 4U schafft Visuals, die persönlich, stilvoll und stolz wirken. Die Ambition ist nicht nur schöne Fotos zu machen, sondern eine wiedererkennbare visuelle Signatur aufzubauen, der Menschen für die bedeutendsten Momente ihres Lebens vertrauen.",
    "about.p2":"Die Marke steht für Eleganz, Zuverlässigkeit, Wertschätzung für Kultur und den ständigen Wunsch, einen stärkeren kreativen Standard zu erreichen — eine Geschichte, eine Familie und eine Feier nach der anderen.",
    "vision.eyebrow":"Vision","vision.title":"Ein vertrauenswürdiger visueller Name für Hochzeiten, Portraits und kulturgeführtes Storytelling werden.",
    "vision.text":"Diese Website zeigt deine Ambition klar: eine moderne, in der Schweiz basierte kreative Marke mit Premium-Gefühl, stärkerer Identität und einem wachsenden Portfolio, das Liebe, Schönheit, Würde und Feier widerspiegelt.",
    "contact.title":"Lass uns etwas Bedeutungsvolles schaffen.","contact.text":"Für Hochzeitstermine, Zusammenarbeit oder Fragen erreichst du mich per E-Mail oder WhatsApp."
  }
};

const langButtons = document.querySelectorAll('.lang-btn');
function setLanguage(lang){
  localStorage.setItem('kpv_lang', lang);
  langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });
}
langButtons.forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));

window.addEventListener('load', () => {
  document.getElementById('loader').classList.add('is-hidden');
});
document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const items = [...document.querySelectorAll('.gallery-item')];
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImage');
const lbCap = document.getElementById('lbCaption');
let current = 0;
let scale = 1, tx = 0, ty = 0, dragging = false, startX=0, startY=0;

function renderImage(index){
  current = (index + items.length) % items.length;
  const item = items[current];
  lbImg.src = item.href;
  lbImg.alt = item.querySelector('img').alt || '';
  lbCap.textContent = item.dataset.caption || '';
  resetZoom();
}
function openLightbox(index){
  renderImage(index);
  lb.classList.add('open');
  lb.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function closeLightbox(){
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
function applyZoom(){ lbImg.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`; }
function resetZoom(){ scale=1; tx=0; ty=0; applyZoom(); }
items.forEach((item,i)=>item.addEventListener('click',e=>{e.preventDefault();openLightbox(i)}));
document.getElementById('lbClose').addEventListener('click',closeLightbox);
document.getElementById('lbPrev').addEventListener('click',()=>renderImage(current-1));
document.getElementById('lbNext').addEventListener('click',()=>renderImage(current+1));
document.getElementById('zoomIn').addEventListener('click',()=>{scale=Math.min(3,scale+.25);applyZoom()});
document.getElementById('zoomOut').addEventListener('click',()=>{scale=Math.max(1,scale-.25); if(scale===1){tx=0;ty=0;} applyZoom()});
document.getElementById('zoomReset').addEventListener('click',resetZoom);
lb.addEventListener('click',e=>{if(e.target===lb)closeLightbox()});
document.addEventListener('keydown',e=>{
  if(!lb.classList.contains('open')) return;
  if(e.key==='Escape') closeLightbox();
  if(e.key==='ArrowRight') renderImage(current+1);
  if(e.key==='ArrowLeft') renderImage(current-1);
  if(e.key==='+') {scale=Math.min(3,scale+.25);applyZoom();}
  if(e.key==='-') {scale=Math.max(1,scale-.25);applyZoom();}
});
lbImg.addEventListener('mousedown', e => {
  if(scale <= 1) return;
  dragging = true;
  startX = e.clientX - tx;
  startY = e.clientY - ty;
});
window.addEventListener('mousemove', e => {
  if(!dragging) return;
  tx = e.clientX - startX;
  ty = e.clientY - startY;
  applyZoom();
});
window.addEventListener('mouseup', ()=> dragging=false);
lbImg.addEventListener('wheel', e => {
  if(!lb.classList.contains('open')) return;
  e.preventDefault();
  if(e.deltaY < 0) scale = Math.min(3, scale + .15);
  else scale = Math.max(1, scale - .15);
  if(scale === 1){ tx=0; ty=0; }
  applyZoom();
},{passive:false});

setLanguage(localStorage.getItem('kpv_lang') || 'en');
