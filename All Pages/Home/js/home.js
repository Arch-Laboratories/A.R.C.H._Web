document.addEventListener('DOMContentLoaded', function() {
  particlesJS('particles-js', {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 1000 } },
      color: { value: "#28A0B8" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 4, random: true },
      line_linked: { 
        enable: true, 
        distance: 150, 
        color: "#28A0B8", 
        opacity: 0.3, 
        width: 1 
      },
      move: { 
        enable: true, 
        speed: 2, 
        direction: "none", 
        random: true, 
        straight: false, 
        out_mode: "out" 
      }
    },
    interactivity: { 
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        bubble: { distance: 200, size: 6, duration: 2, opacity: 0.4 },
        push: { particles_nb: 4 }
      }
    }
  });
});



// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

// Observe all elements with animate-on-scroll class
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// Custom smooth scroll for the sequential animations
function setupSequentialScroll() {
  const sections = [
    '.aboutus-values-section',
    '.voice-ai-explanation-section',
    '.voice-ai-info-section',
    '.ourportfolio-partners-showcase'
  ];

  sections.forEach(section => {
    const sectionEl = document.querySelector(section);
    if (sectionEl) {
      observer.observe(sectionEl);
    }
  });
}


// Scroll effect
// window.addEventListener("scroll", () => {
//   const navbar = document.querySelector(".home-navbar");
//   if (window.scrollY > 60) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// });

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







document.querySelector('.mic-icon').addEventListener('click', function() {
  this.classList.toggle('active');
});