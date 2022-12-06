const menuContainer = document.querySelector('.menu-container');
const mobileMenuContainer = document.querySelector('#mobileMenuContainer');
const nav = document.querySelector('nav');

menuContainer.addEventListener('click', () => {
    menuContainer.classList.toggle('active');
    mobileMenuContainer.classList.toggle('active')
    nav.classList.toggle('active')
});