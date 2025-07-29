const menu = document.querySelector('.hamburger input');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() {
  menuLinks.classList.toggle('active');
});