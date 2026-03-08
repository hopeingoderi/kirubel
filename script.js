const WHATSAPP_NUMBER = "41765221262";

const I18N = {
  de: {
    "topbar.pill": "Schweiz • Film + Foto • Luxury Visuals",
    "topbar.phone": "WhatsApp/Anruf: +41 76 522 12 62",
    "nav.services": "Services",
    "nav.collections": "Pakete",
    "nav.gallery": "Galerie",
    "nav.showreel": "Showreel",
    "nav.testimonials": "Testimonials",
    "nav.about": "Über mich",
    "nav.contact": "Kontakt",
    "nav.cta": "WhatsApp Anfrage",
    "hero.kicker": "Luxury Hochzeitsfotografie • Schweiz",
    "hero.title": "Cinematic Luxury — zeitlose Visual Stories.",
    "hero.subtitle": "Elegante Hochzeiten, traditionelle Looks und emotionale Portraits — modern, hochwertig und mit viel Gefühl erzählt.",
    "hero.cta1": "Galerie ansehen",
    "hero.cta2": "Datum reservieren",
    "trust.a.title": "Diskret",
    "trust.a.sub": "Professionelle Präsenz",
    "trust.b.title": "Cineastisch",
    "trust.b.sub": "Elegantes Storytelling",
    "trust.c.title": "Zuverlässig",
    "trust.c.sub": "Strukturierter Ablauf",
    "form.title": "Schnellanfrage",
    "form.subtitle": "Datum + Ort senden. Ich antworte schnell.",
    "form.name.label": "Name",
    "form.name.ph": "Dein Name",
    "form.type.label": "Event-Typ",
    "form.date.label": "Datum",
    "form.location.label": "Ort",
    "form.location.ph": "Bern / Zürich / ...",
    "form.msg.label": "Nachricht",
    "form.msg.ph": "Stunden, Wünsche, Sprache usw.",
    "form.submit": "Per WhatsApp senden",
    "services.title": "Services",
    "services.subtitle": "Luxury Coverage für Hochzeiten und Life-Events — Film + Foto mit Eleganz.",
    "collections.title": "Pakete",
    "collections.subtitle": "Drei Luxus-Pakete — Details klären wir im Gespräch.",
    "collections.addons": "Add-ons: Drohne (wo erlaubt), Extra-Stunden, Same-Week Teaser, Raw Footage, Second Shooter.",
    "gallery.title": "Galerie",
    "gallery.subtitle": "Eine feine Auswahl an Momenten — mit deinen echten Bildern.",
    "showreel.title": "Showreel",
    "showreel.subtitle": "Kurze cineastische Highlights mit echtem Demo-Video und Bildvorschau.",
    "testimonials.title": "Testimonials",
    "testimonials.subtitle": "Ein paar Worte von Kunden — echte Erlebnisse, echte Momente.",
    "about.title": "Elegant. Freundlich. Mit Herz.",
    "about.subtitle": "Seit über 10 Jahren begleite ich Hochzeiten und Events mit Ruhe, Respekt und echter Leidenschaft. Zuhause bin ich im Herzen der Schweiz: Bern.",
    "contactLuxury.title": "Datum reservieren",
    "contactLuxury.subtitle": "Ich nehme pro Jahr nur eine limitierte Anzahl an Hochzeiten & Zeremonien an — für volle künstlerische Hingabe.",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.partners": "Partner:"
  },
  en: {
    "topbar.pill": "Switzerland • Film + Photo • Luxury Visuals",
    "topbar.phone": "WhatsApp/Call: +41 76 522 12 62",
    "nav.services": "Services",
    "nav.collections": "Collections",
    "nav.gallery": "Gallery",
    "nav.showreel": "Showreel",
    "nav.testimonials": "Testimonials",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "WhatsApp Inquiry",
    "hero.kicker": "Luxury Wedding Photography • Switzerland",
    "hero.title": "Cinematic Luxury — Timeless Visual Stories.",
    "hero.subtitle": "Elegant weddings, traditional looks and emotional portraits — modern, premium and crafted with real feeling.",
    "hero.cta1": "View Gallery",
    "hero.cta2": "Reserve Your Date",
    "trust.a.title": "Discreet",
    "trust.a.sub": "Professional presence",
    "trust.b.title": "Cinematic",
    "trust.b.sub": "Elegant storytelling",
    "trust.c.title": "Reliable",
    "trust.c.sub": "Structured workflow",
    "form.title": "Quick Inquiry",
    "form.subtitle": "Send date + location. I reply fast.",
    "form.name.label": "Name",
    "form.name.ph": "Your name",
    "form.type.label": "Event type",
    "form.date.label": "Date",
    "form.location.label": "Location",
    "form.location.ph": "Bern / Zürich / ...",
    "form.msg.label": "Message",
    "form.msg.ph": "Hours, wishes, language, etc.",
    "form.submit": "Send via WhatsApp",
    "services.title": "Services",
    "services.subtitle": "Luxury coverage for weddings and life-events — film + photography with elegance.",
    "collections.title": "Collections",
    "collections.subtitle": "Three luxury collections — details are confirmed in consultation.",
    "collections.addons": "Add-ons: drone (where allowed), extra hours, same-week teaser, raw footage, second shooter.",
    "gallery.title": "Gallery",
    "gallery.subtitle": "A refined selection of moments — now with your real images.",
    "showreel.title": "Showreel",
    "showreel.subtitle": "Short cinematic highlights with a real demo video and image preview.",
    "testimonials.title": "Testimonials",
    "testimonials.subtitle": "A few words from clients — real experiences, real moments.",
    "about.title": "Elegant. Friendly. Heart-led.",
    "about.subtitle": "For over 10 years I have covered weddings and events with calm, respect and real passion. Based in the heart of Switzerland: Bern.",
    "contactLuxury.title": "Reserve Your Date",
    "contactLuxury.subtitle": "I take a limited number of weddings and ceremonies each year for full artistic dedication.",
    "footer.rights": "All rights reserved.",
    "footer.partners": "Partners:"
  }
};

