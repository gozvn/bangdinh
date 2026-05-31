// ================================================
// VIỆT HÀN TAPE — PREMIUM INTERACTION ENGINE
// ================================================

const products = [
  { id: 1, name: "Băng dính OPP", nameEn: "BOPP Packing Tape", category: "Băng dính đóng gói", image: "images/page3_img1.png", featured: true },
  { id: 2, name: "Băng dính Màu", nameEn: "BOPP Color Tape", category: "Băng dính đóng gói", image: "images/page3_img1.png", featured: true },
  { id: 3, name: "Băng dính in Dễ Vỡ", nameEn: "Fragile Tape", category: "Băng dính đóng gói", image: "images/page3_img3.png", featured: true },
  { id: 4, name: "Băng dính in Logo", nameEn: "BOPP Printed Tape", category: "Băng dính đóng gói", image: "images/page3_img2.png", featured: true },
  { id: 5, name: "Băng dính dán nền", nameEn: "Floor Marking Tape", category: "Băng dính công nghiệp", image: "images/page3_img5.jpeg", featured: true },
  { id: 6, name: "Băng dính dán nền ESD", nameEn: "ESD Floor Marking Tape", category: "Băng dính công nghiệp", image: "images/page3_img5.jpeg", featured: false },
  { id: 7, name: "Băng dính chống trượt", nameEn: "Anti-slip Tape", category: "Băng dính công nghiệp", image: "images/page3_img7.png", featured: false },
  { id: 8, name: "Băng dính phản quang", nameEn: "Reflective Tape", category: "Băng dính công nghiệp", image: "images/page3_img8.png", featured: false },
  { id: 9, name: "Băng dính vải", nameEn: "Cloth Tape", category: "Băng dính chuyên dụng", image: "images/page4_img0.png", featured: true },
  { id: 10, name: "Băng dính giấy", nameEn: "Masking Tape", category: "Băng dính chuyên dụng", image: "images/page4_img1.png", featured: false },
  { id: 11, name: "Băng dính xốp 2 mặt", nameEn: "Double-sided Foam Tape", category: "Băng dính chuyên dụng", image: "images/page4_img2.png", featured: false },
  { id: 12, name: "Băng dính 2 mặt", nameEn: "Double-sided Tape", category: "Băng dính chuyên dụng", image: "images/page4_img3.png", featured: false },
  { id: 13, name: "Băng dính giấy da bò", nameEn: "Kraft Paper Tape", category: "Băng dính chuyên dụng", image: "images/page4_img4.png", featured: false },
  { id: 14, name: "Băng dính dán gáy Simili", nameEn: "PVC Easy Tear Tape", category: "Băng dính văn phòng", image: "images/page4_img5.png", featured: false },
  { id: 15, name: "Băng dính điện", nameEn: "Electrical Tape", category: "Băng dính chuyên dụng", image: "images/page4_img6.png", featured: false },
  { id: 16, name: "Băng dính văn phòng", nameEn: "Stationery Tape", category: "Băng dính văn phòng", image: "images/page4_img7.png", featured: false },
  { id: 17, name: "Màng bảo vệ", nameEn: "PE Protective Film", category: "Màng PE & Phụ kiện", image: "images/page4_img8.png", featured: false },
  { id: 18, name: "Màng PE", nameEn: "Stretch Film", category: "Màng PE & Phụ kiện", image: "images/page5_img2.png", featured: false },
];

document.addEventListener('DOMContentLoaded', () => {

  // ===========================
  // 1. THEME SWITCHER (Bootstrap 5.3 data-bs-theme)
  // ===========================
  const themeSwitch = document.getElementById('theme-switch');
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('viet-han-theme', theme);
    if (themeSwitch) {
      const icon = themeSwitch.querySelector('i');
      if (icon) icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    }
  };
  setTheme(localStorage.getItem('viet-han-theme') || 'light');
  if (themeSwitch) {
    themeSwitch.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-bs-theme');
      setTheme(cur === 'dark' ? 'light' : 'dark');
    });
  }

  // ===========================
  // 2. NAVBAR SCROLL EFFECT
  // ===========================
  const nav = document.querySelector('.vh-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // ===========================
  // 3. MOBILE MENU
  // ===========================
  const hamburger = document.querySelector('.vh-hamburger');
  const mobileMenu = document.querySelector('.vh-nav__mobile');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.remove('active'));
    });
  }

  // ===========================
  // 4. SCROLL REVEAL ANIMATIONS
  // ===========================
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // ===========================
  // 5. ANIMATED COUNTER
  // ===========================
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        let current = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = prefix + current.toLocaleString() + suffix;
        }, 20);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => counterObserver.observe(el));

  // ===========================
  // 6. RENDER PRODUCT CARDS (Homepage featured)
  // ===========================
  function renderProductCard(product) {
    return `
      <div class="vh-product-card">
        <div class="vh-product-card__img">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="vh-product-card__body">
          <div class="vh-product-card__cat">${product.category}</div>
          <div class="vh-product-card__title">${product.name}</div>
          <div class="vh-product-card__subtitle">${product.nameEn}</div>
          <a href="product.html?id=${product.id}" class="vh-product-card__btn">
            Xem chi tiết <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    `;
  }

  const featuredGrid = document.getElementById('featured-grid');
  if (featuredGrid) {
    const featured = products.filter(p => p.featured).slice(0, 6);
    featuredGrid.innerHTML = featured.map(p => renderProductCard(p)).join('');
  }

  // ===========================
  // 7. SHOP PAGE RENDERING & FILTERS
  // ===========================
  const shopGrid = document.getElementById('shop-grid');
  const filterBtns = document.querySelectorAll('.vh-filter-pill');

  function renderShop(filter = 'all') {
    if (!shopGrid) return;
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
    shopGrid.innerHTML = filtered.map(p => renderProductCard(p)).join('');
    
    // Re-trigger reveal animations for new cards
    shopGrid.querySelectorAll('.vh-product-card').forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      setTimeout(() => {
        card.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 50);
    });
  }

  if (shopGrid) renderShop();

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderShop(btn.dataset.filter);
    });
  });

});
