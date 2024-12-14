const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

const popup = document.querySelectorAll('.popup');
const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

const profileEditButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const profileForm = document.forms['edit-profile'];
const nameInput = profileForm.name;
const jobInput = profileForm.description;

const newCardForm = document.forms['new-place'];
const newCardTitle = newCardForm['place-name'];
const newCardLink = newCardForm.link;

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
    profilePopup.querySelector('.popup__input_type_name').value = profileName.textContent;
    profilePopup.querySelector('.popup__input_type_description').value = profileDescription.textContent;
    openModal(profilePopup);
})

profileForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeModal(profilePopup);
})

addButton.addEventListener('click', function() {
    openModal(cardPopup);
})

newCardForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    placesList.prepend(createCard(newCardTitle.value, newCardLink.value));
    closeModal(cardPopup);
    newCardForm.reset();
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