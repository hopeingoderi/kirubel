/* =========================================================
   KIRUBEL VISUALS — script.js (Full)
   - DE/EN i18n toggle (data-i18n + data-i18n-ph)
   - WhatsApp inquiry form (prefilled message)
   - Mobile menu toggle
   - Premium Lightbox: thumbnails + keyboard + swipe + zoom
   ========================================================= */

/* -----------------------------
   1) TRANSLATIONS (DE/EN)
------------------------------ */
const TRANSLATIONS = {
  de: {
    "topbar.pill": "Schweiz • Film + Foto • Luxury Visuals",
    "topbar.phone": "WhatsApp/Anruf: +41 77 503 58 71",

    "nav.services": "Services",
    "nav.collections": "Pakete",
    "nav.portfolio": "Portfolio",
    "nav.about": "Über mich",
    "nav.contact": "Kontakt",
    "nav.cta": "WhatsApp Anfrage",

    "hero.kicker": "Luxury Hochzeits- & Eventfilme • Fotografie • Schweiz",
    "hero.title": "Zeitlose visuelle Geschichten für die wichtigsten Momente deines Lebens.",
    "hero.subtitle":
      "Hochzeiten, Verlobungen, Taufen und Feiern — festgehalten mit Eleganz, cineastischer Tiefe und einer diskreten, stilvollen Art.",
    "hero.cta1": "Verfügbarkeit prüfen",
    "hero.cta2": "Pakete ansehen",

    "trust.a.title": "Diskret",
    "trust.a.sub": "Professionelles Auftreten",
    "trust.b.title": "Cineastisch",
    "trust.b.sub": "Elegantes Storytelling",
    "trust.c.title": "Zuverlässig",
    "trust.c.sub": "Strukturierter Ablauf",

    "form.title": "Schnellanfrage",
    "form.subtitle": "Sende Datum + Ort. Ich antworte schnell.",
    "form.name.label": "Name",
    "form.name.ph": "Dein Name",
    "form.type.label": "Event-Typ",
    "form.date.label": "Datum",
    "form.location.label": "Ort",
    "form.location.ph": "Zürich / Basel / ...",
    "form.msg.label": "Nachricht",
    "form.msg.ph": "Stunden, Wünsche, Sprache usw.",
    "form.submit": "Per WhatsApp senden",
    "form.note": "WhatsApp öffnet sich mit deiner Nachricht vorausgefüllt.",

    "services.title": "Services",
    "services.subtitle": "Luxus-Coverage für Hochzeiten und Life-Events — Film + Foto, mit Eleganz geliefert.",
    "services.wedding.title": "Hochzeits-Stories",
    "services.wedding.li1": "Ganztägige Film- & Foto-Begleitung",
    "services.wedding.li2": "Cineastischer Highlight-Film",
    "services.wedding.li3": "Elegante Portrait-Session",
    "services.wedding.li4": "Zeremonie & Reden",
    "services.engagement.title": "Verlobungs-Sessions",
    "services.engagement.li1": "Romantischer Kurzfilm + Fine-Art Portraits",
    "services.engagement.li2": "Outdoor / City / Destination",
    "services.engagement.li3": "Guided Posing & Direction",
    "services.engagement.li4": "Perfekt für Einladungen & Socials",
    "services.baptism.title": "Taufe & Zeremonien",
    "services.baptism.li1": "Respektvolle Dokumentation",
    "services.baptism.li2": "Familienportraits",
    "services.baptism.li3": "Option: kurzer Kinofilm",
    "services.baptism.li4": "Sauberes Audio-Setup",
    "services.celebrations.title": "Feiern",
    "services.celebrations.li1": "Geburtstage, Gratulation, private Events",
    "services.celebrations.li2": "Diskrete, elegante Begleitung",
    "services.celebrations.li3": "Highlights + Galerie",
    "services.celebrations.li4": "Schneller Preview möglich",
    "services.cta": "Jetzt anfragen",
    "services.note": "In der Schweiz • Landesweit verfügbar",

    "collections.title": "Pakete",
    "collections.subtitle": "Drei Luxus-Pakete — passend zu deinem Tag. Details klären wir im Gespräch.",
    "collections.sig.title": "Signature",
    "collections.sig.badge": "Am häufigsten gebucht",
    "collections.sig.li1": "Bis zu 10 Stunden Begleitung",
    "collections.sig.li2": "Highlight-Film (4–8 Min.)",
    "collections.sig.li3": "Bearbeitete Fotogalerie",
    "collections.sig.li4": "Private Online-Lieferung",
    "collections.sig.cta": "Details anfragen",
    "collections.pre.title": "Prestige",
    "collections.pre.badge": "Bester Wert",
    "collections.pre.li1": "Bis zu 12 Stunden Begleitung",
    "collections.pre.li2": "Highlight-Film + Social-Teaser",
    "collections.pre.li3": "Zeremonie/Reden Audio-Capture",
    "collections.pre.li4": "Priority Editing",
    "collections.pre.cta": "Verfügbarkeit prüfen",
    "collections.leg.title": "Legacy",
    "collections.leg.badge": "Luxury Story",
    "collections.leg.li1": "Bis zu 14 Stunden Begleitung",
    "collections.leg.li2": "Highlight + Extended Film",
    "collections.leg.li3": "Option: Engagement Session",
    "collections.leg.li4": "Luxury Presentation",
    "collections.leg.cta": "Details anfragen",
    "collections.addons":
      "Add-ons: Drohne (wo erlaubt), Extra-Stunden, Same-Week Teaser, Raw Footage, Second Shooter.",

    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "Eine Auswahl von Momenten — ersetze diese mit deinen besten Arbeiten.",

    "about.title": "Elegantes Storytelling — mit Intention.",
    "about.subtitle":
      "Jede Zeremonie trägt Emotionen, die mit Anmut bewahrt werden sollten. Mein Ansatz ist diskret, geführt und stilvoll — damit ihr ganz im Moment seid.",
    "about.s1.title": "Beratung",
    "about.s1.sub": "Wir klären Vision, Timing und Details.",
    "about.s2.title": "Begleitung",
    "about.s2.sub": "Film + Foto mit ruhiger, professioneller Anleitung.",
    "about.s3.title": "Schnitt & Lieferung",
    "about.s3.sub": "Luxury Look, sauberes Audio, private Lieferung.",
    "about.cta1": "Datum sichern",
    "about.cta2": "Kontakt",
    "about.caption": "Film & Fotografie • Schweiz",

    "contact.title": "Kontakt",
    "contact.subtitle": "Sende Datum und Ort — ich bestätige Verfügbarkeit schnell.",
    "contact.wh.title": "WhatsApp",
    "contact.wh.sub": "Schnellster Weg, mich zu erreichen.",
    "contact.wh.cta": "WhatsApp öffnen",
    "contact.phone": "Telefon:",
    "contact.impressum.title": "Impressum",
    "contact.impressum.text":
      "Füge hier deine Business-Daten ein (Name, Adresse, etc.). Ich kann es formatieren, sobald du sie schickst.",
    "contact.av.title": "Verfügbarkeit",
    "contact.av.sub": "Beliebte Termine sind schnell weg. Bitte sende:",
    "contact.av.li1": "Event-Typ",
    "contact.av.li2": "Datum",
    "contact.av.li3": "Stadt / Location",
    "contact.av.li4": "Ca. Stunden",
    "contact.av.li5": "Nur Film / nur Foto / beides",

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
    "collections.addons":
      "Add-ons: drone (where permitted), extra hours, same-week teaser, raw footage, second shooter.",

    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "A refined selection of moments — replace these with your best work.",

    "about.title": "Elegant storytelling — created with intention.",
    "about.subtitle":
      "Every ceremony carries emotion that deserves to be preserved with grace. Our approach is discreet, guided, and refined — so you can be fully present.",
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
    "contact.impressum.text":
      "Add your business details here (name, address, etc.). I can format this once you share them.",
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

/* -----------------------------
   2) HELPERS
------------------------------ */
function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.de;

  // normal text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // placeholders
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  // select options for event type
  const select = document.getElementById("eventTypeSelect");
  if (select) {
    const options =
      lang === "de"
        ? ["Hochzeit", "Verlobung", "Taufe", "Geburtstag", "Feier", "Anderes"]
        : ["Wedding", "Engagement", "Baptism", "Birthday", "Celebration", "Other"];

    const current = select.value;
    select.innerHTML = "";
    options.forEach((o) => {
      const op = document.createElement("option");
      op.value = o;
      op.textContent = o;
      select.appendChild(op);
    });

    // keep selection if possible
    if (current) select.value = current;
  }
}

function setLanguage(lang) {
  const safe = lang === "en" ? "en" : "de";
  localStorage.setItem("kv_lang", safe);

  // update button states
  document.querySelectorAll(".langBtn").forEach((b) => {
    const isActive = b.getAttribute("data-lang") === safe;
    b.classList.toggle("is-active", isActive);
    b.setAttribute("aria-pressed", String(isActive));
  });

  applyTranslations(safe);
}

/* -----------------------------
   3) UI: NAV + YEAR
------------------------------ */
function setupUI() {
  // year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav toggle
  const toggle = document.querySelector(".nav__toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // close after click on link (mobile)
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        if (nav.classList.contains("is-open")) {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // smooth anchor scroll (nice)
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* -----------------------------
   4) WhatsApp Lead Form
------------------------------ */
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
        ? "Hallo Kirubel, ich möchte anfragen:"
        : "Hi Kirubel, I’d like to inquire:";

    const message = [
      header,
      "",
      `Name: ${name}`,
      `Event: ${type}`,
      `Date: ${date}`,
      `Location: ${location}`,
      `Message: ${msg}`
    ].join("\n");

    // IMPORTANT: use your real number here (no spaces)
    const WHATSAPP_NUMBER = "41775035871";

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
  });
}

