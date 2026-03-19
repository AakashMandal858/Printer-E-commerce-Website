function addToCart() {
    var popup = document.getElementById('cart-popup');
    popup.style.display = 'block';
    setTimeout(function() {
      popup.style.display = 'none';
    }, 2000); 
  }
  
  function closePopup() {
    var popup = document.getElementById('cart-popup');
    popup.style.display = 'none';
  }