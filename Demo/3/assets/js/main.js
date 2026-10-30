/**
 * PT. MEGA KARYA MARITIM (Mega Karya Group)
 * Main Website Scripts: Language Switcher, WhatsApp Integration, UI Controls
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
   * Sticky Header on Scroll
   */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navHeader.classList.add('shadow-md', 'bg-white/95', 'backdrop-blur-md');
      navHeader.classList.remove('bg-white');
    } else {
      navHeader.classList.remove('shadow-md', 'backdrop-blur-md');
      navHeader.classList.add('bg-white');
    }
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
});
