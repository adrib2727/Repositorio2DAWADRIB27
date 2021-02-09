/*Función que pinta los cuadros*/
function pintarCuadros(aleatoria, usuPalabra){
    let palabraAle = aleatoria.split("");
    let nuevaFila = document.createElement("div");
    document.getElementById("contenedor_principal").appendChild(nuevaFila);
    nuevaFila.classList.add("fila");
    let pos = 0;
    for(let letra of usuPalabra){
        let cuadrado = document.createElement("div");
        cuadrado.innerHTML = letra;
        cuadrado.classList.add("cuadrado");
        console.log(letra);
    
        //Se ejecuta las veces que ve una palabra que está en el array.
        if(palabraAle.includes(letra)){
            cuadrado.style.backgroundColor = 'yellow';
        }
        //Pinta las letras que se encuentren en la misma posición que la letra de la secreta.
        if(palabraAle[pos] == letra){ 
            cuadrado.style.backgroundColor = 'green';
        }
        //Incremento en la palabra aleatoria para comparar con el Array.
        pos++; 
        nuevaFila.appendChild(cuadrado);
    }
}
/*Función que maneja los intentos*/
function pintarIntentosJuego(parametroIntento){
    let intentoActual = document.getElementById("intentos_juego");
    intentoActual.innerHTML = parametroIntento;
    return intentoActual;
}
/*Función que escribe el estado del juego en el HTML*/
function pintarEstadoJuego(parametroEstado){
    let estadoActual = document.getElementById("estado_juego");
    if(parametroEstado == "Juego terminado"){
        estadoActual.style.color = 'red';
    }else if(parametroEstado == "Jugando"){
        estadoActual.style.color = 'green';
    }
    estadoActual.innerHTML = parametroEstado;
    return estadoActual;
}
/*Exportación de las funciones*/
export{
    pintarCuadros,
    pintarIntentosJuego,
    pintarEstadoJuego
}