const cardTemplate = document.querySelector('#card-template').content;

export function createCard(title, image) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__title').textContent = title;
  card.querySelector('.card__image').src = image;
  return card
}