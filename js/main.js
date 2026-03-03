/* ============================================================
   Ealing Musical Theatre Choir — main.js
   1. Mobile navigation toggle
   2. Smooth scroll for anchor links
   3. FAQ accordion
   ============================================================ */

(function () {
  'use strict';

  /* ---- 1. Mobile Nav Toggle ---- */
  const nav       = document.querySelector('.site-nav');
  const hamburger = document.querySelector('.nav-hamburger');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      nav.classList.toggle('nav-open');
      const isOpen = nav.classList.contains('nav-open');
      hamburger.setAttribute('aria-expanded', isOpen);
      hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Close menu when a nav link is clicked (mobile UX)
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('nav-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) {
        nav.classList.remove('nav-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- 2. Mark active nav link ---- */
  (function markActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  })();

  /* ---- 3. FAQ Accordion ---- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');

      // Close all other open items
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle this item
      item.classList.toggle('open', !isOpen);
      question.setAttribute('aria-expanded', !isOpen);
    });
  });

  /* ---- 4. Smooth scroll for same-page anchors ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

})();
