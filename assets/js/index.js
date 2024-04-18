const products = document.querySelector(".shop")
let db;
function getAllData() {
    axios.get("https://dummyjson.com/products").then((res) => {
        db = res.data.products
        db.forEach((item) => {
            let box = document.createElement("div");
            box.className = "productCard";
            box.innerHTML = `
            <img src="${item.thumbnail}" alt="">
            <div class="cardDesc">
                <h3>${item.title}</h3>
                <p>${item.price}$</p>
                <button onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
            `;

            products.appendChild(box)
        });
    });
}
getAllData()
    function addToCart(id) {
        let cart=JSON.parse(localStorage.getItem("cart")) || []
        cart.push(arr.find(item=>item.id==id))
        localStorage.setItem("cart", JSON.stringify(cart))
        getAllData()
    }