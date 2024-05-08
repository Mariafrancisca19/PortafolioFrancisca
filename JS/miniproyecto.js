let meGusta=document.getElementById("megustaa")
let noMeGusta=document.getElementById("nomegusta")
let Contadorr=document.getElementById("contador")
let nuevo=parseInt(Contadorr.textContent)

meGusta.addEventListener("click",function() {
    nuevo=nuevo+1   
     Contadorr.innerHTML=nuevo

console.log(nuevo)
return nuevo

})

noMeGusta.addEventListener("click",function() {
    nuevo=nuevo-1
Contadorr.innerHTML=nuevo
console.log(nuevo)
return nuevo
})

let sub=document.getElementById("sub")
sub.addEventListener("click",function() {
    if (sub.textContent!="Desuscribirse") {
        sub.textContent="Desuscribirse"
    } else {
        sub.textContent="Suscribirse"
    }
})