/* -----------------------------
   5) Premium Lightbox Gallery
   Needs:
   - gallery anchors: <a class="gItem" href="assets/p1.jpg"><img ...></a>
   - lightbox HTML: #lightbox, #lbImg, #lbCap, #lbThumbs
------------------------------ */
function setupLightbox() {
  const items = Array.from(document.querySelectorAll(".gItem"));
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lbImg");
  const cap = document.getElementById("lbCap");
  const thumbsWrap = document.getElementById("lbThumbs");

  const btnClose = lb?.querySelector(".lbClose");
  const btnPrev = lb?.querySelector(".lbPrev");
  const btnNext = lb?.querySelector(".lbNext");

  if (!items.length || !lb || !img || !cap || !thumbsWrap) return;

  let index = 0;

  // Zoom state
  let scale = 1;
  let tx = 0;
  let ty = 0;
  let dragging = false;
  let startX = 0;
  let startY = 0;

  const applyTransform = () => {
    img.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
  };

  const resetZoom = () => {
    scale = 1;
    tx = 0;
    ty = 0;
    lb.classList.remove("is-zoom");
    img.style.cursor = "zoom-in";
    applyTransform();
  };

  const setZoom = (newScale) => {
    scale = Math.min(3, Math.max(1, newScale));
    if (scale === 1) {
      resetZoom();
      return;
    }
    lb.classList.add("is-zoom");
    img.style.cursor = "grab";
    applyTransform();
  };

  // Build thumbs
  let thumbButtons = [];
  const buildThumbs = () => {
    thumbsWrap.innerHTML = "";
    thumbButtons = items.map((a, i) => {
      const thumbSrc = a.getAttribute("data-thumb") || a.getAttribute("href");
      const caption = a.getAttribute("data-caption") || "";

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "lbThumb";
      btn.setAttribute("aria-label", caption || `Image ${i + 1}`);

      const tImg = document.createElement("img");
      tImg.src = thumbSrc;
      tImg.alt = caption || `Thumb ${i + 1}`;
      tImg.loading = "lazy";

      btn.appendChild(tImg);
      btn.addEventListener("click", () => open(i));

      thumbsWrap.appendChild(btn);
      return btn;
    });
  };

  const setActiveThumb = () => {
    thumbButtons.forEach((b, i) => b.classList.toggle("is-active", i === index));
    const active = thumbButtons[index];
    active?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const open = (i) => {
    index = i;
    const el = items[index];
    const href = el.getAttribute("href");
    const caption = el.getAttribute("data-caption") || "";

    img.src = href;
    img.alt = caption || "Preview";
    cap.textContent = caption;

    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    resetZoom();
    setActiveThumb();
  };

  const close = () => {
    lb.classList.remove("is-open");
    lb.classList.remove("is-zoom");
    lb.setAttribute("aria-hidden", "true");
    img.src = "";
    document.body.style.overflow = "";
    resetZoom();
  };

  const prev = () => open((index - 1 + items.length) % items.length);
  const next = () => open((index + 1) % items.length);

  buildThumbs();

  // Click open
  items.forEach((a, i) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      open(i);
    });
  });

  // Ensure close button works
  btnClose?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    close();
  });

  btnPrev?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    resetZoom();
    prev();
  });

  btnNext?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    resetZoom();
    next();
  });

  // close on background
  lb.addEventListener("click", (e) => {
    if (e.target === lb) close();
  });

  // keyboard
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") { resetZoom(); prev(); }
    if (e.key === "ArrowRight") { resetZoom(); next(); }
    if (e.key === "+" || e.key === "=") setZoom(scale + 0.25);
    if (e.key === "-" || e.key === "_") setZoom(scale - 0.25);
    if (e.key.toLowerCase() === "0") resetZoom();
  });

  // click to toggle zoom
  img.addEventListener("click", (e) => {
    e.stopPropagation();
    if (scale === 1) setZoom(2);
    else resetZoom();
  });

  // double click max zoom
  img.addEventListener("dblclick", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (scale < 2.5) setZoom(3);
    else resetZoom();
  });

  // wheel zoom
  img.addEventListener("wheel", (e) => {
    if (!lb.classList.contains("is-open")) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    setZoom(scale + delta);
  }, { passive: false });

  // drag when zoomed (mouse)
  img.addEventListener("mousedown", (e) => {
    if (scale === 1) return;
    dragging = true;
    startX = e.clientX - tx;
    startY = e.clientY - ty;
    img.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    tx = e.clientX - startX;
    ty = e.clientY - startY;
    applyTransform();
  });

  document.addEventListener("mouseup", () => {
    dragging = false;
    if (scale !== 1) img.style.cursor = "grab";
  });

  // touch drag when zoomed
  img.addEventListener("touchstart", (e) => {
    if (scale === 1) return;
    dragging = true;
    startX = e.touches[0].clientX - tx;
    startY = e.touches[0].clientY - ty;
  }, { passive: true });

  img.addEventListener("touchmove", (e) => {
    if (!dragging) return;
    tx = e.touches[0].clientX - startX;
    ty = e.touches[0].clientY - startY;
    applyTransform();
  }, { passive: true });

  img.addEventListener("touchend", () => {
    dragging = false;
  });

  // swipe when not zoomed
  let swipeStartX = 0;
  img.addEventListener("touchstart", (e) => {
    if (scale !== 1) return;
    swipeStartX = e.touches[0].clientX;
  }, { passive: true });

  img.addEventListener("touchend", (e) => {
    if (scale !== 1) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - swipeStartX;
    if (Math.abs(diff) < 40) return;
    if (diff > 0) prev();
    else next();
  });
}

/* -----------------------------
   6) BOOT
------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  // language buttons
  document.querySelectorAll(".langBtn").forEach((b) => {
    b.addEventListener("click", () => setLanguage(b.getAttribute("data-lang")));
  });

  const saved = localStorage.getItem("kv_lang") || "de";
  setLanguage(saved);

  setupUI();
  setupWhatsAppForm();
  setupLightbox();
});
