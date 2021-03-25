// Fixed Header
let prevNav = document.querySelector('.header__pc');
window.addEventListener('scroll', function () {
    if (pageYOffset > 171) {
        prevNav.classList.add('transform');
    } else {
        prevNav.classList.remove('transform');
    }
});


// Burger
function burger (burgerClass, mobileListClass) {
    let bodyLock = document.querySelector('body'),
        burgerBody = document.querySelector(burgerClass),
        mobileList = document.querySelector(mobileListClass);


    burgerBody.onclick = function () {
        burgerBody.classList.toggle('active');
        mobileList.classList.toggle('active');
        bodyLock.classList.toggle('lock');
    }
}
burger('.burger__body', '.header__bottom');


// First slider
let swiper = new Swiper('.first-slider', {
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