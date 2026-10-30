/**
 * Main JavaScript for PT. MEGA KARYA SURVEYOR
 * Company Profile, Bilingual Switcher (ID / EN) & WhatsApp Integration
 */

// ==========================================
// 1. KONFIGURASI UMUM & WHATSAPP
// ==========================================
let currentLanguage = localStorage.getItem('mks_lang') || 'id';

let CONFIG = {
  whatsappNumber: "6287737555557", // Nomor WhatsApp resmi PT. Mega Karya Surveyor
  companyName: "PT. Mega Karya Surveyor",
  defaultMessage: "Halo PT. Mega Karya Surveyor, saya ingin berkonsultasi mengenai jasa survei maritim dan inspeksi kapal."
};

// Cek nomor kustom di localStorage
const savedNumber = localStorage.getItem('mks_wa_number');
if (savedNumber && savedNumber !== "6281234567890") {
  CONFIG.whatsappNumber = savedNumber;
} else {
  CONFIG.whatsappNumber = "6287737555557";
}

// Inisialisasi tampilan nomor WA pada halaman
function updateDisplayNumber() {
  const displayEls = document.querySelectorAll('.wa-display-number');
  displayEls.forEach(el => {
    let formatted = CONFIG.whatsappNumber;
    if (formatted.startsWith('62')) {
      formatted = `+62 ${formatted.slice(2, 5)}-${formatted.slice(5, 9)}-${formatted.slice(9)}`;
    }
    el.textContent = formatted;
  });
}

