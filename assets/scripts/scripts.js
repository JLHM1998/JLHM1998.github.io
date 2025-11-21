// ------------------------------
// Basic location metadata
// ------------------------------
const geeLocation = {
  region: "Lambayeque",
  country: "Peru",
  description:
    "Most of the research and consulting work has been carried out in the Lambayeque region of Peru."
};

console.log(`Research Location: ${geeLocation.region}, ${geeLocation.country}`);
console.log(geeLocation.description);

// ------------------------------
// Initialize Map (no API key required)
// ------------------------------
function initMapIframe() {
  const mapFrame = document.getElementById("mapFrame");
  if (!mapFrame) return;

  const query = `${geeLocation.region}, ${geeLocation.country}`;
  const url =
    "https://www.google.com/maps?q=" +
    encodeURIComponent(query) +
    "&output=embed";

  mapFrame.src = url;
}

// ------------------------------
// Dark Mode Toggle
// ------------------------------
function initDarkModeToggle() {
  const toggleBtn = document.getElementById("toggleDark");
  if (!toggleBtn) return;

  // Load preference from localStorage if available
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// ------------------------------
// Smooth Scroll for Nav Links
// ------------------------------
function initSmoothScroll() {
  const links = document.querySelectorAll(".nav-links a[href^='#']");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
      }
    });
  });
}

// ------------------------------
// Footer Year
// ------------------------------
function setCurrentYear() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// ------------------------------
// Scroll Reveal for .reveal elements
// ------------------------------
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

// ------------------------------
// DOMContentLoaded
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initMapIframe();
  initDarkModeToggle();
  initSmoothScroll();
  setCurrentYear();
  initScrollReveal();
});
