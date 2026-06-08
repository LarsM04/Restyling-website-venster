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

  // Highlight Studentenomgeving parent trigger if on student shop or learning environment
  if (currentPage === 'studentenshop.html' || currentPage === 'leeromgeving.html') {
    const dTrigger = document.querySelector('.nav__dropdown-trigger');
    const mTrigger = document.querySelector('.nav__mobile-dropdown-trigger');
    if (dTrigger) dTrigger.classList.add('nav__link--active');
    if (mTrigger) mTrigger.classList.add('nav__mobile-link--active');
  }

  // ===== MOBILE DROPDOWN ACCORDION TOGGLE =====
  const mobileDropdownTrigger = document.querySelector('.nav__mobile-dropdown-trigger');
  const mobileDropdownMenu = document.querySelector('.nav__mobile-dropdown-menu');
  if (mobileDropdownTrigger && mobileDropdownMenu) {
    mobileDropdownTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      const isOpen = mobileDropdownMenu.classList.toggle('open');
      const arrow = mobileDropdownTrigger.querySelector('svg');
      if (arrow) {
        arrow.style.transform = isOpen ? 'rotate(180deg)' : 'none';
      }
    });
  }

  // ===== SHOPPING CART BADGE SYSTEM =====
  function getCartCount() {
    return parseInt(localStorage.getItem('venster_cart_count') || '0', 10);
  }

  function updateCartBadges(count) {
    // Find all elements representing the cart button icon
    const cartButtons = document.querySelectorAll('button[aria-label="Winkelwagen"]');
    cartButtons.forEach(btn => {
      // Remove existing badge if any
      const existingBadge = btn.querySelector('.cart-badge');
      if (existingBadge) {
        existingBadge.remove();
      }
      
      // If count > 0, create and append a new badge
      if (count > 0) {
        const badge = document.createElement('span');
        badge.className = 'cart-badge';
        badge.textContent = count;
        btn.appendChild(badge);
      }
    });
  }

  // Initial cart badge sync
  updateCartBadges(getCartCount());

  // Listen for custom add-to-cart events (useful if cart updates on different pages)
  window.addEventListener('storage', function (e) {
    if (e.key === 'venster_cart_count') {
      updateCartBadges(parseInt(e.newValue || '0', 10));
    }
  });

  // Expose function globally so product buttons can trigger it easily
  window.addItemToCart = function(productName) {
    let currentCount = getCartCount();
    currentCount += 1;
    localStorage.setItem('venster_cart_count', currentCount);
    updateCartBadges(currentCount);

    // Provide modern user feedback: custom floating toast message
    showToast(`🛒 "${productName}" is toegevoegd aan je winkelwagen!`);
  };

  // Sleek toast function for interactive notifications
  function showToast(message) {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      toastContainer.style.position = 'fixed';
      toastContainer.style.bottom = '2rem';
      toastContainer.style.right = '2rem';
      toastContainer.style.zIndex = '1000';
      toastContainer.style.display = 'flex';
      toastContainer.style.flexDirection = 'column';
      toastContainer.style.gap = '0.5rem';
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.style.background = 'var(--venster-charcoal)';
    toast.style.color = 'white';
    toast.style.padding = '0.75rem 1.25rem';
    toast.style.borderRadius = '0.5rem';
    toast.style.fontSize = '0.875rem';
    toast.style.fontWeight = '700';
    toast.style.fontFamily = 'var(--font-display)';
    toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.justifyContent = 'space-between';
    toast.style.gap = '1rem';
    toast.style.animation = 'fadeInUp 0.3s ease forwards';
    toast.style.borderLeft = '4px solid var(--venster-orange)';
    
    toast.innerHTML = `
      <span>${message}</span>
      <button style="color: rgba(255,255,255,0.6); font-weight: 900;" onclick="this.parentElement.remove()">✕</button>
    `;

    toastContainer.appendChild(toast);

    // Auto-remove after 4 seconds
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
});
