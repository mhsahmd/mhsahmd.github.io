/**
 * PT. MEGA KARYA MARITIM (Mega Karya Group)
 * Main Website Scripts — Enhanced v2
 * Language Switcher, WhatsApp Integration, UI Controls,
 * Scroll Animations, Parallax, Counter, Typed Text
 */

document.addEventListener('DOMContentLoaded', () => {
  // Constants
  const WHATSAPP_NUMBER = '6282172200082';
  const OFFICIAL_EMAIL = 'info@megakaryagroup.com';
  
  // Current language state
  let currentLang = localStorage.getItem('mkm_preferred_lang') || 'id';

  // DOM Elements
  const langSwitchers = document.querySelectorAll('.lang-toggle-btn');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const navHeader = document.getElementById('mainHeader');
  const contactForm = document.getElementById('inquiryForm');
  const waFloatingTrigger = document.getElementById('waFloatingTrigger');
  const waFloatingCard = document.getElementById('waFloatingCard');
  const waCloseCard = document.getElementById('waCloseCard');
  const waDirectBtn = document.getElementById('waDirectBtn');

  /**
   * Apply translations across the document
   */
  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('mkm_preferred_lang', lang);
    document.documentElement.setAttribute('lang', lang);

    const t = translations[lang];

    // Update document title and meta description
    if (t.page_title) document.title = t.page_title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t.meta_description) metaDesc.setAttribute('content', t.meta_description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && t.page_title) ogTitle.setAttribute('content', t.page_title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && t.meta_description) ogDesc.setAttribute('content', t.meta_description);

    // Update text elements
    document.querySelectorAll('[data-i18n]').forEach((elem) => {
      const key = elem.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        // preserve linebreaks if value contains \n
        if (t[key].includes('\n')) {
          elem.innerHTML = t[key].replace(/\n/g, '<br>');
        } else {
          elem.textContent = t[key];
        }
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((elem) => {
      const key = elem.getAttribute('data-i18n-placeholder');
      if (t[key]) {
        elem.setAttribute('placeholder', t[key]);
      }
    });

    // Update switcher buttons UI
    langSwitchers.forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active', 'bg-blue-600', 'text-white', 'shadow-sm');
        btn.classList.remove('text-slate-600', 'hover:text-blue-600');
      } else {
        btn.classList.remove('active', 'bg-blue-600', 'text-white', 'shadow-sm');
        btn.classList.add('text-slate-600', 'hover:text-blue-600');
      }
    });

    // Update floating WhatsApp target link text
    if (waDirectBtn) {
      const defaultMsg = encodeURIComponent(t.wa_default_msg);
      waDirectBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMsg}`;
    }
  }

  // Initialize Language
  applyLanguage(currentLang);

  // Language switcher click handlers
  langSwitchers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      applyLanguage(targetLang);
    });
  });

  /**
   * Mobile menu toggle
   */
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      } else {
        mobileMenu.classList.remove('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
      }
    });

    // Close mobile menu on clicking any navigation link
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /**
   * Sticky Header on Scroll — Enhanced with smooth transition
   */
  let lastScrollY = 0;
  let headerShrunk = false;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    if (scrollY > 30) {
      if (!headerShrunk) {
        navHeader.classList.add('shadow-lg', 'bg-white/95', 'backdrop-blur-md');
        navHeader.classList.remove('bg-white');
        headerShrunk = true;
      }
    } else {
      if (headerShrunk) {
        navHeader.classList.remove('shadow-lg', 'backdrop-blur-md');
        navHeader.classList.add('bg-white');
        headerShrunk = false;
      }
    }
    
    lastScrollY = scrollY;
  });

  /**
   * Floating WhatsApp Interaction
   */
  if (waFloatingTrigger && waFloatingCard) {
    waFloatingTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      waFloatingCard.classList.toggle('hidden');
    });

    if (waCloseCard) {
      waCloseCard.addEventListener('click', () => {
        waFloatingCard.classList.add('hidden');
      });
    }

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!waFloatingTrigger.contains(e.target) && !waFloatingCard.contains(e.target)) {
        waFloatingCard.classList.add('hidden');
      }
    });
  }

  /**
   * Contact Form submission to WhatsApp / Email
   */
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName').value.trim();
      const email = document.getElementById('clientEmail').value.trim();
      const phone = document.getElementById('clientPhone').value.trim();
      const service = document.getElementById('clientService').value;
      const message = document.getElementById('clientMessage').value.trim();

      const lang = currentLang;
      let textHeader = lang === 'id' 
        ? `*PERMINTAAN KONSULTASI / LAYANAN*` 
        : `*INQUIRY FOR MARITIME SERVICES*`;
      let labelName = lang === 'id' ? 'Nama' : 'Name';
      let labelEmail = lang === 'id' ? 'Email' : 'Email';
      let labelPhone = lang === 'id' ? 'No. WhatsApp' : 'Phone/WA';
      let labelService = lang === 'id' ? 'Kebutuhan Layanan' : 'Service Requested';
      let labelMsg = lang === 'id' ? 'Pesan / Catatan' : 'Message / Details';

      const waText = `${textHeader}
