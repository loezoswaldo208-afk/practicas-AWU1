function selecVillano(){
    var mensaje;
    if(document.formulario.villanos.value == "ManBat" || document.formulario.villanos.value == "Clay face"){
        mensaje = "Elegiste un villano clase media";
    } else {
        mensaje = "Elegiste un villano clase alta";
    }
    document.getElementById("saludar").innerHTML = mensaje;
}

function calcular(){
    var n1 = parseFloat(document.calculadora.n1.value);
    var n2 = parseFloat(document.calculadora.n2.value);
    var op = document.calculadora.operador.value;
    var res = 0;

    switch(op){
        case "suma":
            res = n1 + n2;
            break;
        case "resta":
            res = n1 - n2;
            break;
        case "division":
            res = n1 / n2;
            break;
        case "multiplacion":
            res = n1 * n2;
            break;
        case "modulo":
            res = n1 % n2;
            break;
        default:
            res = 0;
    }

    document.getElementById("resultado").innerHTML = "El resultado es: " + res;
}