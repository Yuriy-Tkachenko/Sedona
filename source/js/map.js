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