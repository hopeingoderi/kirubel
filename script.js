// =====================================================
// KIRUBEL VISUALS — Full Premium script.js
// - DE/EN i18n
// - Mobile nav
// - WhatsApp prefilled inquiry
// - Copy IBAN button
// - Scroll reveal animation
// - Premium Lightbox: loader + thumbs + zoom + drag + slideshow auto-start
// =====================================================

const WHATSAPP_NUMBER = "41775035871";

const I18N = {
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
    "hero.title": "Cinematic Luxury — zeitlose Visual Stories.",
    "hero.subtitle": "Hochzeiten, Verlobungen, Taufen und Feiern — festgehalten mit Eleganz, cineastischer Tiefe und diskretem Stil.",
    "hero.cta1": "Verfügbarkeit prüfen",
    "hero.cta2": "Portfolio ansehen",

    "trust.a.title": "Diskret",
    "trust.a.sub": "Professionelle Präsenz",
    "trust.b.title": "Cineastisch",
    "trust.b.sub": "Elegantes Storytelling",
    "trust.c.title": "Zuverlässig",
    "trust.c.sub": "Strukturierter Ablauf",

    "cinema.title": "Cineastisches Wedding Storytelling",
    "cinema.subtitle": "Emotion. Eleganz. Zeitlose Kunst.",

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
    "services.subtitle": "Luxury Coverage für Hochzeiten und Life-Events — Film + Foto mit Eleganz.",
    "services.wedding.title": "Hochzeits-Stories",
    "services.wedding.li1": "Ganztägige Film- & Foto-Begleitung",
    "services.wedding.li2": "Cineastischer Highlight-Film",
    "services.wedding.li3": "Elegante Portrait-Session",
    "services.wedding.li4": "Zeremonie & Reden",
    "services.engagement.title": "Verlobungs-Sessions",
    "services.engagement.li1": "Romantischer Kurzfilm + Fine Portraits",
    "services.engagement.li2": "Outdoor / City / Destination",
    "services.engagement.li3": "Guided Direction",
    "services.engagement.li4": "Perfekt für Einladungen & Socials",
    "services.baptism.title": "Taufe & Zeremonien",
    "services.baptism.li1": "Respektvolle Dokumentation",
    "services.baptism.li2": "Familienportraits",
    "services.baptism.li3": "Option: kurzer Kinofilm",
    "services.baptism.li4": "Sauberes Audio",
    "services.celebrations.title": "Feiern",
    "services.celebrations.li1": "Geburtstage, Gratulation, private Events",
    "services.celebrations.li2": "Diskret & elegant",
    "services.celebrations.li3": "Highlights + Galerie",
    "services.celebrations.li4": "Schneller Preview möglich",
    "services.cta": "Jetzt anfragen",
    "services.note": "In der Schweiz • Landesweit verfügbar",

    "collections.title": "Pakete",
    "collections.subtitle": "Drei Luxus-Pakete — Details klären wir im Gespräch.",
    "collections.sig.title": "Signature",
    "collections.sig.badge": "Am häufigsten gebucht",
    "collections.sig.li1": "Bis zu 10 Stunden",
    "collections.sig.li2": "Highlight-Film (4–8 Min.)",
    "collections.sig.li3": "Bearbeitete Fotogalerie",
    "collections.sig.li4": "Private Online-Lieferung",
    "collections.sig.cta": "Details anfragen",
    "collections.pre.title": "Prestige",
    "collections.pre.badge": "Bester Wert",
    "collections.pre.li1": "Bis zu 12 Stunden",
    "collections.pre.li2": "Highlight + Social Teaser",
    "collections.pre.li3": "Audio Zeremonie/Reden",
    "collections.pre.li4": "Priority Editing",
    "collections.pre.cta": "Verfügbarkeit prüfen",
    "collections.leg.title": "Legacy",
    "collections.leg.badge": "Luxury Story",
    "collections.leg.li1": "Bis zu 14 Stunden",
    "collections.leg.li2": "Highlight + Extended Film",
    "collections.leg.li3": "Option: Engagement Session",
    "collections.leg.li4": "Luxury Presentation",
    "collections.leg.cta": "Details anfragen",
    "collections.addons": "Add-ons: Drohne (wo erlaubt), Extra-Stunden, Same-Week Teaser, Raw Footage, Second Shooter.",

    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "Eine feine Auswahl an Momenten — ersetze diese durch deine besten Arbeiten.",

    "about.title": "Elegantes Storytelling — mit Intention.",
    "about.subtitle": "Jede Zeremonie trägt Emotionen, die mit Anmut bewahrt werden sollten. Diskret, geführt und stilvoll — damit ihr ganz im Moment seid.",
    "about.s1.title": "Beratung",
    "about.s1.sub": "Wir klären Vision, Timing und Details.",
    "about.s2.title": "Begleitung",
    "about.s2.sub": "Film + Foto mit ruhiger, professioneller Anleitung.",
    "about.s3.title": "Schnitt & Lieferung",
    "about.s3.sub": "Luxury Look, sauberes Audio, private Lieferung.",
    "about.cta1": "Datum sichern",
    "about.cta2": "Kontakt",
    "about.caption": "Film & Fotografie • Schweiz",

    "contactLuxury.title": "Datum reservieren",
    "contactLuxury.subtitle": "Ich nehme pro Jahr nur eine limitierte Anzahl an Hochzeiten & Zeremonien an — für volle künstlerische Hingabe.",
    "contactLuxury.whTitle": "Privates WhatsApp",
    "contactLuxury.whText": "Direkter Kontakt für Verfügbarkeit & schnelle Fragen.",
    "contactLuxury.whBtn": "Jetzt schreiben",
    "contactLuxury.emTitle": "Formelle Anfragen",
    "contactLuxury.emText": "Für Destination Weddings, detaillierte Angebote und offizielle Buchungen.",
    "contactLuxury.emBtn": "E-Mail senden",
    "contactLuxury.t1": "• Schweiz",
    "contactLuxury.t2": "• Diskret & professionell",
    "contactLuxury.t3": "• Antwort innerhalb 24h",

    "payment.title": "Zahlung",
    "payment.subtitle": "Mit TWINT scannen oder Banküberweisung nutzen.",
    "payment.twintLabel": "TWINT:",
    "payment.nameLabel": "Name:",
    "payment.ibanLabel": "IBAN:",
    "payment.copyIban": "IBAN kopieren",
    "payment.note": "Tipp: Event-Datum als Zahlungsnotiz hinzufügen.",

    "lb.zoom": "Zoom",
    "lb.pause": "Pause",

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
    "hero.title": "Cinematic Luxury — Timeless Visual Stories.",
    "hero.subtitle": "Weddings, engagements, baptisms and celebrations — captured with elegance, cinematic depth and a refined, discreet approach.",
    "hero.cta1": "Check Availability",
    "hero.cta2": "View Portfolio",

    "trust.a.title": "Discreet",
    "trust.a.sub": "Professional presence",
    "trust.b.title": "Cinematic",
    "trust.b.sub": "Elegant storytelling",
    "trust.c.title": "Reliable",
    "trust.c.sub": "Structured workflow",

    "cinema.title": "Cinematic Wedding Storytelling",
    "cinema.subtitle": "Emotion. Elegance. Timeless Art.",

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

    "contactLuxury.title": "Reserve Your Date",
    "contactLuxury.subtitle": "I accept a limited number of weddings and ceremonies each year to ensure full artistic dedication.",
    "contactLuxury.whTitle": "Private WhatsApp",
    "contactLuxury.whText": "Direct communication for availability checks and immediate assistance.",
    "contactLuxury.whBtn": "Start Conversation",
    "contactLuxury.emTitle": "Formal Inquiries",
    "contactLuxury.emText": "For destination weddings, detailed proposals and official bookings.",
    "contactLuxury.emBtn": "Send Email",
    "contactLuxury.t1": "• Switzerland Based",
    "contactLuxury.t2": "• Discreet & Professional",
    "contactLuxury.t3": "• Response within 24 Hours",

    "payment.title": "Payment",
    "payment.subtitle": "Scan with TWINT or use bank transfer.",
    "payment.twintLabel": "TWINT:",
    "payment.nameLabel": "Name:",
    "payment.ibanLabel": "IBAN:",
    "payment.copyIban": "Copy IBAN",
    "payment.note": "Tip: add your event date in the payment note.",

    "lb.zoom": "Zoom",
    "lb.pause": "Pause",

    "footer.rights": "All rights reserved."
  }
};

