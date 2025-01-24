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
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('change', () => {
            navbar.style.display = menuToggle.checked ? 'block' : 'none';
        });
    }
});
