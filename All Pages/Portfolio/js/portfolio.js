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



document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeInUp");
            entry.target.classList.add("animated-visible");
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    animatedElements.forEach(el => observer.observe(el));
  });


  document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer for section animations
  const animateOnScroll = function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  };

  // Initialize animations
  animateOnScroll();
  
  // Re-run animations when resizing to handle any layout changes
  window.addEventListener('resize', animateOnScroll);
});


// Add this to your existing JavaScript
document.addEventListener("DOMContentLoaded", function() {
  // Scroll animation observer
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;
    
    const checkPosition = function() {
      elements.forEach(function(element) {
        const positionFromTop = element.getBoundingClientRect().top;
        
        if (positionFromTop - windowHeight <= -100) {
          element.classList.add('animated');
        }
      });
    };
    
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);
    
    // Trigger initial check
    checkPosition();
  };
  
  // Initialize all animations
  animateOnScroll();
  
  // Your existing testimonial and pricing code...
});




  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove "active" class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        // Add "active" to clicked button
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        portfolioItems.forEach((item) => {
          const itemCategory = item.getAttribute("data-category");

          if (filterValue === "all" || filterValue === itemCategory) {
            item.style.display = "block"; // show item
          } else {
            item.style.display = "none"; // hide item
          }
        });
      });
    });
  });




  document.addEventListener("DOMContentLoaded", function () {
    const scroller = document.getElementById("scroller");

    // Convert vertical scroll to horizontal scroll
    scroller.addEventListener("wheel", function (e) {
      e.preventDefault();
      scroller.scrollLeft += e.deltaY;
    });

    // Filtering logic (same as before)
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        const filterValue = button.getAttribute("data-filter");

        portfolioItems.forEach((item) => {
          const itemCategory = item.getAttribute("data-category");
          if (filterValue === "all" || filterValue === itemCategory) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  });



// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//       e.preventDefault();
      
//       const targetId = this.getAttribute('href');
//       if (targetId === '#') return;
      
//       const targetElement = document.querySelector(targetId);
//       if (targetElement) {
//         targetElement.scrollIntoView({
//           behavior: 'smooth',
//           block: 'start'
//         });
//       }
//     });
//   });
// });


document.addEventListener('DOMContentLoaded', function() {
  const pricingContainer = document.querySelector('.pricing-plans');
  const pricingCards = document.querySelectorAll('.pricing-card');
  const swipeLeft = document.querySelector('.swipe-left');
  const swipeRight = document.querySelector('.swipe-right');
  const categories = document.querySelectorAll('.pricing-categories .category');
  const dotsContainer = document.querySelector('.pagination-dots');
  
  // Create pagination dots
  pricingCards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('pagination-dot');
    if(index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      scrollToCard(index);
    });
    dotsContainer.appendChild(dot);
  });
  
  const dots = document.querySelectorAll('.pagination-dot');
  
  // Handle swipe buttons
  swipeLeft.addEventListener('click', () => {
    pricingContainer.scrollBy({ left: -300, behavior: 'smooth' });
  });
  
  swipeRight.addEventListener('click', () => {
    pricingContainer.scrollBy({ left: 300, behavior: 'smooth' });
  });
  
  // Update active dot on scroll
  pricingContainer.addEventListener('scroll', updateActiveDot);
  
  function updateActiveDot() {
    const cardWidth = pricingCards[0].offsetWidth + 30; // card width + gap
    const scrollPosition = pricingContainer.scrollLeft;
    const activeIndex = Math.round(scrollPosition / cardWidth);
    
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });
  }
  
  function scrollToCard(index) {
    const cardWidth = pricingCards[0].offsetWidth + 30; // card width + gap
    pricingContainer.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  }
  
  categories.forEach(category => {
    category.addEventListener('click', () => {
      categories.forEach(c => c.classList.remove('active'));
      category.classList.add('active');
      
      const selectedCategory = category.dataset.category;
      pricingCards.forEach(card => {
        const cardCategories = card.dataset.category.split(' ');
        if(selectedCategory === 'all' || cardCategories.includes(selectedCategory)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
      pricingContainer.scrollTo({ left: 0, behavior: 'smooth' });

      updateDots();
    });
  });
  
  function updateDots() {
    while(dotsContainer.firstChild) {
      dotsContainer.removeChild(dotsContainer.firstChild);
    }

    const visibleCards = Array.from(pricingCards).filter(card => 
      card.style.display !== 'none'
    );
    
    visibleCards.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('pagination-dot');
      if(index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        scrollToVisibleCard(index);
      });
      dotsContainer.appendChild(dot);
    });
  }
  
  function scrollToVisibleCard(index) {
    const visibleCards = Array.from(pricingCards).filter(card => 
      card.style.display !== 'none'
    );
    
    if(index >= 0 && index < visibleCards.length) {
      visibleCards[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  }

  updateDots();
});


//   window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   };
//   window.addEventListener("load", function () {
//     setTimeout(() => window.scrollTo(0, 0), 0);
//   });
//  window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   };

  


  
