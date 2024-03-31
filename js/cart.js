var cart = JSON.parse(localStorage.getItem("cartval")) || [];

addtocart = () => {
    // --getting img url --
    var a = document.getElementById("img");
    var style = window.getComputedStyle(a);
    var backgroundImage = style.getPropertyValue("background-image");
    var img = backgroundImage.replace('url("', '').replace('")', '');
    // --getting img url --
    var name = document.getElementById("title").innerText;
    var price = document.getElementById("price").innerText;
    var existingProduct = cart.find(item => item.name === name && item.price === price);

    if (existingProduct) {
        swal({
            title: "This item is already added in your cart", icon: "warning", button: "ok!",
        }).then(function () {
            window.location = "cart.html";
        });
    } else {
        // Otherwise, add the product to the cart with quantity 1
        cart.push({ name: name, price: price, img: img, quantity: 1 });
        swal({
            title: "Your Item is Added Sucessfully Thank you! ", icon: "success", button: "ok!",
        }).then(function () {
            window.location = "cart.html";
        });
    }


    localStorage.setItem("cartval", JSON.stringify(cart));



    Displaycart();
}


Displaycart = () => {
    var productsHTML = "";
    if (cart.length === 0) {
        // If cart is empty, redirect to index.html
        swal({
            title: "Your Cart is Empty. Add Some Items ", icon: "warning", button: "ok!",
        }).then(function () {
            window.location = "index.html";
        });

    }
    cart.forEach((item, index) => {
        productsHTML += `
        <div class="product">
        <div class="product-image">
        <img src='${item.img}' />
    </div>
                <div class="product-title">${item.name}</div>
          
            <div class="product-price" id="actual-price">${item.price}</div>
            <div class="cart_item">
                <div class="cart_quantity">
                        <input type='button' value='-' class='quantityminus' field='quantity' />
                        <input type='text' name='quantity' value='1' class='quantity' id="quantity"
                            min="1" max="12" />
                        <input type='button' value='+' class='quantityplus' field='quantity' />
                </div>
                <div class="product-removal">
                        <button onclick="removeitem(${index})" class='remove'>Remove</button>
                </div>
            </div>
        </div>
        <hr>`;
    });


    document.getElementById("product").innerHTML = productsHTML;


    console.log(cart);
}

removeitem = (indexx) => {


    cart.splice(indexx, 1);

    localStorage.setItem("cartval", JSON.stringify(cart));


    Displaycart();
    swal({
        title: "Item Removed from your cart", icon: "success", button: "ok!",
    }).then(function () {
        window.location = "cart.html";
    });
}
Emptycart = () => {
    localStorage.clear();
    swal({
        title: "Emptied your cart", icon: "success", button: "ok!",
    }).then(function () {
        window.location = "index.html";
    });
}
Displaycart();


