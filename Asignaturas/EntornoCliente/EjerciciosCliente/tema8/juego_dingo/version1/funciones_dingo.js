/*Función que pinta los cuadros*/
function pintarCuadros(aleatoria, usuPalabra){
    let palabraAle = aleatoria.split("");
    let expr1 = /^[a-z]{5}$/;
    if(!expr1.test(usuPalabra)){ //Tamaño incorrecto de la expresión regular.
        h2_mensaje.innerHTML = "Tamaño incorrecto ";
    }else{ //Tamaño correcto de la expresión regular.
        h2_mensaje.innerHTML = "Tamaño correcto";

        /*Crea una nueva fila (En el documento es un DIV).*/
        let nuevaFila = document.createElement("div");
        /*Selecciona el contenedor principal y le añade dentro nuevas filas.*/
        document.getElementById("contenedor_principal").appendChild(nuevaFila);
        /*Añade a los DIV la clase fila*/
        nuevaFila.classList.add("fila");

        let pos = 0;
        for(let letra of usuPalabra){
            let cuadrado = document.createElement("div"); //Crea un div 
        
            cuadrado.innerHTML = letra;
            cuadrado.classList.add("cuadrado");
            console.log(letra);
        
            //Se ejecuta las veces que ve una palabra que está en el array.
            if(palabraAle.includes(letra)){
                cuadrado.style.backgroundColor = 'yellow';
            }
            if(palabraAle[pos] == letra){
                cuadrado.style.backgroundColor = 'green';
            }
            pos++; //Incremento en la palabra aleatoria para comparar con el Array
            nuevaFila.appendChild(cuadrado);
        }
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