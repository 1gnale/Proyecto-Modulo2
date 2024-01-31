let arrayUsuario = JSON.parse(localStorage.getItem("users")) || [];

let inputNombre=document.getElementById("name");
let inputApellido=document.getElementById("lastName");
let inputEdad=document.getElementById("age");
let inputPais=document.getElementById("country");
let inputEmail=document.getElementById("email");
let inputContraseña1=document.getElementById("password1");
let inputContraseña2=document.getElementById("password2");
let formRegister=document.getElementById("formRegister")


function validarNombre (inputNombre){
    if (inputNombre.value.trim().length>=3) {
        inputNombre.className="form-control is-valid";
        return true;
    }else if (inputNombre.value ===""){
        Swal.fire({
            icon: "error",
            title: "Campo requerido",
            text: "Ingrese su Nombre",
            });
        inputNombre.className="form-control is-invalid";
        console.log("ingreso a ingrese su nombre");
        return false;
    }else{
        Swal.fire({
            icon: "error",
            title: "Nombre demasiado corto",
            text: "Ingrese un nombre válido",
            });
        inputNombre.className="form-control is-invalid";
        console.log("ingreso a nombre demasiado corto");
        return false;
    }
}

function validarApellido (inputApellido){
    if (inputApellido.value.trim().length>=3) {
        inputApellido.className="form-control is-valid";;
        return true;

    }else if (inputApellido.value ===""){
        Swal.fire({
            icon: "error",
            title: "Campo requerido",
            text: "Ingrese su Apellido",
            });
        inputApellido.className="form-control is-invalid";
        return false;
    }else{
        Swal.fire({
            icon: "error",
            title: "Apellido demasiado corto",
            text: "Ingrese un apellido válido",
            });
        inputApellido.className="form-control is-invalid";
        return false;
    }
}

function validarEdad (inputEdad){
    if (inputEdad.value.trim()>=18) {
        inputEdad.className="form-control is-valid";
        return true;
    }else if (inputEdad.value ===""){
        Swal.fire({
            icon: "error",
            title: "Campo requerido",
            text: "Ingrese su edad",
            });
            inputEdad.className="form-control is-invalid";
        return false;
    }else{
        inputEdad.className="form-control is-invalid";
        Swal.fire({
            icon: "error",
            title: "Usuario menor de edad",
            text: "Para registrarte debes ser mayor de edad",
            });
        return false;
    }
}

function validarPais(inputPais) {
    const regexPais = /^[a-zA-Z\s-]+$/;
    if (regexPais.test(inputPais.value)) {
        inputPais.className="form-control is-valid";
        return true;
    }else{
        Swal.fire({
            icon: "error",
            title: "Campo requerido",
            text: "Ingrese su país",
            });
        inputPais.className="form-control is-invalid";
        return false;
    }
}

function validarEmail(inputEmail) {
    const regexEmail= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regexEmail.test(inputEmail.value)) {
        inputEmail.className="form-control is-valid";
        return true;
    }else{
        inputEmail.className="form-control is-invalid";
        return false;
    }
}
const regexPassword=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

function validarPassword1(inputContraseña1) {
    if (regexPassword.test(inputContraseña1.value)) {
        inputContraseña1.className="form-control is-valid";
        return true;
    }else{
        Swal.fire({
            icon: "error",
            title: "Campo requerido",
            text: "Ingrese su contraseña",
            });
        inputContraseña1.className="form-control is-invalid";
        return false;
    }
}

function validarPassword2(inputContraseña2) {
    if (regexPassword.test(inputContraseña2.value)) {
        inputContraseña2.className="form-control is-valid";
        return true;
    }else{
        Swal.fire({
            icon: "error",
            title: "Campo requerido",
            text: "Ingrese su contraseña",
            });
        inputContraseña2.className="form-control is-invalid";
        return false;
    }
}

function contraseñasCoinciden() {  
    let contra1 =document.getElementById("password1").value;
    let contra2 =document.getElementById("password2").value;
    if (contra1 ==="" || contra2 ==="") {
        Swal.fire({
            icon: "error",
            title: "Ups...",
            text: "Por favor ingresar ambas contraseñas",
            });
        return false;
    }if (contra1 !== contra2){
        Swal.fire({
            icon: "error",
            title: "Ups...",
            text: "Las contraseñas no coinciden",
            });
        return false;
    }else{
        return true;
    }
}

function validarTodo(inputNombre,inputApellido,inputEdad,inputPais,inputContraseña1,inputContraseña2) {
    if (validarNombre(inputNombre)&&validarApellido(inputApellido)&&validarEdad(inputEdad)&&
      validarPais(inputPais)&&validarPassword1(inputContraseña1)&&validarPassword2(inputContraseña2)) {
      return true;
    } else {
      return false;
    }
  }

inputNombre.addEventListener('blur',()=>validarNombre(inputNombre));
inputApellido.addEventListener('blur',()=>validarApellido(inputApellido));
inputEdad.addEventListener('blur',()=>validarEdad(inputEdad));
inputPais.addEventListener('blur',()=>validarPais(inputPais));
inputEmail.addEventListener("blur",()=>validarEmail(inputEmail));
inputContraseña1.addEventListener("blur",()=>validarPassword1(inputContraseña1));
inputContraseña2.addEventListener("blur",()=>validarPassword2(inputContraseña2));
inputContraseña2.addEventListener("blur",()=>contraseñasCoinciden());

formRegister.addEventListener("submit", guardarUsuario);

function guardarUsuario(e) {
    e.preventDefault();
    if (validarTodo(inputNombre,inputApellido,inputEdad,inputPais,inputContraseña1,inputContraseña2)) {
        if (arrayUsuario.find((user) => user.email === inputEmail.value)){
            inputEmail.className="form-control is-invalid";
            Swal.fire({
                icon: "error",
                title: "El correo ya se encuentra registrado",
                text: "Ingrese un email distinto",
                });
        }else{
            const user = {
                nombre: inputNombre.value,
                apellido: inputApellido.value,
                edad : inputEdad.value,
                pais : inputPais.value,
                email : inputEmail.value,
                contraseña1 : inputContraseña1.value,
                rol : "cliente",
            }
            arrayUsuario.push(user);
            localStorage.setItem("users",JSON.stringify(arrayUsuario));
            Swal.fire({
                title: "Exito",
                text: "Tu registro se completo!",
                icon: "success",
              });
            limpiarFormulario();
            window.location.replace("")
        }
    }else{
        Swal.fire({
            title: "Ups",
            text: "No pudo completarse el registro",
            icon: "error",
        });
    }  
};

function limpiarFormulario(){
    formRegister.reset();
    inputNombre.className="form-control";
    inputApellido.className="form-control";
    inputEdad.className="form-control";
    inputEmail.className="form-control";
    inputContraseña1.className="form-control";
    inputContraseña2.className="form-control";
}
