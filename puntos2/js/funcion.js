function gestionarAlumnos() {
    var alumnos=[];

    for (var i=0;i<10;i++) {
        var nombre=prompt("Ingresa el nombre del alumno " + (i+1) + " de 10:");
        alumnos.push(nombre);
    }
    var htmlSalida="<strong>Arreglo Inicial:</strong><br>";
    alumnos.forEach(function(alumno, index) {
        htmlSalida=htmlSalida + index + ": " + alumno + "<br>";
    }
);
    var nombreEliminar=prompt("Ingresa el nombre del alumno que deseas eliminar:");
    var indice=alumnos.indexOf(nombreEliminar);
    if (indice!==-1) {
        alumnos.splice(indice, 1);
        htmlSalida=htmlSalida + "<hr><strong>Arreglo Final (eliminado):</strong><br>";
    } else {
        htmlSalida=htmlSalida + "<hr><strong>Alumno no encontrado. Arreglo Final:</strong><br>";
    }
    alumnos.forEach(function(alumno, index) {
        htmlSalida=htmlSalida + index + ": " + alumno + "<br>";
    }
);
    var cajaResultado2=document.getElementById('resultado2');
    cajaResultado2.innerHTML=htmlSalida;
}