

// Burger
let burgerButton = document.querySelector('.burger__body'),
    menuList = document.querySelector('.header-bottom'),
    bodyLock = document.querySelector('body');

burgerButton.onclick = function () {
    burgerButton.classList.toggle('active');
    menuList.classList.toggle('active');
    bodyLock.classList.toggle('lock');
}
// Header
let prevNav = document.querySelector('.body-header');
window.addEventListener('scroll', function() {
    if (pageYOffset > 85) {
        prevNav.classList.add('transform');
    } else {
        prevNav.classList.remove('transform');
    }
});
// First slider
let swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
// Second slider
let secondSwiper = new Swiper('.second-swiper', {
    navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
    },
    slidesPerView: '2',
    spaceBetween: 20,
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10
        },
    }
});