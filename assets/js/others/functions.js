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