var cineasta={
    nombre:'Wes',
    apellido:'Anderson',
    edad:'56',
    imagen:'img/Wes.jpg',
}

var lista=document.getElementById("lista");
var nodoli=document.createElement("li");
var contenido=document.createTextNode("Nombre: "+cineasta.nombre);
nodoli.appendChild(contenido);
lista.appendChild(nodoli);

var nodoli2=document.createElement("li");
var contenido2=document.createTextNode("Apellido: "+cineasta.apellido);
nodoli2.appendChild(contenido2);
lista.appendChild(nodoli2);

var nodoli3=document.createElement("li");
var contenido3=document.createTextNode("Edad: "+cineasta.edad);
nodoli3.appendChild(contenido3);
lista.appendChild(nodoli3);

var titulo=document.getElementById("titulo");
var contenidoT=document.createTextNode(cineasta.nombre+" "+cineasta.apellido);
titulo.appendChild(contenidoT);

var foto=document.getElementById("foto");
foto.setAttribute('src',cineasta.imagen);