import { updateFormState } from './utils';
const popups = document.querySelectorAll('.popup');

export function openModal(popup) {
  document.addEventListener('keydown', closeByEsc);
  popup.classList.add('popup_is-opened');
}

export function closeModal(popup) {
  document.removeEventListener('keydown', closeByEsc);
  popup.classList.remove('popup_is-opened');
}

export function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup !== null) {
      closeModal(openedPopup);
    }
  }
}

popups.forEach((popup) => {
  popup.classList.add('popup_is-animated');
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close')) {
      closeModal(evt.currentTarget);
    } else if (evt.target.classList.contains('popup')) {
      closeModal(evt.currentTarget);
    }
  });
});

// Модалка изменения информации профиля
const profile = document.querySelector('.profile');
const profileForm = document.forms['edit-profile'];
const editProfilePopup = document.querySelector('.popup_type_edit');
const openEditProfilePopupButton = document.querySelector('.profile__edit-button');

openEditProfilePopupButton.addEventListener('click', () => {
  profileForm.name.value = profile.querySelector('.profile__title').textContent;
  profileForm.description.value = profile.querySelector('.profile__description').textContent;

  updateFormState(profileForm);

  openModal(editProfilePopup);
});

// Модалка добавления карточки
const addCardPopup = document.querySelector('.popup_type_new-card');
const openAddCardPopupButton = document.querySelector('.profile__add-button');

openAddCardPopupButton.addEventListener('click', function () {
  openModal(addCardPopup);
});

// Модалка смены аватарки
const changeAvatarPopup = document.querySelector('.popup_type_avatar');
const avatar = document.querySelector('.profile__image');

avatar.addEventListener('click', () => {
  openModal(changeAvatarPopup);
});
