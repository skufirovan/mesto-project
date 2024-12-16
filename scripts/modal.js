const popup = document.querySelectorAll('.popup');

function openModal(popup) {      
    popup.classList.add('popup_is-opened');
}

function closeModal(popup) {      
    popup.classList.remove('popup_is-opened');
}

popup.forEach(function(ind) {
    ind.classList.add('popup_is-animated');
    ind.addEventListener('click', function(evt) {
        if (evt.target.classList.contains('popup__close')) {
            closeModal(evt.currentTarget);
        }
    })
})