function applyTranslations(lang){
  const dict = I18N[lang] || I18N.en;

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  const sel = document.getElementById("eventTypeSelect");
  if (sel){
    const current = sel.value;
    const opts = (lang === "de")
      ? ["Hochzeit","Verlobung","Taufe","Feier/Event","Anderes"]
      : ["Wedding","Engagement","Baptism","Celebration/Event","Other"];
    sel.innerHTML = "";
    opts.forEach(v=>{
      const o = document.createElement("option");
      o.value = v; o.textContent = v;
      sel.appendChild(o);
    });
    if (current) sel.value = current;
  }
}

function setLanguage(lang){
  const safe = (lang === "en") ? "en" : "de";
  localStorage.setItem("kv_lang", safe);
  document.documentElement.setAttribute("lang", safe);

  document.querySelectorAll(".langBtn").forEach(b=>{
    const active = b.getAttribute("data-lang") === safe;
    b.classList.toggle("is-active", active);
    b.setAttribute("aria-pressed", String(active));
  });

  applyTranslations(safe);
}

function setupUI(){
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".nav__toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav){
    toggle.addEventListener("click", ()=>{
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(a=>{
      a.addEventListener("click", ()=>{
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded","false");
      });
    });

    document.addEventListener("click", (e)=>{
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(e.target) || toggle.contains(e.target)) return;
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded","false");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click", (e)=>{
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({behavior:"smooth", block:"start"});
    });
  });
}

