// Display mobile navbar

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navList = document.getElementsByTagName('li');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);
navList[0].addEventListener('click', mobileMenu);
navList[1].addEventListener('click', mobileMenu);
navList[2].addEventListener('click', mobileMenu);
navList[3].addEventListener('click', mobileMenu);

