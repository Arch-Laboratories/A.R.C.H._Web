document.addEventListener('DOMContentLoaded', function () {
  // Animation for Core Values Section
  const valueItems = document.querySelectorAll('.aboutus-value-item');

  const valuesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = [...valueItems].indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 300); // 300ms stagger delay
        valuesObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  valueItems.forEach(item => valuesObserver.observe(item));

  // Animation for What We Offer Section
  const offerItems = document.querySelectorAll('.ai-feature');

  const offerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = [...offerItems].indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 300); // 300ms stagger delay
        offerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  offerItems.forEach(item => offerObserver.observe(item));
});
