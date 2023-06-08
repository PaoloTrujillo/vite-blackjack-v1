import _ from 'underscore';

/**
 * 
 * @param {Array<String>} tiposDeCartas 
 * @param {Array<String>} cartasEspeciales 
 * @returns {Array<String>}
 */

//* Esta funcion permite crear una baraja en un arreglo.---------------------
export const crearBaraja = ( tiposDeCartas, cartasEspeciales) => { 

    if ( !tiposDeCartas || tiposDeCartas.length === 0 ){
        throw new Error('tiposDeCartas es obligatorio como un arreglo de string');
    };
    if ( !cartasEspeciales || cartasEspeciales.length === 0 ){
        throw new Error('cartasEspeciales es obligatorio como un arreglo de string');
    };

    let baraja = [];
    //Este ciclo devuelve a la baraja las cartas numericas de 2 a 10, junto con su letra correspondiente al tipo de carta
    for ( let i = 2; i <= 10; i++) {
        for ( let tipo of tiposDeCartas) {
            baraja.push( i + tipo);
        }
    }

    //Este ciclo devuelve a la baraja las cartas especiales, junto con su letra correspondiente al tipo de carta
    for ( let tipo of tiposDeCartas) {
        for ( let especial of cartasEspeciales){
            baraja.push( especial + tipo);
        }
    }
    return _.shuffle ( baraja );// _.shuffle es un metodo de la libreria Underscore.org, y toma un arreglo y nos devuelve el mismo en orden aleatorio
}; 