function setupWhatsAppForm(){
  const form = document.getElementById("leadForm");
  if (!form) return;

  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const data = new FormData(form);

    const name = (data.get("name")||"").toString().trim();
    const type = (data.get("type")||"").toString().trim();
    const date = (data.get("date")||"").toString().trim();
    const location = (data.get("location")||"").toString().trim();
    const msg = (data.get("msg")||"").toString().trim();

    const lang = localStorage.getItem("kv_lang") || "de";
    const header = (lang === "de")
      ? "Hallo Kirubel, ich möchte anfragen:"
      : "Hi Kirubel, I would like to inquire:";

    const message =
`${header}

Name: ${name}
Event: ${type}
Date: ${date}
Location: ${location}
Message: ${msg}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
  });
}

function setupCopyButtons(){
  document.querySelectorAll(".copyBtn").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const text = btn.getAttribute("data-copy") || "";
      if (!text || text.includes("PASTE YOUR")) {
        alert("Please paste your real IBAN into index.html first.");
        return;
      }
      try{
        await navigator.clipboard.writeText(text);
        const old = btn.textContent;
        btn.textContent = "Copied ✓";
        setTimeout(()=> btn.textContent = old, 1200);
      }catch{
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
        alert("Copied ✓");
      }
    });
  });
}

/* Scroll reveal */
function setupReveal(){
  const els = document.querySelectorAll(".reveal");
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(ent=>{
      if (ent.isIntersecting){
        ent.target.classList.add("is-visible");
        obs.unobserve(ent.target);
      }
    });
  }, { threshold: 0.18 });

  els.forEach(el=> obs.observe(el));
}

// =====================================================
// Premium Lightbox (thumbs + loader + zoom + slideshow auto-start)
// =====================================================
function setupLightbox(){
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

  // Slideshow
  let timer = null;
  const startSlideshow = ()=>{
    stopSlideshow();
    timer = setInterval(()=> next(), 3600);
    if (btnPlay) btnPlay.textContent = "Pause";
  };
  const stopSlideshow = ()=>{
    if (timer) clearInterval(timer);
    timer = null;
    if (btnPlay) btnPlay.textContent = "Play";
  };
  const toggleSlideshow = ()=> timer ? stopSlideshow() : startSlideshow();

  // Zoom
  let scale = 1, tx = 0, ty = 0;
  let dragging = false, startX = 0, startY = 0;

  const applyTransform = ()=> img.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;

  const resetZoom = ()=>{
    scale = 1; tx = 0; ty = 0;
    lb.classList.remove("is-zoom");
    img.style.cursor = "zoom-in";
    applyTransform();
    if (btnZoom) btnZoom.textContent = "Zoom";
  };

  const setZoom = (newScale)=>{
    scale = Math.min(3.2, Math.max(1, newScale));
    if (scale === 1){ resetZoom(); return; }
    lb.classList.add("is-zoom");
    img.style.cursor = "grab";
    applyTransform();
    if (btnZoom) btnZoom.textContent = "Reset";
  };

  // Loader class
  const setLoading = (on)=>{
    lb.classList.toggle("is-loading", on);
    lb.classList.toggle("is-ready", !on);
  };

  // Thumbs
  let thumbButtons = [];
  const buildThumbs = ()=>{
    thumbsWrap.innerHTML = "";
    thumbButtons = items.map((a,i)=>{
      const thumbSrc = a.getAttribute("data-thumb") || a.getAttribute("href");
      const caption = a.getAttribute("data-caption") || "";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "lbThumb";
      btn.setAttribute("aria-label", caption || `Image ${i+1}`);
      const t = document.createElement("img");
      t.src = thumbSrc;
      t.alt = caption || `Thumb ${i+1}`;
      t.loading = "lazy";
      btn.appendChild(t);
      btn.addEventListener("click", ()=> open(i));
      thumbsWrap.appendChild(btn);
      return btn;
    });
  };

  const setActiveThumb = ()=>{
    thumbButtons.forEach((b,i)=> b.classList.toggle("is-active", i===index));
    thumbButtons[index]?.scrollIntoView({behavior:"smooth", inline:"center", block:"nearest"});
  };

  const open = (i)=>{
    index = i;
    const el = items[index];
    const href = el.getAttribute("href");
    const caption = el.getAttribute("data-caption") || "";

    cap.textContent = caption;

    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";

    setActiveThumb();
    resetZoom();
    setLoading(true);

    const pre = new Image();
    pre.onload = ()=>{
      img.src = href;
      img.alt = caption || "Preview";
      requestAnimationFrame(()=>{
        setLoading(false);
        startSlideshow(); // auto-start
      });
    };
    pre.src = href;
  };

  const close = ()=>{
    lb.classList.remove("is-open","is-loading","is-ready","is-zoom");
    lb.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
    img.src = "";
    cap.textContent = "";
    stopSlideshow();
    resetZoom();
  };

  const prev = ()=> open((index - 1 + items.length) % items.length);
  const next = ()=> open((index + 1) % items.length);

  buildThumbs();

  items.forEach((a,i)=>{
    a.addEventListener("click", (e)=>{
      e.preventDefault();
      open(i);
    });
  });

  btnClose?.addEventListener("click", close);
  btnPrev?.addEventListener("click", ()=>{ resetZoom(); prev(); });
  btnNext?.addEventListener("click", ()=>{ resetZoom(); next(); });

  btnPlay?.addEventListener("click", toggleSlideshow);

  btnZoom?.addEventListener("click", ()=>{
    stopSlideshow();
    if (scale === 1) setZoom(2);
    else resetZoom();
  });

  lb.addEventListener("click", (e)=>{ if (e.target === lb) close(); });

  document.addEventListener("keydown", (e)=>{
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") { resetZoom(); prev(); }
    if (e.key === "ArrowRight") { resetZoom(); next(); }
    if (e.key === " "){ e.preventDefault(); toggleSlideshow(); }
    if (e.key === "+" || e.key === "=") setZoom(scale + 0.25);
    if (e.key === "-" || e.key === "_") setZoom(scale - 0.25);
    if (e.key.toLowerCase() === "0") resetZoom();
  });

  img.addEventListener("click", (e)=>{
    e.stopPropagation();
    stopSlideshow();
    if (scale === 1) setZoom(2);
    else resetZoom();
  });

  img.addEventListener("dblclick", (e)=>{
    e.preventDefault();
    e.stopPropagation();
    stopSlideshow();
    if (scale < 2.5) setZoom(3);
    else resetZoom();
  });

  img.addEventListener("wheel", (e)=>{
    if (!lb.classList.contains("is-open")) return;
    if (!lb.classList.contains("is-zoom")) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    setZoom(scale + delta);
  }, { passive:false });

  img.addEventListener("mousedown", (e)=>{
    if (scale === 1) return;
    dragging = true;
    startX = e.clientX - tx;
    startY = e.clientY - ty;
  });

  document.addEventListener("mousemove", (e)=>{
    if (!dragging) return;
    tx = e.clientX - startX;
    ty = e.clientY - startY;
    applyTransform();
  });

  document.addEventListener("mouseup", ()=> dragging = false);

  // Swipe when not zoomed
  let swipeStartX = 0;
  img.addEventListener("touchstart", (e)=>{
    if (scale !== 1) return;
    swipeStartX = e.touches[0].clientX;
  }, { passive:true });

  img.addEventListener("touchend", (e)=>{
    if (scale !== 1) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - swipeStartX;
    if (Math.abs(diff) < 40) return;
    if (diff > 0) prev(); else next();
  });
}

// Boot
document.addEventListener("DOMContentLoaded", ()=>{
  setupUI();
  setupWhatsAppForm();
  setupCopyButtons();
  setupReveal();
  setupLightbox();

  document.querySelectorAll(".langBtn").forEach(b=>{
    b.addEventListener("click", ()=> setLanguage(b.getAttribute("data-lang")));
  });

  const saved = localStorage.getItem("kv_lang") || "de";
  setLanguage(saved);
});
