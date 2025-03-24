import { desaparecerYRemover } from './others/functions.js';
import { quePrefieres } from "./game.js";

// Jugar
export function jugar() {
    document.getElementById('playGame').addEventListener('click', function () {
        this.disabled = true;
        this.style.cursor = 'not-allowed';
        const titleDiv = document.getElementById('titleDiv');
        const playGameDiv = document.getElementById('playGameDiv');
        desaparecerYRemover(titleDiv);
        desaparecerYRemover(playGameDiv);
        document.getElementById('topDiv').classList.remove('hidden');
    
        // Crea los textos y arranca el juego
        setTimeout(() => {
            const mainDiv = document.getElementById('mainDiv');
            if (mainDiv) {
                // Crea div contenedor
                const contenedor = document.createElement('div');
                contenedor.id = 'contenedor';
                contenedor.className = "font-bold text-outline text-center";
                contenedor.setAttribute("data-aos", "fade-in");
                contenedor.setAttribute("data-aos-duration", "2000");

                // Crea el h2 - número de canciones
                const nroCanciones = document.createElement("h2");
                nroCanciones.className = "text-5xl md:text-6xl text-yellow-400";
                nroCanciones.setAttribute("data-aos", "fade-down");
                nroCanciones.setAttribute("data-aos-duration", "1500");
                nroCanciones.textContent = "16 Canciones";

                // Crea el h3 - nombre del juego
                const gameName = document.createElement("h3");
                gameName.className = "text-4xl text-white";
                gameName.setAttribute("data-aos", "fade-up");
                gameName.setAttribute("data-aos-duration", "1500");
                gameName.textContent = "¿Qué Prefieres?";
    
                contenedor.appendChild(nroCanciones);
                contenedor.appendChild(gameName);
                mainDiv.appendChild(contenedor);

                // Desaparece el contenedor lentamente
                setTimeout(() => {
                    desaparecerYRemover(contenedor);
                }, 2000);

                // Aparece el juego lentamente
                setTimeout(() => {
                    quePrefieres();
                }, 2500)

                // Musica
                let musicAudio = document.getElementById('musicAudio');
    
                if (musicAudio.paused) {
                    musicAudio.play();
                    musicBtn.src = "./assets/img/soundON.png";
                }
            }
        }, 500);
    });
}