// holmes
holmes({
    input: '#holmes',
    find: '.brands-list div'
});

// Letter filter TEST
document.addEventListener('DOMContentLoaded', function () {
    let letters = document.querySelectorAll('.brands-search_item'),
        noSearch = document.querySelector('.brands-no-search_item'),
        brandsList = document.querySelectorAll('.brands-list-group');
    for (let i = 0; i < letters.length; i++) {
        letters[i].onclick = function () {
            brandsList[i].parentNode.classList.remove('hide')
            let searchVal = letters[i].textContent.toUpperCase();
            for (let j = 0; j < brandsList.length; j++) {
                if (brandsList[j].children[0].textContent.toUpperCase() !== searchVal) {
                    brandsList[j].parentNode.classList.add('hide');
                }
            }
        }
    }
    noSearch.onclick = function () {
        for (let i = 0; i < letters.length; i++) {
            brandsList[i].parentNode.classList.remove('hide')
        }
    }
});


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
function burger(burgerClass, mobileListClass) {
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
//
// // Input filter
// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('search-form');
//     let filterItem = document.querySelectorAll('.brand'),
//         filterInput = form.querySelector('.brands-input'),
//         filterItemName = document.querySelectorAll('.brand__name');
//
//     form.addEventListener('submit', searching);
//
//     async function searching(e) {
//         e.preventDefault();
//
//         for (let i = 0; i < filterItem.length; i++) {
//
//             filterItem[i].classList.remove('hide');
//             let searchValue = filterInput.value.trim().toUpperCase(),
//                 search = filterItemName[i].innerText.match(searchValue);
//             if (search == null) {
//                 filterItem[i].classList.add('hide');
//             }
//         }
//
//         test();
//     }
// });


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

/* MODAL WINDOWS */
//Close modal by click on .modal_close
function closeModal(element) {
    element.parentElement.parentElement.style.setProperty('display', 'none');
}

function openModal(id) {
    document.querySelector('#' + id).style.setProperty('display', 'inline')
}
//
// // Input mask
// let element = document.getElementById('contact-3');
// let maskOptions = {
//     mask: '+{7} (000) 000-00-00'
// };
// let mask = IMask(element, maskOptions);
