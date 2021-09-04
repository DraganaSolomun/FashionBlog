const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.burger_menu');
const nav = document.querySelector('.main-nav');
const menuNav = document.querySelector('.main-menu');
const navItems = document.querySelectorAll('.menu-nav-list');//selektuje sve iz menija linkove zato je all

let scrollMenu= false;
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}


