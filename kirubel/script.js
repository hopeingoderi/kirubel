// -------------------------
// Mobile nav
// -------------------------
const toggle = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a[href^='#']").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
document.getElementById("year").textContent = String(new Date().getFullYear());

// -------------------------
// i18n dictionary
// -------------------------
const I18N = {
  de: {
    "topbar.pill": "Schweiz • Film + Foto • Luxury Visuals",
    "topbar.phone": "WhatsApp/Anruf: +41 76 522 12 62",

    "nav.services": "Leistungen",
    "nav.collections": "Kollektionen",
    "nav.portfolio": "Portfolio",
    "nav.about": "Über mich",
    "nav.contact": "Kontakt",
    "nav.cta": "WhatsApp Anfrage",

    "hero.kicker": "Luxus Hochzeits- & Eventfilme • Fotografie • Schweiz",
    "hero.title": "Zeitlose Visual Stories für die wichtigsten Momente im Leben.",
    "hero.subtitle": "Hochzeiten, Verlobungen, Taufen und Feiern — festgehalten mit Eleganz, cineastischer Tiefe und einer diskreten, professionellen Art.",
    "hero.cta1": "Verfügbarkeit prüfen",
    "hero.cta2": "Kollektionen ansehen",

    "trust.a.title": "Diskret",
    "trust.a.sub": "Professionelle Präsenz",
    "trust.b.title": "Cineastisch",
    "trust.b.sub": "Elegantes Storytelling",
    "trust.c.title": "Zuverlässig",
    "trust.c.sub": "Strukturierter Ablauf",

    "form.title": "Schnellanfrage",
    "form.subtitle": "Sende Datum + Ort. Wir antworten schnell.",
    "form.name.label": "Name",
    "form.name.ph": "Dein Name",
    "form.type.label": "Event-Art",
    "form.date.label": "Datum",
    "form.location.label": "Ort",
    "form.location.ph": "Zürich / Basel / ...",
    "form.msg.label": "Nachricht",
    "form.msg.ph": "Stunden, Wünsche, Sprache, etc.",
    "form.submit": "Per WhatsApp senden",
    "form.note": "WhatsApp öffnet sich mit deiner vorgefüllten Nachricht.",

    "services.title": "Leistungen",
    "services.subtitle": "Luxus-Begleitung für Hochzeiten und besondere Anlässe — Film + Fotografie, elegant geliefert.",
    "services.wedding.title": "Hochzeits-Storys",
    "services.wedding.li1": "Ganztags Film & Foto",
    "services.wedding.li2": "Cineastischer Highlight-Film",
    "services.wedding.li3": "Elegantes Paarshooting",
    "services.wedding.li4": "Trauung & Reden (Audio/Video)",
    "services.engagement.title": "Verlobung",
    "services.engagement.li1": "Romantischer Kurzfilm + Fine-Art Porträts",
    "services.engagement.li2": "Outdoor / City / Destination",
    "services.engagement.li3": "Anleitung bei Posen & Ablauf",
    "services.engagement.li4": "Ideal für Einladungen & Socials",
    "services.baptism.title": "Taufe & Zeremonien",
    "services.baptism.li1": "Respektvolle Dokumentation",
    "services.baptism.li2": "Familienporträts",
    "services.baptism.li3": "Optional: kurzer Highlight-Film",
    "services.baptism.li4": "Sauberes Audio-Setup",
    "services.celebrations.title": "Feiern",
    "services.celebrations.li1": "Geburtstage, Gratulation, private Events",
    "services.celebrations.li2": "Diskrete, elegante Begleitung",
    "services.celebrations.li3": "Highlights + Galerie",
    "services.celebrations.li4": "Schnelle Preview möglich",
    "services.cta": "Jetzt anfragen",
    "services.note": "Schweizweit verfügbar",

    "collections.title": "Kollektionen",
    "collections.subtitle": "Drei Luxus-Kollektionen — passend zu eurem Tag. Details werden im Gespräch finalisiert.",
    "collections.sig.title": "Signature",
    "collections.sig.badge": "Am häufigsten gebucht",
    "collections.sig.li1": "Bis zu 10 Stunden",
    "collections.sig.li2": "Highlight-Film (4–8 Min.)",
    "collections.sig.li3": "Bearbeitete Fotogalerie",
    "collections.sig.li4": "Private Online-Lieferung",
    "collections.sig.cta": "Details anfordern",
    "collections.pre.title": "Prestige",
    "collections.pre.badge": "Bestes Preis-Leistungs-Verhältnis",
    "collections.pre.li1": "Bis zu 12 Stunden",
    "collections.pre.li2": "Highlight-Film + Social Teaser",
    "collections.pre.li3": "Trauung/Reden Audio-Aufnahme",
    "collections.pre.li4": "Priority Schnitt",
    "collections.pre.cta": "Verfügbarkeit prüfen",
    "collections.leg.title": "Legacy",
    "collections.leg.badge": "Luxury Story",
    "collections.leg.li1": "Bis zu 14 Stunden",
    "collections.leg.li2": "Highlight + Extended Film",
    "collections.leg.li3": "Optional: Verlobungssession",
    "collections.leg.li4": "Luxus-Präsentation",
    "collections.leg.cta": "Details anfordern",
    "collections.addons": "Add-ons: Drohne (wo erlaubt), Extra-Stunden, Same-Week Teaser, Rohmaterial, Second Shooter.",

    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "Eine kuratierte Auswahl — ersetze diese Bilder mit deinen besten Arbeiten.",

    "about.title": "Elegantes Storytelling — mit Absicht geschaffen.",
    "about.subtitle": "Jede Zeremonie trägt Emotionen in sich. Wir halten sie mit Ruhe, Struktur und Eleganz fest — damit ihr den Moment wirklich erleben könnt.",
    "about.s1.title": "Beratung",
    "about.s1.sub": "Wir klären Stil, Timing und Details.",
    "about.s2.title": "Begleitung",
    "about.s2.sub": "Film + Foto mit ruhiger, professioneller Anleitung.",
    "about.s3.title": "Schnitt & Lieferung",
    "about.s3.sub": "Luxus-Finish, sauberes Audio, private Übergabe.",
    "about.cta1": "Termin sichern",
    "about.cta2": "Kontakt",
    "about.caption": "Film & Fotografie • Schweiz",

    "contact.title": "Kontakt",
    "contact.subtitle": "Sende Datum und Ort — wir bestätigen die Verfügbarkeit schnell.",
    "contact.wh.title": "WhatsApp",
    "contact.wh.sub": "Der schnellste Weg, uns zu erreichen.",
    "contact.wh.cta": "WhatsApp öffnen",
    "contact.phone": "Telefon:",
    "contact.impressum.title": "Impressum",
    "contact.impressum.text": "Füge hier deine Firmendaten ein (Name, Adresse etc.). Ich formatiere es dir gern sauber, sobald du mir die Daten gibst.",
    "contact.av.title": "Verfügbarkeit",
    "contact.av.sub": "Beliebte Daten sind schnell weg. Bitte sende:",
    "contact.av.li1": "Event-Art",
    "contact.av.li2": "Datum",
    "contact.av.li3": "Stadt / Location",
    "contact.av.li4": "Ungefähr Stunden",
    "contact.av.li5": "Nur Film / nur Foto / beides",

    "footer.rights": "Alle Rechte vorbehalten."
  },

  en: {
    "topbar.pill": "Switzerland • Film + Photo • Luxury Visuals",
    "topbar.phone": "WhatsApp/Call: +41 76 522 12 62",

    "nav.services": "Services",
    "nav.collections": "Collections",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "WhatsApp Inquiry",

    "hero.kicker": "Luxury Wedding & Event Films • Photography • Switzerland",
    "hero.title": "Timeless Visual Stories for Life’s Most Meaningful Moments.",
    "hero.subtitle": "Weddings, engagements, baptisms and celebrations — captured with elegance, cinematic depth and a refined, discreet approach.",
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

    "services.title": "Services",
    "services.subtitle": "Luxury coverage for weddings and life events — film + photography, delivered with elegance.",
    "services.wedding.title": "Wedding Stories",
    "services.wedding.li1": "Full-day film & photo coverage",
    "services.wedding.li2": "Cinematic highlight film",
    "services.wedding.li3": "Elegant portrait session",
    "services.wedding.li4": "Ceremony & speeches capture",
    "services.engagement.title": "Engagement Sessions",
    "services.engagement.li1": "Romantic short film + fine portraits",
    "services.engagement.li2": "Outdoor / city / destination",
    "services.engagement.li3": "Guided posing & direction",
    "services.engagement.li4": "Perfect for invitations & socials",
    "services.baptism.title": "Baptism & Ceremonies",
    "services.baptism.li1": "Respectful documentation",
    "services.baptism.li2": "Family portraits",
    "services.baptism.li3": "Short cinematic film option",
    "services.baptism.li4": "Clean audio capture",
    "services.celebrations.title": "Celebrations",
    "services.celebrations.li1": "Birthdays, congratulations, private events",
    "services.celebrations.li2": "Discreet, elegant coverage",
    "services.celebrations.li3": "Highlights + gallery",
    "services.celebrations.li4": "Fast preview option",
    "services.cta": "Inquire Now",
    "services.note": "Based in Switzerland • Available nationwide",

    "collections.title": "Collections",
    "collections.subtitle": "Three luxury collections — tailored to your day. Exact details are confirmed in consultation.",
    "collections.sig.title": "Signature",
    "collections.sig.badge": "Most Requested",
    "collections.sig.li1": "Up to 10 hours coverage",
    "collections.sig.li2": "Highlight film (4–8 min)",
    "collections.sig.li3": "Edited photo gallery",
    "collections.sig.li4": "Private online delivery",
    "collections.sig.cta": "Request details",
    "collections.pre.title": "Prestige",
    "collections.pre.badge": "Best Value",
    "collections.pre.li1": "Up to 12 hours coverage",
    "collections.pre.li2": "Highlight film + social teaser",
    "collections.pre.li3": "Ceremony/speeches audio capture",
    "collections.pre.li4": "Priority editing",
    "collections.pre.cta": "Check availability",
    "collections.leg.title": "Legacy",
    "collections.leg.badge": "Luxury Story",
    "collections.leg.li1": "Up to 14 hours coverage",
    "collections.leg.li2": "Highlight + extended film",
    "collections.leg.li3": "Engagement session option",
    "collections.leg.li4": "Luxury presentation",
    "collections.leg.cta": "Request details",
    "collections.addons": "Add-ons: drone (where permitted), extra hours, same-week teaser, raw footage, second shooter.",

    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "A refined selection of moments — replace these with your best work.",

    "about.title": "Elegant storytelling — created with intention.",
    "about.subtitle": "Every ceremony carries emotion that deserves to be preserved with grace. Our approach is discreet, guided, and refined — so you can be fully present.",
    "about.s1.title": "Consultation",
    "about.s1.sub": "We confirm vision, timing, and details.",
    "about.s2.title": "Coverage",
    "about.s2.sub": "Film + photo with calm, professional direction.",
    "about.s3.title": "Editing & Delivery",
    "about.s3.sub": "Luxury finish, clean audio, private delivery.",
    "about.cta1": "Book your date",
    "about.cta2": "Contact",
    "about.caption": "Film & Photography • Switzerland",

    "contact.title": "Contact",
    "contact.subtitle": "Send your date and location — we’ll confirm availability quickly.",
    "contact.wh.title": "WhatsApp",
    "contact.wh.sub": "Fastest way to reach us.",
    "contact.wh.cta": "Open WhatsApp",
    "contact.phone": "Phone:",
    "contact.impressum.title": "Impressum",
    "contact.impressum.text": "Add your business details here (name, address, etc.). I can format this once you share them.",
    "contact.av.title": "Availability",
    "contact.av.sub": "Popular dates book early. Please share:",
    "contact.av.li1": "Event type",
    "contact.av.li2": "Date",
    "contact.av.li3": "City / venue",
    "contact.av.li4": "Approx. hours",
    "contact.av.li5": "Film only / photo only / both",

    "footer.rights": "All rights reserved."
  }
};

