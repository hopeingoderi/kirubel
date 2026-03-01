// =====================================================
// KIRUBEL PHOTO & VIDEO 4U — FINAL script.js (DE/EN)
// Compatible with latest index.html + styles.css
//
// ✅ Two languages (DE/EN) i18n
// ✅ Sticky menu never hides (no scroll-hide logic at all)
// ✅ Luxury mobile slide-in menu + backdrop
// ✅ Logo clickable: desktop scroll top, mobile toggles menu
// ✅ Hero cinematic slideshow (no duplicates)
// ✅ Center showreel: auto-play videos smoothly (edit ONE array)
// ✅ Testimonials: photo + text slider (always consistent)
// ✅ WhatsApp inquiry form (prefilled)
// ✅ Scroll reveal animation
// ✅ Cinematic parallax (safe)
// ✅ Premium lightbox (thumbs + loader + zoom + slideshow)
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
    "hero.subtitle": "Hochzeiten, Verlobungen, Taufen und Feiern — festgehalten mit Eleganz, cineastischer Tiefe und diskretem Stil.",
    "hero.cta1": "Verfügbarkeit prüfen",
    "hero.cta2": "Galerie ansehen",

    "trust.a.title": "Diskret",
    "trust.a.sub": "Professionelle Präsenz",
    "trust.b.title": "Cineastisch",
    "trust.b.sub": "Elegantes Storytelling",
    "trust.c.title": "Zuverlässig",
    "trust.c.sub": "Strukturierter Ablauf",

    "cinema.title": "Cineastisches Wedding Storytelling",
    "cinema.subtitle": "Emotion. Eleganz. Zeitlose Kunst.",

    "showreel.title": "Showreel",
    "showreel.subtitle": "Kurze, cineastische Highlights — später kannst du hier ganz einfach 4–5 Videos einsetzen.",
    "showreel.hint": "Tipp: Ersetze die Dateien in assets/showreel/ und ändere nur die JS-Liste.",

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

    "gallery.title": "Galerie",
    "gallery.subtitle": "Eine feine Auswahl an Momenten — ersetze diese durch deine besten Arbeiten.",

    "testimonials.title": "Testimonials",
    "testimonials.subtitle": "Ein paar Worte von Kunden — echte Erlebnisse, echte Momente.",

    "about.title": "Elegant. Freundlich. Mit Herz.",
    "about.subtitle":
      "Seit über 10 Jahren begleite ich Hochzeiten und Events mit Ruhe, Respekt und echter Leidenschaft. Ich liebe das Spiel aus Licht, Emotion und Storytelling — und das Editing ist für mich nicht nur Arbeit, sondern tägliche Inspiration. Zuhause bin ich im Herzen der Schweiz: Bern.",
    "about.s1.title": "Beratung",
    "about.s1.sub": "Wir klären Vision, Timing und Details.",
    "about.s2.title": "Begleitung",
    "about.s2.sub": "Diskret, freundlich und geführt — damit ihr ganz im Moment seid.",
    "about.s3.title": "Schnitt & Lieferung",
    "about.s3.sub": "Luxury Look, sauberes Audio, private Lieferung.",
    "about.cta1": "Datum sichern",
    "about.cta2": "Kontakt",
    "about.caption": "Film & Fotografie • Bern, Schweiz",

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

    "materials.title": "Material / Equipment",
    "materials.subtitle": "Professionelle Tools für cineastische Bildqualität, sauberes Audio und stabile Bewegung.",
    "materials.camera": "Kamera",
    "materials.lenses": "Objektive",
    "materials.audio": "Audio",
    "materials.stabilize": "Stabilisierung",
    "materials.note": "Das genaue Equipment kann je nach Event variieren — immer für das beste Ergebnis ausgewählt.",

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
    "hero.subtitle": "Weddings, engagements, baptisms and celebrations — captured with elegance, cinematic depth and a refined, discreet approach.",
    "hero.cta1": "Check Availability",
    "hero.cta2": "View Gallery",

    "trust.a.title": "Discreet",
    "trust.a.sub": "Professional presence",
    "trust.b.title": "Cinematic",
    "trust.b.sub": "Elegant storytelling",
    "trust.c.title": "Reliable",
    "trust.c.sub": "Structured workflow",

    "cinema.title": "Cinematic Wedding Storytelling",
    "cinema.subtitle": "Emotion. Elegance. Timeless Art.",

    "showreel.title": "Showreel",
    "showreel.subtitle": "Short cinematic highlights — later you can easily swap this to 4–5 videos.",
    "showreel.hint": "Tip: Replace files in assets/showreel/ and only edit the JS list.",

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

    "gallery.title": "Gallery",
    "gallery.subtitle": "A refined selection of moments — replace these with your best work.",

    "testimonials.title": "Testimonials",
    "testimonials.subtitle": "A few words from clients — real experiences, real moments.",

    "about.title": "Elegant. Friendly. Heart-led.",
    "about.subtitle":
      "With over 10 years of experience, I capture weddings and events with calm guidance, respect, and genuine passion. I love shaping light, emotion and storytelling — and editing is not just work for me, it’s daily inspiration. I’m based in the heart of Switzerland: Bern.",
    "about.s1.title": "Consultation",
    "about.s1.sub": "We confirm vision, timing, and details.",
    "about.s2.title": "Coverage",
    "about.s2.sub": "Discreet, friendly, guided — so you can be fully present.",
    "about.s3.title": "Editing & Delivery",
    "about.s3.sub": "Luxury finish, clean audio, private delivery.",
    "about.cta1": "Book your date",
    "about.cta2": "Contact",
    "about.caption": "Film & Photography • Bern, Switzerland",

    "contactLuxury.title": "Reserve Your Date",
    "contactLuxury.subtitle": "I accept a limited number of weddings and ceremonies each year to ensure full artistic dedication.",
    "contactLuxury.whTitle": "Private WhatsApp",
    "contactLuxury.whText": "Direct communication for availability checks and quick questions.",
    "contactLuxury.whBtn": "Start Conversation",
    "contactLuxury.emTitle": "Formal Inquiries",
    "contactLuxury.emText": "For destination weddings, detailed proposals and official bookings.",
    "contactLuxury.emBtn": "Send Email",
    "contactLuxury.t1": "• Switzerland Based",
    "contactLuxury.t2": "• Discreet & Professional",
    "contactLuxury.t3": "• Response within 24 Hours",

    "materials.title": "Materials / Equipment",
    "materials.subtitle": "Professional tools chosen for cinematic image quality, clean audio and stable movement.",
    "materials.camera": "Camera",
    "materials.lenses": "Lenses",
    "materials.audio": "Audio",
    "materials.stabilize": "Stabilization",
    "materials.note": "Exact equipment can vary per event — always selected for the best final result.",

    "lb.zoom": "Zoom",
    "lb.pause": "Pause",
    "footer.rights": "All rights reserved.",
    "footer.partners": "Partners:"
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

  // event type select
  const sel = document.getElementById("eventTypeSelect");
  if (sel){
    const current = sel.value;
    const opts = (lang === "de")
      ? ["Hochzeit","Verlobung","Taufe","Feier/Event","Anderes"]
      : ["Wedding","Engagement","Baptism","Celebration/Event","Other"];
    sel.innerHTML = "";
    opts.forEach(v=>{
      const o = document.createElement("option");
      o.value = v;
      o.textContent = v;
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

// -------------------
// Mobile nav + logo
// -------------------
function setupNav(){
  const toggle = document.querySelector(".nav__toggle");
  const nav = document.querySelector(".nav");
  const brand = document.querySelector(".brand");

  if (!nav || !toggle) return;

  // backdrop (created once)
  let backdrop = document.querySelector(".navBackdrop");
  if (!backdrop){
    backdrop = document.createElement("div");
    backdrop.className = "navBackdrop";
    document.body.appendChild(backdrop);
  }

  const isMobile = () => window.matchMedia("(max-width: 980px)").matches;

  const openMenu = ()=>{
    nav.classList.add("is-open");
    backdrop.classList.add("is-open");
    toggle.setAttribute("aria-expanded","true");
    document.body.style.overflow = "hidden";
  };
  const closeMenu = ()=>{
    nav.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    toggle.setAttribute("aria-expanded","false");
    document.body.style.overflow = "";
  };
  const toggleMenu = ()=>{
    nav.classList.contains("is-open") ? closeMenu() : openMenu();
  };

  toggle.addEventListener("click", toggleMenu);
  backdrop.addEventListener("click", closeMenu);

  // close on nav link click (mobile)
  nav.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click", ()=>{
      if (isMobile()) closeMenu();
    });
  });

  // ESC closes menu
  document.addEventListener("keydown", (e)=>{
    if (e.key !== "Escape") return;
    if (nav.classList.contains("is-open")) closeMenu();
  });

  // Logo: desktop scroll top; mobile toggles menu
  if (brand){
    brand.addEventListener("click", (e)=>{
      if (isMobile()){
        e.preventDefault();
        toggleMenu();
      }else{
        // default anchor behavior (#top) is fine; keep smooth
      }
    });
  }

  // If resized to desktop, ensure menu resets
  window.addEventListener("resize", ()=>{
    if (!isMobile()){
      closeMenu();
    }
  });
}

