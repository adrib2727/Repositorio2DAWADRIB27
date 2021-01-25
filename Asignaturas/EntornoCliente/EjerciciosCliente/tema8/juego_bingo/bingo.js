let Palabras = ["jamones", "perro", "gato"];

let secreta = Palabras[Math.floor(Math.random()* Palabras.length)];
let palabra = document.getElementsByTagName("input")[0];
let enviar = document.getElementsByTagName("button")[0];
let info = document.getElementsByTagName("h2")[0];
let expr1 = /^[a-z]{5}$/;

/*Evento de click*/
enviar.addEventListener("click", () => {
    /*Si la expresión regular no coincide con la palabra...*/
    if(!expr1.test(palabra.value)){
        info.innerHTML = "Tamaño incorrecto ";
    }else{ //Tamaño correcto.
        info.innerHTML = "Tamaño correcto";
        //Bucle que recorre el input de la palabra.
        let nuevaFila = document.createElement("div");
        document.body.appendChild(nuevaFila);
        nuevaFila.classList.add("fila");

        for(letra of palabra.value){
            let nuevoDiv = document.createElement("div");
            nuevoDiv.innerHTML = letra;
            nuevoDiv.classList.add("cuadrado");
            nuevaFila.appendChild(nuevoDiv);
        }
    }
});