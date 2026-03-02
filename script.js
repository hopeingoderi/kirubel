// =====================================================
// KIRUBEL PHOTO & VIDEO 4U — script.js (CLEAN FIX)
// Fixes: hamburger not working (double listeners), duplicate lightbox, duplicate boot
// =====================================================

const WHATSAPP_NUMBER = "41765221262";

// -------------
// i18n strings
// -------------
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

    "hero.kicker": "Luxury Hochzeits- & Eventfilme • Fotografie • Schweiz",
    "hero.title": "Cinematic Luxury — zeitlose Visual Stories.",
    "hero.subtitle":
      "Hochzeiten, Verlobungen, Taufen und Feiern — festgehalten mit Eleganz, cineastischer Tiefe und diskretem Stil.",
    "hero.cta1": "Verfügbarkeit prüfen",
    "hero.cta2": "Galerie ansehen",

    "trust.a.title": "Diskret",
    "trust.a.sub": "Professionelle Präsenz",
    "trust.b.title": "Cineastisch",
    "trust.b.sub": "Elegantes Storytelling",
    "trust.c.title": "Zuverlässig",
    "trust.c.sub": "Strukturierter Ablauf",

    "showreel.title": "Showreel",
    "showreel.subtitle":
      "Kurze, cineastische Highlights — später kannst du hier ganz einfach 4–5 Videos einsetzen.",
    "showreel.hint":
      "Tipp: Ersetze die Dateien in assets/showreel/ und ändere nur die JS-Liste.",

    "form.title": "Schnellanfrage",
    "form.subtitle": "Datum + Ort senden. Ich antworte schnell.",
    "form.name.label": "Name",
    "form.name.ph": "Dein Name",
    "form.type.label": "Event-Typ",
    "form.date.label": "Datum",
    "form.location.label": "Ort",
    "form.location.ph": "Zürich / Basel / ...",
    "form.msg.label": "Nachricht",
    "form.msg.ph": "Stunden, Wünsche, Sprache usw.",
    "form.submit": "Per WhatsApp senden",
    "form.note": "WhatsApp öffnet sich mit einer vorgefüllten Nachricht.",

    "services.title": "Services",
    "services.subtitle":
      "Luxury Coverage für Hochzeiten und Life-Events — Film + Foto mit Eleganz.",
    "services.cta": "Jetzt anfragen",
    "services.note": "In der Schweiz • Landesweit verfügbar",

    "collections.title": "Pakete",
    "collections.subtitle":
      "Drei Luxus-Pakete — Details klären wir im Gespräch.",
    "collections.addons":
      "Add-ons: Drohne (wo erlaubt), Extra-Stunden, Same-Week Teaser, Raw Footage, Second Shooter.",

    "gallery.title": "Galerie",
    "gallery.subtitle":
      "Eine feine Auswahl an Momenten — ersetze diese durch deine besten Arbeiten.",

    "testimonials.title": "Testimonials",
    "testimonials.subtitle":
      "Ein paar Worte von Kunden — echte Erlebnisse, echte Momente.",

    "about.title": "Elegant. Freundlich. Mit Herz.",
    "about.subtitle":
      "Seit über 10 Jahren begleite ich Hochzeiten und Events mit Ruhe, Respekt und echter Leidenschaft. Zuhause bin ich im Herzen der Schweiz: Bern.",

    "contactLuxury.title": "Datum reservieren",
    "contactLuxury.subtitle":
      "Ich nehme pro Jahr nur eine limitierte Anzahl an Hochzeiten & Zeremonien an — für volle künstlerische Hingabe.",

    "materials.title": "Material / Equipment",
    "materials.subtitle":
      "Professionelle Tools für cineastische Bildqualität, sauberes Audio und stabile Bewegung.",
    "materials.camera": "Kamera",
    "materials.lenses": "Objektive",
    "materials.audio": "Audio",
    "materials.stabilize": "Stabilisierung",
    "materials.note":
      "Das genaue Equipment kann je nach Event variieren — immer für das beste Ergebnis ausgewählt.",

    "lb.zoom": "Zoom",
    "lb.pause": "Pause",
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

    "hero.kicker": "Luxury Wedding & Event Films • Photography • Switzerland",
    "hero.title": "Cinematic Luxury — Timeless Visual Stories.",
    "hero.subtitle":
      "Weddings, engagements, baptisms and celebrations — captured with elegance, cinematic depth and a refined, discreet approach.",
    "hero.cta1": "Check Availability",
    "hero.cta2": "View Gallery",

    "trust.a.title": "Discreet",
    "trust.a.sub": "Professional presence",
    "trust.b.title": "Cinematic",
    "trust.b.sub": "Elegant storytelling",
    "trust.c.title": "Reliable",
    "trust.c.sub": "Structured workflow",

    "showreel.title": "Showreel",
    "showreel.subtitle":
      "Short cinematic highlights — later you can easily swap this to 4–5 videos.",
    "showreel.hint":
      "Tip: Replace files in assets/showreel/ and only edit the JS list.",

    "form.title": "Quick Inquiry",
    "form.subtitle": "Send date + location. We reply fast.",
    "form.name.label": "Name",
    "form.name.ph": "Your name",
    "form.type.label": "Event type",
    "form.date.label": "Date",
    "form.location.label": "Location",
    "form.location.ph": "Zürich / Basel / ...",
    "form.msg.label": "Message",
    "form.msg.ph": "Hours, wishes, language, etc.",
    "form.submit": "Send via WhatsApp",
    "form.note": "WhatsApp opens with your message prefilled.",

    "services.title": "Services",
    "services.subtitle":
      "Luxury coverage for weddings and life events — film + photography, delivered with elegance.",
    "services.cta": "Inquire Now",
    "services.note": "Based in Switzerland • Available nationwide",

    "collections.title": "Collections",
    "collections.subtitle":
      "Three luxury collections — tailored to your day. Exact details are confirmed in consultation.",
    "collections.addons":
      "Add-ons: drone (where permitted), extra hours, same-week teaser, raw footage, second shooter.",

    "gallery.title": "Gallery",
    "gallery.subtitle":
      "A refined selection of moments — replace these with your best work.",

    "testimonials.title": "Testimonials",
    "testimonials.subtitle":
      "A few words from clients — real experiences, real moments.",

    "about.title": "Elegant. Friendly. Heart-led.",
    "about.subtitle":
      "With over 10 years of experience, I capture weddings and events with calm guidance, respect, and genuine passion. I’m based in the heart of Switzerland: Bern.",

    "contactLuxury.title": "Reserve Your Date",
    "contactLuxury.subtitle":
      "I accept a limited number of weddings and ceremonies each year to ensure full artistic dedication.",

    "materials.title": "Materials / Equipment",
    "materials.subtitle":
      "Professional tools chosen for cinematic image quality, clean audio and stable movement.",
    "materials.camera": "Camera",
    "materials.lenses": "Lenses",
    "materials.audio": "Audio",
    "materials.stabilize": "Stabilization",
    "materials.note":
      "Exact equipment can vary per event — always selected for the best final result.",

    "lb.zoom": "Zoom",
    "lb.pause": "Pause",
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
    const opts =
      lang === "de"
        ? ["Hochzeit", "Verlobung", "Taufe", "Feier/Event", "Anderes"]
        : ["Wedding", "Engagement", "Baptism", "Celebration/Event", "Other"];
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

