function search() {
  var searchval = document.getElementById("search-val").value.toLowerCase();
  var product_result = document.getElementById("product_result");
  product_result.innerHTML = ""; 

  var products = document.querySelectorAll('.item'); 
  var has_result = false; 

  products.forEach(function(product) {
      var name = product.querySelector('.title').textContent.toLowerCase();
      var productimage = product.querySelector('.image');
      var product_Image = getComputedStyle(productimage).backgroundImage; 
      var product_price = product.querySelector('.price').textContent;
      var details_url = product.getAttribute('href'); 

      
      productImage = product_Image.replace('url("', '').replace('")', '');

      
      if (name.includes(searchval)) {
        product_result.innerHTML += `
              <a href="${details_url}" class="item">
                  <img class="image" src="${productImage}" alt="${productImage}"/>
                  <h4 class="title">${name}</h4>
                  <p class="price">${product_price}</p>
              </a>`;
              has_result = true; 
      }
  });

  
  if (!has_result) {
    product_result.innerHTML = "<h3>No Results Found</h3>";
  }
}





//   -----------modal-------
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
//   -----------modal-------

