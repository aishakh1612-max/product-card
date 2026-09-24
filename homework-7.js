// Задание 3
function showWeather(city, temperature) {
    console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}
showWeather("Москве", 24);

// Задание 4
const LIGHT_SPEED = 300000;
function checkSpeed(speed) {
    if (speed > LIGHT_SPEED) {
        console.log("Сверхсветовая скорость");
    } else if (speed < LIGHT_SPEED) {
        console.log("Субсветовая скорость");
    } else {
        console.log("Скорость света");
    }
}
checkSpeed(350000); // Сверхсветовая скорость
checkSpeed(250000); // Субсветовая скорость
checkSpeed(300000); // Скорость света

//Задание 5
const product = "Увлажняющий мусс";
const price = 2750; 

function buyProduct(budget) {
    if (budget >= price) {
        console.log(`${product} приобретён. Спасибо за покупку!`);
    } else {
        let diff = price - budget;
        console.log(`Вам не хватает ${diff}$, пополните баланс`);
    }
}
buyProduct(2000);
buyProduct(3000);


