
const toggle = document.querySelector('#toggle');
const showcase = document.querySelector('.showcase');

toggle.addEventListener('click', () => {
    showcase.classList.toggle('newHeight');
})

// SCROLL ANIMATIONS - LIBRARY!!

// HOME PAGE

ScrollReveal().reveal('.info-cards', {delay: 60});
ScrollReveal().reveal('.two-cols', {delay: 60});
ScrollReveal().reveal('.two-cols-reverse', {delay: 60});
ScrollReveal().reveal('.card-contents', {delay: 60});
ScrollReveal().reveal('.slower2', {delay: 100});

// HOW IT WORKS PAGE

ScrollReveal().reveal('.e_b_c_left', {delay: 60});
ScrollReveal().reveal('.slower', {delay: 200});

// PRICING PAGE

ScrollReveal().reveal('.pricing-container', {delay: 60});