// Event types (select options) per language
const EVENT_TYPES = {
  de: ["Hochzeit", "Verlobung", "Taufe", "Feier", "Zeremonie"],
  en: ["Wedding", "Engagement", "Baptism", "Celebration", "Ceremony"]
};

// -------------------------
// Apply language
// -------------------------
function setLang(lang) {
  const dict = I18N[lang] || I18N.en;

  // set <html lang="">
  document.documentElement.lang = lang;

  // translate text nodes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // translate placeholders
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  // update language buttons
  document.querySelectorAll(".langBtn").forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  // update select options
  const select = document.getElementById("eventTypeSelect");
  if (select) {
    const options = EVENT_TYPES[lang] || EVENT_TYPES.en;
    const current = select.value;
    select.innerHTML = "";
    options.forEach(v => {
      const opt = document.createElement("option");
      opt.value = v;
      opt.textContent = v;
      select.appendChild(opt);
    });
    // try restore previous value if it exists in the new language list
    if (options.includes(current)) select.value = current;
  }

  // save
  localStorage.setItem("kv_lang", lang);
}

function detectDefaultLang() {
  const saved = localStorage.getItem("kv_lang");
  if (saved === "de" || saved === "en") return saved;

  const browser = (navigator.language || "en").toLowerCase();
  return browser.startsWith("de") ? "de" : "en";
}

