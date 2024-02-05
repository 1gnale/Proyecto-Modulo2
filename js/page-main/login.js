let inputEmail=document.getElementById("email");
let inputPassword=document.getElementById("password");
let formLogin=document.getElementById("formLogin");
let adminLi=document.getElementById("adminLi");
let register=document.getElementById("register");
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
                formLogin.reset();
                $("#exampleModal").modal("hide")
                checkAdmin(adminLi);
            }else{
                 alert("Email o Password incorrectos")
            }
        }else{
            alert("Email o Password incorrectos")
        }
    }else{
        alert("No existe usuarios Registrados")
    }
}

function checkSaveAdmin(){
    const arrayUsers=JSON.parse(localStorage.getItem("users"));
    const userAdmin={
    
    email:"perfumesrolling@gmail.com",
    role:"Administrador",
    password:"Perfumes24",


};
if (!arrayUsers || arrayUsers.length === 0) {
    const users = [userAdmin];
    localStorage.setItem("users", JSON.stringify(users));
}
   }

   window.LogOut=function(){
    sessionStorage.removeItem("user");
    adminLi.className="nav-item d-none"
    window.location.replace("/index.html")
  }

  

  function checkAdmin(adminLi) {
    const role = getRolUserLog();

    if (role === "Administrador") {
        adminLi.classList.remove("d-none");  
    } 
}

function closeRegister(register) {
    const close= getRolUserLog();
    if (close === "Administrador") {
        register.className="d-none"
    }
}

  