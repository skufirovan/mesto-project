const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

function createCard(title, image) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__title').textContent = title;
  card.querySelector('.card__image').src = image;
  return card
}

initialCards.forEach(function (ind) {
  placesList.append(createCard(ind.name, ind.link));
})

const likeButtons = document.querySelectorAll('.card__like-button');
likeButtons.forEach(function(ind) {
    ind.addEventListener('click', function(evt) {
        evt.target.classList.toggle('card__like-button_is-active');
    })
})

const deleteButtons = document.querySelectorAll('.card__delete-button');
deleteButtons.forEach(function(ind) {
    ind.addEventListener('click', function(evt) {
        evt.target.closest('.card').remove();
    })
})