const inputNombre = document.getElementById("nombre")
const inputCorreo=document.getElementById("correo")
const inputUsuario=document.getElementById("usuario")
const inputContrsena=document.getElementById("contrase")
//// recordar al array que debe de mantener los datos del localstorage
let credencialesUsuario=[]
let boton=document.getElementById("registrarse") 
  
boton.addEventListener("click",function () {
//validarDatos()

//se reinicia


let data ={

    nombre : inputNombre.value,
    correo : inputCorreo.value,
    usuario : inputUsuario.value,
    contrase: inputContrsena.value,

};



 
credencialesUsuario.push(data)


console.log(credencialesUsuario)

localStorage.setItem("nombres", JSON.stringify(credencialesUsuario));



let valores=JSON.parse(localStorage.getItem("nombres"));
console.log(valores)

alert("TE HAS REGISTRADO EXITOSAMENTE")

//window.location.href= "proyecto2.html"
})


function guardardatos() {
    
}

registrarse.addEventListener("click",()=>{
   guardardatos()
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