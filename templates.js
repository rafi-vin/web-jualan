// Template data
const templates = [
  {
    id: 1,
    title: "Website Kos-kosan",
    category: "company",
    categoryLabel: "Property Company",
    price: "Rp 25.000",
    rating: 4.9,
    reviews: 127,
    image: "images/company-kost.png",
    features: ["24/7 Support", "SEO Optimized", "Mobile Ready"],
    detailUrl: "https://web-kost.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio Website Developer",
    category: "portfolio",
    categoryLabel: "Personal Portfolio",
    price: "Rp 25.000",
    rating: 4.8,
    reviews: 89,
    image: "/images/Portfolio Website Developer.png",
    features: ["Portfolio Gallery", "Team Showcase", "Contact Forms"],
    detailUrl: "https://template-portofolio1.vercel.app/",
  },
  {
    id: 3,
    title: "Professional Portofolio Photographer",
    category: "portfolio",
    categoryLabel: "Personal Portfolio",
    price: "Rp 25.000",
    rating: 4.9,
    reviews: 203,
    image: "/images/Professional Portofolio Photographer.png",
    features: ["Portfolio Gallery", "Team Showcase", "Contact Forms"],
    detailUrl: "https://professional-photographer.vercel.app/",
  },
  {
    id: 4,
    title: "Portofolio Specialist Office",
    category: "portfolio",
    categoryLabel: "Personal Portfolio",
    price: "Rp 25.000",
    rating: 4.5,
    reviews: 156,
    image: "/images/Portofolio Specialist Office.png",
    features: ["Portfolio Gallery", "Team Showcase", "Contact Forms"],
    detailUrl: "https://portofolio-specialist-office.vercel.app",
  },
  {
    id: 5,
    title: "Professional IT Support",
    category: "portfolio",
    categoryLabel: "Personal Portfolio",
    price: "Rp 25.000",
    rating: 4.8,
    reviews: 156,
    image: "/images/Professional IT Support.png",
    features: ["Portfolio Gallery", "Team Showcase", "Contact Forms"],
    detailUrl: "https://professional-it-support.vercel.app/",
  },
  {
    id: 6,
    title: "Professional Designer",
    category: "portfolio",
    categoryLabel: "Personal Portfolio",
    price: "Rp 25.000",
    rating: 4.9,
    reviews: 156,
    image: "/images/Professional Designer.png",
    features: ["Portfolio Gallery", "Team Showcase", "Contact Forms"],
    detailUrl: "https://portfolio-designer-tau.vercel.app/",
  },
  {
    id: 7,
    title: "Air Conditioner Company",
    category: "company",
    categoryLabel: "Company Profile",
    price: "Rp 25.000",
    rating: 4.8,
    reviews: 95,
    image: "/images/Air Conditioner.png",
    features: ["International Shipping", "Compliance Tools", "Market Analysis"],
    detailUrl: "https://website-ac-murex.vercel.app/",
  },
  {
    id: 8,
    title: "Coffe Shop",
    category: "company",
    categoryLabel: "Company Profile",
    price: "Rp 25.000",
    rating: 4.7,
    reviews: 167,
    image: "/images/Coffe Shop.png",
    features: ["24/7 Support", "SEO Optimized", "Mobile Ready"],
    detailUrl: "https://template-cafe.vercel.app/",
  },
  {
    id: 9,
    title: "Personal Portfolio Multimedia",
    category: "portfolio",
    categoryLabel: "Personal Portfolio",
    price: "Rp 25.000",
    rating: 4.8,
    reviews: 169,
    image: "/images/Personal Portfolio Multimedia.png",
    features: ["Portfolio Gallery", "Team Showcase", "Contact Forms"],
    detailUrl: "https://web-portfolio-mm.vercel.app/",
  },
  {
    id: 10,
    title: "Prefosional Portfolio Design Grafis",
    category: "portfolio",
    categoryLabel: "Personal Portfolio",
    price: "Rp 25.000",
    rating: 4.5,
    reviews: 122,
    image: "/images/Personal Portfolio Design Grafis.png",
    features: ["Portfolio Gallery", "Team Showcase", "Contact Forms"],
    detailUrl: "https://web-portfolio-design-grafis.vercel.app/",
  },
  {
    id: 11,
    title: "Prefosional Portfolio Fresh Graduate",
    category: "portfolio",
    categoryLabel: "Personal Portfolio",
    price: "Rp 25.000",
    rating: 4.5,
    reviews: 112,
    image: "/images/Portfolio Fresh Graduate.png",
    features: ["Team Showcase", "Portfolio Gallery", "Contact Forms"],
    detailUrl: "https://fresh-graduate.vercel.app/",
  },
  {
    id: 12,
    title: "Prefosional Portfolio Photographer",
    category: "portfolio",
    categoryLabel: "Personal Portfolio",
    price: "Rp 25.000",
    rating: 4.5,
    reviews: 134,
    image: "/images/Portfolio Photographer.png",
    features: ["Team Showcase", "Portfolio Gallery", "Contact Forms"],
    detailUrl: "https://photographer-v2.vercel.app/",
  },
];

