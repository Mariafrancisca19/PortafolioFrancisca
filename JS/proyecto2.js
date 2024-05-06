let inputNombre = document.getElementById("gmail")
let inputContrasena= document.getElementById("pass")
let iniciar=document.getElementById("iniciar")

let nombre;
let clave;

function recuperarDatos(){
    nombre = inputNombre.value
    clave = inputContrasena.value

}

iniciar.addEventListener("click",function() {
    recuperarDatos()
})