// Hook buttons
document.querySelectorAll(".langBtn").forEach(btn => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

// Initialize
setLang(detectDefaultLang());

// -------------------------
// WhatsApp Lead Form
// -------------------------
const form = document.getElementById("leadForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);

    const lang = document.documentElement.lang || "en";
    const name = String(data.get("name") || "").trim();
    const type = String(data.get("type") || "").trim();
    const date = String(data.get("date") || "").trim();
    const location = String(data.get("location") || "").trim();
    const msg = String(data.get("msg") || "").trim();

    const header = lang === "de"
      ? "Hallo Kirubel Visuals! Ich möchte anfragen:"
      : "Hello Kirubel Visuals! I'd like to inquire:";

    const text =
      `${header}\n` +
      `Name: ${name}\n` +
      `${lang === "de" ? "Event" : "Event"}: ${type}\n` +
      `${lang === "de" ? "Datum" : "Date"}: ${date}\n` +
      `${lang === "de" ? "Ort" : "Location"}: ${location}\n` +
      `${lang === "de" ? "Nachricht" : "Message"}: ${msg}`;

    const phone = "41765221262";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
}
// Fade-in on scroll
const faders = document.querySelectorAll(".section, .card");

const appearOptions = {
  threshold: 0.15
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  fader.classList.add("fade-in");
  appearOnScroll.observe(fader);
});