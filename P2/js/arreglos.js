let vector=[10,20,30,40,50];
var cadena='';
vector.forEach(function (numero){
    cadena+='<div style="background-color:#683499; color:#371B87; width:20%; text-align:center; border:#090DB5 5px solid;">'+numero+'</div>';
    console.log(numero);
});
document.getElementById("imprimir").innerHTML=cadena;
function fechas(){
let dias=new Array(7);
dias[0]="Domingo";   
dias[1]="Lunes";  
dias[2]="Martes";  
dias[3]="Miercoles";   
dias[4]="Jueves";  
dias[5]="Viernes";
dias[6]="Sabado";
var d=document.getElementById("dia").value;
document.getElementById("impdias").innerHTML=dias[d-1];
let mes=new Array(12);
mes[0]="Enero";   
mes[1]="Febrero";   
mes[2]="Marzo";
mes[3]="Abril";   
mes[4]="Mayo";   
mes[5]="Junio";      
mes[6]="Julio";   
mes[7]="Agosto";   
mes[8]="Septiembre";   
mes[9]="Octubre";   
mes[10]="Noviembre";
mes[11]="Diciembre";      
var m=document.getElementById("mes").value;
document.getElementById("impmes").innerHTML=mes[m-1];
}
function cargar(){
    sueldos= new Array(5);
    for(let i=0;i<sueldos.length;i++){
        let valor=prompt("Captura un numero");
        sueldos[i]=parseFloat(valor);
        console.log(sueldos[i]);
    }
}
function mostrar(){
    document.write('<h1>Listado de Sueldos</h1>');
    for(let j=0;j<sueldos.length;j++){

        document.write(sueldos[j]+'<br>');
    }
}
function recorridoForin(){
    let vector=[20,40,60,80,100];
    var cadena='';
    for(let indice in vector){
        cadena+='<div style="background-color:#683499; color:#371B87; width:20%; text-align:center; border:#090DB5 5px solid;"> Indice: '+indice+'= Valor:'+ vector[indice]+' </div>';
    }
    document.getElementById("impForin").innerHTML=cadena;
}
function arreglo_random(){
    let limite =10;
    arreglo= new Array(10);
    suma=0;
    cadenaR='';
    for(let i=0; i<10;i++){
        let numero=parseInt(Math.random()*limite);
        arreglo[i]=numero;
        suma+=numero;
        cadenaR+='<div style="display: inline-block; background-color:#683499; color:#371B87; width:20%; text-align:center; border:#090DB5 5px solid;">'+ arreglo[i]+'</div>'
    }
    document.getElementById("impRandom").innerHTML=cadenaR;
    document.getElementById("sumaR").innerText=suma;
    let min=Math.min(...arreglo);
    let max=Math.max(...arreglo);
    alert(min);
    alert(max);
}
function bidimensional_definicion(){
    arregloB=new Array(4);
    for(let i=0; i<=3; i++){
        arregloB[i]=new Array(4);
    }
    llenado_arregloB();
}

function llenado_arregloB(){
    let limite=100;
    for(let i=0;i<arregloB.length;i++){
        for(let j=0;j<arreglo.length; j++){
            arregloB[i][j]=parseInt(Math.random()*limite);
        }
    }
    imprimir_arregloB();
}

function imprimir_arregloB(){
    let cadenaB='';
    for(let i=0;i<arregloB.length;i++){
        for(let j=0;j<arreglo.length; j++){
            cadenaB+='<div style="display: inline-block; min-width: 30px; text-align: center; margin: 2px;">'+arregloB[i][j] +'</div>';
        }
        cadenaB+='<br>';
     }   
document.getElementById("impB").innerHTML=cadenaB;    
}