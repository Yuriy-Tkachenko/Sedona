const form = document.querySelector('.feedback-form-group');
const popup = document.querySelector('.modal-popup');
const successPopup = popup.querySelector('.modal-popup__successfull');
const successPopupButton = successPopup.querySelector('.modal-popup__button');
const unsuccessPopup = popup.querySelector('.modal-popup__unsuccessfull');
const unsuccessPopupButton = unsuccessPopup.querySelector('.modal-popup__button');

successPopupButton.addEventListener('click', function () {
  successPopup.classList.add('modal-popup__hidden');
})

unsuccessPopupButton.addEventListener('click', function () {
  unsuccessPopup.classList.add('modal-popup__hidden');
})