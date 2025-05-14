import { checkInputValidity, toggleButtonState } from './validate';

// Функция на основе шаблона и поданных на вход параметров возвращает разметку карточки
const cardTemplate = document.querySelector('#card-template').content;

export function createCard(title, image, likes, id) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__title').textContent = title;
  card.querySelector('.card__image').src = image;
  card.querySelector('.card__like-info').textContent = likes;
  card.querySelector('.card__id').textContent = id;
  return card;
}

const profile = document.querySelector('.profile');

export function setProfileData(name, about, image) {
  profile.querySelector('.profile__title').textContent = name;
  profile.querySelector('.profile__description').textContent = about;
  profile.querySelector('.profile__image').style.backgroundImage = `url(${image})`;
}

// Функция валидирует поля формы, используется для формы смены информации о профиле, так как там по умолчанию стоят данные профиля
export function updateFormState(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button');

  inputList.forEach((inputElement) => {
    checkInputValidity(formElement, inputElement);
  });

  toggleButtonState(inputList, buttonElement);
}