// ==========================================
// 2. FUNGSI KIRIM WHATSAPP
// ==========================================
function openWhatsAppChat(customText) {
  let defaultMsg = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLanguage])
    ? TRANSLATIONS[currentLanguage].defaultWaMessage
    : CONFIG.defaultMessage;
    
  const message = customText || defaultMsg;
  const encodedText = encodeURIComponent(message);
  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedText}`;
  window.open(waUrl, '_blank');
}

function openUrgentSurveyChat() {
  const msg = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLanguage])
    ? TRANSLATIONS[currentLanguage].urgentSurveyMsg
    : "Halo, kami membutuhkan respon surveyor mendesak.";
  openWhatsAppChat(msg);
}

function openAboutChat() {
  const msg = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLanguage])
    ? TRANSLATIONS[currentLanguage].aboutConsultMsg
    : "Halo PT. Mega Karya Surveyor, saya ingin mengetahui profil perusahaan dan mendiskusikan kebutuhan survei.";
  openWhatsAppChat(msg);
}

// ==========================================
// 3. FITUR 2 BAHASA (BILINGUAL I18N SYSTEM)
// ==========================================
function setLanguage(lang) {
  if (lang !== 'id' && lang !== 'en') lang = 'id';
  currentLanguage = lang;
  localStorage.setItem('mks_lang', lang);
  document.documentElement.lang = lang;

  if (typeof TRANSLATIONS === 'undefined' || !TRANSLATIONS[lang]) {
    console.warn('Translations dictionary not loaded for language:', lang);
    return;
  }

  const dict = TRANSLATIONS[lang];

  // Update default message in CONFIG
  if (dict.defaultWaMessage) {
    CONFIG.defaultMessage = dict.defaultWaMessage;
  }

  // Update document title & SEO meta tags
  if (dict.pageTitle) {
    document.title = dict.pageTitle;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', dict.pageTitle);
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', dict.pageTitle);
  }

  // Update meta description & keywords
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.metaDesc) {
    metaDesc.setAttribute('content', dict.metaDesc);
  }
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && dict.metaDesc) {
    ogDesc.setAttribute('content', dict.metaDesc);
  }
  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc && dict.metaDesc) {
    twDesc.setAttribute('content', dict.metaDesc);
  }
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords && dict.metaKeywords) {
    metaKeywords.setAttribute('content', dict.metaKeywords);
  }

  // Update text & HTML elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  // Update titles
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key] !== undefined) {
      el.title = dict[key];
    }
  });

  // Update select options text
  document.querySelectorAll('option[data-i18n-text]').forEach(opt => {
    const key = opt.getAttribute('data-i18n-text');
    if (dict[key] !== undefined) {
      opt.textContent = dict[key];
    }
  });

  // Update quick action chips in WA popup
  document.querySelectorAll('.quick-chip').forEach(chip => {
    const chipKey = chip.getAttribute('data-chip-key');
    if (chipKey && dict[chipKey + 'Msg']) {
      chip.setAttribute('data-msg', dict[chipKey + 'Msg']);
    }
  });

  // Update switch buttons UI state (desktop, mobile & topbar)
  updateLanguageButtonsUI(lang);
}

function updateLanguageButtonsUI(lang) {
  const switchBtns = document.querySelectorAll('.lang-switch-btn');
  switchBtns.forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.classList.add('bg-white', 'text-brand-navy', 'shadow-sm', 'font-extrabold');
      btn.classList.remove('text-slate-500', 'text-slate-600', 'bg-transparent', 'shadow-none');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('bg-white', 'text-brand-navy', 'shadow-sm', 'font-extrabold');
      btn.classList.add('text-slate-500', 'bg-transparent', 'shadow-none');
      btn.setAttribute('aria-pressed', 'false');
    }
  });
}

// ==========================================
// 4. EVENT LISTENERS & DOM HANDLING
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi bahasa & tampilan nomor WA
  setLanguage(currentLanguage);
  updateDisplayNumber();

  // Attach event listener ke semua tombol switch bahasa
  document.querySelectorAll('.lang-switch-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      setLanguage(targetLang);
    });
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Tutup menu mobile ketika link diklik
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Navbar Scroll Shadow
  const navbar = document.getElementById('mainNavbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('shadow-md', 'bg-white/95');
      navbar.classList.remove('bg-white');
    } else {
      navbar.classList.remove('shadow-md');
    }
  });

  // Floating WhatsApp Widget
  const waFloatingBtn = document.getElementById('waFloatingBtn');
  const waChatPopup = document.getElementById('waChatPopup');
  const waClosePopup = document.getElementById('waClosePopup');
  const waSendDirect = document.getElementById('waSendDirect');
  const waCustomInput = document.getElementById('waCustomInput');

  if (waFloatingBtn && waChatPopup) {
    waFloatingBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      waChatPopup.classList.toggle('hidden-popup');
      waChatPopup.classList.toggle('active-popup');
      if (waChatPopup.classList.contains('active-popup')) {
        setTimeout(() => waCustomInput && waCustomInput.focus(), 200);
      }
    });

    if (waClosePopup) {
      waClosePopup.addEventListener('click', (e) => {
        e.stopPropagation();
        waChatPopup.classList.add('hidden-popup');
        waChatPopup.classList.remove('active-popup');
      });
    }

    // Klik di luar popup untuk menutupnya
    document.addEventListener('click', (e) => {
      if (waChatPopup && !waChatPopup.contains(e.target) && !waFloatingBtn.contains(e.target)) {
        waChatPopup.classList.add('hidden-popup');
        waChatPopup.classList.remove('active-popup');
      }
    });

    // Kirim dari input di floating chat
    if (waSendDirect && waCustomInput) {
      const handlePopupSend = () => {
        const text = waCustomInput.value.trim();
        if (text) {
          openWhatsAppChat(text);
          waCustomInput.value = '';
          waChatPopup.classList.add('hidden-popup');
          waChatPopup.classList.remove('active-popup');
        } else {
          openWhatsAppChat(CONFIG.defaultMessage);
        }
      };

      waSendDirect.addEventListener('click', handlePopupSend);
      waCustomInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          handlePopupSend();
        }
      });
    }

    // Tombol Cepat (Quick Chips) di popup
    const quickChips = document.querySelectorAll('.quick-chip');
    quickChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-msg');
        openWhatsAppChat(query);
      });
    });
  }

  // WhatsApp Form Permintaan Survei / Penawaran (Contact Section)
  const contactForm = document.getElementById('contactSurveyForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName').value.trim();
      const company = document.getElementById('formCompany').value.trim();
      const serviceSelect = document.getElementById('formService');
      const service = serviceSelect.options[serviceSelect.selectedIndex].text;
      const vessel = document.getElementById('formVessel').value.trim();
      const location = document.getElementById('formLocation').value.trim();
      const message = document.getElementById('formMessage').value.trim();

      // Susun pesan WhatsApp sesuai bahasa yang sedang aktif
      let waText = '';
      if (currentLanguage === 'en') {
        waText = 
`Hello *PT. Mega Karya Surveyor*,
I would like to submit a maritime survey / technical inspection request with the following details:

