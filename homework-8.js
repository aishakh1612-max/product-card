// Задание №3: Создание объекта с данными
const personProfile = {
    name: "Aisha",
    age: 17,
    email: "aishakh1612@gmail.com",
    position: "Student",
    country: "Turkey",
    hobbies: ["Baking"],
    pet: "Cat"
};
console.log("Задание 3:", personProfile);

// Задание №4: Обьект автомобиля и владелец
const car = {
    make: "Toyota",
    model: "GR Supra",
    year: 2024,
    color: "matte black",
    horsepower: 387
};
car.owner = personProfile;
console.log("Задание 4:", car);

// Задание №5: Функция проверки и добавления скорости
function checkAndAddMaxSpeed(carObj) {
    if ("maxSpeed" in carObj) {
        console.log("Задание 5: Свойство maxSpeed уже существует.");
        return;
    }
    carObj.maxSpeed = 250;
    console.log("Задание 5: Свойство maxSpeed успешно добавлено.");
}
checkAndAddMaxSpeed(car);
console.log("Задание 5:", car);

//Задание №6: Функция вывода свойства объекта
function getPropertyByKey(obj, propertyName) {
    console.log("Задание 6:", obj[propertyName]);
}
getPropertyByKey(car, "model"); 
getPropertyByKey(car, "color");

// Задание №7: Добавление нового хобби в массив
    function addHobbyToPerson(personObj, newHobby) {
        personObj.hobbies.push(newHobby);
        console.log("Задание 7: Новое хобби успешно добавлено.");
    }
addHobbyToPerson(personProfile, "Reading");
console.log("Задание 7:", personProfile);

// Задание №8: Красивый вывод всей информации
function printCarReport(carObj) {
    const carName = carObj.make + " " + carObj.model;
    const ownerName = carObj.owner.name;
    const ownerHobbies = carObj.owner.hobbies.join(", "); 
    console.log(`Отчет: Машина ${carName} (${carObj.color}) принадлежит ${ownerName}. Ее любимые хобби: ${ownerHobbies}.`);
}
printCarReport(car);
