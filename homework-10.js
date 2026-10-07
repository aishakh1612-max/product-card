import { products } from './products.js';

const productsList = document.querySelector('.products');

// 1. Функция-шаблон: принимает один объект продукта и возвращает HTML-строку
function createCardTemplate(product) {
  const compoundItems = product.compound
    .map(item => `<li>${item}</li>`)
    .join('');

  return `
    <li class="products__item card">
      <img src="${product.image}" alt="" class="card__image" />
      <span class="card__category">${product.category}</span>
      <h2 class="card__name">${product.name}</h2>
      <p class="card__description">
        ${product.description}
      </p>
      <div class="card__compound compound">
        <span class="compound__name">Состав:</span>
        <ul class="compound__list">
          ${compoundItems}
        </ul>
      </div>
      <div class="card__price-container">
        <b class="card__price-label">Цена: </b>
        <span class="card__price">${product.price}</span>
      </div>
    </li>
  `;
}

// 2. Функция рендеринга: принимает массив продуктов и отрисовывает их
function renderCards(cardsArray) {
  productsList.innerHTML = '';
  const cardsHTML = cardsArray.map(product => createCardTemplate(product)).join('');
  productsList.innerHTML = cardsHTML;
}
renderCards(products);


//Задание 4 (метод reduce)

const productsMap = products.reduce((accumulator, product) => {
  accumulator[product.name] = product.description;
  return accumulator;
}, {});
console.log("Результат работы reduce:", productsMap);

//Задание 5 (функции для выбора количества и рендеринга)

function getCardsCount() {
  let count = prompt("Сколько карточек отобразить? От 1 до 5");
  if (count === null || count.trim() === "") {
    alert("Вы ничего не ввели. По умолчанию будет показано 5 карточек.");
    return 5;
  }
  count = Number(count);
  if (isNaN(count) || count < 1 || count > 5) {
    alert("Некорректный ввод! Пожалуйста, введите число от 1 до 5. По умолчанию будет показано 5 карточек.");
    return 5;
  }
  return count;
}

function renderLimitedCards(cardsArray) {
  const count = getCardsCount();
  const limitedCards = cardsArray.slice(0, count);

  productsList.innerHTML = '';
  const cardsHTML = limitedCards.map(product => createCardTemplate(product)).join('');
  productsList.innerHTML = cardsHTML;
}

renderLimitedCards(products);
