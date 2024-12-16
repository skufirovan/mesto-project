import './pages/index.css';
import { initialCards } from './scripts/cards';
import { createCard } from './scripts/card';
import { openModal, closeModal } from './scripts/modal';
import { enableValidation, toggleButtonState } from './scripts/validate';

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

enableValidation();