// 1. Абстрактный класс Drink (в JS нет ключевого слова abstract из коробки, 
// но мы можем выбрасывать ошибку, если кто-то попытается создать его напрямую)
class Drink {
    #temperature; // Приватное поле для температуры

    constructor(name, size, price, temperature) {
        if (this.constructor === Drink) {
            throw new Error("Нельзя создать экземпляр абстрактного класса Drink напрямую!");
        }
        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = temperature;
    }

    getInfo() {
        console.log(`[LOG] Вызван метод getInfo() для напитка: ${this.name}`);
        return `Напиток: ${this.name} | Размер: ${this.size} | Цена: ${this.price} руб. | Температура: ${this.#temperature}°C`;
    }

    getTemperature() {
        console.log(`[LOG] Запрошена температура напитка '${this.name}': ${this.#temperature}°C`);
        return this.#temperature;
    }

    setTemperature(temperature) {
        console.log(`[LOG] Изменение температуры напитка '${this.name}' с ${this.#temperature}°C на ${temperature}°C`);
        this.#temperature = temperature;
    }

    // Приватный метод (в современном JS пишется с решеткой #)
    #prepare() {
        console.log(`[LOG] Начало приготовления напитка: ${this.name}...`);
        // Побочные действия: меняем температуру в зависимости от напитка
        if (this.name.includes("Кофе") || this.name.includes("Чай")) {
            this.setTemperature(85.0); // Горячие подогреваем
        } else {
            this.setTemperature(4.0);  // Холодные охлаждаем
        }
        console.log(`[LOG] Приготовление напитка '${this.name}' завершено.`);
    }

    serve() {
        console.log(`[LOG] Подача напитка '${this.name}' клиенту.`);
        this.#prepare(); // Вызываем приватный метод готовки
        console.log(`[LOG] Напиток '${this.name}' успешно подан! Приятного аппетита.`);
    }
}


// 2. Реализация наследников (4 напитка)

class Coffee extends Drink {
    constructor(size, price, beanType, milkType) {
        super("Кофе", size, price, 20.0); // Начальная комнатная температура
        this.beanType = beanType;
        this.milkType = milkType;
    }

    getInfo() {
        const baseInfo = super.getInfo();
        return `${baseInfo} | Зерна: ${this.beanType} | Молоко: ${this.milkType}`;
    }
}

class Tea extends Drink {
    constructor(size, price, teaType, infusionTime) {
        super("Чай", size, price, 20.0);
        this.teaType = teaType;
        this.infusionTime = infusionTime; // время заварки в минутах
    }

    getInfo() {
        const baseInfo = super.getInfo();
        return `${baseInfo} | Вид чая: ${this.teaType} | Время заварки: ${this.infusionTime} мин.`;
    }
}

class Lemonade extends Drink {
    constructor(size, price, fruitBase, isCarbonated) {
        super("Лимонад", size, price, 20.0);
        this.fruitBase = fruitBase;
        this.isCarbonated = isCarbonated;
    }

    getInfo() {
        const baseInfo = super.getInfo();
        const carbonation = this.isCarbonated ? "Газированный" : "Без газа";
        return `${baseInfo} | Основа: ${this.fruitBase} | Тип: ${carbonation}`;
    }
}

class Smoothie extends Drink {
    constructor(size, price, primaryFruit, addProtein) {
        super("Смузи", size, price, 20.0);
        this.primaryFruit = primaryFruit;
        this.addProtein = addProtein;
    }

    getInfo() {
        const baseInfo = super.getInfo();
        const proteinInfo = this.addProtein ? "С протеином" : "Без протеина";
        return `${baseInfo} | Фрукт: ${this.primaryFruit} | Добавка: ${proteinInfo}`;
    }
}


// 3. Класс "Кафе"
class Cafe {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    getInfo() {
        console.log(`[LOG] Запрошена информация о кафе '${this.name}'`);
        return `Кафе: '${this.name}', Адрес: ${this.location}`;
    }

    orderDrink(drink) {
        console.log(`\n--- НОВЫЙ ЗАКАЗ в кафе '${this.name}' ---`);
        console.log(`[LOG] Клиент заказал напиток: ${drink.name}`);
        
        // Получаем информацию о напитке
        console.log(drink.getInfo());
        
        // Подаем напиток (внутри вызовется приватный метод готовки)
        drink.serve();
        console.log(`--- ЗАКАЗ ЗАВЕРШЕН ---\n`);
    }
}


// === ДЕМОНСТРАЦИЯ РАБОТЫ ===

// Проверим, что абстрактный класс нельзя инстанцировать напрямую:
try {
    const testDrink = new Drink("Вода", "Маленький", 50, 15);
} catch (error) {
    console.log(`[LOG ОШИБКИ]: ${error.message}`);
}
console.log("-".repeat(50));

// Создаем кафе
const myCafe = new Cafe("Момент", "ул. Кленовая, 22");
console.log(myCafe.getInfo());
console.log("-".repeat(50));

// Создаем напитки (наследников)
const myCoffee = new Coffee("Большой", 250, "Арабика", "Овсяное");
const myLemonade = new Lemonade("Средний", 200, "Манго-Маракуйя", true);
const myTea = new Tea("Маленький", 150, "Зеленый улун", 4);

// Заказываем кофе через кафе
myCafe.orderDrink(myCoffee);

// Заказываем лимонад через кафе
myCafe.orderDrink(myLemonade);