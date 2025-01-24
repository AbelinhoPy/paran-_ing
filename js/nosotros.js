// Script para controlar las pestañas de la sección "Nosotros"
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remover la clase 'active' de todas las pestañas
            tabs.forEach(item => item.classList.remove("active"));
            this.classList.add("active");

            // Ocultar todo el contenido de las pestañas
            tabContents.forEach(content => content.classList.remove("active"));

            // Mostrar el contenido correspondiente
            const tabId = this.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("active");
        });
    });
});
