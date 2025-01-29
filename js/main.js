document.addEventListener('DOMContentLoaded', function () {
    console.log('Página cargada correctamente');

    // Scroll suave para navegación
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mostrar u ocultar menú en dispositivos móviles
    /*const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('change', () => {
            navbar.style.display = menuToggle.checked ? 'block' : 'none';
        });
    }*/
      
    /*// Seleccionamos el botón del menú y la barra de navegación
    //const menuToggle = document.getElementById("menu-icono");
    const menuToggle = document.querySelector(".menu-icono");
    const navbar = document.querySelector(".navbar");

    // Evento para mostrar/ocultar el menú al hacer clic
    menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active"); // Agrega o quita la clase 'active'
    });*/

    const menuToggle = document.querySelector(".menu-icono");
    const navbar = document.querySelector(".navbar");

    if (menuToggle && navbar) {
        // Evento para abrir/cerrar el menú al hacer clic en el ícono
        menuToggle.addEventListener("click", (event) => {
            navbar.classList.toggle("active");
            event.stopPropagation(); // Evita que el clic se propague y cierre inmediatamente
        });

        // Evento para cerrar el menú si se hace clic fuera de él
        document.addEventListener("click", (event) => {
            if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
                navbar.classList.remove("active");
            }
        });
    }

});
