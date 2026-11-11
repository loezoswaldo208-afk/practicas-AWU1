var titulo=document.getElementById("titulo");
var contenido=document.createTextNode("Registro de autos");
titulo.appendChild(contenido);

var auto={
    nombre:' ',
    marca:' ',
    color:' ',
    foto:' ',
}
var ruta;
//Jquery para atrapar la ruta de una imagen que llego por el input type=file
$(document).on('change','input[type=file]',function(e){
var TmpPath=URL.createObjectURL(e.target.files[0]);
console.log(TmpPath);
ruta=TmpPath;
});

function asignar(){
    auto.nombre=document.getElementById("nombre").value;
    auto.marca=document.getElementById("marca").value;
    auto.color=document.getElementById("color").value;
    auto.foto=ruta;
    var caja=document.getElementById("auto");
    var foto=document.createElement("img");
    foto.setAttribute('src', auto.foto);
    caja.appendChild(foto);
    var parrafo=document.createElement("p");
    var infoCoche=document.createTextNode(auto.nombre + " " + auto.marca + " " + auto.color);
    
    parrafo.appendChild(infoCoche);
    caja.appendChild(parrafo);
}