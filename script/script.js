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


// Map
let map;

function initMap() {
    "use strict";
    let pos = new google.maps.LatLng(52.51663, 13.38978);
    map = new google.maps.Map(document.getElementById("map"), {
        center: pos,
        zoom: 16,
    });
    let marker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: 'image/icons/map-marker.png',
    });
}

// Fullscreen-slider
let swiper = new Swiper('.fullscreen-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Second slider
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