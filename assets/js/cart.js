let cartProductsContainer = document.getElementById("cartProducts")

function cartProducts(){
    cartProducts.innerHTML = ""
    let cart=JSON.parse(localStorage.getItem("cart")) || []
    cart.forEach((item,index) => {
        let box = document.createElement("div");
        box.className = "productCard";
        box.innerHTML = `
        <img src="${item.thumbnail}" alt="">
        <div class="cardDesc">
            <h3>${item.title}</h3>
            <p>${item.price}$</p>
            <button onclick="removeitem(${index})">Delete</button>
        </div>
        `;
        cartProductsContainer.appendChild(box)
    });
}

function removeitem(index) {
    let cart=JSON.parse(localStorage.getItem("cart")) || []
    cart.splice(index,1)
    localStorage.setItem("cart", JSON.stringify(cart))
    cartProducts()
}
cartProducts()