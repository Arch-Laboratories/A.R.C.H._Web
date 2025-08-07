
document.addEventListener('DOMContentLoaded', function() {
  // Animation for Core Values Section
  const valuesSection = document.querySelector('.aboutus-values-section');
  const valueItems = document.querySelectorAll('.aboutus-value-item');
  let valuesCurrentIndex = 0;

  if (valueItems.length > 0) {
    valueItems[0].classList.add('visible');
  }

  const valuesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
        showNextValue();
      }
    });
  }, {
    threshold: [0, 0.2, 0.4, 0.6, 0.8, 1]
  });

  function showNextValue() {
    valuesCurrentIndex++;
    if (valuesCurrentIndex < valueItems.length) {
      valueItems[valuesCurrentIndex].classList.add('visible');
      valueItems[valuesCurrentIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      valuesObserver.unobserve(valueItems[valuesCurrentIndex-1]);
      valuesObserver.observe(valueItems[valuesCurrentIndex]);
    } else {
      valuesObserver.unobserve(valuesSection);
    }
  }

  if (valueItems.length > 0) {
    valuesObserver.observe(valueItems[0]);
  }

  // Animation for What We Offer Section
  const offerSection = document.querySelector('.voice-ai-explanation-section');
  const offerItems = document.querySelectorAll('.ai-feature');
  let offerCurrentIndex = 0;

  if (offerItems.length > 0) {
    offerItems[0].classList.add('visible');
  }

  const offerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
        showNextOffer();
      }
    });
  }, {
    threshold: [0, 0.2, 0.4, 0.6, 0.8, 1]
  });

  function showNextOffer() {
    offerCurrentIndex++;
    if (offerCurrentIndex < offerItems.length) {
      offerItems[offerCurrentIndex].classList.add('visible');
      offerItems[offerCurrentIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      offerObserver.unobserve(offerItems[offerCurrentIndex-1]);
      offerObserver.observe(offerItems[offerCurrentIndex]);
    } else {
      offerObserver.unobserve(offerSection);
    }
  }

  if (offerItems.length > 0) {
    offerObserver.observe(offerItems[0]);
  }
});
