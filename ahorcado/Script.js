var palabras = ["manzana","chocolate","litro","feliz","pelota","ventana","sol","luna","programacion","hola10"];
var listaSaltos = [];
var n = 5;
var cont = 0;
var contenedorDeSaltos = "";
var cantidadPalabras = palabras.length;
var cantidadLetrasPalabra ;
var palabra = palabras[0];
var posicionListaPalabra;
var palabra;
var contadorFallos = 0;
var contadorAciertos = 0;
let inicio = 0;

 
function btnLetra(letra){
    let letrasPalabra = palabra.split('');
    let i
    contadorAcierto = 0;
    for(i = 0 ; i < letrasPalabra.length; i++ ){
        if(letra === letrasPalabra[i]){
            listaSaltos[i] = letra;
            contadorAcierto = 1;
        }
    }
    listarListaSaltos(letrasPalabra);

    console.log(contadorAcierto);
    contadores(contadorAcierto);
    console.log(letrasPalabra); 
    console.log(listaSaltos);   
}

function iniciar(){
    if(inicio === 0){
        document.getElementById('pInicio').innerHTML = "Reiniciar";
        posicionListaPalabra = elegirNumeroRandom(cantidadPalabras);
        console.log(palabras[posicionListaPalabra]);      
        palabra = palabras[posicionListaPalabra];  
        console.log(palabra.length);
        cantidadLetrasPalabra = palabra.length;
        generadorListaSaltos(cantidadLetrasPalabra);
        saltosClear();
        inicio = 1;
    }else if(inicio === 1){
        document.getElementById('pInicio').innerHTML = "Iniciar";
        saltosClear();
        inicio = 0;
    }        
}

function generadorListaSaltos(cant){
    let i = 0;
    let conteSaltos = "";
    do{
        listaSaltos[i] = "_ ";
        conteSaltos = conteSaltos + listaSaltos[i];
        i ++;
    }while(i < cant);
    document.getElementById('saltos').innerHTML = conteSaltos;
}

function listarListaSaltos(letrasPalabra){
    let i;
    let cont = '';
    for(i = 0 ; i < listaSaltos.length ; i ++){
        if(i < letrasPalabra.length){
            cont = cont + listaSaltos[i];
        }else if(i => letrasPalabra.length){
            listaSaltos[i] = '';
            cont = cont + listaSaltos[i];
        }

    }
    document.getElementById('saltos').innerHTML = cont;    
}

function saltosClear(){
    document.getElementById('saltos').innerHTML = "";
    document.getElementById('palabraBuscar').innerHTML = ""; 
    contadorFallos = 0;
    contadorAciertos = 0;    
    document.getElementById('mostradorAciertos').innerHTML = 'Aciertos:   '+contadorAciertos;
    document.getElementById('mostradorFallos').innerHTML = 'Fallos:   '+contadorFallos;    
}

function elegirNumeroRandom(rango){
    let num = Math.floor(Math.random()*10);
    if( num < 10){
        return num;
    }
}

function contadores(contadorAcierto){
    if(contadorAcierto === 1){
        contadorAciertos = contadorAciertos+1;
        document.getElementById('mostradorAciertos').innerHTML = 'Aciertos:   '+contadorAciertos;
    }else if(contadorAcierto === 0){
        contadorFallos = contadorFallos+1;
        document.getElementById('mostradorFallos').innerHTML = 'Fallos:   '+contadorFallos;
    }
}