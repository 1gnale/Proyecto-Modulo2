let products = JSON.parse(localStorage.getItem("products")) || [];

const container = document.querySelector(".product-list");

let buttonBuy= document.querySelectorAll(".product-add");


products.forEach(product => {

    html = `<div class="col-lg-3 col-md-6 col-sm-12 m-3 my-sm-6 p-0 mx-auto card product-card" >`+
    `  <img src="${product.image}" class="card-img-top" style="width: 100%; height: 350px;" alt="image.jpeg">`+
    `  <div class="card-body product-card-body d-flex flex-column" style="height: 500px;">`+
    `    <h5 class="card-title text-center title-text" style="height: 90px; overflow: hidden; text-overflow: ellipsis;">${product.names}</h5>`+
    `    <p class="card-text text-center d-none d-sm-block" style="height: 240px; overflow: hidden; text-overflow: ellipsis;">${product.description}</p>`+
    `    <h4 class="text-center">$${product.price}</h4>`+
    `    <a class="btn mx-auto buy-button product-add" id= "${product.names}">Buy Now</a>`+
    `  </div>`+
    `</div>`;
    container.innerHTML += html;

    ActButtonBuy();

});

function ActButtonBuy() {
    buttonBuy= document.querySelectorAll(".product-add");

    buttonBuy.forEach(button => {
        button.addEventListener("click", addList);
    });
}

const WishesProducts = [];

function addList(e){
   const idButton= e.currentTarget.id;
   const productAdd = products.find (product => product.names === idButton );

   if(WishesProducts.some(product => product.names === idButton)) {
    const index = WishesProducts.findIndex(product => product.names === idButton);
    WishesProducts[index].cantidad++;
} else {
    productAdd.cantidad = 1;
    WishesProducts.push(productAdd);
}
console.log(WishesProducts);

localStorage.setItem("productsWishList", JSON.stringify(WishesProducts));

}

