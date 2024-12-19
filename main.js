(()=>{"use strict";var e=document.querySelector("#card-template").content;function t(t,n){var o=e.querySelector(".card").cloneNode(!0);return o.querySelector(".card__title").textContent=t,o.querySelector(".card__image").src=n,o}function n(e){document.addEventListener("keydown",r),e.classList.add("popup_is-opened")}function o(e){document.removeEventListener("keydown",r),e.classList.remove("popup_is-opened")}function r(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");null!==t&&o(t)}}function c(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.add("popup__button_type_active"),t.classList.remove("popup__button_type_inactive"),t.removeAttribute("disabled")):(t.classList.remove("popup__button_type_active"),t.classList.add("popup__button_type_inactive"),t.setAttribute("disabled",!0))}document.querySelectorAll(".popup").forEach((function(e){e.classList.add("popup_is-animated"),e.addEventListener("click",(function(e){(e.target.classList.contains("popup__close")||e.target.classList.contains("popup"))&&o(e.currentTarget)}))}));var a=document.querySelector(".popup_type_edit"),p=document.querySelector(".popup_type_new-card"),i=document.querySelector(".popup_type_image"),u=document.querySelector(".profile__edit-button"),s=document.querySelector(".profile__add-button"),l=document.querySelector(".profile__title"),d=document.querySelector(".profile__description"),_=document.forms["edit-profile"],m=_.name,v=_.description,y=document.forms["new-place"],f=y["place-name"],S=y.link;function b(e){e.addEventListener("click",(function(t){t.target.classList.contains("card__image")?(i.querySelector(".popup__image").src=t.target.src,i.querySelector(".popup__caption").textContent=e.querySelector(".card__title").textContent,n(i)):t.target.classList.contains("card__like-button")?t.target.classList.toggle("card__like-button_is-active"):t.target.classList.contains("card__delete-button")&&t.target.closest(".card").remove()}))}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var n=document.querySelector(".places__list"),o=t(e.name,e.link);b(o),n.append(o)})),u.addEventListener("click",(function(){a.querySelector(".popup__input_type_name").value=l.textContent,a.querySelector(".popup__input_type_description").value=d.textContent,c(Array.from(_.querySelectorAll(".popup__input")),_.querySelector(".popup__button")),n(a)})),_.addEventListener("submit",(function(e){var t,n;e.preventDefault(),l.textContent=m.value,d.textContent=v.value,console.log(m),console.log(m.value),(t=m.value,n=v.value,fetch("https://nomoreparties.co/v1/frontend-st-cohort-201/users/me",{method:"PATCH",headers:{authorization:"83bb934d-8786-461a-90c0-28a6bb6e66ef","Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})})).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))})).catch((function(e){return console.log("Ошибка ".concat(e))})),o(a)})),s.addEventListener("click",(function(){n(p)})),y.addEventListener("submit",(function(e){e.preventDefault();var n=document.querySelector(".places__list"),r=t(f.value,S.value);b(r),n.prepend(r),o(p),y.reset()})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(".popup__input")),n=e.querySelector(".popup__button");c(t,n),t.forEach((function(o){o.addEventListener("input",(function(){!function(e,t){t.validity.valid?function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));n.classList.remove("popup__input-error"),n.textContent=""}(e,t):function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));o.textContent=n,o.classList.add("popup__input-error")}(e,t,t.validationMessage)}(e,o),c(t,n)}))}))}(e)}))})();