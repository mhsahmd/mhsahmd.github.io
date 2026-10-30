# Demo Website Mega Karya Group & Sub-Domain Anak Perusahaan

Proyek ini adalah implementasi demo website untuk **Mega Karya Group** beserta 2 (dua) anak perusahaannya berdasarkan dokumen company profile terlampir, dilengkapi fitur **Bilingual Switcher (Indonesia 🇮🇩 & English 🇬🇧)** dan **Optimasi SEO Terstruktur Lengkap**.

---

## 🌐 Arsitektur Domain & Sub-Domain

| Entitas Perusahaan | Rencana Domain / Sub-Domain | Path Demo Lokal | Fokus & Layanan Utama |
|---|---|---|---|
| **Mega Karya Group** *(Holding Induk)* | `https://megakaryagroup.com` | [`./index.html`](file:///c:/Users/TUF/Documents/Project/Company%20Profile%20Lae%202/index.html) | Portal Holding, ekosistem maritim, showcase 2 pilar bisnis |
| **PT. Mega Karya Surveyor** *(Lampiran 1)* | `https://surveyor.megakaryagroup.com` | [`./surveyor/index.html`](file:///c:/Users/TUF/Documents/Project/Company%20Profile%20Lae%202/surveyor/index.html) | Jasa survei maritim independen (11 layanan teknis), booking survei |
| **PT. Mega Karya Maritim** *(Lampiran 2)* | `https://maritim.megakaryagroup.com` | [`./maritim/index.html`](file:///c:/Users/TUF/Documents/Project/Company%20Profile%20Lae%202/maritim/index.html) | Crew Manning Agency, Crew Management, Seafarer Recruitment (MLC 2006 / IMO / ILO) |

---

## 🌍 Fitur Bilingual Switcher (ID / EN)

- **Switch Instan**: Tombol toggle `[ 🇮🇩 ID | 🇬🇧 EN ]` tersedia di bilah simulator navigasi atas dan menu header.
- **Konsistensi Antar-Halaman**: Pilihan bahasa tersimpan otomatis di `localStorage`. Saat berpindah dari portal group ke website surveyor atau maritim, bahasa yang dipilih tetap aktif.
- **Dukungan Dinamis**: Menerjemahkan judul halaman (`document.title`), meta description, heading, isi paragraf, badge, hingga placeholder formulir.

---

## 🔍 Audit & Implementasi SEO Komprehensif

Website telah dilengkapi standar SEO internasional Google & mesin pencari modern:

1. **Meta Tags Lengkap**:
   - `title`, `meta name="description"` (berdasarkan bahasa aktif), `meta name="keywords"`, `author`, `robots="index, follow"`.
2. **Canonical & Multi-Language Hreflang**:
   - Tag `<link rel="canonical">` untuk mencegah duplikasi konten.
   - Tag `<link rel="alternate" hreflang="id">` dan `<link rel="alternate" hreflang="en">` serta `hreflang="x-default"`.
3. **Open Graph & Twitter Cards**:
   - Pratinjau kaya (Rich Previews) saat link dibagikan di WhatsApp, LinkedIn, Facebook, dan X/Twitter (`og:title`, `og:description`, `og:image`, `og:site_name`, `twitter:card`).
4. **Structured Data (Schema.org JSON-LD)**:
   - `index.html`: Schema `Corporation` & `Organization` dengan daftar relasi anak perusahaan (`subOrganization`).
   - `surveyor/index.html`: Schema `ProfessionalService` lengkap dengan geo-koordinat, kontak, dan katalog tawaran 11 layanan survei (`hasOfferCatalog`).
   - `maritim/index.html`: Schema `EmploymentAgency` lengkap dengan layanan manning agency dan rekrutmen pelaut.
5. **Mesin Perayap (Crawlers)**:
   - File [`robots.txt`](file:///c:/Users/TUF/Documents/Project/Company%20Profile%20Lae%202/robots.txt) yang mengizinkan crawling dan menunjuk ke file sitemap.
   - File [`sitemap.xml`](file:///c:/Users/TUF/Documents/Project/Company%20Profile%20Lae%202/sitemap.xml) yang memetakan seluruh domain & sub-domain beserta alternatif bahasa `hreflang`.

---

## 💻 Cara Menjalankan Demo Secara Lokal

Buka file HTML langsung di peramban web (Google Chrome, Edge, Firefox):
1. **Portal Induk**: Buka [`index.html`](file:///c:/Users/TUF/Documents/Project/Company%20Profile%20Lae%202/index.html)
2. **PT. Mega Karya Surveyor**: Buka [`surveyor/index.html`](file:///c:/Users/TUF/Documents/Project/Company%20Profile%20Lae%202/surveyor/index.html)
3. **PT. Mega Karya Maritim**: Buka [`maritim/index.html`](file:///c:/Users/TUF/Documents/Project/Company%20Profile%20Lae%202/maritim/index.html)
