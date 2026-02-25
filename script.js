// =====================================================
// KIRUBEL VISUALS — Premium script.js (DE/EN)
// Clean structure: i18n + UI + WhatsApp form
// =====================================================

const WHATSAPP_NUMBER = "41775035871"; // +41 77 503 58 71

// 1) Translations (keep short + elegant)
const I18N = {
  de: {
    "topbar.pill": "Schweiz • Film + Foto • Luxury Visuals",
    "topbar.phone": "WhatsApp/Anruf: +41 77 503 58 71",

    "nav.services": "Services",
    "nav.collections": "Kollektionen",
    "nav.portfolio": "Portfolio",
    "nav.about": "Über mich",
    "nav.contact": "Kontakt",
    "nav.cta": "WhatsApp Anfrage",

    "hero.kicker": "Luxury Wedding & Event Films • Fotografie • Schweiz",
    "hero.title": "Zeitlose Visual Stories für die bedeutendsten Momente.",
    "hero.subtitle":
      "Hochzeiten, Verlobungen, Taufen und Feiern — mit Eleganz, cineastischer Tiefe und diskretem Stil festgehalten.",
    "hero.cta1": "Verfügbarkeit prüfen",
    "hero.cta2": "Kollektionen ansehen",

    "trust.a.title": "Diskret",
    "trust.a.sub": "Professionelle Präsenz",
    "trust.b.title": "Cineastisch",
    "trust.b.sub": "Elegantes Storytelling",
    "trust.c.title": "Zuverlässig",
    "trust.c.sub": "Strukturierter Ablauf",

    "form.title": "Schnelle Anfrage",
    "form.subtitle": "Datum + Ort senden. Ich antworte schnell.",
    "form.name.label": "Name",
    "form.name.ph": "Dein Name",
    "form.type.label": "Event-Art",
    "form.date.label": "Datum",
    "form.location.label": "Ort",
    "form.location.ph": "Zürich / Basel / ...",
    "form.msg.label": "Nachricht",
    "form.msg.ph": "Stunden, Wünsche, Sprache, etc.",
    "form.submit": "Über WhatsApp senden",
    "form.note": "WhatsApp öffnet sich mit einer vorgefüllten Nachricht.",

    "event.wedding": "Hochzeit",
    "event.engagement": "Verlobung",
    "event.baptism": "Taufe",
    "event.celebration": "Feier / Event",
    "event.other": "Anderes",

    "footer.rights": "Alle Rechte vorbehalten."
  },

  en: {
    "topbar.pill": "Switzerland • Film + Photo • Luxury Visuals",
    "topbar.phone": "WhatsApp/Call: +41 77 503 58 71",

    "nav.services": "Services",
    "nav.collections": "Collections",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "WhatsApp Inquiry",

    "hero.kicker": "Luxury Wedding & Event Films • Photography • Switzerland",
    "hero.title": "Timeless Visual Stories for Life’s Most Meaningful Moments.",
    "hero.subtitle":
      "Weddings, engagements, baptisms and celebrations — captured with elegance, cinematic depth and a refined, discreet approach.",
    "hero.cta1": "Check Availability",
    "hero.cta2": "View Collections",

    "trust.a.title": "Discreet",
    "trust.a.sub": "Professional presence",
    "trust.b.title": "Cinematic",
    "trust.b.sub": "Elegant storytelling",
    "trust.c.title": "Reliable",
    "trust.c.sub": "Structured workflow",

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

    "event.wedding": "Wedding",
    "event.engagement": "Engagement",
    "event.baptism": "Baptism",
    "event.celebration": "Celebration / Event",
    "event.other": "Other",

    "footer.rights": "All rights reserved."
  }
};

// 2) Helpers
function setText(selector, text) {
  document.querySelectorAll(selector).forEach((el) => (el.textContent = text));
}

function applyTranslations(lang) {
  const dict = I18N[lang] || I18N.en;

  // data-i18n text
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // placeholders
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  // event type select
  const sel = document.getElementById("eventTypeSelect");
  if (sel) {
    const current = sel.value;
    sel.innerHTML = `
      <option value="wedding">${dict["event.wedding"]}</option>
      <option value="engagement">${dict["event.engagement"]}</option>
      <option value="baptism">${dict["event.baptism"]}</option>
      <option value="celebration">${dict["event.celebration"]}</option>
      <option value="other">${dict["event.other"]}</option>
    `;
    if (current) sel.value = current;
  }
}

function setLanguage(lang) {
  localStorage.setItem("kv_lang", lang);
  document.documentElement.setAttribute("lang", lang);

  // Toggle button UI
  document.querySelectorAll(".langBtn").forEach((b) => {
    const isActive = b.getAttribute("data-lang") === lang;
    b.classList.toggle("is-active", isActive);
    b.setAttribute("aria-pressed", String(isActive));
  });

  applyTranslations(lang);
}

// 3) Premium UI: nav, smooth scroll, fade-in
function setupUI() {
  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.querySelector(".nav__toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(e.target) || toggle.contains(e.target)) return;
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  }

  // Smooth scroll
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

  // Fade-in
  const targets = document.querySelectorAll(
    ".section__head, .card, .priceCard, .gallery img, .step, .about__image"
  );
  targets.forEach((el) => el.classList.add("fade"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-in");
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((el) => io.observe(el));
}

// 4) WhatsApp form
function setupWhatsAppForm() {
  const form = document.getElementById("leadForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const type = (data.get("type") || "").toString().trim();
    const date = (data.get("date") || "").toString().trim();
    const location = (data.get("location") || "").toString().trim();
    const msg = (data.get("msg") || "").toString().trim();

    const lang = localStorage.getItem("kv_lang") || "de";
    const header =
      lang === "de"
        ? `Hallo Kirubel, ich möchte anfragen:`
        : `Hi Kirubel, I would like to inquire:`;

    const message =
      `${header}\n\n` +
      `Name: ${name}\n` +
      `Event: ${type}\n` +
      `Date: ${date}\n` +
      `Location: ${location}\n` +
      `Message: ${msg}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
  });
}

// 5) Boot
document.addEventListener("DOMContentLoaded", () => {
  setupUI();
  setupWhatsAppForm();
  setupLightbox();
  // Language buttons
  document.querySelectorAll(".langBtn").forEach((b) => {
    b.addEventListener("click", () => setLanguage(b.getAttribute("data-lang")));
  });

  const saved = localStorage.getItem("kv_lang") || "de";
  setLanguage(saved);
});

