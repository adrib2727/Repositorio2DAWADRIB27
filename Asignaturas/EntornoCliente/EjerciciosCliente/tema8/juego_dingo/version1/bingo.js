let Palabras = ["jamon", "gatos", "calles", "arbol", "jaula"];
let secreta = Palabras[Math.floor(Math.random() * Palabras.length)];
let palabra = document.querySelectorAll("input[type = 'text']")[0];
let enviar = document.getElementsByTagName("button")[0];
let h2_mensaje = document.getElementsByTagName("h2")[0];

let intentos = 0;
console.log("PALABRA SECRETA: " + secreta);
enviar.addEventListener("click", () => {
    /*Si la palabra introducida es distinta que la secreta y los intentos son 
    menores que 5 ==> Ir pintando las palabras introducidas.*/
    if(palabra.value != secreta && intentos < 5){
        pintarEstadoJuego("Jugando");
        pintarCuadros(secreta, palabra.value);
        intentos++;
        pintarIntentosJuego(intentos);
    }else if(intentos == 5){ //Si los intentos llegan a 5, se acaban los intentos.
        pintarEstadoJuego("Juego terminado");
    }else if(palabra.value == secreta){ //Si se acierta la secreta, Felicidades.
        pintarEstadoJuego("¡Felicidades, has ganado!");
    }
});


/*FUNCIONES*/
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