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