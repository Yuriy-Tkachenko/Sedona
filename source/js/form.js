const form = document.querySelector('.feedback-form-group');
const sentButton = form.querySelector('.feedback-form-button');
const popup = document.querySelector('.modal-popup');
const successPopup = popup.querySelector('.modal-popup__successfull');
const successPopupButton = successPopup.querySelector('.modal-popup__button');
const unsuccessPopup = popup.querySelector('.modal-popup__unsuccessfull');
const unsuccessPopupButton = unsuccessPopup.querySelector('.modal-popup__button');
const inputs = form.querySelectorAll('input');
console.log(inputs);

form.addEventListener('submit', function(event) {
  event.preventDefault();
  successPopup.classList.remove('modal-popup__hidden');
})

successPopupButton.addEventListener('click', function () {
  successPopup.classList.add('modal-popup__hidden');
})

unsuccessPopupButton.addEventListener('click', function () {
  unsuccessPopup.classList.add('modal-popup__hidden');
})