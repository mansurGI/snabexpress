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
