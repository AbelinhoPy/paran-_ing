document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("modalImagen");
    modal.style.display = "none"; // Asegura que el modal esté oculto al cargar la página
});

document.addEventListener("DOMContentLoaded", function () {
    // Obtener elementos del modal
    var modal = document.getElementById("modalImagen");
    var imagenAmpliada = document.getElementById("imagenAmpliada");
    var cerrar = document.querySelector(".cerrar");
    var anterior = document.querySelector(".anterior");
    var siguiente = document.querySelector(".siguiente");

    // Obtener todas las imágenes
    var imagenes = document.querySelectorAll(".swiper-slide2 img");
    var indiceActual = 0;

    // Función para abrir el modal con una imagen específica
    function abrirModal(indice) {
        modal.style.display = "flex"; // Mostrar el modal
        imagenAmpliada.src = imagenes[indice].src; // Asignar la imagen
        indiceActual = indice; // Guardar el índice actual
    }

    // Agregar evento a cada imagen
    imagenes.forEach((img, index) => {
        img.addEventListener("click", function () {
            abrirModal(index);
        });
    });

    // Cerrar modal al hacer clic en la "X"
    cerrar.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Botón siguiente
    siguiente.addEventListener("click", function () {
        indiceActual = (indiceActual + 1) % imagenes.length; // Avanzar al siguiente
        abrirModal(indiceActual);
    });

    // Botón anterior
    anterior.addEventListener("click", function () {
        indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length; // Retroceder
        abrirModal(indiceActual);
    });

});

