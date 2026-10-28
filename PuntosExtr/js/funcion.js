function calcularMuertes() {
    var muertes=[];
    var suma=0;
    for (var i=0;i<7;i++) {
        var valor=parseInt(prompt("Ingresa el número de muertes del día " + (i+1) + ":"));
        muertes.push(valor);
    }
    var max=muertes[0];
    var min=muertes[0];
    for (var index in muertes) {
        var cantidad=muertes[index];
        suma=suma+cantidad;
        if (cantidad>max) {
            max=cantidad;
        }
        if (cantidad<min) {
            min=cantidad;
        }
    }
    var promedio=suma/muertes.length;
    var cajaResultado=document.getElementById('resultado1');
    cajaResultado.innerHTML="<strong>Promedio:</strong> " + promedio + "<br>" +
                              "<strong>Máximo:</strong> " + max + "<br>" +
                              "<strong>Mínimo:</strong> " + min;
}