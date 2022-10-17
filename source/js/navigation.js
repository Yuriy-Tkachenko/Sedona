const mainNav = document.querySelector('.page-header__main-navigation');
const buttonOpen = document.querySelector('.page-header__main-navigation__button-open');
const buttonClose = document.querySelector('.page-header__main-navigation__button-close');

mainNav.classList.remove('main-navigation--nojs');
buttonClose.classList.add('button-disable');
buttonOpen.classList.remove('button-disable');

buttonOpen.addEventListener('click', function() {
  if(mainNav.classList.contains('main-navigation--closed')) {
    mainNav.classList.remove('main-navigation--closed');
    buttonOpen.classList.add('button-disable');
    buttonClose.classList.remove('button-disable');
  }
});

buttonClose.addEventListener('click', function() {
  mainNav.classList.add('main-navigation--closed');
  buttonClose.classList.add('button-disable');
  buttonOpen.classList.remove('button-disable');
});
