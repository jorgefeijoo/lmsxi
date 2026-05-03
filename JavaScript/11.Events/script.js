let caja = document.getElementById("box")

caja.addEventListener("mouseover",function() {
    caja.style.backgroundColor="orange";
    caja.textContent="Mouse is over me"
})

caja.addEventListener("mouseout",function() {
    caja.style.backgroundColor="lightblue";
    caja.textContent="Hover over me";
})
