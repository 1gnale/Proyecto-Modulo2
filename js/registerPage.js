/*REGISTRARSE O CREAR UNA CUENTA NUEVA:
HACER UNA PAGINA REGISTRO O VENTANA MODAL, DONDE SE SOLICITARÁ AL USUARIO POR LO MENOS LOS SIGUIENTES CAMPOS: NOMBRE, EMAIL (SERVIRÁ PARA INGRESAR AL SITIO) Y CONTRASEÑA.
-SE PODRÁ AGREGAR MÁS CAMPOS SI SE CONSIDERA NECESARIO.
TAMBIEN SE PUEDE AGREGAR UNA TABLA DONDE SE PUEDE VER LOS USUARIOS REGISTRADOS Y UN BOTÓN PARA ELIMINAR 1 USUARIO.
NOTA: TENER EN CUENTA QUE ESTE SITIO CONTARÁ CON 2 PERFILES DE USUARIO. 1- EL ADMINISTRADOR: EL MISMO SERÁ CAPAZ DE CREAR,LEER, ACTUALIZAR O MODIFICAR Y ELIMINAR PRODUCTOS (CRUD).
2-USUARIO INVITADOS: EL CUAL SERÁ CAPAZ DE REALIZAR DE NAVEGAR LIBREMENTE EXCEPTUANDO ALGUNAS TAREAS DEL CRUD.

NOTA: SE PUEDE CREAR UNA TABLA CON LOS USUARIOS QUE SE VAN CREANDO.

1-Debo crear una función que permita guardar en el localStorage los inputs del formulario en forma de array de objetos. luego obtener ese arreglo de usuario y guardarlo en una variable (arrUsers).
2-Debo recorrer ese arreglo de usuario para saber si el usuario que esta intentando registrarse ya existe. En el caso que ya exita, debe aparecer un mensaje que indique ("Este usuario ya se encuentra registrado"), si no existe, debe crearlo y guardarlo en una lista de usuario en la pagina de administrador.

3-En la pagina de administración: Debo crear una tabla con todos los usuario registrados con la opcion de y eliminarlo de forma manual.*/

function saverUser(){
    let arrUsers=JSON.parse(localStorage.getItem(user))
    let arrUser=[];
}

