/**
 * Main JavaScript for PT. MEGA KARYA SURVEYOR
 * Company Profile, WhatsApp Integration & Bilingual (ID / EN) System
 */

// ==========================================
// 1. KAMUS BAHASA (BILINGUAL DICTIONARY: ID & EN)
// ==========================================
const TRANSLATIONS = {
  id: {
    // Top Bar
    topbar_address: "Mega Karya Group, Jl. Bintaro Raya No. 8, Kebayoran Lama, Jakarta Selatan 12240",
    topbar_status: "Siaga Survei 24/7 Nasional",
    topbar_setup: "Atur No. WA",

    // Navbar
    nav_home: "Beranda",
    nav_about: "Tentang Kami",
    nav_values: "Nilai-Nilai",
    nav_services: "Layanan Kami",
    nav_advantages: "Keunggulan",
    nav_contact: "Kontak",
    nav_brochure: "Brosur",
    nav_cta: "Hubungi Kami",

    // Hero Section
    hero_badge: "PT. MEGA KARYA SURVEYOR",
    hero_coverage: "Cakupan Pelabuhan Nasional & Regional",
    hero_headline: "TRUSTED SURVEYOR FOR A <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-cyan-300 to-sky-400\">SAFER TOMORROW</span>",
    hero_subtitle: "Your Trusted Partner in Maritime Survey & Technical Inspection",
    hero_attr_prof: "Professional",
    hero_attr_acc: "Accurate",
    hero_attr_rel: "Reliable",
    hero_desc: "Perusahaan jasa surveyor independen terpercaya yang bergerak di bidang survei maritim dan inspeksi teknis kapal, didukung tenaga ahli berpengalaman dan peralatan berstandar internasional.",
    hero_btn_wa: "Konsultasi via WhatsApp",
    hero_btn_explore: "Jelajahi 11 Layanan",
    hero_proof_cert: "Tenaga Ahli Bersertifikat",
    hero_proof_conflict: "Bebas Konflik Kepentingan",
    hero_box_title: "Solusi Maritim Terpadu",
    hero_box_tag: "INDEPENDENT SURVEYOR",
    hero_box_status: "ACTIVE 24/7",
    hero_point1_t: "Hasil Survei Independen & Objektif",
    hero_point1_d: "Bebas dari segala konflik kepentingan dan berstandar internasional.",
    hero_point2_t: "Surveyor Bersertifikat & Berpengalaman",
    hero_point2_d: "Pengalaman komprehensif di laut, pelabuhan, dan galangan kapal.",
    hero_point3_t: "Laporan Teknis Komprehensif",
    hero_point3_d: "Penyusunan laporan akurat, terinci, dan tepat waktu untuk stakeholder.",
    hero_point4_t: "Jangkauan Luas Seluruh Indonesia",
    hero_point4_d: "Melayani pelabuhan domestik strategis dan perairan regional.",
    hero_urgent_label: "Kebutuhan Mendesak?",
    hero_urgent_btn: "Diskusikan Jadwal",
    hero_stat1_label: "Layanan Survei Utama",
    hero_stat1_desc: "Spesialisasi maritim komprehensif",
    hero_stat2_label: "Independen & Objektif",
    hero_stat2_desc: "Bebas benturan kepentingan",
    hero_stat3_label: "Respon Cepat Tanggap",
    hero_stat3_desc: "Siap mobilisasi ke dermaga",
    hero_stat4_label: "Nasional & Internasional",
    hero_stat4_desc: "Jaringan pelabuhan seluruh Indonesia",

    // About Us
    about_badge: "About Us • PT. Mega Karya Surveyor",
    about_title: "Penyedia Jasa Survei Maritim & Inspeksi Teknis Terpercaya",
    about_p1: "<strong class=\"text-brand-navy font-bold\">PT. Mega Karya Surveyor</strong> adalah perusahaan jasa surveyor independen yang bergerak di bidang survei maritim dan inspeksi teknis, dengan dukungan tenaga ahli berpengalaman dan peralatan yang memadai.",
    about_p2: "Kami berkomitmen untuk memberikan layanan yang profesional, akurat, dan terpercaya demi mendukung kelancaran operasional serta keamanan aset maritim Anda di seluruh perairan Indonesia.",
    about_card_label: "Standar Mutu Operasional",
    about_card_quote: "Mitra Terpercaya di Setiap Langkah Operasional Maritim Anda",
    about_badge_expert: "Tenaga Ahli",
    about_badge_sub: "Surveyor Bersertifikat Resmi",
    about_visi_title: "Visi Perusahaan",
    about_visi_desc: "\"Menjadi perusahaan surveyor terkemuka di Indonesia yang diakui atas integritas, kompetensi, dan kualitas layanan.\"",
    about_misi_title: "Misi Perusahaan",
    about_misi_1: "Memberikan layanan survei dan inspeksi yang profesional dan independen.",
    about_misi_2: "Menjaga integritas, objektivitas, dan keandalan hasil survei.",
    about_misi_3: "Membangun hubungan jangka panjang dengan klien melalui pelayanan terbaik.",
    about_misi_4: "Mendukung keselamatan, efisiensi, dan keberlanjutan industri maritim.",
    about_btn_contact: "Hubungi Tim Ahli Kami",
    about_btn_brochure: "Pratinjau Brosur Profil",

    // Our Values
    values_badge: "Our Core Values",
    values_title: "Nilai-Nilai Kami",
    values_subtitle: "Prinsip dasar yang menjadi pedoman seluruh jajaran surveyor dan manajemen kami dalam setiap penugasan.",
    values_banner: "Professional Service for a Safer Maritime Operation",
    val_1_t: "Integrity",
    val_1_d: "Menjunjung tinggi kejujuran, etika, dan profesionalisme dalam setiap pekerjaan yang kami laksanakan.",
    val_2_t: "Independence",
    val_2_d: "Berdiri secara independen tanpa konflik kepentingan untuk menjaga objektivitas hasil laporan survei.",
    val_3_t: "Competence",
    val_3_d: "Didukung oleh tenaga ahli berpengalaman dan sangat kompeten di bidang teknis maritim & perkapalan.",
    val_4_t: "Reliability",
    val_4_d: "Memberikan hasil survei yang akurat, tepat waktu, dan dapat dipertanggungjawabkan secara hukum dan teknis.",
    val_5_t: "Customer Focus",
    val_5_d: "Selalu mengutamakan kepuasan, kecepatan komunikasi, dan menjaga kepercayaan jangka panjang klien.",
    val_6_t: "Safety & Sustainability",
    val_6_d: "Menjaga keselamatan kerja yang ketat dan mendukung keberlanjutan kelestarian lingkungan maritim.",

    // Services Section
    serv_badge: "Our Services (11 Layanan Utama)",
    serv_title: "Layanan Kami",
    serv_subtitle: "<span class=\"font-semibold text-brand-blue\">Comprehensive Survey Solutions for Your Maritime Needs</span><br>Solusi survei teknis maritim terlengkap yang disesuaikan dengan kebutuhan operasional perkapalan dan muatan Anda.",
    filter_all: "Semua Layanan (11)",
    filter_vessel: "Inspeksi Kapal",
    filter_cargo: "Kargo & Palka",
    filter_bunker: "Bunker & Sewa",
    filter_eng: "Kalkulasi Rekayasa",
    btn_ask_service: "Tanya Layanan via WhatsApp",

    // Service 1
    srv_1_name: "Suitability Survey",
    srv_1_desc: "Pemeriksaan komprehensif atas kelayakan dan kesiapan teknis kapal sebelum disewa atau digunakan untuk memuat kargo tertentu.",
    srv_1_chk1: "Kesiapan operasional kapal",
    srv_1_chk2: "Kesesuaian spesifikasi kargo",

    // Service 2
    srv_2_name: "Vessel's Condition Survey",
    srv_2_desc: "Inspeksi fisik menyeluruh terhadap struktur lambung, dek, peralatan navigasi, mesin, dan perlengkapan keselamatan kapal.",
    srv_2_chk1: "Inspeksi fisik lambung kapal",
    srv_2_chk2: "Uji fungsi navigasi & keselamatan",

    // Service 3
    srv_3_name: "Cargo Hold Cleanliness",
    srv_3_desc: "Pemeriksaan higienitas dan kebersihan ruang palka (ruang muat) untuk memastikan bebas dari residu, karat, bau, dan kontaminasi.",
    srv_3_chk1: "Higienitas ruang muat palka",
    srv_3_chk2: "Pencegahan kontaminasi kargo",

    // Service 4
    srv_4_name: "Fuel Bunker Survey",
    srv_4_desc: "Pengukuran dan penghitungan volume sisa bahan bakar (Bunker Remaining On Board / ROB) sebelum dan sesudah bunkering secara presisi.",
    srv_4_chk1: "Kalkulasi bunker ROB presisi",
    srv_4_chk2: "Verifikasi quantity & density",

    // Service 5
    srv_5_name: "On/Off-hire Survey",
    srv_5_desc: "Verifikasi kondisi struktural kapal dan jumlah bahan bakar saat kapal diserahkan (on-hire) maupun dikembalikan (off-hire).",
    srv_5_chk1: "Dokumentasi kondisi sewa kapal",
    srv_5_chk2: "Rekonsiliasi bunker resmi",

    // Service 6
    srv_6_name: "Pre-Purchase / Valuation Survey",
    srv_6_desc: "Pemeriksaan mendalam atas nilai kelayakan komersial dan kondisi riil kapal untuk calon pembeli, pemilik modal, atau pihak perbankan.",
    srv_6_chk1: "Penilaian kondisi pasar & teknis",
    srv_6_chk2: "Laporan audit untuk investor/bank",

    // Service 7
    srv_7_name: "Lashing/Securing & Towing",
    srv_7_desc: "Inspeksi kalkulasi kekuatan pengikatan (lashing) kargo berat dan survei kelayakan tali dan mesin penarik (towing inspection).",
    srv_7_chk1: "Perhitungan lashing point aman",
    srv_7_chk2: "Sertifikasi towing gear & tug",

    // Service 8
    srv_8_name: "Draft Survey",
    srv_8_desc: "Penentuan berat muatan curah (batubara, bijih, pupuk, gandum) secara akurat berdasarkan pembacaan draft mark dan kalkulasi displasemen.",
    srv_8_chk1: "Kalkulasi tonase muatan curah",
    srv_8_chk2: "Displacement & draft marks check",

    // Service 9
    srv_9_name: "Loading & Unloading Survey",
    srv_9_desc: "Pemantauan berkelanjutan terhadap proses muat-bongkar guna mencegah kerusakan kargo, kehilangan (shortage), dan menjaga stabilitas.",
    srv_9_chk1: "Monitoring proses bongkar muat",
    srv_9_chk2: "Mitigasi loss & damage kargo",

    // Service 10
    srv_10_name: "Load & Discharge Supervision",
    srv_10_desc: "Supervisi teknis operasional langsung di lapangan selama kegiatan pemuatan atau pembongkaran kargo cairan, gas, maupun general cargo.",
    srv_10_chk1: "Supervisi teknis on-site 24 jam",
    srv_10_chk2: "Penanganan kargo khusus & liquid",

    // Service 11
    srv_11_name: "Engineering Analysis / Calculation",
    srv_11_desc: "Analisis teknik kelautan mendalam meliputi kalkulasi stabilitas kapal, analisis kekuatan geladak (deck load capacity), mooring analysis, analisis risiko, dan simulasi penanganan kargo khusus (heavy lift cargo).",
    srv_11_chk1: "Analisis stabilitas & deck load capacity",
    srv_11_chk2: "Mooring & towing engineering model",
    srv_11_chk3: "Simulasi heavy lift cargo handling",
    srv_11_chk4: "Penilaian teknis berbasis standar kelautan",

    // Why Choose Us
    why_badge: "Why Choose Us?",
    why_title: "Keunggulan Kami",
    why_subtitle: "Mengapa para pelaku industri maritim dan pemilik kapal mempercayakan surveinya kepada PT. Mega Karya Surveyor?",
    why_quote: "\"Your Trust, Our Commitment\"",
    why_1_t: "Tenaga Ahli Berpengalaman",
    why_1_d: "Didukung oleh surveyor bersertifikat dan berpengalaman bertahun-tahun di industri maritim nasional dan internasional.",
    why_2_t: "Independen & Objektif",
    why_2_d: "Hasil survei yang jujur, akurat, dan tidak berafiliasi dengan pihak manapun guna menjamin netralitas data.",
    why_3_t: "Peralatan Modern",
    why_3_d: "Menggunakan peralatan survei terkalibrasi dan teknologi terkini untuk hasil pengukuran yang lebih presisi.",
    why_4_t: "Respon Cepat",
    why_4_d: "Siap melayani kebutuhan survei Anda dengan waktu mobilisasi yang cepat dan efisien ke berbagai titik dermaga.",
    why_5_t: "Jangkauan Luas",
    why_5_d: "Melayani berbagai pelabuhan dan perairan di seluruh wilayah Indonesia serta regional internasional.",
    why_6_t: "Komitmen Jangka Panjang",
    why_6_d: "Menjadi mitra terpercaya dan dapat diandalkan demi pertumbuhan dan kelancaran bisnis maritim Anda.",

    // Contact & Form
    contact_badge: "Direct Contact & Inquiry",
    contact_title: "Konsultasikan Kebutuhan Survei Anda",
    contact_subtitle: "Tim surveyor dan customer support kami siap melayani dan memberikan respon cepat melalui WhatsApp maupun email resmi.",
    contact_phone_lbl: "Nomor Telepon",
    contact_wa_lbl: "WhatsApp Resmi",
    contact_email_lbl: "Email Resmi",
    contact_addr_lbl: "Alamat Kantor",
    contact_web_lbl: "Situs Web",
    contact_btn_direct: "Klik untuk Chat WhatsApp Sekarang",
    
    // Form
    form_console: "DISPATCH CONSOLE",
    form_heading: "Formulir Permintaan Survei",
    form_sub: "Lengkapi rincian survei di bawah ini. Data akan otomatis terangkum rapi dan langsung membuka percakapan WhatsApp resmi kami!",
    form_lbl_name: "Nama Anda / PIC *",
    form_lbl_company: "Nama Perusahaan",
    form_lbl_service: "Pilih Layanan Survei *",
    form_lbl_vessel: "Nama Kapal / Aset (Jika Ada)",
    form_lbl_location: "Lokasi Pelabuhan / Wilayah",
    form_lbl_message: "Detail Kebutuhan / Catatan",
    form_ph_name: "Contoh: Bpk. Hendra",
    form_ph_company: "Contoh: PT. Pelayaran Samudera",
    form_ph_vessel: "Contoh: MV. Nusantara Bahari",
    form_ph_location: "Contoh: Tg. Priok / Balikpapan",
    form_ph_message: "Tuliskan estimasi tanggal pelaksanaan atau spesifikasi survei yang Anda perlukan...",
    form_btn_submit: "Kirim Permintaan ke WhatsApp Kami",
    form_privacy: "Pesan akan langsung terbuka di aplikasi WhatsApp resmi Anda tanpa perantara.",
    form_opt_default: "-- Pilih Jenis Layanan Survei --",
    form_opt_other: "Konsultasi Teknis Lainnya",

    // Footer
    footer_desc: "Perusahaan jasa surveyor independen terpercaya yang bergerak di bidang survei maritim dan inspeksi teknis kapal demi mendukung kelancaran operasional dan keamanan aset maritim Anda.",
    footer_quick_links: "Navigasi Cepat",
    footer_main_services: "Layanan Utama",
    footer_urgent_text: "Butuh inspeksi mendesak di dermaga hari ini?",
    footer_chat_urgent: "Chat Surveyor Siaga 24/7 →",
    footer_tagline: "Mitra Terpercaya di Setiap Langkah Operasional Anda",

    // Floating WhatsApp Popup
    wa_popup_status: "Customer Support Siaga",
    wa_greeting_title: "Halo! Selamat datang di PT. Mega Karya Surveyor 👋",
    wa_greeting_text: "Ada yang bisa kami bantu terkait survei maritim, inspeksi teknis kapal, bunker survey, atau draft survey hari ini?",
    wa_time_text: "Baru saja",
    wa_topics_label: "Pilih Topik Cepat:",
    wa_chip1: "📋 Minta Penawaran Biaya Survei",
    wa_chip2: "⚓ Draft / Bunker Fuel Survey",
    wa_chip3: "🚢 On/Off-hire & Condition Survey",
    wa_input_placeholder: "Ketik pesan Anda di sini...",
    wa_connected_to: "Terhubung ke WhatsApp:",

    // Modal Brochure
    modal_brochure_title: "Brosur Resmi PT. Mega Karya Surveyor",
    modal_brochure_sub: "Company Profile Official Reference",
    modal_brochure_download: "Unduh"
  },

  en: {
    // Top Bar
    topbar_address: "Mega Karya Group, Jl. Bintaro Raya No. 8, Kebayoran Lama, South Jakarta 12240, Indonesia",
    topbar_status: "24/7 National Survey Readiness",
    topbar_setup: "Setup WA No.",

    // Navbar
    nav_home: "Home",
    nav_about: "About Us",
    nav_values: "Our Values",
    nav_services: "Our Services",
    nav_advantages: "Why Us",
    nav_contact: "Contact",
    nav_brochure: "Brochure",
    nav_cta: "Contact Us",

    // Hero Section
    hero_badge: "PT. MEGA KARYA SURVEYOR",
    hero_coverage: "National & Regional Ports Coverage",
    hero_headline: "TRUSTED SURVEYOR FOR A <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-cyan-300 to-sky-400\">SAFER TOMORROW</span>",
    hero_subtitle: "Your Trusted Partner in Maritime Survey & Technical Inspection",
    hero_attr_prof: "Professional",
    hero_attr_acc: "Accurate",
    hero_attr_rel: "Reliable",
    hero_desc: "A trusted independent marine surveyor firm specializing in maritime surveys and ship technical inspections, backed by certified seasoned experts and international-standard equipment.",
    hero_btn_wa: "Consult via WhatsApp",
    hero_btn_explore: "Explore 11 Services",
    hero_proof_cert: "Certified Marine Experts",
    hero_proof_conflict: "Zero Conflict of Interest",
    hero_box_title: "Integrated Maritime Solutions",
    hero_box_tag: "INDEPENDENT SURVEYOR",
    hero_box_status: "ACTIVE 24/7",
    hero_point1_t: "Independent & Objective Results",
    hero_point1_d: "Completely unbiased, conflict-free, and adheres strictly to international standards.",
    hero_point2_t: "Certified & Seasoned Surveyors",
    hero_point2_d: "Extensive hands-on experience at sea, drydocks, and commercial terminals.",
    hero_point3_t: "Comprehensive Technical Reports",
    hero_point3_d: "Accurate, rigorous, and prompt technical reporting tailored for maritime stakeholders.",
    hero_point4_t: "Extensive Reach Across Indonesia",
    hero_point4_d: "Serving strategic domestic ports across the archipelago and regional waters.",
    hero_urgent_label: "Urgent Inspection Needed?",
    hero_urgent_btn: "Schedule Survey",
    hero_stat1_label: "Core Survey Services",
    hero_stat1_desc: "Comprehensive maritime scope",
    hero_stat2_label: "Independent & Objective",
    hero_stat2_desc: "Unbiased third-party verification",
    hero_stat3_label: "Fast Response Dispatch",
    hero_stat3_desc: "Rapid port mobilization ready",
    hero_stat4_label: "National & Regional",
    hero_stat4_desc: "Strategic port network across Indonesia",

    // About Us
    about_badge: "About Us • PT. Mega Karya Surveyor",
    about_title: "Trusted Provider of Maritime Survey & Technical Inspection Services",
    about_p1: "<strong class=\"text-brand-navy font-bold\">PT. Mega Karya Surveyor</strong> is a trusted independent marine survey and technical inspection company, supported by experienced marine specialists and calibrated equipment.",
    about_p2: "We are committed to delivering professional, accurate, and reliable inspection services to support smooth vessel operations and maritime asset safety throughout Indonesian waters.",
    about_card_label: "Operational Quality Standards",
    about_card_quote: "Your Trusted Partner in Every Phase of Maritime Operations",
    about_badge_expert: "Certified Experts",
    about_badge_sub: "Officially Certified Marine Surveyors",
    about_visi_title: "Company Vision",
    about_visi_desc: "\"To become a leading surveyor firm in Indonesia recognized for integrity, technical competence, and service quality.\"",
    about_misi_title: "Company Mission",
    about_misi_1: "Delivering professional, accurate, and impartial marine inspection services.",
    about_misi_2: "Maintaining integrity, objectivity, and reliability in all survey findings.",
    about_misi_3: "Building sustainable client partnerships through premier service delivery.",
    about_misi_4: "Fostering safety, operational efficiency, and environmental sustainability in maritime industries.",
    about_btn_contact: "Contact Our Expert Team",
    about_btn_brochure: "Preview Profile Brochure",

    // Our Values
    values_badge: "Our Core Values",
    values_title: "Our Core Values",
    values_subtitle: "Fundamental principles guiding all our marine surveyors and management team across every assignment.",
    values_banner: "Professional Service for a Safer Maritime Operation",
    val_1_t: "Integrity",
    val_1_d: "Upholding the highest standards of honesty, professional ethics, and transparency in every assignment.",
    val_2_t: "Independence",
    val_2_d: "Operating strictly independent without conflict of interest to ensure absolute objectivity in all survey reports.",
    val_3_t: "Competence",
    val_3_d: "Powered by experienced and highly qualified specialists in maritime, shipping, and naval engineering.",
    val_4_t: "Reliability",
    val_4_d: "Delivering dependable, accurate, and prompt survey results that withstand legal and technical scrutiny.",
    val_5_t: "Customer Focus",
    val_5_d: "Prioritizing client satisfaction, swift communication, and fostering enduring long-term trust.",
    val_6_t: "Safety & Sustainability",
    val_6_d: "Enforcing stringent workplace safety while championing sustainable environmental stewardship.",

    // Services Section
    serv_badge: "Our Services (11 Core Services)",
    serv_title: "Our Services",
    serv_subtitle: "<span class=\"font-semibold text-brand-blue\">Comprehensive Survey Solutions for Your Maritime Needs</span><br>Full-suite maritime technical survey solutions tailored to your fleet and cargo operations.",
    filter_all: "All Services (11)",
    filter_vessel: "Vessel Inspection",
    filter_cargo: "Cargo & Holds",
    filter_bunker: "Bunker & Charter",
    filter_eng: "Engineering Analysis",
    btn_ask_service: "Inquire Service via WhatsApp",

    // Service 1
    srv_1_name: "Suitability Survey",
    srv_1_desc: "Comprehensive examination of vessel seaworthiness, operational readiness, and gear suitability prior to chartering or loading specific cargo.",
    srv_1_chk1: "Vessel operational readiness",
    srv_1_chk2: "Cargo specification compliance",

    // Service 2
    srv_2_name: "Vessel's Condition Survey",
    srv_2_desc: "Thorough physical inspection covering hull integrity, deck machinery, navigation equipment, engine room, and statutory safety gear.",
    srv_2_chk1: "Hull & structural condition check",
    srv_2_chk2: "Navigation & safety systems testing",

    // Service 3
    srv_3_name: "Cargo Hold Cleanliness",
    srv_3_desc: "Inspection of cargo holds cleanliness, dryness, and hygiene to ensure freedom from residues, rust scale, odor, and contamination.",
    srv_3_chk1: "Cargo hold hygiene verification",
    srv_3_chk2: "Contamination prevention guarantee",

    // Service 4
    srv_4_name: "Fuel Bunker Survey",
    srv_4_desc: "Accurate measurement and calculation of Bunker Remaining On Board (ROB) before and after bunkering operations to prevent quantity disputes.",
    srv_4_chk1: "Precise bunker ROB calculation",
    srv_4_chk2: "Quantity & density verification",

    // Service 5
    srv_5_name: "On/Off-hire Survey",
    srv_5_desc: "Verification of vessel physical condition and remaining bunker fuel quantities upon vessel delivery (on-hire) and redelivery (off-hire).",
    srv_5_chk1: "Charter condition documentation",
    srv_5_chk2: "Official bunker reconciliation",

    // Service 6
    srv_6_name: "Pre-Purchase / Valuation Survey",
    srv_6_desc: "In-depth technical and commercial evaluation of vessel real condition and fair market value for prospective buyers, investors, or financial institutions.",
    srv_6_chk1: "Market & technical condition appraisal",
    srv_6_chk2: "Due diligence report for investors/banks",

    // Service 7
    srv_7_name: "Lashing/Securing & Towing",
    srv_7_desc: "Engineering calculation and inspection of heavy-lift cargo lashing points, securing arrangements, and towing fitness certifications.",
    srv_7_chk1: "Safe lashing point calculations",
    srv_7_chk2: "Towing gear & tug fitness certification",

    // Service 8
    srv_8_name: "Draft Survey",
    srv_8_desc: "Accurate determination of bulk cargo weight (coal, ores, grains, fertilizers) based on vessel draft marks reading and hydrostatic displacement calculations.",
    srv_8_chk1: "Accurate bulk cargo tonnage calculation",
    srv_8_chk2: "Displacement & draft marks verification",

    // Service 9
    srv_9_name: "Loading & Unloading Survey",
    srv_9_desc: "Continuous monitoring of cargo handling operations to prevent cargo damage, loss (shortage), and maintain vessel structural stability.",
    srv_9_chk1: "Cargo handling operation oversight",
    srv_9_chk2: "Loss & damage mitigation",

    // Service 10
    srv_10_name: "Load & Discharge Supervision",
    srv_10_desc: "On-site direct technical supervision during loading or discharging of bulk liquids, gases, chemicals, and specialized general cargoes.",
    srv_10_chk1: "24/7 on-site technical supervision",
    srv_10_chk2: "Specialized liquid & gas cargo handling",

    // Service 11
    srv_11_name: "Engineering Analysis / Calculation",
    srv_11_desc: "Advanced naval engineering studies including ship stability calculations, deck load capacity analysis, mooring analysis, risk assessment, and heavy-lift simulations.",
    srv_11_chk1: "Stability & deck load capacity study",
    srv_11_chk2: "Mooring & towing engineering modeling",
    srv_11_chk3: "Heavy-lift cargo handling simulation",
    srv_11_chk4: "Technical assessment under marine standards",

    // Why Choose Us
    why_badge: "Why Choose Us?",
    why_title: "Why Choose Us",
    why_subtitle: "Why do prominent shipowners, charterers, and maritime stakeholders trust their inspections to PT. Mega Karya Surveyor?",
    why_quote: "\"Your Trust, Our Commitment\"",
    why_1_t: "Experienced Specialists",
    why_1_d: "Supported by licensed marine surveyors with decades of collective experience across domestic and international shipping.",
    why_2_t: "Independent & Objective",
    why_2_d: "Honest, precise, and unaffiliated survey results ensuring absolute data neutrality and unbiased findings.",
    why_3_t: "Modern Calibrated Equipment",
    why_3_d: "Equipped with certified, up-to-date inspection instruments and marine engineering software for precise measurement.",
    why_4_t: "Rapid Response Dispatch",
    why_4_d: "Ready to respond swiftly with rapid mobilization times to ports, berths, and anchorages nationwide.",
    why_5_t: "Wide Geographic Reach",
    why_5_d: "Serving major commercial ports and coastal waterways across the Indonesian archipelago and regional territories.",
    why_6_t: "Long-Term Commitment",
    why_6_d: "Committed to being your dependable strategic maritime partner for sustainable operational growth.",

    // Contact & Form
    contact_badge: "Direct Contact & Inquiry",
    contact_title: "Consult Your Marine Survey Requirements",
    contact_subtitle: "Our surveyors and customer desk are ready to assist you promptly with rapid quotes via WhatsApp or email.",
    contact_phone_lbl: "Phone Number",
    contact_wa_lbl: "Official WhatsApp",
    contact_email_lbl: "Official Email",
    contact_addr_lbl: "Office Address",
    contact_web_lbl: "Website",
    contact_btn_direct: "Click to Chat via WhatsApp Now",

    // Form
    form_console: "DISPATCH CONSOLE",
    form_heading: "Survey Request Form",
    form_sub: "Complete the survey details below. Your request will be formatted and instantly open in our official WhatsApp chat!",
    form_lbl_name: "Your Name / PIC *",
    form_lbl_company: "Company Name",
    form_lbl_service: "Select Survey Service *",
    form_lbl_vessel: "Vessel Name / Asset (If Any)",
    form_lbl_location: "Port / Location",
    form_lbl_message: "Requirements / Notes",
    form_ph_name: "e.g. Capt. Hendra",
    form_ph_company: "e.g. Samudera Shipping Lines Ltd.",
    form_ph_vessel: "e.g. MV. Nusantara Bahari",
    form_ph_location: "e.g. Port of Tg. Priok / Balikpapan",
    form_ph_message: "Specify estimated survey date, scope, or specific vessel requirements...",
    form_btn_submit: "Send Request to Our WhatsApp",
    form_privacy: "Messages open directly in your official WhatsApp application without third-party intermediaries.",
    form_opt_default: "-- Select Survey Service --",
    form_opt_other: "Other Technical Inquiries",

    // Footer
    footer_desc: "A trusted independent marine surveyor firm specializing in maritime surveys and ship technical inspections to support the smooth operation and safety of your maritime assets.",
    footer_quick_links: "Quick Links",
    footer_main_services: "Main Services",
    footer_urgent_text: "Need urgent inspection at port today?",
    footer_chat_urgent: "Chat 24/7 Duty Surveyor →",
    footer_tagline: "Your Trusted Partner in Every Phase of Maritime Operations",

    // Floating WhatsApp Popup
    wa_popup_status: "Active Customer Desk",
    wa_greeting_title: "Hello! Welcome to PT. Mega Karya Surveyor 👋",
    wa_greeting_text: "How may we assist you with maritime surveys, vessel condition inspections, bunker surveys, or draft surveys today?",
    wa_time_text: "Just now",
    wa_topics_label: "Select Quick Topic:",
    wa_chip1: "📋 Request Survey Quotation",
    wa_chip2: "⚓ Draft / Bunker Fuel Survey",
    wa_chip3: "🚢 On/Off-hire & Condition Survey",
    wa_input_placeholder: "Type your message here...",
    wa_connected_to: "Connected to WhatsApp:",

    // Modal Brochure
    modal_brochure_title: "Official Brochure - PT. Mega Karya Surveyor",
    modal_brochure_sub: "Company Profile Official Reference",
    modal_brochure_download: "Download"
  }
};

