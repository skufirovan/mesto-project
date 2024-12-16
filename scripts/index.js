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

const cards = document.querySelectorAll('.card');
cards.forEach(function(ind) {
    ind.addEventListener('click', function(evt) {
        if (evt.target.classList.contains('card__image')) {
            imagePopup.querySelector('.popup__image').src = evt.target.src;
            imagePopup.querySelector('.popup__caption').textContent = ind.querySelector('.card__title').textContent;
            console.log(ind.querySelector('.card__title').textContent)
            openModal(imagePopup);
        }
    })
})

popup.forEach(function(ind) {
    ind.classList.add('popup_is-animated');
    ind.addEventListener('click', function(evt) {
        if (evt.target.classList.contains('popup__close')) {
            closeModal(evt.currentTarget);
        }
    })
})