const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');

const displayMobile = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};