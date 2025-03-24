// Función para manejar la transición y eliminación de elementos
export function desaparecerYRemover(element) {
    if (element) {
        element.style.transition = 'opacity 0.5s ease-out';
        element.style.opacity = '0';

        setTimeout(() => {
            element.remove();
        }, 500);
    }
}

export function lanzarConfeti() {
    document.getElementById("sonidoConfeti").play();
    confetti({
        particleCount: 100, // Número de partículas
        angle: 90, // Ángulo de dispersión
        spread: 70, // Distribución
        origin: { y: 0.8 } // Origen de las partículas
    });   
}