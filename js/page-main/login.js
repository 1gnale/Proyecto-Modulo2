let inputEmail=document.getElementById("email");
let inputPassword=document.getElementById("password");
let formLogin=document.getElementById("formLogin");
let adminLi=document.getElementById("adminLi");
let register=document.getElementById("register");
let lista=document.getElementById("lista")
let cerrar=document.getElementById("cerrar")
let iniciar=document.getElementById("iniciar")
checkSaveAdmin();

inputEmail.addEventListener("blur", () => {
    validateEmail(inputEmail);
  });
  inputPassword.addEventListener("blur", () => {
    validatePassword(inputPassword);
  });
formLogin.addEventListener("submit",Login);

function saveUserLog(user) {
    sessionStorage.setItem("user", JSON.stringify(user));
};

function getRolUserLog() {
    const user=JSON.parse(sessionStorage.getItem("user"));

    if (user!==null) {
        return user.role
    }else{
        return "Cliente"
    }
     };

function Login(e) {
    e.preventDefault();
    const usuariosRegistrados=JSON.parse(localStorage.getItem("users"));
    if (usuariosRegistrados.length >0 && usuariosRegistrados !== null) {
        const usuarioEncontrado=usuariosRegistrados.find((element)=>element.email===inputEmail.value)
        if (usuarioEncontrado !== undefined) {
            if (usuarioEncontrado.password===inputPassword.value) {
                const savedUser={
                    email:usuarioEncontrado.email,
                    role:usuarioEncontrado.role,
                };
                saveUserLog(savedUser);
                checkAdmin(adminLi);
                closeRegister(register)
                openLogout(cerrar)
                closeLog(iniciar)
                formLogin.reset();
                $("#exampleModal").modal("hide")
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Email o Password incorrectos",
                    text: "Por favor vuelva a ingresar los Datos",

                    });
            }
        }else{
            Swal.fire({
                icon: "error",
                title: "Email o Password incorrectos",
                text: "Por favor vuelva a ingresar los Datos",
                
                });
        }
    }else{
        Swal.fire({
            icon: "error",
            title: "Email o Password incorrectos",
            text: "Por favor vuelva a ingresar los Datos",
            
            });
    }
}

function checkSaveAdmin(){
    const arrayUsers=JSON.parse(localStorage.getItem("users"));
    const userAdmin={
    
    email:"perfumesrolling@gmail.com",
    role:"Administrador",
    password:"Perfumes24",


}
if (arrayUsers===null) {
    const users=[userAdmin];      
    localStorage.setItem("users", JSON.stringify(users));

}else if (arrayUsers.length===0) {
const users=[userAdmin];     
localStorage.setItem("users", JSON.stringify(users));
}
}


//funciones para cerrar items del navbar



window.LogOut = function() {
    sessionStorage.removeItem("user");
    openLogout(); 
    adminLi.className = "nav-item d-none";
    window.location.replace("/index.html");
};

  

  function checkAdmin(adminLi) {
    const role = getRolUserLog();

    if (role === "Administrador") {
        adminLi.classList.remove("d-none");  
    } 
}

function closeRegister(register) {
    const close= getRolUserLog();
    if (close === "Administrador") {
        register.classList.add("d-none")
    }
}

function openLogout(cerrar) {
    const open= getRolUserLog();
    if (open === "Administrador") {
        cerrar.classList.remove("d-none")
    }
}

function closeLog(iniciar) {
    const close= getRolUserLog();
    if (close === "Administrador") {
        iniciar.classList.add("d-none")
    }
}


//validaciones

function validateEmail(input) {
    let regEmail =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (regEmail.test(input.value)) {
      input.className = "form-control is-valid";
      return true;
    } else if (input.value.trim().length > 0 && input.value.trim().length < 6) {
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  }

  function validatePassword(input) {
    let regPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    if (regPass.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else if (input.value.trim().length > 0 && input.value.trim().length < 8) {
        input.className = "form-control is-invalid";
        return false;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}



  