// -------------------
// Mobile nav (FIXED)
// -------------------
function setupNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  const backdrop = document.getElementById("navBackdrop");
  const brand = document.querySelector(".brand");

  if (!toggle || !nav || !backdrop) return;

  const isMobile = () => window.matchMedia("(max-width: 980px)").matches;

  const openMenu = () => {
    nav.classList.add("is-open");
    backdrop.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    nav.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    nav.classList.contains("is-open") ? closeMenu() : openMenu();
  };

  // iPhone: click is ok, but this makes it extra reliable
  const onToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  };

// Use pointer events (best for iPhone + desktop). No double-fire.
toggle.addEventListener("pointerup", onToggle);

backdrop.addEventListener("pointerup", (e) => {
  e.preventDefault();
  closeMenu();
});

  nav.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", () => {
      if (isMobile()) closeMenu();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) closeMenu();
  });

  // Logo: desktop scroll top; mobile toggles menu
  if (brand) {
    brand.addEventListener("click", (e) => {
      if (isMobile()) {
        e.preventDefault();
        toggleMenu();
      }
    });
  }

  window.addEventListener("resize", () => {
    if (!isMobile()) closeMenu();
  });
}

// -------------------
// Smooth anchor scroll
// -------------------
function setupAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

// -------------------
function setupYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function setupWhatsAppForm() {
  const form = document.getElementById("leadForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const type = String(data.get("type") || "").trim();
    const date = String(data.get("date") || "").trim();
    const location = String(data.get("location") || "").trim();
    const msg = String(data.get("msg") || "").trim();

    const lang = localStorage.getItem("kv_lang") || "de";
    const header =
      lang === "de"
        ? "Hallo Kirubel, ich möchte anfragen:"
        : "Hi Kirubel, I would like to inquire:";

    const message = `${header}

Name: ${name}
Event: ${type}
Date: ${date}
Location: ${location}
Message: ${msg}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener");
  });
}

function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((ent) => {
        if (ent.isIntersecting) {
          ent.target.classList.add("is-visible");
          obs.unobserve(ent.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  els.forEach((el) => obs.observe(el));
}

function setupParallax() {
  const cinema = document.querySelector(".cinemaVideo");
  if (!cinema) return;

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const rect = cinema.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const center = rect.top + rect.height * 0.5;
      const p = (center - vh * 0.5) / vh;
      const y = Math.max(-18, Math.min(18, p * 18));
      cinema.style.setProperty("--parY", `${y}px`);
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setupHeroSlideshow() {
  const slides = Array.from(document.querySelectorAll(".heroSlide"));
  const dots = Array.from(document.querySelectorAll(".heroDot"));
  if (!slides.length) return;

  let idx = 0;
  let timer = null;

  const activate = (i) => {
    idx = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle("is-active", n === idx));
    dots.forEach((d, n) => d.classList.toggle("is-active", n === idx));
  };

  const start = () => {
    if (timer) clearInterval(timer);
    timer = setInterval(() => activate(idx + 1), 5200);
  };

  dots.forEach((d, i) => {
    d.addEventListener("click", () => {
      activate(i);
      start();
    });
  });

  activate(0);
  start();
}

function setupShowreel() {
  const vid = document.getElementById("showreelVideo");
  if (!vid) return;

  const SHOWREEL_VIDEOS = [
    "assets/showreel/s1.mp4",
    "assets/showreel/s2.mp4",
    "assets/showreel/s3.mp4",
    "assets/showreel/s4.mp4",
    "assets/showreel/s5.mp4"
  ].filter(Boolean);

  if (!SHOWREEL_VIDEOS.length) return;

  vid.muted = true;
  vid.playsInline = true;
  vid.setAttribute("playsinline", "");

  let i = 0;

  const safePlay = () => {
    const p = vid.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  };

  const swapTo = (src) => {
    vid.src = src;
    vid.load();
    safePlay();
  };

  const next = () => {
    i = (i + 1) % SHOWREEL_VIDEOS.length;
    swapTo(SHOWREEL_VIDEOS[i]);
  };

  vid.addEventListener("ended", next);
  vid.addEventListener("error", next);

  swapTo(SHOWREEL_VIDEOS[0]);
}

function setupTestimonials() {
  const track = document.getElementById("tTrack");
  const dotsWrap = document.getElementById("tDots");
  if (!track || !dotsWrap) return;

  const cards = Array.from(track.querySelectorAll(".tCard"));
  if (!cards.length) return;

  let idx = 0;
  let timer = null;

  dotsWrap.innerHTML = "";
  const dots = cards.map((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "tDot" + (i === 0 ? " is-active" : "");
    b.setAttribute("aria-label", `Testimonial ${i + 1}`);
    b.addEventListener("click", () => go(i, true));
    dotsWrap.appendChild(b);
    return b;
  });

  const apply = () => {
    track.style.transform = `translateX(${-idx * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
  };

  const go = (i, restart = false) => {
    idx = (i + cards.length) % cards.length;
    apply();
    if (restart) start();
  };

  document.querySelector(".tPrev")?.addEventListener("click", () => go(idx - 1, true));
  document.querySelector(".tNext")?.addEventListener("click", () => go(idx + 1, true));

  const start = () => {
    if (timer) clearInterval(timer);
    timer = setInterval(() => go(idx + 1), 5200);
  };

  apply();
  start();
}

// -------------------
// Lightbox (single)
// -------------------
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

  let index = 0;
  let timer = null;

  const updatePlayLabel = () => {
    if (!btnPlay) return;
    const isPlaying = Boolean(timer);
    const lang = localStorage.getItem("kv_lang") || "de";
    btnPlay.textContent = isPlaying ? (lang === "de" ? "Pause" : "Pause") : "Play";
  };

  const startSlideshow = () => {
    stopSlideshow();
    timer = setInterval(() => next(), 3600);
    updatePlayLabel();
  };

  const stopSlideshow = () => {
    if (timer) clearInterval(timer);
    timer = null;
    updatePlayLabel();
  };

  const toggleSlideshow = () => (timer ? stopSlideshow() : startSlideshow());

  let scale = 1,
    tx = 0,
    ty = 0;

  const applyTransform = () =>
    (img.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`);

  const resetZoom = () => {
    scale = 1;
    tx = 0;
    ty = 0;
    lb.classList.remove("is-zoom");
    img.style.cursor = "zoom-in";
    applyTransform();
    if (btnZoom) btnZoom.textContent = "Zoom";
  };

  const setZoom = (newScale) => {
    scale = Math.min(3.2, Math.max(1, newScale));
    if (scale === 1) return resetZoom();
    lb.classList.add("is-zoom");
    img.style.cursor = "grab";
    applyTransform();
    if (btnZoom) btnZoom.textContent = "Reset";
  };

  const setLoading = (on) => {
    lb.classList.toggle("is-loading", on);
    lb.classList.toggle("is-ready", !on);
  };

  let thumbButtons = [];
  const buildThumbs = () => {
    thumbsWrap.innerHTML = "";
    thumbButtons = items.map((a, i) => {
      const thumbSrc = a.getAttribute("data-thumb") || a.getAttribute("href");
      const caption = a.getAttribute("data-caption") || "";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "lbThumb";
      const t = document.createElement("img");
      t.src = thumbSrc;
      t.alt = caption || `Thumb ${i + 1}`;
      t.loading = "lazy";
      btn.appendChild(t);
      btn.addEventListener("click", () => open(i));
      thumbsWrap.appendChild(btn);
      return btn;
    });
  };

  const setActiveThumb = () => {
    thumbButtons.forEach((b, i) => b.classList.toggle("is-active", i === index));
  };

  const open = (i) => {
    index = i;
    const el = items[index];
    const href = el.getAttribute("href");
    const caption = el.getAttribute("data-caption") || "";

    cap.textContent = caption;

    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    setActiveThumb();
    resetZoom();
    setLoading(true);

    const pre = new Image();
    pre.onload = () => {
      img.src = href;
      img.alt = caption || "Preview";
      requestAnimationFrame(() => {
        setLoading(false);
        startSlideshow();
      });
    };
    pre.src = href;
  };

  const close = () => {
    lb.classList.remove("is-open", "is-loading", "is-ready", "is-zoom");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    img.src = "";
    cap.textContent = "";
    stopSlideshow();
    resetZoom();
  };

  const prev = () => open((index - 1 + items.length) % items.length);
  const next = () => open((index + 1) % items.length);

  buildThumbs();

  items.forEach((a, i) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      open(i);
    });
  });

  btnClose?.addEventListener("click", close);
  btnPrev?.addEventListener("click", () => {
    resetZoom();
    prev();
  });
  btnNext?.addEventListener("click", () => {
    resetZoom();
    next();
  });

  btnPlay?.addEventListener("click", toggleSlideshow);

  btnZoom?.addEventListener("click", () => {
    stopSlideshow();
    if (scale === 1) setZoom(2);
    else resetZoom();
  });

  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  });

  img.addEventListener("click", (e) => {
    e.stopPropagation();
    stopSlideshow();
    if (scale === 1) setZoom(2);
    else resetZoom();
  });
}

// -------------------
// BOOT (ONLY ONCE) ✅
// -------------------
document.addEventListener("DOMContentLoaded", () => {
  setupYear();
  setupNav();
  setupAnchors();
  setupWhatsAppForm();
  setupReveal();
  setupParallax();
  setupHeroSlideshow();
  setupShowreel();
  setupTestimonials();
  setupLightbox();

  document.querySelectorAll(".langBtn").forEach((b) => {
    b.addEventListener("click", () => setLanguage(b.getAttribute("data-lang")));
  });

  const saved = localStorage.getItem("kv_lang") || "de";
  setLanguage(saved);
});

