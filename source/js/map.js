const map = L.map('search-map')
  .setView({
    lat: 34.8697,
    lng: -111.7609,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 34.8697,
    lng: -111.7609,
  },
  {
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const mainNavigation = document.querySelector('.page-header__main-navigation');
const buttonOpen = document.querySelector('.page-header__main-navigation__button-open');
const buttonClose = document.querySelector('.page-header__main-navigation__button-close');

mainNavigation.classList.remove('main-navigation--closed');
buttonClose.style.display = 'none';

buttonOpen.addEventListener('click', function () {
  if (mainNavigation.classList.contains('main-navigation--closed')) {
    mainNavigation.classList.remove('main-navigation--closed');
    mainNavigation.classList.add('page-header__main-navigation');
  }
});

buttonClose.style.display = 'block';

buttonClose.addEventListener('click', function () {
  if (mainNavigation.classList.contains('page-header__main-navigation')) {
    mainNavigation.classList.add('main-navigation--closed');
    mainNavigation.classList.remove('page-header__main-navigation');
  }
});
