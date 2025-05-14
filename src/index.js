import './pages/index.css';
import {
  getProfileDataApi,
  updateProfileDataApi,
  getCardsApi,
  addCardApi,
  deleteCardApi,
  putLikeApi,
  removeLikeApi,
  changeAvatarApi,
} from './scripts/api';
import { createCard, setProfileData } from './scripts/utils';
import { enableValidation } from './scripts/validate';
import { closeModal } from './scripts/modal';

// Загрузка информации о пользователе
async function getProfileData() {
  try {
    const result = await getProfileDataApi();
    const user = await result.json();
    setProfileData(user.name, user.about, user.avatar);
  } catch (error) {
    console.error(error);
  }
}

// Изменить данные профиля (Имя, Занятие)
const profileForm = document.forms['edit-profile'];

profileForm.addEventListener('submit', async () => {
  try {
    const result = await updateProfileDataApi(
      profileForm.name.value,
      profileForm.description.value,
    );
    const user = await result.json();
    setProfileData(user.name, user.about, user.avatar);
  } catch (error) {
    console.error(error);
  }
  closeModal(document.querySelector('.popup_type_edit'));
});

// Загрузить карточки
const placesList = document.querySelector('.places__list');

async function getCards() {
  try {
    const result = await getCardsApi();
    const cards = await result.json();
    const cardsArr = Array.from(cards);

    cardsArr.forEach((card) => {
      const newCard = createCard(card.name, card.link, card.likes.length, card._id);
      if (card.owner._id !== '168de8369f3b454ab5d5ee08') {
        newCard.querySelector('.card__delete-button').remove();
      }
      placesList.append(newCard);
    });
  } catch (error) {
    console.error(error);
  }
}

// Добавить карточку
const addPlaceForm = document.forms['new-place'];

addPlaceForm.addEventListener('submit', async () => {
  try {
    const result = await addCardApi(addPlaceForm['place-name'].value, addPlaceForm.link.value);
    const card = await result.json();
    const newCard = createCard(card.name, card.link, card.likes.length, card._id);
    placesList.prepend(newCard);
  } catch (error) {
    console.error(error);
  }
  closeModal(document.querySelector('.popup_type_new-card'));
});

// Смена аватарки
const changeAvatarForm = document.forms['form-avatar'];

changeAvatarForm.addEventListener('submit', async () => {
  try {
    const result = await changeAvatarApi(changeAvatarForm.avatar.value);
    const user = await result.json();
    setProfileData(user.name, user.about, user.avatar);
  } catch (error) {
    console.error(error);
  }
});

// Делегирование
placesList.addEventListener('click', async (evt) => {
  // Удаление карточки
  const { target } = evt;
  const cardElement = target.closest('.places__item');
  const cardID = cardElement.querySelector('.card__id').textContent;

  if (target.classList.contains('card__delete-button')) {
    try {
      await deleteCardApi(cardID);
      cardElement.remove();
    } catch (error) {
      console.error(error);
    }
  }
  // Поставить и удалить лайк
  else if (target.classList.contains('card__like-button')) {
    if (!target.classList.contains('card__like-button_is-active')) {
      try {
        const result = await putLikeApi(cardID);
        const card = await result.json();
        cardElement.querySelector('.card__like-info').textContent = card.likes.length;
        target.classList.add('card__like-button_is-active');
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const result = await removeLikeApi(cardID);
        const card = await result.json();
        cardElement.querySelector('.card__like-info').textContent = card.likes.length;
        target.classList.remove('card__like-button_is-active');
      } catch (error) {
        console.error(error);
      }
    }
  }
});

function init() {
  getProfileData(); // Получить данные профиля
  getCards(); // Получить карточки
  enableValidation(); // Валидация форм
}

init();
