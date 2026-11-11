window.onload=function(){
    var datosGuardados=localStorage.getItem("datosPedido");
    var pedidoRecuperado=JSON.parse(datosGuardados);
    document.getElementById("salidaCliente").innerText=pedidoRecuperado.cliente;
    document.getElementById("salidaSubtotal").innerText=pedidoRecuperado.subtotal;
    document.getElementById("salidaDescuento").innerText=pedidoRecuperado.ahorro;
    document.getElementById("salidaTotal").innerText=pedidoRecuperado.totalpagar;

    var
}
