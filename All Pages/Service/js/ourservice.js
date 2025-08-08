
// Scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".home-navbar");
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Hamburger toggle
const hamburger = document.getElementById("home-hamburger");
const nav = document.getElementById("home-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

// Close menu when clicking a link (mobile)
document.querySelectorAll(".home-nav a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  });
});
