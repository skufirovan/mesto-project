(()=>{"use strict";var t=document.querySelector("#card-template").content;function e(e,o,n,r){var c=t.querySelector(".card").cloneNode(!0);return c.querySelector(".card__title").textContent=e,c.querySelector(".card__image").src=o,c.querySelector(".card__like-info").textContent=n.length,c.querySelector(".card__id").textContent=r,c}function o(t){document.addEventListener("keydown",r),t.classList.add("popup_is-opened")}function n(t){document.removeEventListener("keydown",r),t.classList.remove("popup_is-opened")}function r(t){if("Escape"===t.key){var e=document.querySelector(".popup_is-opened");null!==e&&n(e)}}function c(t,e){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.classList.add("popup__button_type_active"),e.classList.remove("popup__button_type_inactive"),e.removeAttribute("disabled")):(e.classList.remove("popup__button_type_active"),e.classList.add("popup__button_type_inactive"),e.setAttribute("disabled",!0))}document.querySelectorAll(".popup").forEach((function(t){t.classList.add("popup_is-animated"),t.addEventListener("click",(function(t){(t.target.classList.contains("popup__close")||t.target.classList.contains("popup"))&&n(t.currentTarget)}))}));var a=document.querySelector(".popup_type_edit"),i=document.querySelector(".popup_type_new-card"),u=document.querySelector(".popup_type_image"),s=document.querySelector(".popup_type_avatar"),l=document.querySelector(".profile__edit-button"),d=document.querySelector(".profile__add-button"),p=document.querySelector(".profile__title"),_=document.querySelector(".profile__description"),f=document.querySelector(".profile__image"),m=document.forms["edit-profile"],v=m.name,h=m.description,y=document.forms["new-place"],b=y["place-name"],S=y.link,q=document.forms["form-avatar"],g=q.avatar;function k(t){t.addEventListener("click",(function(e){if(e.target.classList.contains("card__image"))u.querySelector(".popup__image").src=e.target.src,u.querySelector(".popup__caption").textContent=t.querySelector(".card__title").textContent,o(u);else if(e.target.classList.contains("card__like-button"))if(e.target.classList.contains("card__like-button_is-active")){e.target.classList.remove("card__like-button_is-active");var n=e.currentTarget.querySelector(".card__id");(function(t){return fetch("https://nomoreparties.co/v1/frontend-st-cohort-201/cards/likes/".concat(t),{method:"DELETE",headers:{authorization:"83bb934d-8786-461a-90c0-28a6bb6e66ef"}})})(n.textContent).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))})).then((function(){document.querySelectorAll(".places__item").forEach((function(t){var e=t.querySelector(".card__id");e&&e.textContent===n.textContent&&t.querySelector(".card__like-info").textContent--}))})).catch((function(t){return console.log("Ошибка ".concat(t))}))}else{e.target.classList.add("card__like-button_is-active");var r=e.currentTarget.querySelector(".card__id");(function(t){return fetch("https://nomoreparties.co/v1/frontend-st-cohort-201/cards/likes/".concat(t),{method:"PUT",headers:{authorization:"83bb934d-8786-461a-90c0-28a6bb6e66ef"}})})(r.textContent).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))})).then((function(){document.querySelectorAll(".places__item").forEach((function(t){var e=t.querySelector(".card__id");e&&e.textContent===r.textContent&&t.querySelector(".card__like-info").textContent++}))})).catch((function(t){return console.log("Ошибка ".concat(t))}))}else if(e.target.classList.contains("card__delete-button")){e.preventDefault();var c=e.currentTarget.querySelector(".card__id");(function(t){return fetch("https://nomoreparties.co/v1/frontend-st-cohort-201/cards/".concat(t),{method:"DELETE",headers:{authorization:"83bb934d-8786-461a-90c0-28a6bb6e66ef"}})})(c.textContent).then((function(t){if(!t.ok)return Promise.reject("Ошибка ".concat(t.status))})).then((function(){document.querySelectorAll(".places__item").forEach((function(t){var e=t.querySelector(".card__id");e&&e.textContent===c.textContent&&t.remove()}))})).catch((function(t){return console.log("Ошибка ".concat(t))}))}}))}function L(){fetch("https://nomoreparties.co/v1/frontend-st-cohort-201/users/me",{headers:{authorization:"83bb934d-8786-461a-90c0-28a6bb6e66ef"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))})).then((function(t){console.log(t.avatar),p.textContent=t.name,_.textContent=t.about,f.style.backgroundImage="url(".concat(t.avatar,")")})).catch((function(t){return console.log("Ошибка ".concat(t))}))}l.addEventListener("click",(function(){a.querySelector(".popup__input_type_name").value=p.textContent,a.querySelector(".popup__input_type_description").value=_.textContent,c(Array.from(m.querySelectorAll(".popup__input")),m.querySelector(".popup__button")),o(a)})),m.addEventListener("submit",(function(t){var e,o;t.preventDefault(),(e=v.value,o=h.value,fetch("https://nomoreparties.co/v1/frontend-st-cohort-201/users/me",{method:"PATCH",headers:{authorization:"83bb934d-8786-461a-90c0-28a6bb6e66ef","Content-Type":"application/json"},body:JSON.stringify({name:e,about:o})})).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))})).catch((function(t){return console.log("Ошибка ".concat(t))})),L(),n(a)})),d.addEventListener("click",(function(){o(i)})),y.addEventListener("submit",(function(t){var o,r;t.preventDefault(),(o=b.value,r=S.value,fetch("https://nomoreparties.co/v1/frontend-st-cohort-201/cards",{method:"POST",headers:{authorization:"83bb934d-8786-461a-90c0-28a6bb6e66ef","Content-Type":"application/json"},body:JSON.stringify({name:o,link:r})})).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))})).then((function(t){var o=document.querySelector(".places__list"),n=e(t.name,t.link,t.likes,t._id);"168de8369f3b454ab5d5ee08"!==t.owner._id&&n.querySelector(".card__delete-button").remove(),k(n),o.prepend(n)})).catch((function(t){return console.log("Ошибка ".concat(t))})),n(i),y.reset()})),f.addEventListener("click",(function(){c(Array.from(m.querySelectorAll(".popup__input")),m.querySelector(".popup__button")),o(s)})),q.addEventListener("submit",(function(t){var e;t.preventDefault(),(e=g.value,fetch("https://nomoreparties.co/v1/frontend-st-cohort-201/users/me/avatar",{method:"PATCH",headers:{authorization:"83bb934d-8786-461a-90c0-28a6bb6e66ef","Content-Type":"application/json"},body:JSON.stringify({avatar:e})})).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))})).then((function(t){console.log(t)})).catch((function(t){return console.log("Ошибка ".concat(t))})),n(s),q.reset()})),L(),fetch("https://nomoreparties.co/v1/frontend-st-cohort-201/cards ",{headers:{authorization:"83bb934d-8786-461a-90c0-28a6bb6e66ef"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))})).then((function(t){Array.from(t).forEach((function(t){var o=document.querySelector(".places__list"),n=e(t.name,t.link,t.likes,t._id);"168de8369f3b454ab5d5ee08"!==t.owner._id&&n.querySelector(".card__delete-button").remove(),k(n),o.append(n)}))})).catch((function(t){return console.log("Ошибка ".concat(t))})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(t){t.addEventListener("submit",(function(t){t.preventDefault()})),function(t){var e=Array.from(t.querySelectorAll(".popup__input")),o=t.querySelector(".popup__button");c(e,o),e.forEach((function(n){n.addEventListener("input",(function(){!function(t,e){e.validity.valid?function(t,e){var o=t.querySelector(".".concat(e.id,"-error"));o.classList.remove("popup__input-error"),o.textContent=""}(t,e):function(t,e,o){var n=t.querySelector(".".concat(e.id,"-error"));n.textContent=o,n.classList.add("popup__input-error")}(t,e,e.validationMessage)}(t,n),c(e,o)}))}))}(t)}))})();