
import { Product } from "./product.js";

import { random } from "./random.js";


let products = JSON.parse(localStorage.getItem("products")) || [];

if (products) {
    let productTable = document.getElementById("table-body");
    let itemText = "";
    products.forEach(product => {
        itemText += `<tr>
        <th scope="row">${product.code}</th>
        <td><img src="${product.image}" alt=""></td>
        <td>${product.names}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>${product.stock}</td>
        <td>${product.state}</td>
        <td>${product.category}</td>
        <td class="text-center"><button class="btn btn-white border border-1 border-dark my-1" onclick="prepareEdit(${
            product.code
        })"><i class="far fa-edit"></i></button> <button class="btn btn-dark border border-1 border-dark my-1" onclick='eraseProduct(${
            product.code
        })'><i class="fas fa-trash"></i></button></td>
        </tr>`;
    });

    productTable.innerHTML = itemText;
}

let form = document.getElementById("productForm");
let fileInput = form.querySelector('input[type="file"]');
let nameInput = form.querySelector('#product-name');
let descriptionInput = form.querySelector('#product-description');
let priceInput = form.querySelector('#product-price');
let stockInput = form.querySelector('#product-stock');
let stateInput = form.querySelector('#product-state');
let categoryInput = form.querySelector('#product-category');



let btnSaveProduct = document.getElementById("save-product");
btnSaveProduct.addEventListener("click", saveProduct);



function saveProduct(e) {
    e.preventDefault();
    //hacer una validacion
    //buscar en el local storage por id 
    let isProduct = false;
    
    if (isProduct) {
        return ;
    }else {
        createProduct();
    }
}

function createProduct() {
    let selectedFile = fileInput.files[0];

    if (selectedFile) {
        const reader = new FileReader();

        reader.onload = function (e) {
            let product = new Product(
                random(),
                e.target.result,
                nameInput.value,
                descriptionInput.value,
                parseFloat(priceInput.value),
                parseInt(stockInput.value),
                parseInt(stateInput.value),
                categoryInput.value
            );

            saveProductToLocalstorage(product);
            newRow(product);

            var modal = document.getElementById('create-product-modal');
            var bootstrapModal = new bootstrap.Modal(modal);
            bootstrapModal.hide();
            Swal.fire(
                "Producto creado",
                "Su producto fue exitosamente guardado",
                "success"
            );
        };
        reader.readAsDataURL(selectedFile);
    } else {
        console.error("No se ha seleccionado ningún archivo.");
    }
}

function newRow(product) {
    let productTable = document.getElementById("table-body");
    productTable.innerHTML += `<tr>
      <th scope="row">${product.code}</th>
      <td><img src="${product.image}" alt=""></td>
      <td>${product.names}</td>
      <td>${product.description}</td>
      <td>${product.price}</td>
      <td>${product.stock}</td>
      <td>${product.state}</td>
      <td>${product.category}</td>
      <td class="text-center"><button class="btn btn-white border border-1 border-dark my-1" onclick="prepareEdit(${
        product.code
      })"><i class="far fa-edit"></i></button> <button class="btn btn-dark border border-1 border-dark my-1" onclick='eraseProduct(${
        product.code
    })'><i class="fas fa-trash"></i></button></td>
    </tr>`;
  }

function saveProductToLocalstorage(product) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}