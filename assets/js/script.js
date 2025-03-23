import { canciones } from "./others/songs.js";
import { musica } from "./others/music.js";
import { jugar } from "./play.js";

// VARIABLES
const nroRondas = 4;
const ronda = 1;
const nroMinirondas = 4;
const minironda = 1;

let cancionesProximaRonda = [];
let cancionesEliminadas = [];

// CÓDIGO MAIN
musica();
jugar();

console.log('==============================================================================')
console.log('LISTA DE CANCIONES')
console.log(canciones);
console.log('==============================================================================')
console.log(`${nroRondas} RONDAS / ${nroRondas * 2} CANCIONES`);
console.log('======================================')
console.log(`Ronda Nº ${ronda} (${minironda}/${nroMinirondas})`);
console.log('==============================================================================')

/*
    1) Lista de canciones
    2) Crear otra lista con 8 canciones (eliminar 2 aleatoriamente)
    3) Elegir 2 canciones aleatoriamente y mostrar
    4) El usuario elige la canción ganadora (la ganadora pasa a otra lista)
    5) La cancion ganadora pasa de ronda
    6) Seleccionar juego
*/