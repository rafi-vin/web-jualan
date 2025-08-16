// Template data
const templates = [
  {
    id: 1,
    title: "Export Pro",
    category: "export",
    categoryLabel: "Export Business",
    price: "Rp2.990.000",
    rating: 4.9,
    reviews: 127,
    image: "/images/company-kost.png",
    features: ["Multi-language", "SEO Optimized", "Mobile Ready"],
  },
  {
    id: 2,
    title: "Import Master",
    category: "import",
    categoryLabel: "Import Business",
    price: "Rp3.490.000",
    rating: 4.8,
    reviews: 89,
    image: "/images/company-kost.png",
    features: ["CRM Integration", "Analytics", "24/7 Support"],
  },
  {
    id: 3,
    title: "Corporate Elite",
    category: "company",
    categoryLabel: "Company Profile",
    price: "Rp1.990.000",
    rating: 4.9,
    reviews: 203,
    image: "/images/company-kost.png",
    features: ["Portfolio Gallery", "Team Showcase", "Contact Forms"],
  },
  {
    id: 4,
    title: "Global Trade",
    category: "export",
    categoryLabel: "Trading Company",
    price: "Rp2.790.000",
    rating: 4.7,
    reviews: 156,
    image: "/images/company-kost.png",
    features: ["Product Catalog", "Multi-Currency", "Live Chat"],
  },
  {
    id: 5,
    title: "Business Hub",
    category: "company",
    categoryLabel: "Company Profile",
    price: "Rp2.490.000",
    rating: 4.8,
    reviews: 178,
    image: "/images/company-kost.png",
    features: ["Team Management", "Project Showcase", "Client Portal"],
  },
  {
    id: 6,
    title: "Import Solutions",
    category: "import",
    categoryLabel: "Import Business",
    price: "Rp3.290.000",
    rating: 4.9,
    reviews: 142,
    image: "/images/company-kost.png",
    features: ["Inventory System", "Supplier Network", "Documentation"],
  },
  {
    id: 7,
    title: "Export Gateway",
    category: "export",
    categoryLabel: "Export Business",
    price: "Rp3.590.000",
    rating: 4.8,
    reviews: 95,
    image: "/images/company-kost.png",
    features: ["International Shipping", "Compliance Tools", "Market Analysis"],
  },
  {
    id: 8,
    title: "Corporate Vision",
    category: "company",
    categoryLabel: "Company Profile",
    price: "Rp2.190.000",
    rating: 4.7,
    reviews: 167,
    image: "/images/company-kost.png",
    features: ["Vision Mission", "Leadership Team", "Career Portal"],
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
              <button class="btn btn-primary" style="width: 100%;">Lihat Detail</button>
              <a 
                href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20template%20${encodeURIComponent(
                  template.title
                )}" 
                target="_blank" 
                class="btn btn-outline" 
                style="width: 100%; margin-top: 0.5rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32"><path d="M16 2.938c-7.25 0-13.125 5.875-13.125 13.125 0 2.313.625 4.563 1.813 6.563l-1.938 7.125 7.313-1.938c1.938 1.125 4.188 1.75 6.438 1.75 7.25 0 13.125-5.875 13.125-13.125s-5.875-13.125-13.125-13.125zM16 27.625c-2.063 0-4.063-.563-5.813-1.625l-.438-.25-4.375 1.156 1.188-4.313-.281-.438c-1.125-1.813-1.75-3.813-1.75-5.938 0-6.063 4.938-11 11-11s11 4.938 11 11-4.938 11-11 11z"/><path d="M23.313 19.438c-.313-.156-1.813-.906-2.094-1.031-.281-.094-.469-.156-.656.156-.188.313-.75 1.031-.938 1.25-.188.219-.344.25-.625.094-.313-.156-1.313-.469-2.5-1.469-.922-.781-1.547-1.75-1.719-2.063-.188-.313-.021-.469.141-.625.141-.141.313-.375.469-.563.156-.188.219-.313.313-.531.094-.219.047-.406-.031-.563-.094-.156-.656-1.594-.906-2.188-.234-.563-.469-.469-.656-.469-.172 0-.375-.016-.578-.016-.203 0-.531.078-.813.375-.281.313-1.063 1.031-1.063 2.5s1.094 2.875 1.25 3.063c.156.188 2.156 3.313 5.25 4.5.734.313 1.313.5 1.75.625.734.234 1.406.156 1.938.094.594-.094 1.813-.75 2.063-1.469.25-.719.25-1.344.172-1.469-.078-.125-.281-.203-.594-.344z"/></svg>
                WhatsApp
              </a>
          </div>
      </div>
  `
    )
    .join("");
}

// FAQ functionality
function toggleFAQ(id) {
  const faqItem = document.querySelector(`#faq-${id}`).parentElement;
  const faqAnswer = document.querySelector(`#faq-${id}`);

  // Close all other FAQs
  document.querySelectorAll(".faq-item").forEach((item) => {
    if (item !== faqItem) {
      item.classList.remove("active");
      item.querySelector(".faq-answer").classList.remove("active");
    }
  });

  // Toggle current FAQ
  faqItem.classList.toggle("active");
  faqAnswer.classList.toggle("active");
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
