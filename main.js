// Изменение цвета всех карточек

const productCards = document.querySelectorAll('.card__container');
const changeColorAllCardsButton = document.querySelector('#change-color-all-cards');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';

changeColorAllCardsButton.addEventListener('click', () => { 
    productCards.forEach((card) => card.style.backgroundColor = greenColorHash)   ;
    })

// Изменение цвета первой карточки

const firstProductCard = document.querySelectorAll('.card__container');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener ('click', () => {
    firstProductCard[0].style.backgroundColor = blueColorHash;