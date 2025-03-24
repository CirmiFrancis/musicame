import { canciones } from "./others/songs.js";
import { lanzarConfeti } from "./others/functions.js";

export function quePrefieres() {
    // Función para mezclar el array
    function mezclarArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
        }
    }
    mezclarArray(canciones); // Mezclar las canciones al inicio

    let rondaActual = canciones.slice(0,16); // Toma solo 16 canciones
    let siguienteRonda = [];
    let ronda = 1;

    function mostrarSiguienteDuo() {
        // Si solo queda una canción, mostrarla como ganadora
        if (ronda === 4) { // 16 -> 8 -> 4 -> 2
            const ganador = siguienteRonda[0];
            document.getElementById("mainDiv").innerHTML = `
                <div class="w-3xs md:w-full max-w-sm mt-4 bg-stone-900 border-2 border-white rounded-lg shadow-sm hover:scale-105 transition duration-500">
                    <img src="./assets/img/crown.png" class="absolute -mt-7 md:-mt-10 w-30 md:w-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Imagen de una corona dorada.">
                    <img src="${ganador.img}" class="py-3 px-3 sm:py-6 sm:px-6 rounded-t-lg hover:scale-105 transition duration-200 cursor-pointer" onclick="seleccionarCancion(${ganador.id})">
                    
                    <div class="px-3 sm:px-8">
                        <h5 class="text-white text-2xl lg:text-4xl text-start font-bold">${ganador.title}</h5>
                        <h6 class="text-yellow-400 text-2xl lg:text-3xl text-start font-bold">${ganador.artist}</h6>
                    </div>

                    <a class="flex justify-end pt-3 me-3 mb-2" href="${ganador.link}" target="_blank">
                        <img class="w-10 md:w-12 hover:cursor-pointer" src="./assets/img/youtube.png" alt="Ícono de YouTube">
                    </a>
                </div>
            `;
            lanzarConfeti();
            return;
        }

        // Si no hay más canciones, reiniciar con las canciones seleccionadas
        if (rondaActual.length < 2) {
            rondaActual = [...siguienteRonda];
            siguienteRonda = [];
            ronda++;
        }

        // Obtener las dos canciones para la ronda
        const cancion1 = rondaActual.shift();
        const cancion2 = rondaActual.shift();

        document.getElementById("mainDiv").innerHTML = `
            <div class="flex flex-row mx-4 gap-4 sm:gap-16" data-aos="fade-in" data-aos-duration="1000">
                <div class="w-full max-w-sm bg-stone-900 border-2 border-white rounded-lg shadow-sm hover:scale-105 transition duration-500">
                    <img src="${cancion1.img}" class="py-3 px-3 sm:py-6 sm:px-6 rounded-t-lg hover:scale-105 transition duration-200 cursor-pointer" onclick="seleccionarCancion(${cancion1.id})">
                    
                    <div class="px-3 sm:px-8">
                        <h5 class="text-white text-sm sm:text-2xl lg:text-4xl text-start font-bold">
                            ${cancion1.title.length > 12 ? cancion1.title.slice(0, 12) + "..." : cancion1.title}
                        </h5>
                        <h6 class="text-yellow-400 text-sm sm:text-2xl lg:text-3xl text-start font-bold">
                            ${cancion1.artist.length > 14 ? cancion1.artist.slice(0, 14) + "..." : cancion1.artist}
                        </h6>
                    </div>

                    <a class="flex justify-end pt-3 me-3 mb-2" href="${cancion1.link}" target="_blank">
                        <img class="w-6 md:w-12 hover:cursor-pointer" src="./assets/img/youtube.png" alt="Ícono de YouTube">
                    </a>
                </div>

                <div class="w-full max-w-sm bg-stone-900 border-2 border-white rounded-lg shadow-sm hover:scale-105 transition duration-500">
                    <img src="${cancion2.img}" class="py-3 px-3 sm:py-6 sm:px-6 rounded-t-lg hover:scale-105 transition duration-200 cursor-pointer" onclick="seleccionarCancion(${cancion2.id})">
                    
                    <div class="px-3 sm:px-8">
                        <h5 class="text-white text-sm sm:text-2xl lg:text-4xl text-start font-bold">
                            ${cancion2.title.length > 12 ? cancion2.title.slice(0, 12) + "..." : cancion2.title}
                        </h5>
                        <h6 class="text-yellow-400 text-sm sm:text-2xl lg:text-3xl text-start font-bold">
                            ${cancion2.artist.length > 14 ? cancion2.artist.slice(0, 14) + "..." : cancion2.artist}
                        </h6>
                    </div>

                    <a class="flex justify-end pt-3 me-3 mb-2" href="${cancion2.link}" target="_blank">
                        <img class="w-6 md:w-12 hover:cursor-pointer" src="./assets/img/youtube.png" alt="Ícono de YouTube">
                    </a>
                </div>
            </div>

            <h2 class="pt-8 pb-4 text-white text-2xl md:text-4xl font-main font-bold text-center text-outline" data-aos="fade-in" data-aos-duration="1000">Ronda ${ronda}/4</h2>
        `;
    }

    window.seleccionarCancion = (id) => {
        const seleccionada = canciones.find(c => c.id === id);
        siguienteRonda.push(seleccionada);
        mostrarSiguienteDuo();
    };
    
    mostrarSiguienteDuo();
}