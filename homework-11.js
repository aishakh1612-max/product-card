
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


// --- 2. Логика для нового задания (Регистрация и модальное окно) ---

// Внешняя переменная user для хранения данных успешно зарегистрированного пользователя
let user = null;

// Получаем элементы модального окна и формы регистрации
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const registrationForm = document.getElementById('registrationForm'); // Обратите внимание: тут registrationForm, а не subscribeForm!

// Функция открытия модалки
function openModal() {
    modal.classList.add('modal-showed');
    overlay.classList.add('modal-showed');
}

// Функция закрытия модалки
function closeModal() {
    modal.classList.remove('modal-showed');
    overlay.classList.remove('modal-showed');
}

// Навешиваем обработчики кликов для модалки
if (openModalBtn) {
    openModalBtn.addEventListener('click', openModal);
}
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}
if (overlay) {
    overlay.addEventListener('click', closeModal);
}

// Обработка отправки формы регистрации
if (registrationForm) {
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // 1. Проверка валидности формы
        if (!registrationForm.checkValidity()) {
            alert('Регистрация отклонена: заполните все обязательные поля корректно!');
            return;
        }

        // Получаем значения полей паролей
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // 2. Проверка совпадения паролей
        if (password !== confirmPassword) {
            alert('Регистрация отклонена: введенные пароли не совпадают!');
            return;
        }

        // 3. Собираем данные формы
        const formDataObj = new FormData(registrationForm);
        const userData = {};
        
        for (let [key, value] of formDataObj.entries()) {
            if (key !== 'confirmPassword') {
                userData[key] = value;
            }
        }

        // Добавляем свойство createdOn с текущим временем
        userData.createdOn = new Date();

        // Присваиваем объект во внешнюю переменную user
        user = userData;

        // Выводим значения формы в лог
        console.log('Успешная регистрация, объект пользователя:', user);

        alert('Регистрация прошла успешно!');

        // Очищаем форму и закрываем модалку
        registrationForm.reset();
        closeModal();
    });
}