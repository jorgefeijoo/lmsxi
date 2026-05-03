const contador = document.getElementById("counter");
const boton = document.getElementById("btn");

let i=0;

 boton.addEventListener("click",function(){
   i= i+1;
    contador.textContent="Counter: "+i;
   
    if (i==5) {
        contador.innerHTML="<b>Has llegado a los 5 clicks!</b>"
         boton.disabled=true;
       
    }

 })

 