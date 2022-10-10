const mainNavigation = document.querySelector('.page-header__main-navigation');
const buttonOpen = document.querySelector('.page-header__main-navigation__button-open');
const buttonClose = document.querySelector('.page-header__main-navigation__button-close');

mainNavigation.classList.remove('main-navigation--nojs');

buttonOpen.addEventListener('click', function () {
  buttonClose.style.display = 'none';

  if (mainNavigation.classList.contains('main-navigation--closed')) {
    mainNavigation.classList.remove('main-navigation--closed');
    mainNavigation.classList.add('page-header__main-navigation');
  }
});

buttonClose.addEventListener('click', function () {
  buttonClose.style.display = 'block';

  if (mainNavigation.classList.contains('page-header__main-navigation')) {
    mainNavigation.classList.add('main-navigation--closed');
    mainNavigation.classList.remove('page-header__main-navigation');
  }
});
