var swiper = new Swiper(".mySwiper",{
    sliderPerView: 1,
    centeredslides:true,
    loop:true,
    spaceBetween:30,
    grabVursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        991: {
            alidesPerView: 3
        }
    }
});
<script>
    document.addEventListener("DOMContentLoaded", function () {
        const tabs = document.querySelectorAll(".tab-link");
        const contents = document.querySelectorAll(".tab-content");

        tabs.forEach(tab => {
            tab.addEventListener("click", function () {
                // Remover la clase 'active' de todos los tabs y contenidos
                tabs.forEach(t => t.classList.remove("active"));
                contents.forEach(c => c.classList.remove("active"));

                // Añadir la clase 'active' al tab seleccionado
                tab.classList.add("active");
                document.getElementById(tab.getAttribute("data-tab")).classList.add("active");
            });
        });
    });
</script>
