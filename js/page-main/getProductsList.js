let products = JSON.parse(localStorage.getItem("products")) || [];

const container = document.querySelector(".product-list");



products.forEach(product => {

    html = `<div class="col-lg-3 col-md-6 col-sm-12 m-3 my-sm-6 p-0 mx-auto card product-card" >`+
    `  <img src="${product.image}" class="card-img-top" style="width: 100%; height: 350px;" alt="image.jpeg">`+
    `  <div class="card-body product-card-body d-flex flex-column" style="height: 500px;">`+
    `    <h5 class="card-title text-center title-text" style="height: 90px; overflow: hidden; text-overflow: ellipsis;">${product.names}</h5>`+
    `    <p class="card-text text-center d-none d-sm-block" style="height: 240px; overflow: hidden; text-overflow: ellipsis;">${product.description}</p>`+
    `    <h4 class="text-center">$${product.price}</h4>`+
    `    <a href="#" class="btn mx-auto buy-button">Buy Now</a>`+
    `  </div>`+
    `</div>`;
    container.innerHTML += html;
});
