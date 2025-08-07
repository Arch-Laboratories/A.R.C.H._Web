
document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer for values section
  const valuesSection = document.querySelector('.aboutus-values-section');
  const valuesContainer = document.querySelector('.aboutus-values-container');
  const valueItems = document.querySelectorAll('.aboutus-value-item');
  
  // Set index for each value item for staggered animation
  valueItems.forEach((item, index) => {
    item.style.setProperty('--index', index);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // First make the container visible
        valuesContainer.classList.add('visible');
        
        // Then animate each value item one by one
        valueItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('visible');
          }, index * 200); // 200ms delay between each item
        });
        
        // Stop observing after animation starts
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3, // Trigger when 30% of section is visible
    rootMargin: '0px 0px -100px 0px' // Adjust this to fine-tune when animation triggers
  });

  // Start observing the values section
  if (valuesSection) {
    observer.observe(valuesSection);
  }

  // For the next section (voice-ai-explanation-section), you can add similar observer
  const voiceAISection = document.querySelector('.voice-ai-explanation-section');
  const voiceAIContent = document.querySelector('.voice-ai-content');
  
  if (voiceAISection && voiceAIContent) {
    const voiceAIObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          voiceAIContent.classList.add('visible');
          voiceAIObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3
    });
    
    voiceAIObserver.observe(voiceAISection);
  }
});
