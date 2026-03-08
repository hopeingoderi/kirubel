(() => {
  const body = document.body;
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  const backdrop = document.getElementById('navBackdrop');

  function openMenu(){
    nav?.classList.add('is-open');
    backdrop?.classList.add('is-open');
    body.classList.add('menu-open');
    toggle?.setAttribute('aria-expanded','true');
  }

  function closeMenu(){
    nav?.classList.remove('is-open');
    backdrop?.classList.remove('is-open');
    body.classList.remove('menu-open');
    toggle?.setAttribute('aria-expanded','false');
  }

  function isMobile(){
    return window.matchMedia('(max-width: 980px)').matches;
  }

  toggle?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    nav?.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  backdrop?.addEventListener('click', closeMenu);

  nav?.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      if (isMobile()) closeMenu();
    });
  });

  window.addEventListener('resize', () => {
    if (!isMobile()) closeMenu();
  });

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.gallery__item').forEach((item) => {
    item.addEventListener('click', () => {
      if (!lightbox || !lightboxImg || !lightboxCaption) return;
      lightboxImg.src = item.dataset.full || '';
      lightboxImg.alt = item.querySelector('img')?.alt || 'Gallery image';
      lightboxCaption.textContent = item.dataset.caption || '';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      body.classList.add('menu-open');
    });
  });

  function closeLightbox(){
    lightbox?.classList.remove('is-open');
    lightbox?.setAttribute('aria-hidden', 'true');
    lightboxImg?.removeAttribute('src');
    if (!nav?.classList.contains('is-open')) body.classList.remove('menu-open');
  }

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightbox?.classList.contains('is-open')) closeLightbox();
      else closeMenu();
    }
  });
})();
