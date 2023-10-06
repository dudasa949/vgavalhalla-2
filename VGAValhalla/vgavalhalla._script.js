function nextSlide() {
    const productsContainer = document.querySelector('.products-container');
    productsContainer.scrollBy({ left: 300, behavior: 'smooth' });
  }
  
  function prevSlide() {
    const productsContainer = document.querySelector('.products-container');
    productsContainer.scrollBy({ left: -300, behavior: 'smooth' });
  }  