// script.js

// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    // Referencias a elementos (asegúrate de que existan en tu HTML)
    const btnCambiarFondo = document.getElementById("btnCambiarFondo");
    const selectorColor = document.getElementById("selectorColor");
    const btnModoOscuro = document.getElementById("btnModoOscuro");
    const btnModoClaro = document.getElementById("btnModoClaro");
    const btnTogglePanel = document.getElementById("btnTogglePanel");
    const panel = document.getElementById("panelInteractivo");
    const titulo = document.getElementById("tituloPrincipal");

    // Función para cambiar el color de fondo según el selector
    function cambiarColorFondo(color) {
        document.body.style.backgroundColor = color;
    }

    // Botón que toma el color del input color
    if (btnCambiarFondo && selectorColor) {
        btnCambiarFondo.addEventListener("click", () => {
            const colorSeleccionado = selectorColor.value || "#ffffff";
            cambiarColorFondo(colorSeleccionado);
        });
    }

    // Modo oscuro
    if (btnModoOscuro) {
        btnModoOscuro.addEventListener("click", () => {
            document.body.style.backgroundColor = "#121212";
            document.body.style.color = "#f5f5f5";
        });
    }

    // Modo claro
    if (btnModoClaro) {
        btnModoClaro.addEventListener("click", () => {
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#222222";
        });
    }

    // Mostrar/ocultar un panel interactivo
    if (btnTogglePanel && panel) {
        btnTogglePanel.addEventListener("click", () => {
            if (panel.style.display === "none" || panel.style.display === "") {
                panel.style.display = "block";
            } else {
                panel.style.display = "none";
            }
        });
    }

    // Pequeña interacción con el título: cambia tamaño al pasar el mouse
    if (titulo) {
        titulo.addEventListener("mouseenter", () => {
            titulo.style.transform = "scale(1.1)";
            titulo.style.transition = "transform 0.2s ease";
        });

        titulo.addEventListener("mouseleave", () => {
            titulo.style.transform = "scale(1)";
        });
    }
});