// State variables
let selectedCategory = "all";
let searchTerm = "";

// DOM elements
const templatesGrid = document.getElementById("templatesGrid");
const noResults = document.getElementById("noResults");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  renderTemplates();
  setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
  // Search input
  searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    renderTemplates();
  });

  // Filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      selectedCategory = this.dataset.category;
      updateFilterButtons();
      renderTemplates();
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      closeMobileMenu();
    });
  });

  document.addEventListener("click", (e) => {
    const nav = document.getElementById("mobileNav");
    const menuBtn = document.querySelector(".mobile-menu-btn");

    if (
      nav &&
      menuBtn &&
      !nav.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });
}

function toggleMobileMenu() {
  const nav = document.getElementById("mobileNav");
  const menuBtn = document.querySelector(".mobile-menu-btn");

  if (nav && menuBtn) {
    nav.classList.toggle("active");
    menuBtn.classList.toggle("active");

    // Prevent body scroll when menu is open
    if (nav.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
}

function closeMobileMenu() {
  const nav = document.getElementById("mobileNav");
  const menuBtn = document.querySelector(".mobile-menu-btn");

  if (nav && menuBtn) {
    nav.classList.remove("active");
    menuBtn.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Update filter button states
function updateFilterButtons() {
  filterButtons.forEach((button) => {
    if (button.dataset.category === selectedCategory) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

// Filter templates based on category and search term
function filterTemplates() {
  return templates.filter((template) => {
    const matchesCategory =
      selectedCategory === "all" || template.category === selectedCategory;
    const matchesSearch =
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

// Render templates
function renderTemplates() {
  const filteredTemplates = filterTemplates();

  if (filteredTemplates.length === 0) {
    templatesGrid.style.display = "none";
    noResults.style.display = "block";
    return;
  }

  templatesGrid.style.display = "grid";
  noResults.style.display = "none";

  templatesGrid.innerHTML = filteredTemplates
    .map(
      (template) => `
      <div class="template-card">
          <div class="template-image">
              <img src="${template.image}" alt="${template.title}">
              <div class="template-badge">${template.categoryLabel}</div>
              <div class="template-price">${template.price}</div>
          </div>
          <div class="template-content">
              <div class="template-header">
                  <h3 class="template-title">${template.title}</h3>
                  <div class="template-rating">
                      <svg class="star" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                      </svg>
                      <span>${template.rating}</span>
                  </div>
              </div>
              <div class="template-features">
                  ${template.features
                    .map(
                      (feature) =>
                        `<span class="feature-badge">${feature}</span>`
                    )
                    .join("")}
              </div>
              <a href="${
                template.detailUrl
              }" class="btn btn-primary" style="width: 100%;" target="_blank">Lihat Detail</a>
              <a 
                href="https://wa.me/6285351992814?text=Halo,%20saya%20tertarik%20dengan%20template%20${encodeURIComponent(
                  template.title
                )}" 
                target="_blank" 
                class="btn btn-outline" 
                style="width: 100%; margin-top: 0.5rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;"
              >
                <!-- WhatsApp SVG -->
                WhatsApp
              </a>
          </div>
      </div>
  `
    )
    .join("");
}

// Smooth scroll to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Add scroll to top button (optional)
window.addEventListener("scroll", () => {
  const scrollButton = document.getElementById("scrollToTop");
  if (scrollButton) {
    if (window.pageYOffset > 300) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    closeMobileMenu();
  }
});
