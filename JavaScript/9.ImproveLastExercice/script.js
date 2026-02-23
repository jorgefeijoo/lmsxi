const contador = document.getElementById("counter");
const boton = document.getElementById("btn");
function contador(){
for(let i=0;i<=5;i++){
    contador.textContent(i);
}
}

if (boton.addEventListener("click",contador)) {
    
}
 