const popup = document.querySelectorAll('.popup');

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

popup.forEach(function(ind) {
    ind.classList.add('popup_is-animated');
    ind.addEventListener('click', function(evt) {
        if (evt.target.classList.contains('popup__close')) {
            closeModal(evt.currentTarget);
        } else if (evt.target.classList.contains('popup')) {
            closeModal(evt.currentTarget);
        }
    })
})