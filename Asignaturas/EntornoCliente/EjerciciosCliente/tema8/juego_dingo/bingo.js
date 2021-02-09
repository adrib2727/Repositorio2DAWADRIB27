import * as funciones from './funciones_dingo.js';

let Palabras = ["jamon", "gatos", "calles", "arbol", "jaula"];
let secreta = Palabras[Math.floor(Math.random() * Palabras.length)];
let palabra = document.querySelectorAll("input[type = 'text']")[0];
let enviar = document.getElementsByTagName("button")[0];
let h2_mensaje = document.getElementsByTagName("h2")[0];
let expr1 = /^[a-z]{5}$/;
let intentos = 0;

console.log("PALABRA SECRETA: " + secreta);
enviar.addEventListener("click", () => {
    /*Si la palabra introducida es distinta que la secreta y los intentos son 
    menores que 5 ==> Ir pintando las palabras introducidas.*/
    if(!expr1.test(palabra.value)){
        h2_mensaje.innerHTML = "Tamaño incorrecto";
    }else{
        h2_mensaje.innerHTML = "Tamaño correcto";
        if(palabra.value != secreta && intentos < 5){
            funciones.pintarEstadoJuego("Jugando");
            funciones.pintarCuadros(secreta, palabra.value);
            intentos++;
            funciones.pintarIntentosJuego(intentos);
        }else if(intentos == 5){ //Si los intentos llegan a 5, se acaban los intentos.
            funciones.pintarEstadoJuego("Juego terminado");
        }else if(palabra.value == secreta){ //Si se acierta la secreta, Felicidades.
            funciones.pintarEstadoJuego("¡Felicidades, has ganado!");
        }
    }
});