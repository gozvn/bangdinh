// Product Data
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

// Theme Switcher Logic (Bootstrap 5.3)
document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch');
  const icon = themeSwitch ? themeSwitch.querySelector('i') : null;

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('viet-han-theme', theme);
    if (icon) {
      icon.className = theme === 'dark' ? 'bi bi-sun-fill text-warning' : 'bi bi-moon-fill';
    }
  };

  const savedTheme = localStorage.getItem('viet-han-theme') || 'light';
  setTheme(savedTheme);

  if (themeSwitch) {
    themeSwitch.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme');
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // Render Featured Products (Bootstrap format)
  const featuredGrid = document.getElementById('featured-grid');
  if (featuredGrid) {
    const featured = products.filter(p => p.featured).slice(0, 6);
    featured.forEach(product => {
      featuredGrid.innerHTML += `
        <div class="col">
          <div class="card h-100 shadow-sm border-0">
            <img src="${product.image}" class="card-img-top product-img border-bottom" alt="${product.name}">
            <div class="card-body d-flex flex-column">
              <span class="text-primary small fw-bold text-uppercase mb-2">${product.category}</span>
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text text-muted small mb-4">${product.nameEn}</p>
              <a href="product.html?id=${product.id}" class="btn btn-outline-primary mt-auto w-100">Chi tiết</a>
            </div>
          </div>
        </div>
      `;
    });
  }
});
