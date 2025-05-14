const cohortID = 'frontend-st-cohort-201';
const token = '83bb934d-8786-461a-90c0-28a6bb6e66ef';

export function getProfileDataApi() {
  return fetch(`https://nomoreparties.co/v1/${cohortID}/users/me`, {
    headers: {
      authorization: token,
    },
  });
}

export function updateProfileDataApi(name, about) {
  return fetch(`https://nomoreparties.co/v1/${cohortID}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify({
      name,
      about,
    }),
  });
}

export function getCardsApi() {
  return fetch(`https://nomoreparties.co/v1/${cohortID}/cards `, {
    headers: {
      authorization: token,
    },
  });
}

export function addCardApi(name, link) {
  return fetch(`https://nomoreparties.co/v1/${cohortID}/cards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify({
      name,
      link,
    }),
  });
}

export function deleteCardApi(cardId) {
  return fetch(`https://nomoreparties.co/v1/${cohortID}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: token,
    },
  });
}

export function putLikeApi(cardId) {
  return fetch(`https://nomoreparties.co/v1/${cohortID}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: token,
    },
  });
}

export function removeLikeApi(cardId) {
  return fetch(`https://nomoreparties.co/v1/${cohortID}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: token,
    },
  });
}

export function changeAvatarApi(link) {
  return fetch(`https://nomoreparties.co/v1/${cohortID}/users/me/avatar`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify({
      avatar: link,
    }),
  });
}
