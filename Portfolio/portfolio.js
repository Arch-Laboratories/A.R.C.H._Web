  // Always scroll to top on reload
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };



  window.addEventListener("load", function () {
    setTimeout(() => window.scrollTo(0, 0), 0);
  });

 window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


document.addEventListener('DOMContentLoaded', function() {
  // Testimonial auto-rotation
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  let intervalId;
  const rotationSpeed = 5000; // 5 seconds per testimonial

  function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(testimonial => {
      testimonial.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Show selected testimonial and dot
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
  }

  function rotateTestimonials() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  // Start auto-rotation
  function startRotation() {
    intervalId = setInterval(rotateTestimonials, rotationSpeed);
  }

  // Initialize
  showTestimonial(0);
  startRotation();

  // Pause on hover
  const testimonialsContainer = document.querySelector('.testimonials-container');
  testimonialsContainer.addEventListener('mouseenter', () => {
    clearInterval(intervalId);
  });
  
  testimonialsContainer.addEventListener('mouseleave', () => {
    startRotation();
  });

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(intervalId);
      showTestimonial(index);
      startRotation();
    });
  });
});





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
  
  // Handle category filtering
  categories.forEach(category => {
    category.addEventListener('click', () => {
      // Update active category
      categories.forEach(c => c.classList.remove('active'));
      category.classList.add('active');
      
      const selectedCategory = category.dataset.category;
      
      // Filter cards
      pricingCards.forEach(card => {
        const cardCategories = card.dataset.category.split(' ');
        if(selectedCategory === 'all' || cardCategories.includes(selectedCategory)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
      
      // Reset scroll position
      pricingContainer.scrollTo({ left: 0, behavior: 'smooth' });
      
      // Update dots
      updateDots();
    });
  });
  
  function updateDots() {
    // Remove all dots
    while(dotsContainer.firstChild) {
      dotsContainer.removeChild(dotsContainer.firstChild);
    }
    
    // Add dots for visible cards
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
  
  // Initialize
  updateDots();
});









  document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeInUp");
            entry.target.classList.add("animated-visible");
            observer.unobserve(entry.target); // animate once
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
