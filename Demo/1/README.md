# Website Company Profile - PT. MEGA KARYA SURVEYOR

Website profil perusahaan modern, responsif, dan profesional untuk **PT. MEGA KARYA SURVEYOR** (Maritime Survey & Technical Inspection) yang dibuat berdasarkan materi brosur company profile perusahaan.

Dilengkapi dengan:
- **Logo Resmi Perusahaan & Favicon**: Logo resmi maritim kapal & inisial M beresolusi tinggi, transparan, dan tajam di navbar, footer, contact card, floating chat, serta favicon browser.
- **Fitur 2 Bahasa (Bilingual ID/EN)**: Switcher interaktif untuk berpindah antara Bahasa Indonesia dan Bahasa Inggris secara instan tanpa reload, dengan preferensi tersimpan di browser.
- **Integrasi WhatsApp Siaga**: Tombol WhatsApp langsung ke kolom chat di berbagai titik strategis (Floating Widget, Navbar, Tombol per-Layanan, dan Formulir Pengajuan Survei) dengan teks otomatis sesuai bahasa yang aktif.

---

## 🌐 Fitur 2 Bahasa (Indonesia & English)

Website kini mendukung penuh dwibahasa:
1. **Tombol Switcher di Navbar (Desktop) & Menu (Mobile)**:
   - Klik **🇮🇩 ID** untuk mode Bahasa Indonesia.
   - Klik **🇬🇧 EN** untuk mode Bahasa Inggris (*English*).
2. **Peralihan Teks Menyeluruh**:
   - Seluruh teks, judul, subjudul, kartu nilai, 11 layanan, keunggulan, formulir survei, dan footer otomatis berganti bahasa.
   - Pesan template WhatsApp (pada formulir dan tombol layanan) otomatis menyesuaikan format bahasa yang sedang aktif.
   - Pilihan bahasa tersimpan otomatis di `localStorage` (`mks_lang`), sehingga bahasa pilihan pengunjung akan tetap aktif saat halaman dibuka kembali.
3. **Pengelolaan Kosakata (i18n)**:
   - Seluruh teks bahasa tersimpan rapi dan mudah dimodifikasi di file [`assets/js/translations.js`](assets/js/translations.js).

---

## 🚀 Cara Membuka / Menjalankan Website

1. Cukup buka file `index.html` langsung dengan klik dua kali di browser favorit Anda (Google Chrome, Edge, Firefox, dll).
2. Atau jalankan local server jika diperlukan:
   ```bash
   npx serve .
   # atau dengan python
   python -m http.server 8080
   ```
3. Akses via browser di: `http://localhost:8080/company-profile/index.html`

---

## 📱 Cara Mengubah Nomor WhatsApp Perusahaan

Terdapat dua cara mudah untuk mengatur nomor WhatsApp Anda:

### Cara 1: Mengubah di File `assets/js/main.js` (Permanen)
Buka file `assets/js/main.js`, pada baris ke-9 temukan variabel `whatsappNumber`:
```javascript
let CONFIG = {
  whatsappNumber: "6287737555557", // Nomor WhatsApp resmi (087737555557)
  companyName: "PT. Mega Karya Surveyor",
  defaultMessage: "Halo PT. Mega Karya Surveyor, saya ingin berkonsultasi mengenai jasa survei maritim dan inspeksi kapal."
};
```

### Cara 2: Tombol Pengaturan Interaktif di Website
Di bagian atas navigasi website (top bar), terdapat tombol **"Atur No. WA"**. Klik tombol tersebut untuk memasukkan nomor WhatsApp baru secara langsung dan mengujinya seketika di browser.

---

## 📑 Struktur & Konten Berdasarkan Brosur

Website ini mencakup seluruh bagian materi yang terdapat pada company profile:

1. **Header & Identitas Perusahaan**:
   - Nama: **PT. MEGA KARYA SURVEYOR**
   - Slogan: *TRUSTED SURVEYOR FOR A SAFER TOMORROW*
   - Subtitle: *Your Trusted Partner in Maritime Survey & Inspection*
   - Nilai Cepat: *Professional | Accurate | Reliable*

