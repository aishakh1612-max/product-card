//Задание №3

// 1. Базовый класс для любого бьюти-продукта
class CosmeticProduct {
  constructor(name, description, ingredients, price) {
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
    this.price = price;
  }

  // Общий метод для вывода информации о товаре
  getInfo() {
    return `${this.name} — ${this.price} руб. Состав: ${this.ingredients.join(', ')}.`;
  }
}

// 2. Класс для подарочных наборов 
class GiftSet extends CosmeticProduct {
  constructor(name, description, ingredients, price, itemsList) {
    super(name, description, ingredients, price);
    this.itemsList = itemsList; // Массив товаров, входящих в набор
  }

  // Переопределяем (или дополняем) метод getInfo для наборов
  getInfo() {
    return `🎁 Подарочный набор "${this.name}" (${this.itemsList.join(', ')}). Цена: ${this.price} руб.`;
  }
}


// --- СОЗДАЕМ НАШИ 5 КАРТОЧЕК ---

const mousse = new CosmeticProduct(
  'Увлажняющий мусс', 
  'Глубоко увлажняет кожу лица, оставляя её мягкой и гладкой.', 
  ['активные натуральные комплексы', 'витамины С, А, РР, В И Е','солнцезащитныe компоненты'], 
  2750
);

const mask = new CosmeticProduct(
  'Увлажняющая маска', 
  'Способствует удержанию влаги в верхних слоях кожи.', 
  ['воски', 'минералы', 'масла'], 
  3500
);


const cleanser = new CosmeticProduct(
  'Гель для умывания', 
  'Интенсивно очищает, не повреждает защитный барьер кожи.', 
  ['минералы','витамины С, А, РР, В И Е','солнцезащитные компоненты'], 
  1650
);


const giftSet1 = new GiftSet(
  'Подарочный набор №1',
  'Набор, состоящий из увлажняющего крема и маски.',
  ['воски', 'минералы', 'масла'],
  4200,
  ['увлажняющий крем', 'увлажняющая маска'] // <--  массив!
);

// Создаем пятый набор и тоже передаем список товаров:
const giftSet5 = new GiftSet(
  'Подарочный набор №5 Invisible symphony',
  'Весь набор средств Invisible symphony, крем, маска, мусс и гель для умывания.',
  ['воски', 'минералы', 'масла'],
  7520,
  ['крем', 'маска', 'мусс', 'гель для умывания'] // <-- массив!
);

//  В консоли
console.log('--- КАТАЛОГ БЬЮТИ-ПРОДУКТОВ ---');
console.log(mousse.getInfo());
console.log(mask.getInfo());
console.log(cleanser.getInfo());
console.log(giftSet1.getInfo());
console.log(giftSet5.getInfo());