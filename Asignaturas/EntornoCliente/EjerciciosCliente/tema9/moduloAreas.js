/* export const PI_AL_CUADRADO = Math.PI**2;

export function areaCirculo(radio){
    return Math.PI*radio**2;
}

export function areaCuadrado(lado){
    return lado**2;
}

export function areaHexagono(lado){
    return 6*(lado**2*Math.sqrt())
}

function ladoAlCuadrado(lado){
    return lado * lado;
} */

const PI_AL_CUADRADO = Math.PI**2;
function areaCirculo(radio){
    return Math.PI*radio**2;
}
function areaCuadrado(lado){
    return lado**2;
}
function areaHexagono(lado){
    return 6*(lado**2*Math.sqrt())
}
function ladoAlCuadrado(lado){
    return lado * lado;
}
/*Se pueden exportar */
export{
    PI_AL_CUADRADO,
    areaCuadrado
}