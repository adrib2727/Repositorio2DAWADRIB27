/*  Variables de PLAY y PAUSE */
let play = document.getElementById("bPlay"); //Botón de play.
let pause = document.getElementById("bPause"); //Botón de pausa.
let varStop = document.getElementById("bStop"); //Botón de parar.

let varVolumen = document.getElementById("volumen"); //Botón de volumen.
let varTiempo = document.getElementById("tiempo"); //Botón de tiempo de reproducción.
let siguiente = document.getElementById("bSiguiente"); //Botón de siguiente cancion.
let anterior = document.getElementById("bAnterior"); //Botón de anterior cancion.
let reproductor = document.getElementById("miAudio"); //Captura de la etiqueta audio.

/*Array que tiene las direcciones de los nombres de las
canciones*/
var arrayCan = ["canciones/Smooth Criminal.mp3", "canciones/Back in Black.mp3",
                "canciones/Billie Jean.mp3"];
reproductor.setAttribute("src", arrayCan[0]);

/* Reproducir audio */
play.addEventListener("click", () => {
    reproductor.play();
});
/* Pausar audio */
pause.addEventListener("click", () => {
    reproductor.pause();
});
/* Parar audio */
varStop.addEventListener("click", () => {
    reproductor.load();
});

varVolumen.addEventListener("change", () => {
alert(reproductor.volume = varVolumen.value);
});
/*Tiempo del video, devuelve el tiempo actual que tenga el reproductor*/
reproductor.addEventListener("timeupdate", () => {
    varTiempo.value = reproductor.currentTime;
    /* Convierte el valor máximo en el valor del audio en cuestión */
    varTiempo.setAttribute("max", reproductor.duration);
});

/* Pone la cancion por donde se ponga la barra tiempo */
varTiempo.addEventListener("change", () => {
    varTiempo.setAttribute("max", reproductor.duration);
    reproductor.currentTime = varTiempo.value;
});

/*Evento de botón siguiente*/
siguiente.addEventListener("click", () => {
    //Función que me devuelve la siguiente canción.
    for(let contador = 1; contador < arrayCan.length; contador++){
        reproductor.setAttribute("src", arrayCan[contador]);
        console.log(arrayCan[contador]);
    }
});