👤 *Contact Name / PIC:* ${name}
🏢 *Company:* ${company || '-'}
⚓ *Required Service:* ${service}
🚢 *Vessel / Asset Name:* ${vessel || '-'}
📍 *Port Location / Region:* ${location || '-'}

📝 *Scope / Inquiries:*
${message || 'Please provide quotation and surveyor availability information.'}

Thank you.`;
      } else {
        waText = 
`Halo *PT. Mega Karya Surveyor*,
Saya ingin mengajukan permintaan survei/konsultasi layanan dengan rincian berikut:

👤 *Nama Pengirim / PIC:* ${name}
🏢 *Perusahaan:* ${company || '-'}
⚓ *Layanan yang Dibutuhkan:* ${service}
🚢 *Nama Kapal/Aset:* ${vessel || '-'}
📍 *Lokasi Pelabuhan/Wilayah:* ${location || '-'}

📝 *Pesan / Catatan Tambahan:*
${message || 'Mohon informasi penawaran dan ketersediaan jadwal surveyor.'}

Terima kasih.`;
      }

      openWhatsAppChat(waText);
    });
  }

  // Tombol Chat Langsung per-Layanan
  const serviceWaBtns = document.querySelectorAll('.btn-service-wa');
  serviceWaBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serviceName = btn.getAttribute('data-service');
      let text = '';
      if (currentLanguage === 'en') {
        text = `Hello PT. Mega Karya Surveyor, I would like to inquire further regarding the service: *${serviceName}*.`;
      } else {
        text = `Halo PT. Mega Karya Surveyor, saya tertarik dan ingin menanyakan informasi lebih lanjut mengenai layanan: *${serviceName}*.`;
      }
      openWhatsAppChat(text);
    });
  });

  // Pengaturan Nomor WhatsApp Modal (fitur praktis agar user dapat menguji nomornya sendiri kapan saja)
  const setupWaBtn = document.getElementById('setupWaBtn');
  if (setupWaBtn) {
    setupWaBtn.addEventListener('click', () => {
      const current = CONFIG.whatsappNumber;
      const promptMsg = currentLanguage === 'en'
        ? "Enter your company WhatsApp number (Country code without '+', e.g., 6281234567890):"
        : "Masukkan nomor WhatsApp perusahaan Anda (Format kode negara tanpa tanda '+', contoh: 6281234567890):";

      const input = prompt(promptMsg, current);
      if (input && input.trim()) {
        const clean = input.trim().replace(/[^0-9]/g, '');
        if (clean.length >= 9) {
          CONFIG.whatsappNumber = clean;
          localStorage.setItem('mks_wa_number', clean);
          updateDisplayNumber();
          const alertMsg = currentLanguage === 'en'
            ? `WhatsApp number successfully updated to: ${clean}\nAll WhatsApp chat buttons are now linked to this number!`
            : `Nomor WhatsApp berhasil diperbarui ke: ${clean}\nTombol chat WhatsApp sekarang akan langsung terhubung ke nomor tersebut!`;
          alert(alertMsg);
        } else {
          alert(currentLanguage === 'en' ? "Invalid number. Please enter at least 9 digits." : "Nomor tidak valid. Mohon masukkan minimal 9 digit angka.");
        }
      }
    });
  }
});
