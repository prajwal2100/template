console.log("JS running")


let nav = document.querySelector('nav');
let scrollBtn = document.querySelector('.scroll-button a');

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 250) {
        nav.classList.add('sticky')
        scrollBtn.style.display = "block";
    }
    else {
        nav.classList.remove('sticky');
        scrollBtn.style.display = "none";
    }
})

let hamburger = document.querySelector('.menu-btn');
let navLinks = document.querySelectorAll('.menu li a')
let cancelBtn = document.querySelector('.cancel-btn')

hamburger.addEventListener('click', () => {
    (nav.children[0].classList.toggle('active'));
})
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        (nav.children[0].classList.toggle('active'));
    })
})


cancelBtn.addEventListener('click', () => {
    (nav.children[0].classList.toggle('active'));
})

