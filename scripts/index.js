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

initialCards.forEach(function (ind) {
    let placesList = document.querySelector('.places__list');
    const card = createCard(ind.name, ind.link);
    makeCardActive(card);
    placesList.append(card);
});

profileEditButton.addEventListener('click', function() {
    profilePopup.querySelector('.popup__input_type_name').value = profileName.textContent;
    profilePopup.querySelector('.popup__input_type_description').value = profileDescription.textContent;
    const inputList = Array.from(profileForm.querySelectorAll('.popup__input'));
    const buttonElement = profileForm.querySelector('.popup__button');
    toggleButtonState(inputList, buttonElement)
    openModal(profilePopup);
});

profileForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeModal(profilePopup);
});

addButton.addEventListener('click', function() {
    openModal(cardPopup);
});

newCardForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let placesList = document.querySelector('.places__list');
    const card = createCard(newCardTitle.value, newCardLink.value);
    makeCardActive(card);
    placesList.prepend(card);
    closeModal(cardPopup);
    newCardForm.reset();
});