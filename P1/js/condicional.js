var hora= new Date().getHours();
var saludo;
if(hora>18){
    saludo="Buenas noches";
}
else{
    saludo="Buen dia";
}
document.getElementById("saludo").innerHTML=saludo;
var soltero=true;
if(soltero==false){
    document.getElementById("estatus").innerHTML='<h3 class="text-warning">No soy soltero</h3>';
}
else{
    document.getElementById("estatus").innerHTML='<h3 class="text-success">Si soy soltero</h3>'
}
var nombre=prompt("Eres Carlos o Maria?");
var np=nombre.toUpperCase();
alert(np);
if(np=="CARLOS" ||np=="MARIA" ){
    document.getElementById("resultadoN").innerHTML= "Si te conozco, "+np;
}
else{
    document.getElementById("resultadoN").innerHTML= "No te conozco";
}