2. **Tentang Kami (About Us)**:
   - Profil resmi perusahaan jasa surveyor independen
   - **Visi**: Menjadi perusahaan surveyor terkemuka di Indonesia yang diakui atas integritas, kompetensi, dan kualitas layanan.
   - **Misi**: 4 butir komitmen keandalan, keselamatan, dan keberlanjutan industri maritim.

3. **Nilai-Nilai Kami (Our Values)**:
   - 6 Nilai Inti: *Integrity, Independence, Competence, Reliability, Customer Focus, Safety & Sustainability*.
   - Slogan: *Professional Service for a Safer Maritime Operation*.

4. **11 Layanan Utama (Our Services)**:
   - *1. Suitability Survey*
   - *2. Vessel's Condition Survey*
   - *3. Cargo Hold Cleanliness*
   - *4. Fuel Bunker Survey*
   - *5. On/Off-hire Survey*
   - *6. Pre-Purchase / Valuation Survey*
   - *7. Lashing / Securing and Towing Survey*
   - *8. Draft Survey*
   - *9. Loading & Unloading Survey*
   - *10. Load and Discharge Supervision*
   - *11. Engineering Analysis / Calculation*
   - Setiap layanan dilengkapi tombol **"Tanya Layanan via WhatsApp"** yang otomatis mengisi subjek layanan yang dipilih.

5. **Keunggulan Kami (Why Choose Us?)**:
   - *Tenaga Ahli Berpengalaman*
   - *Independen & Objektif*
   - *Peralatan Modern*
   - *Respon Cepat*
   - *Jangkauan Luas*
   - *Komitmen Jangka Panjang*
   - Slogan: *"Your Trust, Our Commitment"*

6. **Fitur WhatsApp Interaktif**:
   - **Floating WhatsApp Button** di pojok kanan bawah dengan efek radar pulse dan badge notifikasi.
   - **Interactive Chat Popup** dengan salam selamat datang dan chip topik cepat (*Minta Penawaran Biaya*, *Bunker/Draft Survey*, dll).
   - **Formulir Kontak Survei**: Mengisi Nama, Perusahaan, Jenis Layanan, Kapal, Pelabuhan, dan Pesan, lalu tombol *Kirim ke WhatsApp* langsung menyusun pesan berformat rapi dan membuka chat WhatsApp tujuan.

7. **Kontak & Alamat Lengkap**:
   - Telepon / Hotline: 087737555557 (+62 877-3755-5557)
   - WhatsApp: 087737555557 (https://wa.me/6287737555557)
   - Email: info@megakaryasurveyor.com
   - Alamat: Mega Karya Group, Jl. Bintaro Raya No. 8, RT 2, RW 10, Kebayoran Lama Utara, Kebayoran Lama, Jakarta Selatan 12240, DKI Jakarta Indonesia
   - Website: www.megakaryasurveyor.com


8. **Optimasi SEO Lengkap (Search Engine Optimization)**:
   - **On-Page & Meta Tags**: Title, Description, Keywords, Author, Publisher, Theme Color, dan Canonical URL.
   - **Bilingual Hreflang**: Dukungan multi-bahasa terindeks mesin pencari (hreflang='id', hreflang='en', hreflang='x-default').
   - **Open Graph & Twitter Cards**: Tampilan cuplikan kaya (rich preview) saat link website dibagikan di WhatsApp, LinkedIn, Facebook, dan X/Twitter.
   - **Local SEO & Geotargeting**: Tag koordinat lokasi kantor Jakarta Selatan (geo.position, geo.placename).
   - **Schema.org JSON-LD**: Data terstruktur ProfessionalService, Corporation, dan katalog 11 layanan maritim untuk Google Rich Snippets.
   - **File Pendukung Indexing**: robots.txt dan sitemap.xml yang siap didaftarkan di Google Search Console & Bing Webmaster.
   - **Semantic HTML & Web Performance**: Tag main id='mainContent', link aksesibilitas skip-content, optimasi gambar dengan loading='lazy' dan alt text deskriptif.
