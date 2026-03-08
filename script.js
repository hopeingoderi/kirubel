const I18N = {
  de: {
    "topbar.pill":"Schweiz • Film + Foto • Luxury Visuals",
    "topbar.phone":"WhatsApp/Anruf: +41 76 522 12 62",
    "nav.home":"Home",
    "nav.showreel":"Showreel",
    "nav.gallery":"Galerie",
    "nav.about":"Über mich",
    "nav.contact":"Kontakt",
    "hero.kicker":"Luxury Hochzeitsfotografie • Schweiz",
    "hero.title":"Cinematic Luxury — zeitlose Visual Stories.",
    "hero.text":"Elegante Hochzeiten, traditionelle Looks und emotionale Portraits — modern, hochwertig und mit viel Gefühl erzählt.",
    "hero.cta1":"Galerie ansehen",
    "hero.cta2":"Verfügbarkeit prüfen",
    "showreel.eyebrow":"Showreel",
    "showreel.title":"Ausgewählte Highlights",
    "showreel.text":"Eine ruhige, hochwertige Vorschau deiner Bildsprache — optimiert für Smartphone und Desktop.",
    "gallery.eyebrow":"Galerie",
    "gallery.title":"Echte Momente. Echte Geschichten.",
    "gallery.text":"Hier sind deine echten Bilder als luxuriöse, klickbare Galerie mit Lightbox.",
    "about.eyebrow":"About",
    "about.title":"Freundlich. Elegant. Mit Herz.",
    "about.text":"Kirubel Photo & Video 4U steht für moderne Hochzeitsfotografie mit ruhiger Begleitung, starker Bildsprache und luxuriöser Präsentation. Die Seite ist bewusst leicht, schnell und mobilfreundlich aufgebaut.",
    "about.noteTitle":"Was jetzt verbessert wurde",
    "about.li1":"Smartphone-Menü stabil",
    "about.li2":"Galerie klickbar auf Mobile",
    "about.li3":"Showreel mit echten Bildern",
    "about.li4":"Kompatibel als sauberes ZIP-Paket",
    "contact.eyebrow":"Kontakt",
    "contact.title":"Datum reservieren",
    "contact.text":"Schreib direkt per WhatsApp oder Telefon für Verfügbarkeit, Preise und Buchung."
  },
  en: {
    "topbar.pill":"Switzerland • Film + Photo • Luxury Visuals",
    "topbar.phone":"WhatsApp/Call: +41 76 522 12 62",
    "nav.home":"Home",
    "nav.showreel":"Showreel",
    "nav.gallery":"Gallery",
    "nav.about":"About",
    "nav.contact":"Contact",
    "hero.kicker":"Luxury Wedding Photography • Switzerland",
    "hero.title":"Cinematic Luxury — timeless visual stories.",
    "hero.text":"Elegant weddings, traditional looks and emotional portraits — presented with a modern, premium visual language.",
    "hero.cta1":"View gallery",
    "hero.cta2":"Check availability",
    "showreel.eyebrow":"Showreel",
    "showreel.title":"Selected highlights",
    "showreel.text":"A calm, premium preview of your visual style — optimized for smartphone and desktop.",
    "gallery.eyebrow":"Gallery",
    "gallery.title":"Real moments. Real stories.",
    "gallery.text":"Your real images presented as a luxury, clickable gallery with lightbox.",
    "about.eyebrow":"About",
    "about.title":"Friendly. Elegant. Heart-led.",
    "about.text":"Kirubel Photo & Video 4U stands for modern wedding photography with calm guidance, strong visual language and a luxury presentation. This website is intentionally light, fast and mobile-friendly.",
    "about.noteTitle":"What has been improved",
    "about.li1":"Stable smartphone menu",
    "about.li2":"Clickable gallery on mobile",
    "about.li3":"Showreel with real images",
    "about.li4":"Compatible clean ZIP package",
    "contact.eyebrow":"Contact",
    "contact.title":"Reserve your date",
    "contact.text":"Write directly by WhatsApp or phone for availability, pricing and booking."
  }
};

function applyTranslations(lang){
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll(".langBtn").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  document.documentElement.lang = lang;
  localStorage.setItem("kv_lang", lang);
}

function setupNav(){
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  const backdrop = document.getElementById("navBackdrop");
  if(!toggle || !nav || !backdrop) return;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    toggle.setAttribute("aria-expanded","false");
    document.body.classList.remove("nav-open");
  };
  const openMenu = () => {
    nav.classList.add("is-open");
    backdrop.classList.add("is-open");
    toggle.setAttribute("aria-expanded","true");
  };

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    nav.classList.contains("is-open") ? closeMenu() : openMenu();
  });

  backdrop.addEventListener("click", closeMenu);
  nav.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => {
    if(window.innerWidth > 980) closeMenu();
  });
  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") closeMenu();
  });
}

function setupShowreel(){
  const slides = Array.from(document.querySelectorAll(".showreel__img"));
  const dotsWrap = document.getElementById("showreelDots");
  if(!slides.length || !dotsWrap) return;
  let index = 0, timer = null;

  const dots = slides.map((_, i) => {
    const b = document.createElement("button");
    b.className = "showreel__dot" + (i === 0 ? " is-active" : "");
    b.type = "button";
    b.addEventListener("click", () => { activate(i); restart(); });
    dotsWrap.appendChild(b);
    return b;
  });

  const activate = (i) => {
    index = (i + slides.length) % slides.length;
    slides.forEach((s,n) => s.classList.toggle("is-active", n === index));
    dots.forEach((d,n) => d.classList.toggle("is-active", n === index));
  };
  const restart = () => {
    clearInterval(timer);
    timer = setInterval(() => activate(index + 1), 4000);
  };
  activate(0);
  restart();
}

function setupLightbox(){
  const items = Array.from(document.querySelectorAll(".galleryItem"));
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const close = document.getElementById("lightboxClose");
  const prev = document.getElementById("lightboxPrev");
  const next = document.getElementById("lightboxNext");
  if(!items.length || !box || !img) return;

  let index = 0;
  const open = (i) => {
    index = i;
    img.src = items[index].getAttribute("href");
    box.classList.add("is-open");
    box.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";
  };
  const closeBox = () => {
    box.classList.remove("is-open");
    box.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
  };
  const go = (dir) => open((index + dir + items.length) % items.length);

  items.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      open(i);
    });
  });
  close?.addEventListener("click", closeBox);
  prev?.addEventListener("click", () => go(-1));
  next?.addEventListener("click", () => go(1));
  box.addEventListener("click", (e) => {
    if(e.target === box) closeBox();
  });
  document.addEventListener("keydown", (e) => {
    if(!box.classList.contains("is-open")) return;
    if(e.key === "Escape") closeBox();
    if(e.key === "ArrowLeft") go(-1);
    if(e.key === "ArrowRight") go(1);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  setupShowreel();
  setupLightbox();
  document.querySelectorAll(".langBtn").forEach(btn => {
    btn.addEventListener("click", () => applyTranslations(btn.dataset.lang));
  });
  applyTranslations(localStorage.getItem("kv_lang") || "de");
});
