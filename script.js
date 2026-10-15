/**
 * ==========================================================================
 * RAMA DWI PRASETYA — PROFESSIONAL PORTFOLIO JAVASCRIPT
 * Vanilla ES6+ Script for Navigation, Project Filter, Modal & Interactivity
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. PROJECTS DATA STORE (ALL 11 PROJECTS)
     -------------------------------------------------------------------------- */
  const projectsData = {
    1: {
      id: 1,
      name: 'Website Absensi Sekolah',
      category: 'Web Development',
      badge: 'Full-Stack Development',
      image: 'assets/projects/project-absensi.svg',
      description: 'Sistem informasi absensi sekolah berbasis web yang dirancang untuk mengotomatisasi pencatatan kehadiran siswa dan staf pengajar. Dibangun menggunakan framework Laravel, bahasa pemrograman PHP, dan basis data MySQL dengan arsitektur MVC yang rapi.',
      features: [
        'Autentikasi multi-role aman untuk Administrator, Guru, dan Siswa',
        'Pencatatan presensi harian dengan validasi status kehadiran (Hadir, Sakit, Izin, Alpa)',
        'Rekapitulasi otomatis dan ekspor data laporan kehadiran berkala (format PDF dan Excel)',
        'Dashboard statistik kehadiran harian dan grafik tren keaktifan kelas'
      ],
      technologies: ['Laravel', 'PHP', 'MySQL', 'Blade Templating', 'Bootstrap', 'JavaScript'],
      repoUrl: 'https://github.com/ramadwiprstya/absensi-sekolah',
      repoLabel: 'github.com/ramadwiprstya/absensi-sekolah',
      demoUrl: '#',
      demoLabel: '[Tautan Demo Offline / Lokal]'
    },
    2: {
      id: 2,
      name: 'FitTrack',
      category: 'Web Development',
      badge: 'Web Application',
      image: 'assets/projects/project-fittrack.svg',
      description: 'Aplikasi web interaktif untuk pemantauan nutrisi dan kalori harian yang memudahkan pengguna dalam mengontrol asupan gizi harian, menghitung kebutuhan kalori harian, serta melacak progres penurunan atau peningkatan berat badan secara berkelanjutan.',
      features: [
        'Dashboard ringkasan kalori harian dengan visualisasi target harian',
        'Pencarian dan pencatatan menu makanan beserta kandungan makronutrisi',
        'Kalkulator kebutuhan kalori terintegrasi berdasarkan parameter tubuh (BMR & TDEE)',
        'Laporan historis asupan nutrisi mingguan dan grafik perkembangan kebugaran'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript (ES6+)', 'CSS3', 'Chart.js', 'Responsive Design'],
      repoUrl: 'https://github.com/ramadwiprstya/fittrack',
      repoLabel: 'github.com/ramadwiprstya/fittrack',
      demoUrl: '#',
      demoLabel: '[Tautan Demo Offline / Lokal]'
    },
    3: {
      id: 3,
      name: 'Website Company Profile — Beltway Office Park',
      category: 'Web Development',
      badge: 'Website Development',
      image: 'assets/projects/project-beltway.svg',
      description: 'Website company profile profesional untuk kawasan properti komersial Beltway Office Park yang dikembangkan di bawah naungan PT Imeco Inter Saran (SBU Property and Infrastructure). Website ini merepresentasikan citra gedung modern dan memberikan informasi komprehensif bagi calon penyewa ruang kantor.',
      features: [
        'Tampilan profil korporat gedung perkantoran komersial berstandar premium',
        'Katalog spesifikasi lantai, luas unit kantor sewa, dan fasilitas penunjang gedung',
        'Galeri visual interaktif kawasan gedung, ruang pertemuan, dan area publik',
        'Formulir inquiry dan saluran kontak langsung untuk konsultasi leasing properti'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Responsive Web Design'],
      repoUrl: 'https://github.com/ramadwiprstya/beltway-office-park',
      repoLabel: 'github.com/ramadwiprstya/beltway-office-park',
      demoUrl: '#',
      demoLabel: '[Tautan Preview Website Beltway Office Park]'
    },
    4: {
      id: 4,
      name: 'Aplikasi To-Do List',
      category: 'Web Development',
      badge: 'Web Application',
      image: 'assets/projects/project-todo.svg',
      description: 'Aplikasi pengelolaan tugas harian yang intuitif, cepat, dan ringan. Membantu pengguna memprioritaskan pekerjaan penting, memantau tenggat waktu, dan memastikan setiap agenda harian terselesaikan dengan baik.',
      features: [
        'Manajemen tugas lengkap (Create, Read, Update, Delete - CRUD)',
        'Penyimpanan data lokal di browser menggunakan Web Storage API (LocalStorage)',
        'Fitur filter status tugas (Semua, Aktif, Selesai) dan penanda prioritas',
        'Antarmuka bersih dan responsif dengan konfirmasi penyelesaian tugas cepat'
      ],
      technologies: ['JavaScript (ES6+)', 'LocalStorage API', 'HTML5 Semantic', 'CSS3 Flexbox'],
      repoUrl: 'https://github.com/ramadwiprstya/todo-list-app',
      repoLabel: 'github.com/ramadwiprstya/todo-list-app',
      demoUrl: '#',
      demoLabel: '[Tautan Demo Offline / Lokal]'
    },
    5: {
      id: 5,
      name: 'Aplikasi Pencatatan Keuangan',
      category: 'Web Development',
      badge: 'Web Application',
      image: 'assets/projects/project-finance.svg',
      description: 'Aplikasi web pencatatan keuangan pribadi dan usaha mikro untuk mencatat aliran transaksi kas masuk (income) dan kas keluar (expense), mengklasifikasikan kategori transaksi, serta menyajikan ringkasan saldo keuangan secara transparan.',
      features: [
        'Pencatatan transaksi debit dan kredit dengan tanggal dan keterangan transaksi',
        'Kategorisasi pengeluaran dan pemasukan untuk analisis pos anggaran',
        'Ringkasan saldo total real-time dan rekapitulasi pengeluaran bulanan',
        'Filter pencarian transaksi berdasarkan rentang tanggal dan kategori'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'CSS3 Grid & Flexbox'],
      repoUrl: 'https://github.com/ramadwiprstya/pencatatan-keuangan',
      repoLabel: 'github.com/ramadwiprstya/pencatatan-keuangan',
      demoUrl: '#',
      demoLabel: '[Tautan Demo Offline / Lokal]'
    },
    6: {
      id: 6,
      name: 'Sistem Layanan Pengaduan Sekolah',
      category: 'Web Development',
      badge: 'Information System',
      image: 'assets/projects/project-pengaduan.svg',
      description: 'Sistem informasi layanan pengaduan dan aspirasi sekolah yang dibangun untuk memfasilitasi komunikasi yang transparan, aman, dan akuntabel antara siswa, wali murid, dan pihak manajemen sekolah.',
      features: [
        'Formulir pelaporan pengaduan terstruktur dengan opsi lampiran dokumen/bukti',
        'Sistem penomoran tiket aduan otomatis untuk pelacakan status penanganan',
        'Panel penanganan aduan bagi tim sekolah (Status: Baru, Diproses, Selesai)',
        'Arsip riwayat aspirasi serta dokumentasi tindak lanjut penyelesaian masalah'
      ],
      technologies: ['Laravel / PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Information System'],
      repoUrl: 'https://github.com/ramadwiprstya/pengaduan-sekolah',
      repoLabel: 'github.com/ramadwiprstya/pengaduan-sekolah',
      demoUrl: '#',
      demoLabel: '[Tautan Demo Offline / Lokal]'
    },
    7: {
      id: 7,
      name: 'Sistem Monitoring Kekeringan di Gunungkidul',
      category: 'Web Development',
      badge: 'Information System',
      image: 'assets/projects/project-drought.svg',
      description: 'Sistem informasi pemantauan kondisi kekeringan regional di Kabupaten Gunungkidul. Membantu pemetaan titik-titik wilayah rawan bencana kekurangan air serta mendukung koordinasi distribusi bantuan logistik air bersih.',
      features: [
        'Visualisasi pemetaan titik lokasi wilayah rawan kekeringan berdasarkan tingkat kerawanan',
        'Pencatatan status cadangan sumber air dan kapasitas tampungan warga',
        'Monitoring penjadwalan dan distribusi armada truk tangki air bersih',
        'Rekapitulasi data berkala untuk mendukung pengambilan keputusan tanggap bencana'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Web GIS / Mapping', 'CSS3'],
      repoUrl: 'https://github.com/ramadwiprstya/monitoring-kekeringan-gunungkidul',
      repoLabel: 'github.com/ramadwiprstya/monitoring-kekeringan-gunungkidul',
      demoUrl: '#',
      demoLabel: '[Tautan Demo Offline / Lokal]'
    },
    8: {
      id: 8,
      name: 'Business Process Analyst — Studi Kasus PT Pegadaian',
      category: 'Business Analysis',
      badge: 'Business Process Analysis',
      image: 'assets/projects/project-bpmn.svg',
      description: 'Proyek analisis proses bisnis komprehensif pada layanan operasional PT Pegadaian. Melibatkan investigasi alur kerja eksisting (AS-IS), identifikasi inefisiensi dan bottleneck proses, serta perancangan model proses bisnis masa depan (TO-BE) menggunakan standar notasi BPMN 2.0.',
      features: [
        'Pemetaan dan dokumentasi alur proses bisnis eksisting (AS-IS) lintas departemen',
        'Analisis akar masalah (Root Cause Analysis) dan identifikasi titik bottleneck operasional',
        'Perancangan alur proses bisnis target (TO-BE) teroptimasi dengan standar notasi BPMN 2.0',
        'Penyusunan rekomendasi perbaikan berbasis digitalisasi dan efisiensi waktu layanan'
      ],
      technologies: ['BPMN 2.0', 'Process Modeling (Bizagi / Draw.io)', 'Gap Analysis', 'Business Process Management'],
      repoUrl: '#',
      repoLabel: '[Dokumentasi Studi Kasus / Laporan Analisis BPMN]',
      demoUrl: '#',
      demoLabel: '[Dokumen Portofolio Analisis Proses Bisnis]'
    },
    9: {
      id: 9,
      name: 'UI/UX Designer — Studi Kasus PT Pegadaian',
      category: 'UI/UX Design',
      badge: 'UI/UX Design',
      image: 'assets/projects/project-uiux.svg',
      description: 'Studi kasus perancangan antarmuka dan pengalaman pengguna (UI/UX) untuk aplikasi digital PT Pegadaian. Berfokus pada perbaikan alur pengguna (user journey), kemudahan navigasi bagi nasabah, dan pembuatan prototipe interaktif berkualitas tinggi.',
      features: [
        'Riset pengguna, pembuatan User Persona, dan pemetaan User Journey Map',
        'Penyusunan arsitektur informasi (Information Architecture) dan wireframing low-fidelity',
        'Perancangan antarmuka pengguna high-fidelity (UI Design) menggunakan Figma',
        'Pembuatan prototipe interaktif (Interactive Prototype) untuk simulasi alur transaksi pengguna'
      ],
      technologies: ['Figma', 'UI/UX Research', 'Wireframing', 'Interactive Prototyping', 'Design System'],
      repoUrl: '#',
      repoLabel: '[Tautan Desain Figma / Case Study]',
      demoUrl: '#',
      demoLabel: '[Tautan Prototipe Interaktif Figma]'
    },
    10: {
      id: 10,
      name: 'Enterprise Architecture — Studi Kasus PT Graha Kreatif',
      category: 'Enterprise Architecture',
      badge: 'Enterprise Architecture',
      image: 'assets/projects/project-togaf.svg',
      description: 'Perancangan cetak biru (blueprint) Enterprise Architecture untuk PT Graha Kreatif dengan mengadopsi kerangka kerja standar internasional TOGAF (The Open Group Architecture Framework) ADM. Menyelaraskan tujuan strategis bisnis dengan kapabilitas data, aplikasi, dan infrastruktur teknologi informasi.',
      features: [
        'Analisis visi arsitektur dan penentuan sasaran strategis perusahaan (Phase A: Architecture Vision)',
        'Pemodelan arsitektur bisnis target (Phase B: Business Architecture)',
        'Perancangan arsitektur sistem informasi data dan aplikasi (Phase C: Information Systems Architecture)',
        'Perumusan arsitektur teknologi infrastruktur serta peta jalan transisi (Phase D & E: Technology Roadmap)'
      ],
      technologies: ['TOGAF ADM', 'Enterprise Architecture', 'ArchiMate', 'Business-IT Alignment'],
      repoUrl: '#',
      repoLabel: '[Dokumen Perancangan Enterprise Architecture]',
      demoUrl: '#',
      demoLabel: '[Dokumen Blueprint TOGAF PT Graha Kreatif]'
    },
    11: {
      id: 11,
      name: 'Data Analyst — Studi Kasus Dataset Toko Retail',
      category: 'Data Analytics',
      badge: 'Data Analytics',
      image: 'assets/projects/project-retail.svg',
      description: 'Proyek analisis data transaksi penjualan pada toko ritel untuk menggali pola belanja pelanggan, mengidentifikasi produk unggulan, dan memvisualisasikan tren performa penjualan untuk mendukung keputusan strategis bisnis ritel.',
      features: [
        'Pembersihan, penyaringan, dan transformasi dataset penjualan (proses ETL Data Wrangling)',
        'Analisis tren transaksi musiman, jam sibuk transaksi, dan perbandingan omzet per periode',
        'Segmentasi performa kategori produk dan analisis margin profitabilitas ritel',
        'Penyusunan ringkasan metrik analitik dan visualisasi dashboard grafik yang mudah dipahami'
      ],
      technologies: ['Python / Pandas', 'SQL Data Query', 'Data Cleaning & ETL', 'Data Visualization (BI/Charts)'],
      repoUrl: '#',
      repoLabel: '[Jupyter Notebook / Script Analisis SQL]',
      demoUrl: '#',
      demoLabel: '[Laporan Visualisasi Data Retail Dashboard]'
    }
  };

  /* --------------------------------------------------------------------------
     2. NAVBAR: STICKY, MOBILE MENU & SMOOTH ACTIVE LINK
     -------------------------------------------------------------------------- */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Toggle mobile menu
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      navMenu.classList.toggle('is-open');
    });

    // Close menu when a navigation item is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('is-open')) {
          navMenu.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('is-open') && 
          !navMenu.contains(e.target) && 
          !navToggle.contains(e.target)) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Active section indicator on scroll
  const handleScrollActiveNav = () => {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(currentSection => {
      const sectionHeight = currentSection.offsetHeight;
      const sectionTop = currentSection.offsetTop - 80;
      const sectionId = currentSection.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-list a[href*="#${sectionId}"]`);

      if (targetNavLink) {
        if (scrollPosition > sectionTop && scrollPosition <= sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          targetNavLink.classList.add('active');
        }
      }
    });
  };

  window.addEventListener('scroll', handleScrollActiveNav, { passive: true });

  /* --------------------------------------------------------------------------
     3. PROJECT FILTER FUNCTIONALITY
     -------------------------------------------------------------------------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const selectedFilter = button.getAttribute('data-filter');

        // Update active filter button state and accessibility
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-pressed', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');

        // Filter projects
        projectCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');

          if (selectedFilter === 'all' || cardCategory === selectedFilter) {
            card.classList.remove('is-hidden');
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
     4. PROJECT DETAIL MODAL (ACCESSIBLE DIALOG)
     -------------------------------------------------------------------------- */
  const modalBackdrop = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalFooterClose = document.getElementById('modal-footer-close');
  const viewDetailButtons = document.querySelectorAll('.btn-view-details');

  // Modal elements to populate
  const modalProjectCategory = document.getElementById('modal-project-category');
  const modalProjectTitle = document.getElementById('modal-project-title');
  const modalProjectDesc = document.getElementById('modal-project-desc');
  const modalProjectFeatures = document.getElementById('modal-project-features');

  let lastActiveElement = null;

  // Open Modal function
  const openProjectModal = (projectId) => {
    const project = projectsData[projectId];
    if (!project) return;

    lastActiveElement = document.activeElement;

    // Fill modal details
    if (modalProjectCategory) modalProjectCategory.textContent = `${project.category} • ${project.badge}`;
    if (modalProjectTitle) modalProjectTitle.textContent = project.name;
    if (modalProjectDesc) modalProjectDesc.textContent = project.description;

    // Fill features
    if (modalProjectFeatures) {
      modalProjectFeatures.innerHTML = '';
      project.features.forEach(feat => {
        const li = document.createElement('li');
        li.textContent = feat;
        modalProjectFeatures.appendChild(li);
      });
    }

    // Show modal
    modalBackdrop.classList.add('is-active');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // Focus close button for accessibility
    setTimeout(() => {
      if (modalCloseBtn) modalCloseBtn.focus();
    }, 100);
  };

  // Close Modal function
  const closeProjectModal = () => {
    if (!modalBackdrop.classList.contains('is-active')) return;

    modalBackdrop.classList.remove('is-active');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    // Return focus to trigger element
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  };

  // Attach event listener to view details buttons
  viewDetailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project-id');
      openProjectModal(projectId);
    });
  });

  // Close button click
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  // Footer close button click
  if (modalFooterClose) {
    modalFooterClose.addEventListener('click', closeProjectModal);
  }

  // Click on backdrop outside modal dialog
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeProjectModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('is-active')) {
      closeProjectModal();
    }
  });

  /* --------------------------------------------------------------------------
     5. TOAST NOTIFICATION HELPER
     -------------------------------------------------------------------------- */
  const toastContainer = document.getElementById('toast-container');

  const showToast = (message, duration = 3000) => {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Trigger enter animation
    setTimeout(() => {
      toast.classList.add('is-show');
    }, 10);

    // Auto remove toast
    setTimeout(() => {
      toast.classList.remove('is-show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, duration);
  };

  /* --------------------------------------------------------------------------
     8. DYNAMIC YEAR IN FOOTER
     -------------------------------------------------------------------------- */
  const currentYearEl = document.getElementById('current-year');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  /* --------------------------------------------------------------------------
     9. BACK TO TOP BUTTON
     -------------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