// -------------------
// Smooth anchor scroll
// -------------------
function setupAnchors(){
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

// -------------------
// Year in footer
// -------------------
function setupYear(){
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// -------------------
// WhatsApp form
// -------------------
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

// -------------------
// Scroll reveal
// -------------------
function setupReveal(){
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

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

// -------------------
// Cinematic parallax (safe)
// - only sets CSS var on .cinemaVideo and optional .heroSlide
// -------------------
function setupParallax(){
  const cinema = document.querySelector(".cinemaVideo");
  if (!cinema) return;

  let ticking = false;
  const onScroll = ()=>{
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(()=>{
      const rect = cinema.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      // progress around center
      const center = rect.top + rect.height * 0.5;
      const p = (center - vh * 0.5) / vh; // -1..1-ish
      const y = Math.max(-18, Math.min(18, p * 18)); // subtle
      cinema.style.setProperty("--parY", `${y}px`);
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();
}

// -------------------
// Hero slideshow (images)
// -------------------
function setupHeroSlideshow(){
  const slides = Array.from(document.querySelectorAll(".heroSlide"));
  const dots = Array.from(document.querySelectorAll(".heroDot"));
  if (!slides.length) return;

  let idx = 0;
  let timer = null;

  const activate = (i)=>{
    idx = (i + slides.length) % slides.length;
    slides.forEach((s, n)=> s.classList.toggle("is-active", n === idx));
    dots.forEach((d, n)=> d.classList.toggle("is-active", n === idx));
  };

  const start = ()=>{
    stop();
    timer = setInterval(()=> activate(idx + 1), 5200);
  };
  const stop = ()=>{ if (timer) clearInterval(timer); timer = null; };

  dots.forEach((d, i)=>{
    d.addEventListener("click", ()=>{
      activate(i);
      start();
    });
  });

  // simple preloading
  slides.forEach(s=>{
    const url = s.style.backgroundImage.replace(/^url\(["']?/, "").replace(/["']?\)$/, "");
    if (!url) return;
    const im = new Image();
    im.src = url;
  });

  activate(0);
  start();
}

// -------------------
// Showreel (videos) — edit ONE array
// Requirements:
// - HTML should contain: <video id="showreelVideo" class="showreelMedia" ...></video>
// - Optional: add data-showreel="1" on the section; not required.
// -------------------
function setupShowreel(){
  const vid = document.getElementById("showreelVideo");
  if (!vid) return;

  // ✅ EDIT ONLY THIS LIST (add 4–5 short videos 5–12 sec)
  // Put files in: assets/showreel/
  const SHOWREEL_VIDEOS = [
    "assets/showreel/s1.mp4",
    "assets/showreel/s2.mp4",
    "assets/showreel/s3.mp4",
    "assets/showreel/s4.mp4",
    "assets/showreel/s5.mp4"
  ].filter(Boolean);

  // fallback (if you haven't added videos yet)
  if (!SHOWREEL_VIDEOS.length) return;

  // autoplay best practice
  vid.muted = true;
  vid.playsInline = true;
  vid.setAttribute("playsinline","");

  let i = 0;
  let pre = null;

  const canPlay = () =>
    new Promise((resolve)=> {
      const p = vid.play();
      if (p && typeof p.then === "function"){
        p.then(resolve).catch(()=> resolve());
      } else resolve();
    });

  const swapTo = async (src)=>{
    // preload next video
    if (pre) pre.src = "";
    pre = document.createElement("video");
    pre.src = src;
    pre.preload = "auto";
    pre.muted = true;
    pre.playsInline = true;

    // set current
    vid.src = src;
    vid.load();
    await canPlay();
  };

  const next = async ()=>{
    i = (i + 1) % SHOWREEL_VIDEOS.length;
    await swapTo(SHOWREEL_VIDEOS[i]);
  };

  // when ends -> next
  vid.addEventListener("ended", ()=>{
    next();
  });

  // if error -> skip
  vid.addEventListener("error", ()=>{
    next();
  });

  // start
  swapTo(SHOWREEL_VIDEOS[0]);
}

// -------------------
// Testimonials slider (photo + text)
// HTML expected structure:
// .tSlider -> .tViewport -> #tTrack (children .tCard)
// optional prev/next buttons: .tPrev / .tNext
// dots container: #tDots
// -------------------
function setupTestimonials(){
  const track = document.getElementById("tTrack");
  const dotsWrap = document.getElementById("tDots");
  if (!track || !dotsWrap) return;

  const cards = Array.from(track.querySelectorAll(".tCard"));
  if (!cards.length) return;

  // ensure consistent layout (if someone forgot an image)
  cards.forEach(c=>{
    const img = c.querySelector(".tImg");
    const body = c.querySelector(".tBody");
    if (!img || !body) return;
  });

  let idx = 0;
  let timer = null;

  // build dots
  dotsWrap.innerHTML = "";
  const dots = cards.map((_, i)=>{
    const b = document.createElement("button");
    b.type = "button";
    b.className = "tDot" + (i === 0 ? " is-active" : "");
    b.setAttribute("aria-label", `Testimonial ${i+1}`);
    b.addEventListener("click", ()=> go(i, true));
    dotsWrap.appendChild(b);
    return b;
  });

  const apply = ()=>{
    track.style.transform = `translateX(${-idx * 100}%)`;
    dots.forEach((d, i)=> d.classList.toggle("is-active", i === idx));
  };

  const go = (i, restart=false)=>{
    idx = (i + cards.length) % cards.length;
    apply();
    if (restart) start();
  };

  const prevBtn = document.querySelector(".tPrev");
  const nextBtn = document.querySelector(".tNext");
  prevBtn?.addEventListener("click", ()=> go(idx - 1, true));
  nextBtn?.addEventListener("click", ()=> go(idx + 1, true));

  const start = ()=>{
    stop();
    timer = setInterval(()=> go(idx + 1), 5200);
  };
  const stop = ()=>{
    if (timer) clearInterval(timer);
    timer = null;
  };

  // pause on hover (desktop)
  const slider = document.querySelector(".tSlider");
  slider?.addEventListener("mouseenter", stop);
  slider?.addEventListener("mouseleave", start);

  // swipe
  let sx = 0;
  track.addEventListener("touchstart", (e)=>{
    sx = e.touches[0].clientX;
  }, { passive:true });
  track.addEventListener("touchend", (e)=>{
    const ex = e.changedTouches[0].clientX;
    const diff = ex - sx;
    if (Math.abs(diff) < 40) return;
    if (diff > 0) go(idx - 1, true);
    else go(idx + 1, true);
  }, { passive:true });

  apply();
  start();
}

// =====================================================
// Premium Lightbox (thumbs + loader + zoom + slideshow)
// Requires your existing lightbox HTML ids:
// #lightbox, #lbImg, #lbCap, #lbThumbs, #lbZoom, #lbPlay
// Gallery items are: .gItem (anchor with href)
// Optional: data-thumb on .gItem (else uses href)
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
    if (btnPlay) btnPlay.textContent = (localStorage.getItem("kv_lang")==="de") ? "Pause" : "Pause";
  };
  const stopSlideshow = ()=>{
    if (timer) clearInterval(timer);
    timer = null;
    if (btnPlay) btnPlay.textContent = (localStorage.getItem("kv_lang")==="de") ? "Play" : "Play";
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
    if (btnZoom) btnZoom.textContent = (localStorage.getItem("kv_lang")==="de") ? "Zoom" : "Zoom";
  };

  const setZoom = (newScale)=>{
    scale = Math.min(3.2, Math.max(1, newScale));
    if (scale === 1){ resetZoom(); return; }
    lb.classList.add("is-zoom");
    img.style.cursor = "grab";
    applyTransform();
    if (btnZoom) btnZoom.textContent = (localStorage.getItem("kv_lang")==="de") ? "Reset" : "Reset";
  };

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
        startSlideshow();
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

// -------------------
// Boot
// -------------------
document.addEventListener("DOMContentLoaded", ()=>{
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

  document.querySelectorAll(".langBtn").forEach(b=>{
    b.addEventListener("click", ()=> setLanguage(b.getAttribute("data-lang")));
  });

  const saved = localStorage.getItem("kv_lang") || "de";
  setLanguage(saved);
});

// =====================================================
// Premium Lightbox (thumbs + loader + zoom + slideshow)
// Requires your existing lightbox HTML ids:
// #lightbox, #lbImg, #lbCap, #lbThumbs, #lbZoom, #lbPlay
// Gallery items are: .gItem (anchor with href)
// Optional: data-thumb on .gItem (else uses href)
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

  const updatePlayLabel = ()=>{
    // Note: your CSS/HTML uses labels "Zoom" and "Pause" via i18n.
    // Here we keep internal button label simple.
    if (!btnPlay) return;
    const isPlaying = Boolean(timer);
    const lang = localStorage.getItem("kv_lang") || "de";
    btnPlay.textContent = isPlaying ? (lang === "de" ? "Pause" : "Pause") : (lang === "de" ? "Play" : "Play");
  };

  const startSlideshow = ()=>{
    stopSlideshow();
    timer = setInterval(()=> next(), 3600);
    updatePlayLabel();
  };
  const stopSlideshow = ()=>{
    if (timer) clearInterval(timer);
    timer = null;
    updatePlayLabel();
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
    if (btnZoom){
      const lang = localStorage.getItem("kv_lang") || "de";
      btnZoom.textContent = (lang === "de") ? "Zoom" : "Zoom";
    }
  };

  const setZoom = (newScale)=>{
    scale = Math.min(3.2, Math.max(1, newScale));
    if (scale === 1){ resetZoom(); return; }
    lb.classList.add("is-zoom");
    img.style.cursor = "grab";
    applyTransform();
    if (btnZoom){
      const lang = localStorage.getItem("kv_lang") || "de";
      btnZoom.textContent = (lang === "de") ? "Reset" : "Reset";
    }
  };

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
        startSlideshow();
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

// -------------------
// Boot
// -------------------
document.addEventListener("DOMContentLoaded", ()=>{
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

  document.querySelectorAll(".langBtn").forEach(b=>{
    b.addEventListener("click", ()=> setLanguage(b.getAttribute("data-lang")));
  });

  const saved = localStorage.getItem("kv_lang") || "de";
  setLanguage(saved);
});

// ===== EMERGENCY: Mobile menu toggle (uses your IDs) =====
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  const backdrop = document.getElementById("navBackdrop");

  if (!toggle || !nav || !backdrop) return;

  function openMenu() {
    nav.classList.add("is-open");
    backdrop.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.documentElement.classList.add("nav-open");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    nav.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.documentElement.classList.remove("nav-open");
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    nav.classList.contains("is-open") ? closeMenu() : openMenu();
  }

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });

  backdrop.addEventListener("click", closeMenu);

  // Close when clicking any link inside the nav (mobile UX)
  nav.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  // Close on Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
});

