// ===== MOBILE MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      if (hamburgerIcon) hamburgerIcon.style.display = isOpen ? 'none' : 'block';
      if (closeIcon) closeIcon.style.display = isOpen ? 'block' : 'none';
      hamburgerBtn.setAttribute('aria-label', isOpen ? 'Menu sluiten' : 'Menu openen');
    });
  }

  // ===== LANGUAGE TOGGLE =====
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    let isNL = true;
    langToggle.addEventListener('click', function () {
      isNL = !isNL;
      langToggle.textContent = isNL ? 'NL | EN' : 'EN | NL';
    });
  }

  // ===== NEWSLETTER FORM =====
  const newsletterForm = document.getElementById('newsletter-form');
  const formWrapper = document.getElementById('newsletter-form-wrapper');
  const successMsg = document.getElementById('newsletter-success');

  if (newsletterForm && formWrapper && successMsg) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('newsletter-email');
      if (email && email.value) {
        formWrapper.style.display = 'none';
        successMsg.style.display = 'block';
      }
    });
  }

  // ===== HIGHLIGHT ACTIVE NAV LINK =====
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Desktop nav links
  document.querySelectorAll('.nav__link').forEach(function (link) {
    link.classList.remove('nav__link--active');
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });

  // Mobile nav links
  document.querySelectorAll('.nav__mobile-link').forEach(function (link) {
    link.classList.remove('nav__mobile-link--active');
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('nav__mobile-link--active');
    }
  });
});
