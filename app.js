let cart = [];

function addToCart(product, price) {
    cart.push({product, price});
    displayCart();
}

function displayCart() {
    let cartList = document.getElementById("cart");
    cartList.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.product} - Rp ${item.price}`;
        cartList.appendChild(li);
    });
}

function checkout() {
    alert("Terima kasih sudah belanja di d,skincare!");
}
