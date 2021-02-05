let Palabras = ["jamon", "perro", "gatos", "calles", "arbol"];
let secreta = Palabras[Math.floor(Math.random() * Palabras.length)];
let palabra = document.getElementsByTagName("input")[0];
let enviar = document.getElementsByTagName("button")[0];
let h2_mensaje = document.getElementsByTagName("h2")[0];
let expr1 = /^[a-z]{5}$/;
let intentos = 0;
console.log(secreta);
enviar.addEventListener("click", () => {
    /*Si la palabra introducida es distinta que la secreta y los intentos son 
    menores que 5 ==> Ir pintando las palabras introducidas.*/
    if(palabra.value != secreta && intentos < 5){
        pintarEstadoJuego("Juego comenzado");
        pintarCuadros();
        intentos++;
        pintarIntentosJuego(intentos);
    }else if(intentos == 5){ //Si los intentos llegan a 5, se acaban los intentos.
        pintarEstadoJuego("Los intentos han sido agotados");
    }else if(palabra.value == secreta){ //Si se acierta la secreta, Felicidades.
        pintarEstadoJuego("¡Felicidades, has ganado!");
    }
});

/*FUNCIONES*/
/*Función que pinta los cuadros*/
function pintarCuadros(){
    if(!expr1.test(palabra.value)){ //Tamaño incorrecto de la expresión regular.
        h2_mensaje.innerHTML = "Tamaño incorrecto ";
    }else{ //Tamaño correcto de la expresión regular.
        h2_mensaje.innerHTML = "Tamaño correcto";

        /*Crea una nueva fila (En el documento es un DIV).*/
        let nuevaFila = document.createElement("div");
        /*Selecciona el contenedor principal y le añade dentro nuevas filas.*/
        document.getElementById("contenedor_principal").appendChild(nuevaFila);
        /*Añade a los DIV la clase fila*/
        nuevaFila.classList.add("fila");

        for(letra of palabra.value){
            let cuadrado = document.createElement("div"); //Crea un div 
            cuadrado.innerHTML = letra;
            cuadrado.classList.add("cuadrado");
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
    estadoActual.innerHTML = parametroEstado;
    return estadoActual;
}

/*Convertir la palabra del array en un string y despues hacerle un bucle 
que saque las letra una a una.*/