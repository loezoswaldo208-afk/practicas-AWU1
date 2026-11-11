window.onload=function(){
    var registroGuardado=localStorage.getItem("datosEstudiante");
    if(registroGuardado){
        var alumnoRecuperado=JSON.parse(registroGuardado);
        console.log(alumnoRecuperado);
        document.getElementById("resNombre").innerText=alumnoRecuperado.nombre;
        document.getElementById("resMatricula").innerText=alumnoRecuperado.matricula;
        document.getElementById("resCarrera").innerText=alumnoRecuperado.carrera;
    }
    else{
        alert("No hay alumno registrado");
    }
};