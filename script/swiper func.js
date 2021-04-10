// Fullscreen-slider
let swiper = new Swiper('.fullscreen-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// reviews slider
let secondSwiper = new Swiper('.reviews-slider', {
    navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
    },
    pagination: {
        el: '.swiper-pagination_second',
        clickable: true,
    },
    slidesPerView: '2',
    spaceBetween: 20,
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 20
        },
    }
});