// ==========================================
// 2. KONFIGURASI WHATSAPP & BAHASA
// ==========================================
let currentLang = localStorage.getItem('mks_lang') || 'id';

let CONFIG = {
  whatsappNumber: "6287737555557",
  companyName: "PT. Mega Karya Surveyor",
  defaultMessage: {
    id: "Halo PT. Mega Karya Surveyor, saya ingin berkonsultasi mengenai jasa survei maritim dan inspeksi kapal.",
    en: "Hello PT. Mega Karya Surveyor, I would like to consult regarding maritime survey and vessel inspection services."
  }
};

// Cek nomor kustom di localStorage
const savedNumber = localStorage.getItem('mks_wa_number');
if (savedNumber && savedNumber !== "6281234567890") {
  CONFIG.whatsappNumber = savedNumber;
} else {
  CONFIG.whatsappNumber = "6287737555557";
}

// Format dan update nomor WA pada elemen dengan class .wa-display-number
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

// Buka WhatsApp chat
function openWhatsAppChat(customText) {
  const defaultMsg = CONFIG.defaultMessage[currentLang] || CONFIG.defaultMessage.id;
  const message = customText || defaultMsg;
  const encodedText = encodeURIComponent(message);
  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedText}`;
  window.open(waUrl, '_blank');
}

// ==========================================
// 3. FUNGSI GANTI BAHASA (SWITCH LANGUAGE ID/EN)
// ==========================================
function switchLanguage(lang) {
  if (lang !== 'id' && lang !== 'en') return;
  currentLang = lang;
  localStorage.setItem('mks_lang', lang);
  document.documentElement.setAttribute('lang', lang);

  const t = TRANSLATIONS[lang];
  if (!t) return;

  // 1. Teks Biasa (data-i18n)
  const i18nElements = document.querySelectorAll('[data-i18n]');
  i18nElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // 2. Placeholder Input (data-i18n-ph)
  const phElements = document.querySelectorAll('[data-i18n-ph]');
  phElements.forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // 3. Update active state pada tombol switch bahasa di Desktop & Mobile
  const toggleButtons = document.querySelectorAll('.lang-toggle-btn');
  toggleButtons.forEach(btn => {
    const btnLang = btn.getAttribute('data-lang-choice');
    if (btnLang === lang) {
      btn.classList.add('bg-brand-blue', 'text-white', 'shadow-sm');
      btn.classList.remove('text-slate-500', 'hover:text-slate-900', 'bg-transparent');
    } else {
      btn.classList.remove('bg-brand-blue', 'text-white', 'shadow-sm');
      btn.classList.add('text-slate-500', 'hover:text-slate-900', 'bg-transparent');
    }
  });

  // 4. Update data-msg pada quick chips agar sesuai bahasa
  const chip1 = document.querySelector('.quick-chip-1');
  const chip2 = document.querySelector('.quick-chip-2');
  const chip3 = document.querySelector('.quick-chip-3');

  if (chip1) {
    chip1.setAttribute('data-msg', lang === 'id' 
      ? 'Halo, saya ingin menanyakan penawaran biaya survei kapal.' 
      : 'Hello, I would like to request a quotation for vessel survey services.');
  }
  if (chip2) {
    chip2.setAttribute('data-msg', lang === 'id' 
      ? 'Halo, saya ingin konsultasi mengenai Bunker Survey / Draft Survey.' 
      : 'Hello, I would like to consult regarding Bunker Survey / Draft Survey.');
  }
  // 5. Update SEO Title & Meta Description dynamically
  if (lang === 'id') {
    document.title = "PT. Mega Karya Surveyor | Maritime Survey & Technical Inspection Indonesia";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "PT. Mega Karya Surveyor adalah perusahaan surveyor independen terpercaya di bidang survei maritim, inspeksi teknis kapal, bunker survey, draft survey, dan pengawasan kargo di seluruh pelabuhan Indonesia.");
    }
  } else {
    document.title = "PT. Mega Karya Surveyor | Maritime Survey & Technical Inspection Services Indonesia";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "PT. Mega Karya Surveyor is a trusted independent marine survey and vessel technical inspection company in Indonesia. 24/7 readiness. Professional, Accurate, Reliable.");
    }
  }
}

// ==========================================
// 4. EVENT LISTENERS & DOM HANDLING
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi nomor WA dan bahasa awal
  updateDisplayNumber();
  switchLanguage(currentLang);

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Navbar Scroll Shadow & Glass Effect
  const navbar = document.getElementById('mainNavbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('shadow-lg', 'bg-white/95', 'backdrop-blur-md', 'py-3');
        navbar.classList.remove('bg-white', 'py-4');
      } else {
        navbar.classList.remove('shadow-lg', 'bg-white/95', 'backdrop-blur-md', 'py-3');
        navbar.classList.add('bg-white', 'py-4');
      }
    });
  }

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

    document.addEventListener('click', (e) => {
      if (waChatPopup && !waChatPopup.contains(e.target) && !waFloatingBtn.contains(e.target)) {
        waChatPopup.classList.add('hidden-popup');
        waChatPopup.classList.remove('active-popup');
      }
    });

    if (waSendDirect && waCustomInput) {
      const handlePopupSend = () => {
        const text = waCustomInput.value.trim();
        if (text) {
          openWhatsAppChat(text);
          waCustomInput.value = '';
          waChatPopup.classList.add('hidden-popup');
          waChatPopup.classList.remove('active-popup');
        } else {
          openWhatsAppChat();
        }
      };

      waSendDirect.addEventListener('click', handlePopupSend);
      waCustomInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          handlePopupSend();
        }
      });
    }

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
      const service = document.getElementById('formService').value;
      const vessel = document.getElementById('formVessel').value.trim();
      const location = document.getElementById('formLocation').value.trim();
      const message = document.getElementById('formMessage').value.trim();

      let waText = "";
      if (currentLang === 'id') {
        waText = 
`Halo *PT. Mega Karya Surveyor*,
Saya ingin mengajukan permintaan survei/konsultasi layanan dengan rincian berikut:

