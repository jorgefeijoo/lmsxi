let texto = document.getElementById("valor");
let boton1= document.getElementById("btn1");
let boton2=document.getElementById("btn2");
let informacion=document.getElementById("enseñarInfo")



function guardarInfo(){
   localStorage.setItem("valorTexto",texto.value);
  
}



window.onload=function mostrarInfo() {
    localStorage.getItem("valorTexto");  
    informacion.textContent=localStorage.getItem("valorTexto")
      
}


function borrarInfo(){
    localStorage.clear();
}



boton1.addEventListener("click", guardarInfo);
boton2.addEventListener("click",borrarInfo);
