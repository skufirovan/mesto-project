const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

const popup = document.querySelectorAll('.popup');

const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

// const cardImage = document.querySelectorAll('.card__image');
const profileEditButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

function createCard(title, image) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    card.querySelector('.card__title').textContent = title;
    card.querySelector('.card__image').src = image;
    return card
}

initialCards.forEach(function (ind) {
    placesList.append(createCard(ind.name, ind.link));
})

function openModal(popup) {      
    popup.classList.add('popup_is-opened');
}

function closeModal(popup) {      
    popup.classList.remove('popup_is-opened');
}

profileEditButton.addEventListener('click', function() {
    openModal(profilePopup);
})

addButton.addEventListener('click', function() {
    openModal(cardPopup);
})

const cardImage = document.querySelectorAll('.card__image');
cardImage.forEach(function(ind) {
    ind.addEventListener('click', function(evt) {
        imagePopup.querySelector('.popup__image').src = evt.target.src;
        openModal(imagePopup);
    })
})

popup.forEach(function(ind) {
    ind.addEventListener('click', function(evt) {
        if (evt.target.classList.contains('popup__close')) {
            closeModal(evt.currentTarget);
        }
    })
})
