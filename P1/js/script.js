alert("Mensaje desde un archivo externo");
var nombre=prompt("Captura tu nombre");
var edad=prompt("Captura tu edad");
var mensaje="Tu nombre es: " +nombre+ " y tu edad es:" +edad;
//alert(mensaje);
document.getElementById("imprimir").innerHTML=mensaje;
 
var num1=prompt("Captura un número");
var num1I=parseInt(num1);
var num2=prompt("Captura otro número");
var num2I=parseInt(num2);
document.getElementById("modulo").innerHTML="El resultado es: " +(num1%num2);
document.getElementById("texto").innerHTML="Lorem";
document.getElementById("img").src="img/Baymax.png"
document.getElementById("informacion").innerHTML="Texto en color por JS";
document.getElementById("informacion").style.color="#DE3818";
document.getElementById("pie").style.backgroundColor="#9400FF";
document.getElementById("pie").style.border="5px dotted #E4F1FF";
document.getElementById("pie").style.fontWeight="bolder";
document.getElementById("pie").style.fontFamily= 'Playwrite AR, cursive';