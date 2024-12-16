const cardTemplate = document.querySelector('#card-template').content;

function createCard(title, image) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__title').textContent = title;
  card.querySelector('.card__image').src = image;
  return card
}

function makeCardActive(card) {
    card.addEventListener('click', function(evt) {
        if (evt.target.classList.contains('card__image')) {
            imagePopup.querySelector('.popup__image').src = evt.target.src;
            imagePopup.querySelector('.popup__caption').textContent = card.querySelector('.card__title').textContent;
            openModal(imagePopup);
        } else if (evt.target.classList.contains('card__like-button')) {
            evt.target.classList.toggle('card__like-button_is-active');
        } else if (evt.target.classList.contains('card__delete-button')) {
            evt.target.closest('.card').remove();
        }
    });
}