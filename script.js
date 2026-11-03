/**
 * Uyên Sư Muội — Interaction & Motion Controller
 * Implements B7 (Motion) and B11 (Tagline Reveal)
 */
document.addEventListener('DOMContentLoaded', () => {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Mobile Menu Toggle
  const toggleBtn = document.getElementById('nav-toggle-btn');
  const mobileNav = document.getElementById('mobile-nav-panel');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (toggleBtn && mobileNav) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. B11 Tagline Reveal Section (Word by word activation)
  const taglineWords = document.querySelectorAll('.tagline-word');
  if (taglineWords.length > 0) {
    if (isReducedMotion) {
      taglineWords.forEach(word => word.classList.add('revealed'));
    } else {
      const taglineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            taglineObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
      });

      taglineWords.forEach((word, index) => {
        word.style.transitionDelay = `${(index % 8) * 45}ms`;
        taglineObserver.observe(word);
      });
    }
  }

  // 3. B7 General Scroll Reveal Elements
  const scrollElements = document.querySelectorAll('.scroll-reveal');
  if (scrollElements.length > 0) {
    if (isReducedMotion) {
      scrollElements.forEach(el => el.classList.add('revealed'));
    } else {
      const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            scrollObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px'
      });

      scrollElements.forEach(el => scrollObserver.observe(el));
    }
  }

  // 4. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other open items
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherBtn = other.querySelector('.faq-question');
            const otherAnswer = other.querySelector('.faq-answer');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherAnswer) otherAnswer.style.maxHeight = null;
          }
        });

        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });
});
