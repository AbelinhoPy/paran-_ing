document.addEventListener("DOMContentLoaded", function () {
    // Inicialización del carrusel Swiper
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,  // Número de imágenes visibles a la vez
        spaceBetween: 50,  // Espaciado entre las imágenes en píxeles
        centeredSlides: true,  // Centra la imagen activa en el medio
        loop: true,  // Permite un desplazamiento infinito sin interrupciones
        speed: 700,  // Velocidad de la transición en milisegundos (más alto = más lento)
        
        // Configuración de los botones de navegación (adelante y atrás)
        navigation: {
            nextEl: ".swiper-button-next",  // Botón para la siguiente imagen
            prevEl: ".swiper-button-prev",  // Botón para la imagen anterior
        },

        // Configuración para distintos tamaños de pantalla (responsivo)
        breakpoints: {
            768: {
                slidesPerView: 3  // Mantiene 3 imágenes visibles en pantallas medianas/grandes
            },
            480: {
                slidesPerView: 1  // Muestra solo 1 imagen en pantallas pequeñas (móviles)
            }
        },

        // Evento que se activa cuando la transición de diapositiva termina
        on: {
            slideChangeTransitionEnd: function () {
                updateBackground(swiper.slides[swiper.activeIndex]);  // Llama a la función de actualización de fondo
            }
        }
    });

    // Función para actualizar el fondo de la página con la imagen central del carrusel
    function updateBackground(activeSlide) {
        const bgImage = activeSlide.getAttribute('data-bg');  // Obtiene la imagen del atributo 'data-bg'
        document.getElementById('pageBody').style.backgroundImage = `url('${bgImage}')`;  // Cambia el fondo de la página
    }

    // Establece el fondo inicial con la imagen central
    updateBackground(swiper.slides[swiper.activeIndex]);
});
