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