const inputNombre = document.getElementById("nombre")
const inputCorreo=document.getElementById("correo")
const inputUsuario=document.getElementById("usuario")
const inputContrsena=document.getElementById("contrase")

let boton=document.getElementById("registrarse") 
  
boton.addEventListener("click",function () {
validarDatos()


    let credencialesUsuario=[]
credencialesUsuario.push(inputNombre.value)
credencialesUsuario.push(inputCorreo.value)
credencialesUsuario.push(inputUsuario.value)               /*Guardar datos*/
credencialesUsuario.push(inputContrsena.value)

localStorage.setItem("nombres",credencialesUsuario)
localStorage.setItem("correo",credencialesUsuario)
localStorage.setItem("usuario",credencialesUsuario)
localStorage.setItem("contrase",credencialesUsuario)


let valores=localStorage.getItem("nombres")
console.log(valores)
})


function guardardatos() {
    
}

registrarse.addEventListener("click",()=>{
   guardardatos()
})

/*Validacion de datos*/



function validarDatos() {
    
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
}


let correoLocalStorage=localStorage.getItem("correo")
let claveLocalStorage=localStorage.getItem("contrase")

function compararRegistro(){
    console.log(correoLocalStorage)
    console.log(claveLocalStorage)
}