----------------------------------------
*${labelName}:* ${name}
*${labelEmail}:* ${email}
*${labelPhone}:* ${phone}
*${labelService}:* ${service}
*${labelMsg}:*
${message}
----------------------------------------
_Dikirim melalui formulir website resmi PT. Mega Karya Maritim (Mega Karya Group)_`;

      const encodedUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
      window.open(encodedUrl, '_blank');
    });

    // Optional direct email action
    const emailSubmitBtn = document.getElementById('sendEmailBtn');
    if (emailSubmitBtn) {
      emailSubmitBtn.addEventListener('click', () => {
        const name = document.getElementById('clientName').value.trim();
        const service = document.getElementById('clientService').value;
        const message = document.getElementById('clientMessage').value.trim();
        const subject = encodeURIComponent(`Inquiry - ${service} (${name || 'Client'})`);
        const body = encodeURIComponent(`Halo Tim Mega Karya Group,\n\nNama: ${name}\nLayanan: ${service}\n\nPesan:\n${message}\n`);
        window.location.href = `mailto:${OFFICIAL_EMAIL}?subject=${subject}&body=${body}`;
      });
    }
  }

  /**
   * Smooth active link scrollspy
   */
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNav = document.querySelector(`.nav-link[href*="${sectionId}"]`);
      if (targetNav) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNav.classList.add('text-blue-600', 'font-semibold');
        } else {
          targetNav.classList.remove('text-blue-600', 'font-semibold');
        }
      }
    });
  });

  /* ============================================================
   * NEW: Scroll-triggered Reveal Animations (IntersectionObserver)
   * ============================================================ */
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  
  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback: show everything immediately
    revealElements.forEach((el) => el.classList.add('revealed'));
  }

  /* ============================================================
   * NEW: Animated Number Counter
   * ============================================================ */
  const counterElements = document.querySelectorAll('[data-counter]');
  
  if (counterElements.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterElements.forEach((el) => counterObserver.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-counter'), 10);
    const suffix = el.getAttribute('data-counter-suffix') || '';
    const prefix = el.getAttribute('data-counter-prefix') || '';
    const duration = 2000; // ms
    const startTime = performance.now();
    
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = 1 - Math.pow(1 - progress, 4);
      const currentVal = Math.round(eased * target);
      el.textContent = prefix + currentVal.toLocaleString() + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    
    requestAnimationFrame(update);
  }

  /* ============================================================
   * NEW: Subtle Parallax on Hero Background Image
   * ============================================================ */
  const heroBgImage = document.querySelector('#beranda .hero-bg-pan');
  if (heroBgImage) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroSection = document.getElementById('beranda');
      if (heroSection && scrollY < heroSection.offsetHeight + 200) {
        const rate = scrollY * 0.15;
        heroBgImage.style.transform = `scale(1.05) translateY(${rate}px)`;
      }
    }, { passive: true });
  }

  /* ============================================================
   * NEW: Typed Text Effect for Hero Badge
   * ============================================================ */
  const typedElement = document.querySelector('[data-typed]');
  if (typedElement) {
    const phrases = typedElement.getAttribute('data-typed').split('|');
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 60;

    function typeEffect() {
      const current = phrases[phraseIndex];
      
      if (isDeleting) {
        typedElement.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 30;
      } else {
        typedElement.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 60;
      }
      
      if (!isDeleting && charIndex === current.length) {
        typingSpeed = 2500; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 400; // Pause before new word
      }
      
      setTimeout(typeEffect, typingSpeed);
    }
    
    setTimeout(typeEffect, 1200);
  }

  /* ============================================================
   * NEW: Tilt Effect on Service Cards (Desktop only)
   * ============================================================ */
  if (window.matchMedia('(min-width: 768px)').matches) {
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }

  /* ============================================================
   * NEW: Progress bar on scroll
   * ============================================================ */
  const progressBar = document.getElementById('scrollProgress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = scrollPercent + '%';
    }, { passive: true });
  }

  /* ============================================================
   * NEW: Auto-show WhatsApp popover after delay (first visit only)
   * ============================================================ */
  if (waFloatingCard && !sessionStorage.getItem('mkm_wa_shown')) {
    setTimeout(() => {
      if (waFloatingCard.classList.contains('hidden')) {
        waFloatingCard.classList.remove('hidden');
        sessionStorage.setItem('mkm_wa_shown', '1');
      }
    }, 8000);
  }
});
