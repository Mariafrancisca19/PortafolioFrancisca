
let inputCorreo = document.getElementById("gmail")
let inputContrasena= document.getElementById("pass")
let iniciar=document.getElementById("iniciar")
let btnCheckIn = document.getElementById("registrarse")
//let nombre;
//let clave;

//function recuperarDatos(){
  //  nombre = inputNombre.value
    //clave = inputContrasena.value
        
//}

iniciar.addEventListener("click", () => {
   const Users = JSON.parse(localStorage.getItem("nombres"))

   console.log(Users[0].correo)
   console.log(inputCorreo.value)

   if (inputCorreo.value == Users[0].correo && inputContrasena.value==Users[0].contrase) {
    window.location.href="/Portafolio/portafoliopersonal.html"
   }

   if (validacionDeUsuario) {
    alert("Datos Correctos")
   
    window.location.href="iniciarsesion.html"
   } else {
    alert("Datos inccorectos")
   }                   
})