function applyTranslations(lang) {
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });
  const sel = document.getElementById("eventTypeSelect");
  if (sel) {
    const current = sel.value;
    const opts = lang === "de" ? ["Hochzeit", "Verlobung", "Taufe", "Feier/Event", "Anderes"] : ["Wedding", "Engagement", "Baptism", "Celebration/Event", "Other"];
    sel.innerHTML = "";
    opts.forEach((v) => {
      const o = document.createElement("option");
      o.value = v;
      o.textContent = v;
      sel.appendChild(o);
    });
    if (current) sel.value = current;
  }
}

function setLanguage(lang) {
  const safe = lang === "en" ? "en" : "de";
  localStorage.setItem("kv_lang", safe);
  document.documentElement.setAttribute("lang", safe);
  document.querySelectorAll(".langBtn").forEach((b) => {
    const active = b.getAttribute("data-lang") === safe;
    b.classList.toggle("is-active", active);
    b.setAttribute("aria-pressed", String(active));
  });
  applyTranslations(safe);
}

function setupNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  const backdrop = document.getElementById("navBackdrop");
  if (!toggle || !nav || !backdrop) return;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  };
  const openMenu = () => {
    nav.classList.add("is-open");
    backdrop.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-open");
  };

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    nav.classList.contains("is-open") ? closeMenu() : openMenu();
  });
  backdrop.addEventListener("click", closeMenu);
  nav.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

function setupHeroSlideshow() {
  const slides = [...document.querySelectorAll(".heroSlide")];
  const dots = [...document.querySelectorAll(".heroDot")];
  if (!slides.length) return;
  let idx = 0;
  const activate = (i) => {
    idx = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle("is-active", n === idx));
    dots.forEach((d, n) => d.classList.toggle("is-active", n === idx));
  };
  dots.forEach((d, i) => d.addEventListener("click", () => activate(i)));
  setInterval(() => activate(idx + 1), 5200);
}

