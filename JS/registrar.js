const inputNombre = document.getElementById("nombre")
const inputCorreo=document.getElementById("correo")
const inputUsuario=document.getElementById("usuario")
const inputContrsena=document.getElementById("contrase")

let boton=document.getElementById("registrarse") 
  
boton.addEventListener("click",function () {
  
let nombres=[]
nombres.push(inputNombre.value)

localStorage.setItem("nombres",nombres)
let valores=localStorage.getItem("nombres")
console.log(valores)
})





