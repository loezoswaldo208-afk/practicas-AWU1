var pedido={
    cliente:'',
    productos:[],
    precioUnitario:65,
    descuentoPorcentaje:0,
    subtotal:0,
    ahorro:0,
    totalPagar:0,
    calcularTotal:function(){
        this.subtotal=this.productos.length*this.precioUnitario;
        this.ahorro=this.subtotal*this.descuentoPorcentaje;
        this.totalPagar=this.subtotal-this.ahorro;
        
    }
}
function agregarBebida(){
    var bebidaSeleccionada=document.getElementById("bebida").value;
    pedido.productos.push(bebidaSeleccionada);
    var listaB=document.getElementById("listaBebidas");
    var bebidaLi=document.createElement("li");
    bebidaLi.innerText=bebidaSeleccionada;
    listaB.appendChild(bebidaLi);
}
function procesarEnviar(){
    pedido.cliente=document.getElementById("cliente").value
    pedido.descuentoPorcentaje=document.getElementById("descuento").value
    pedido.calcularTotal();
    localStorage.setItem("datosPedido", JSON.stringify(pedido));
    console.log(JSON )
    window.open("ticket.html", "_blank");
}