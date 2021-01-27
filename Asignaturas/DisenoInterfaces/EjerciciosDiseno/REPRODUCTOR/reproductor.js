var play = document.getElementById("bPlay"); //Botón de play.
var pause = document.getElementById("bPause"); //Botón de pausa.
var varStop = document.getElementById("bStop"); //Botón de parar.
var varVolumen = document.getElementById("volumen"); //Botón de volumen.
var varTiempo = document.getElementById("tiempo"); //Botón de tiempo de reproducción.
var siguiente = document.getElementById("bSiguiente"); //Botón de siguiente cancion.
var anterior = document.getElementById("bAnterior"); //Botón de anterior cancion.
var reproductor = document.getElementById("miAudio"); //Captura de la etiqueta audio.
var h3 = document.getElementsByTagName("h3")[0];
var lista = document.getElementsByTagName("ul")[0];
var lista_li = document.querySelectorAll("li");
console.log(lista);
console.log(lista_li);
/*Array que tiene las direcciones de los nombres de las
canciones*/
var arrayCan = ["canciones/Smooth Criminal.mp3", "canciones/Back In Black.mp3",
                "canciones/Billie Jean.mp3", "canciones/Shot In The Dark.mp3", 
                "canciones/Realize.mp3", "canciones/Shoot to Thrill.mp3"];
var arrayNombres = ["Smooth Criminal", "Back in Black", "Billie Jean", "Shoot in the Dark", "Realize",
                    "Shoot To Thrill"];
var posicion = 0;
//Asigna la primera posicion en el array de direcciones.
reproductor.setAttribute("src", arrayCan[posicion]); 
//Escribe el título de la canción el reproductor.
h3.innerHTML = arrayNombres[posicion]; 
/*Mostrar la lista de los nombres de reproducción.*/



for(let cancion of arrayNombres){ //Recorre el array de nombres.
    let nuevoLi = document.createElement("li"); //Crea un li.
    nuevoLi.innerHTML = cancion; //Asigna a los li los elementos del Array.
    /*Crea un evento de click al li y captura el evento.*/
    nuevoLi.addEventListener("click", (e) => {
        /* alert(e.target.innerHTML); */
        posicion = arrayCan.indexOf(e.target.innerHTML);
        reproductor.play(arrayCan[posicion]);
    });
    lista.appendChild(nuevoLi);
}

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
    reproductor.volume = varVolumen.value;
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
    //Controlador de la posición de las posiciones del array.
    /*Si la posicion de la cancion es menor que la longitud del array, incrementar cada 
    vez que se haga el evento, */
    if(posicion < arrayCan.length - 1){
        posicion++;
    }else if(posicion = arrayCan.length){
        posicion = 0;
    }
    reproductor.setAttribute("src", arrayCan[posicion]); //Cambia la propiedad del atributo.
    h3.innerHTML = arrayNombres[posicion];
    reproductor.play(); //Reproduce la canción nada más cambiar.
});
/*Si la posición es distinta a 0, avanzará hacia atrás. De otro modo, si la posición llega a 0, se quedará en 0.*/
anterior.addEventListener("click", () => {
    if(posicion != 0){
        posicion--;
    }else{
        posicion = 0;
    }
    reproductor.setAttribute("src", arrayCan[posicion]);
    h3.innerHTML = arrayNombres[posicion];
    reproductor.play();
});