👤 *Nama Pengirim:* ${name}
🏢 *Perusahaan:* ${company || '-'}
⚓ *Layanan yang Dibutuhkan:* ${service}
🚢 *Nama Kapal/Aset:* ${vessel || '-'}
📍 *Lokasi Pelabuhan/Wilayah:* ${location || '-'}

📝 *Pesan / Catatan Tambahan:*
${message || 'Mohon informasi penawaran dan ketersediaan jadwal surveyor.'}

Terima kasih.`;
      } else {
        waText = 
`Hello *PT. Mega Karya Surveyor*,
I would like to submit a marine survey inquiry with the following details:

👤 *Contact Person:* ${name}
🏢 *Company Name:* ${company || '-'}
⚓ *Service Requested:* ${service}
🚢 *Vessel/Asset Name:* ${vessel || '-'}
📍 *Port/Location:* ${location || '-'}

📝 *Requirements / Notes:*
${message || 'Please provide quotation and surveyor schedule availability.'}

Thank you.`;
      }

      openWhatsAppChat(waText);
    });
  }

  // Tombol Chat Langsung per-Layanan
  const serviceWaBtns = document.querySelectorAll('.btn-service-wa');
  serviceWaBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serviceName = btn.getAttribute('data-service');
      let text = "";
      if (currentLang === 'id') {
        text = `Halo PT. Mega Karya Surveyor, saya tertarik dan ingin menanyakan informasi lebih lanjut mengenai layanan: *${serviceName}*.`;
      } else {
        text = `Hello PT. Mega Karya Surveyor, I am interested and would like to inquire further about your service: *${serviceName}*.`;
      }
      openWhatsAppChat(text);
    });
  });

  // Pengaturan Nomor WhatsApp Modal
  const setupWaBtn = document.getElementById('setupWaBtn');
  if (setupWaBtn) {
    setupWaBtn.addEventListener('click', () => {
      const current = CONFIG.whatsappNumber;
      const promptText = currentLang === 'id' 
        ? "Masukkan nomor WhatsApp perusahaan Anda (Format kode negara tanpa tanda '+', contoh: 6281234567890):"
        : "Enter your company WhatsApp number (Country code format without '+', e.g. 6281234567890):";
      
      const input = prompt(promptText, current);
      if (input && input.trim()) {
        const clean = input.trim().replace(/[^0-9]/g, '');
        if (clean.length >= 9) {
          CONFIG.whatsappNumber = clean;
          localStorage.setItem('mks_wa_number', clean);
          updateDisplayNumber();
          const alertSuccess = currentLang === 'id'
            ? `Nomor WhatsApp berhasil diperbarui ke: ${clean}\nTombol chat WhatsApp sekarang akan langsung terhubung ke nomor tersebut!`
            : `WhatsApp number successfully updated to: ${clean}\nAll WhatsApp chat buttons are now linked to this number!`;
          alert(alertSuccess);
        } else {
          alert(currentLang === 'id' 
            ? "Nomor tidak valid. Mohon masukkan minimal 9 digit angka." 
            : "Invalid number. Please enter at least 9 digits.");
        }
      }
    });
  }

  // Filter Kategori Layanan
  const filterBtns = document.querySelectorAll('.service-filter-btn');
  const serviceCards = document.querySelectorAll('.service-card-item');

  if (filterBtns.length > 0 && serviceCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('active');
          b.classList.remove('bg-brand-blue', 'text-white', 'shadow-md');
          b.classList.add('bg-white', 'text-slate-600');
        });
        btn.classList.add('active');
        btn.classList.remove('bg-white', 'text-slate-600');
        btn.classList.add('bg-brand-blue', 'text-white', 'shadow-md');

        const filter = btn.getAttribute('data-filter');

        serviceCards.forEach(card => {
          const category = card.getAttribute('data-category') || '';
          if (filter === 'all' || category.includes(filter)) {
            card.style.display = 'flex';
            card.classList.remove('hidden');
          } else {
            card.style.display = 'none';
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // Modal Preview Brosur
  const openBrochureBtn = document.getElementById('openBrochureBtn');
  const brochureModal = document.getElementById('brochureModal');
  const closeBrochureBtn = document.getElementById('closeBrochureBtn');

  if (openBrochureBtn && brochureModal) {
    openBrochureBtn.addEventListener('click', () => {
      brochureModal.classList.remove('hidden');
    });

    if (closeBrochureBtn) {
      closeBrochureBtn.addEventListener('click', () => {
        brochureModal.classList.add('hidden');
      });
    }

    brochureModal.addEventListener('click', (e) => {
      if (e.target === brochureModal) {
        brochureModal.classList.add('hidden');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !brochureModal.classList.contains('hidden')) {
        brochureModal.classList.add('hidden');
      }
    });
  }
});
