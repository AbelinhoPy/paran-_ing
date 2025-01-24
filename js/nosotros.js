// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function () {
    
    // Selecciona todas las pestañas (elementos de la lista)
    const tabs = document.querySelectorAll(".tab-link");

    // Selecciona todo el contenido de las pestañas
    const tabContents = document.querySelectorAll(".tab-content");

    // Itera sobre cada pestaña y añade un evento de clic
    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            
            // Elimina la clase 'active' de todas las pestañas
            tabs.forEach(item => item.classList.remove("active"));

            // Añade la clase 'active' solo a la pestaña clicada
            this.classList.add("active");

            // Oculta todo el contenido de las pestañas
            tabContents.forEach(content => content.classList.remove("active"));

            // Obtiene el ID de la pestaña seleccionada usando el atributo data-tab
            const tabId = this.getAttribute("data-tab");

            // Muestra el contenido correspondiente basado en el ID de la pestaña seleccionada
            document.getElementById(tabId).classList.add("active");
        });
    });

});
