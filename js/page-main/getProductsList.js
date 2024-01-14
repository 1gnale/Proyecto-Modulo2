const container = document.querySelector(".product-list");


for (let i = 0; i < 10; i++) {
    html = `<div class="col-lg-3 col-md-6 col-sm-12 m-3 p-0 mx-auto card product-card" >`+
    `  <img src="./src/img/page-main/fragancia-blue.jpeg" class="card-img-top" alt="fragancia-blue.jpeg">`+
    `  <div class="card-body product-card-body d-flex flex-column">`+
    `    <h5 class="card-title text-center">Victoria’s Secret Bombshell</h5>`+
    `    <p class="card-text text-center">Una fragancia floral y frutal, fresca y seductora, con toques de toronja, piña y peonía. Ideal para momentos especiales, emana confianza y feminidad.</p>`+
    `    <h4 class="text-center">$15:00</h4>`+
    `    <a href="#" class="btn mx-auto buy-button">Buy Now</a>`+
    `  </div>`+
    `</div>`;
    container.innerHTML += html;
}