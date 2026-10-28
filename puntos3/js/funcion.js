function generarFigura() {
    var figura="";
    for (var i=1;i<=5;i++) {
        if (i===1 || i===5) {
            figura=figura + "X X X X<br>";
        } else if (i===3) {
            figura=figura + "X X X<br>";
        } else {
            figura=figura + "X<br>";
        }
    }
    var cajaResultado = document.getElementById('resultado3');
    cajaResultado.innerHTML = figura;
}