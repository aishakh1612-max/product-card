// Импорт классов в самом верху
import { Modal } from './Modal.js';
import { Form } from './Form.js';

// --- 1. Логика для формы подписки (из прошлых заданий) ---
const subscribeForm = document.getElementById('subscribeForm');
const emailInput = document.getElementById('emailInput');

if (subscribeForm && emailInput) {
  subscribeForm.addEventListener('submit', function (event) { 
    event.preventDefault();
    const emailValue = emailInput.value.trim();

    if (!emailValue) {
      alert('Пожалуйста, введите email!');
      return;
    }
    const formData = {
      email: emailValue
    };
    console.log(formData);
    emailInput.value = '';
    alert('Спасибо за подписку!');
  });
}


// --- 2. Логика для нового задания (Регистрация, модальное окно и класс Form) ---

// Внешняя переменная user для хранения данных успешно зарегистрированного пользователя
let user = null;

// Создаем экземпляры классов
const myModal = new Modal('modal');
const regForm = new Form('#registrationForm'); // Подключаем класс Form

// Получаем элементы модального окна и формы регистрации
const openModalBtn = document.getElementById('openModalBtn');
const overlay = document.getElementById('overlay');
const registrationForm = document.getElementById('registrationForm');
const closeModalBtn = document.getElementById('closeModalBtn');

// Навешиваем обработчики кликов для открытия модалки
if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
        myModal.open();
        if (overlay) overlay.classList.add('modal-showed');
    });
}

// Клик по оверлею для закрытия
if (overlay) {
    overlay.addEventListener('click', () => {
        myModal.close();
        overlay.classList.remove('modal-showed');
    });
}

// Обработка отправки формы регистрации
if (registrationForm) {
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // 1. Проверка валидности через метод класса Form
        if (!regForm.isValid()) {
            alert('Регистрация отклонена: заполните все обязательные поля корректно!');
            return;
        }

        // Получаем значения полей паролей для проверки совпадения
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // 2. Проверка совпадения паролей
        if (password !== confirmPassword) {
            alert('Регистрация отклонена: введенные пароли не совпадают!');
            return;
        }

        // 3. Собираем данные через метод класса regForm.getData()
        const userData = regForm.getData();
        
        // Удаляем confirmPassword из итогового объекта
        delete userData.confirmPassword;

        // Добавляем свойство createdOn с текущим временем
        userData.createdOn = new Date();

        // Присваиваем объект во внешнюю переменную user
        user = userData;

        console.log('Успешная регистрация, объект пользователя:', user);
        alert('Регистрация прошла успешно!');

        // Очищаем форму через метод класса Form и закрываем модалку через Modal
        regForm.reset();
        myModal.close();
        if (overlay) overlay.classList.remove('modal-showed');
    });
}