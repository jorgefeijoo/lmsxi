


function validateInput(event) {
    event.preventDefault();

    let informacion = document.getElementById("info");

    let Estudiante = {
    nombre: document.getElementById("name").value,
    edad: document.getElementById("age").value,
    puntuacion: document.getElementById("score").value
  }; 
    console.log(Estudiante.nombre+" "+Estudiante.edad+" "+Estudiante.puntuacion);
    



    let mensaje = document.getElementById("message");
    let formulario = document.getElementById("studentForm");





    let isValid = true;


    if (Estudiante.nombre == "" || Estudiante.edad == "" || Estudiante.calificacion == "") {
        isValid = false
    }


    if (Estudiante.edad < 0) {
        isValid = false;
    }

    if (Estudiante.puntuacion < 0 || Estudiante.puntuacion > 100) {
        isValid = false;
    }

    if (isValid == false) {
        mensaje.textContent = "El formulario no es correcto";
        informacion.textContent = "";

    } else {
        formulario.submit();
        localStorage.setItem("datosNombre", Estudiante.nombre);
        localStorage.setItem("datosEdad", Estudiante.edad);
        localStorage.setItem("datosPuntuacion", Estudiante.puntuacion);


    }




}






