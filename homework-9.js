import { socialComments } from './comments.js';
console.log(socialComments); 

//УРОВЕНЬ 1

//Создание массива чисел от 1 до 10 и его фильтрация
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(num => num >= 5);
console.log("Исходный массив чисел:", numbers);
console.log("Отфильтрованный массив (>= 5):", filteredNumbers); 

//Создание массива строк с мебелью и проверка наличия определенной сущности
const furniture = ["Диван", "Кресло", "Стол", "Шкаф", "Стул"];
const targetFurniture = "Стол";
const hasFurniture = furniture.includes(targetFurniture);
console.log("Список мебели:", furniture);
console.log(`Есть ли "${targetFurniture}" в массиве мебели?`, hasFurniture);

//Создание функции для переворота массива и применение её к предыдущим массивам с разъяснением
function reverseArray(arr) {
    return [...arr].reverse();
}
console.log("--- Разбор применения функции для массива чисел ---");
console.log("Перевернутые числа:", reverseArray(filteredNumbers));

console.log("--- Разбор применения функции для массива мебели ---");
console.log("Перевернутая мебель:", reverseArray(furniture));


//УРОВЕНЬ 2

//Задание 5 в отдельном файле comments.js

//Задание 7: Вывод комментариев, у которых почта содержит ".com"
const comComments = socialComments.filter(comment => comment.email.includes(".com"));
console.log("--- Задание 7: Комментарии с почтой .com ---");
console.log(comComments);

//Задание 8: Изменение postId в зависимости от id
const updatedComments = socialComments.map(comment => {
    return {
        ...comment,
        postId: comment.id <= 5 ? 2 : 1 
    };
});
console.log("--- Задание 8: Комментарии с измененным postId ---");
console.log(updatedComments);

//Задание 9: Оставляем в объектах только id и name
const shortComments = socialComments.map(comment => {
    return {
        id: comment.id,
        name: comment.name
    };
});

console.log("--- Задание 9: Объекты только с id и name ---");
console.log(shortComments);

//Задание 10: Добавление свойства isInvalid в зависимости от длины body
const validatedComments = socialComments.map(comment => {
    return {
        ...comment, 
        isInvalid: comment.body.length > 180 //
    };
});
console.log("--- Задание 10: Комментарии с проверкой длины body (isInvalid) ---");
console.log(validatedComments);

//УРОВЕНЬ 3

//Задание 11: Получение массива почт через .reduce()
const emailsViaReduce = socialComments.reduce((accumulator, comment) => {
    accumulator.push(comment.email); // Складываем почты в массив (слеш убран)
    return accumulator; 
}, []); 
console.log("--- Задание 11 (.reduce) ---");
console.log(emailsViaReduce);

//Задание 11 (2 часть): Получение массива почт через .map() 
const emailsViaMap = socialComments.map(comment => comment.email);
console.log("--- Задание 11 (.map) ---");
console.log(emailsViaMap);

//Задание 12: Превращение массива почт в строку

// 1. С помощью метода .toString()
const emailsStringDefault = emailsViaMap.toString();
console.log("--- Задание 12 (.toString) ---");
console.log(emailsStringDefault);

// 2. С помощью метода .join() (с разделителем: запятая и пробел)
const emailsStringCustom = emailsViaMap.join(", ");
console.log("--- Задание 12 (.join) ---");
console.log(emailsStringCustom);