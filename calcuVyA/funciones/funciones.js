const tipo = document.getElementById('tipo');
const figura1 = document.getElementById('figuras1');
const figura2 = document.getElementById('figuras2');
const medida = document.getElementById('medida');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado');
const btnBorrar = document.getElementById('btnBorrar');

let guardado = localStorage.getItem("ultimoResultado");
if (guardado) {
    resultado.innerHTML = "Resultado: " + guardado;
}

function calcular() {
    let m = parseFloat(medida.value);
    let h = parseFloat(altura.value);
    let total = 0;

    if (tipo.value == "Volumen" && figura1.value == "Cubo") {
        total = m * m * m;
    } 
    else if (tipo.value == "Volumen" && figura1.value == "Esfera") {
        total = (4 / 3) * Math.PI * (m * m * m);
    } 
    else if (tipo.value == "Volumen" && figura1.value == "Prisma Triangular") {
        total = (m * h / 2) * h;
    } 
    else if (tipo.value == "Area" && figura2.value == "Triangulo") {
        total = (m * h) / 2;
    } 
    else if (tipo.value == "Area" && figura2.value == "Trapecio") {
        total = m * h;
    } 
    else if (tipo.value == "Area" && figura2.value == "Circulo") {
        total = Math.PI * (m * m);
    }

    resultado.innerHTML = "Resultado: " + total;

    localStorage.setItem("ultimoResultado", total);
}

btnBorrar.onclick = function() {
    medida.value = "";
    altura.value = "";
    resultado.innerHTML = "Resultado:";
    tipo.value = "Volumen";
    figura1.value = "Cubo";
    figura2.value = "Triangulo";

    localStorage.removeItem("ultimoResultado");
};