var persona={
    nombre:['Jona', 'Lopez'],
    gustos:['videojuegos','Musica'],
    genero:'Chingon',
    saludo:function(){
        document.getElementById("mostrar").innerText=" Hola soy: "+this.nombre[0]+" "+this.nombre[1]+" Me interesan: los "+this.gustos[0];
    },
    asignar:function(){}
}