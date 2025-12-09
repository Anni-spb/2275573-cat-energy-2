document.querySelector('.nav').classList.remove('nav--nojs');
const menuToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

menuToggle.addEventListener ('click', () => {
  navList.classList.toggle('nav__list--opened');
  menuToggle.classList.toggle('nav__toggle--active');
});
