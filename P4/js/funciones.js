var estudiante={
    nombre:'',
    matricula:'',
    carrera:'',
}
function guardarEnviar(){
    estudiante.nombre=document.getElementById("nombre").value;
    estudiante.matricula=document.getElementById("matricula").value;
    estudiante.carrera=document.getElementById("carrera").value;
    localStorage.setItem("datosEstudiante",JSON.stringify(estudiante));
    console.log(JSON.stringify(estudiante));
    window.open("perfilEstudiante.html", "_blank");
}