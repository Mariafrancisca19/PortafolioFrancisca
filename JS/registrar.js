const inputNombre = document.getElementById("nombre")
const inputCorreo=document.getElementById("correo")
const inputUsuario=document.getElementById("usuario")
const inputContrsena=document.getElementById("contrase")
let boton=document.getElementById("registrarse") 
//// guadar datos en el local
let credencialesUsuario=JSON.parse(localStorage.getItem("nombres")) || []

function guardarDatos() {
    let data ={
        nombre : inputNombre.value,
        correo : inputCorreo.value,
        usuario : inputUsuario.value,
        contrase: inputContrsena.value,
    
    }
    credencialesUsuario.push(data)

    localStorage.setItem("nombres",JSON.stringify(credencialesUsuario))

}
boton.addEventListener("click",function () {
    guardarDatos()
})
/*Validacion de datos*/
/*function validarDatos() {
if (nombre.value=="") {
    alert( "Coloca tu nombre aca")
} 

let contrasenadelapersona= inputContrsena.value
if (clave>= 8) {
    alert("Tu contraseña es mayor o igual a ocho")
}
else {
    if (clave<8) {
        alert("Incorrecto")
    }
}
}*/


let correoLocalStorage=localStorage.getItem("correo")
let claveLocalStorage=localStorage.getItem("contrase")

function compararRegistro(){
    console.log(correoLocalStorage)
    console.log(claveLocalStorage)
}