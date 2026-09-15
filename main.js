// Изменение цвета всех карточек

const productCards = document.querySelectorAll('.card');
const changeColorAllCardsButton = document.querySelector('#change-color-all-cards');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';

changeColorAllCardsButton.addEventListener('click', () => { 
    productCards.forEach((card) => card.style.backgroundColor = greenColorHash)   ;
    })

// Изменение цвета первой карточки

const firstProductCard = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener ('click', () => {
    firstProductCard.style.backgroundColor = blueColorHash;
}) 

// Открытие страницы Google.com
const openGoogleButton = document.querySelector('#open-google');
openGoogleButton.addEventListener('click', () => {
    window.open('https://www.google.com', '_blank');
});

// Вывод сообщения в консоль лог
const logMessageButton = document.querySelector('#log-message');
logMessageButton.addEventListener('click', () => {
    console.log('Привет');
}); 