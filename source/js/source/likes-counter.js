if (document.querySelectorAll('.main-gallery__item__button')) {
  const likeNumbers = Array.from(document.querySelectorAll('.main-gallery__item__counter-value'));
  const heartButtons = Array.from(document.querySelectorAll('.main-gallery__item__button'));

  heartButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      button.classList.toggle('added');

      if (button.classList.contains('added')) {
        likeNumbers[index].textContent++;
      } else {
        likeNumbers[index].textContent--;
      }
    })
  })
}
