document.addEventListener('DOMContentLoaded', function() {
  const loadingAnimation = document.getElementById('loading-animation');
  const cartridgesGrid = document.getElementById('cartridges-grid');
  const images = document.querySelectorAll('.cartridge-icon img');
  const paginationElements = document.querySelectorAll('.pagination');
  
  let imagesLoaded = 0;
  const totalImages = images.length;
  
  // Show content immediately if there are no images
  if (totalImages === 0) {
    loadingAnimation.style.display = 'none';
    cartridgesGrid.style.display = 'grid';
    return;
  }
  
  // Function to check if all images are loaded
  function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
      // All images loaded, hide loading animation
      loadingAnimation.style.display = 'none';
      cartridgesGrid.style.display = 'grid';
    }
  }
  
  // Set a timeout to show content even if images take too long
  setTimeout(function() {
    if (loadingAnimation.style.display !== 'none') {
      loadingAnimation.style.display = 'none';
      cartridgesGrid.style.display = 'grid';
    }
  }, 5000);
  
  // Add load event listeners to all images
  images.forEach(img => {
    if (img.complete) {
      imageLoaded();
    } else {
      img.addEventListener('load', imageLoaded);
      img.addEventListener('error', imageLoaded); // Count errors as loaded too
    }
  });
  
  // Initially hide pagination
  paginationElements.forEach(function(pagination) {
    pagination.style.opacity = '0';
    pagination.style.transition = 'opacity 0.5s ease';
  });
  
  // Wait a bit to simulate loading if content loads too quickly
  setTimeout(function() {
    if (loadingAnimation && cartridgesGrid) {
      loadingAnimation.style.display = 'none';
      cartridgesGrid.style.display = 'grid';
      
      // Show pagination with a slight delay
      setTimeout(function() {
        paginationElements.forEach(function(pagination) {
          pagination.style.opacity = '1';
        });
      }, 50);
    }
  }, 100);
});