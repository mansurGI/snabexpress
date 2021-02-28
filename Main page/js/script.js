// Slider
let swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Burger
let burgerButton = document.querySelector('.burger__body'),
    menuList = document.querySelector('.header-bottom'),
    bodyLock = document.querySelector('body');

burgerButton.onclick = function () {
    burgerButton.classList.toggle('active');
    menuList.classList.toggle('active');
    bodyLock.classList.toggle('lock');
}