function setupWhatsAppForm() {
  const form = document.getElementById("leadForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const lang = localStorage.getItem("kv_lang") || "de";
    const header = lang === "de" ? "Hallo Kirubel, ich möchte anfragen:" : "Hi Kirubel, I would like to inquire:";
    const message = `${header}\n\nName: ${data.get("name")}\nEvent: ${data.get("type")}\nDate: ${data.get("date")}\nLocation: ${data.get("location")}\nMessage: ${data.get("msg")}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
}

function setupTestimonials() {
  const track = document.getElementById("tTrack");
  const dotsWrap = document.getElementById("tDots");
  if (!track || !dotsWrap) return;
  const cards = Array.from(track.querySelectorAll(".tCard"));
  let idx = 0;
  dotsWrap.innerHTML = "";
  const dots = cards.map((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "tDot" + (i === 0 ? " is-active" : "");
    b.addEventListener("click", () => go(i));
    dotsWrap.appendChild(b);
    return b;
  });
  const apply = () => {
    track.style.transform = `translateX(${-idx * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
  };
  const go = (i) => { idx = (i + cards.length) % cards.length; apply(); };
  document.querySelector(".tPrev")?.addEventListener("click", () => go(idx - 1));
  document.querySelector(".tNext")?.addEventListener("click", () => go(idx + 1));
  setInterval(() => go(idx + 1), 5200);
}

function setupLightbox() {
  const items = Array.from(document.querySelectorAll(".gItem"));
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lbImg");
  const cap = document.getElementById("lbCap");
  const thumbsWrap = document.getElementById("lbThumbs");
  const btnClose = lb?.querySelector(".lbClose");
  const btnPrev = lb?.querySelector(".lbPrev");
  const btnNext = lb?.querySelector(".lbNext");
  const btnZoom = document.getElementById("lbZoom");
  const btnPlay = document.getElementById("lbPlay");
  if (!items.length || !lb || !img || !cap || !thumbsWrap) return;

  let index = 0; let timer = null; let scale = 1;
  const buildThumbs = () => {
    thumbsWrap.innerHTML = "";
    items.forEach((a, i) => {
      const btn = document.createElement("button");
      btn.type = "button"; btn.className = "lbThumb";
      const t = document.createElement("img");
      t.src = a.getAttribute("href");
      btn.appendChild(t);
      btn.addEventListener("click", () => open(i));
      thumbsWrap.appendChild(btn);
    });
  };
  const setActiveThumb = () => [...thumbsWrap.children].forEach((b, i) => b.classList.toggle("is-active", i === index));
  const open = (i) => {
    index = i;
    const el = items[index];
    img.src = el.getAttribute("href");
    cap.textContent = el.getAttribute("data-caption") || "Preview";
    scale = 1; img.style.transform = "scale(1)";
    lb.classList.add("is-open");
    document.body.style.overflow = "hidden";
    setActiveThumb();
  };
  const close = () => {
    lb.classList.remove("is-open");
    document.body.style.overflow = "";
    stopPlay();
  };
  const prev = () => open((index - 1 + items.length) % items.length);
  const next = () => open((index + 1) % items.length);
  const startPlay = () => {
    stopPlay();
    timer = setInterval(next, 2800);
    btnPlay.textContent = "Pause";
  };
  const stopPlay = () => {
    if (timer) clearInterval(timer);
    timer = null;
    if (btnPlay) btnPlay.textContent = "Play";
  };

  buildThumbs();
  items.forEach((a, i) => a.addEventListener("click", (e) => { e.preventDefault(); open(i); }));
  btnClose?.addEventListener("click", close);
  btnPrev?.addEventListener("click", prev);
  btnNext?.addEventListener("click", next);
  btnPlay?.addEventListener("click", () => timer ? stopPlay() : startPlay());
  btnZoom?.addEventListener("click", () => {
    scale = scale === 1 ? 1.75 : 1;
    img.style.transform = `scale(${scale})`;
    btnZoom.textContent = scale === 1 ? "Zoom" : "Reset";
  });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  });
}

function setupYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  setupYear();
  setupNav();
  setupHeroSlideshow();
  setupWhatsAppForm();
  setupTestimonials();
  setupLightbox();
  document.querySelectorAll(".langBtn").forEach((b) => b.addEventListener("click", () => setLanguage(b.getAttribute("data-lang"))));
  setLanguage(localStorage.getItem("kv_lang") || "de");
});
