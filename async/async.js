// Находим нужные элементы на странице
const messageElement = document.getElementById('message');
const cardsContainer = document.getElementById('cards-container');
const getAllBtn = document.getElementById('get-all-btn');
const deleteAllBtn = document.getElementById('delete-all-btn');

// Главный массив с пользователями
let users = [];

// Функция для имитации задержки сети (используем Promise и setTimeout)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Главная функция инициализации страницы
async function initApp() {
    try {
        // 1. Проверяем локальное хранилище (localStorage)
        const savedUsers = localStorage.getItem('users');

        if (savedUsers) {
            // Если данные ТАМ УЖЕ ЕСТЬ, берем их оттуда
            users = JSON.parse(savedUsers);
            messageElement.textContent = ''; // Убираем надпись загрузки
            renderUsers(); // Показываем карточки
        } else {
            // Если в localStorage пусто, делаем запрос через fetch
            messageElement.textContent = 'Данные загружаются';
            
            // Имитируем долгую загрузку в 1.5 секунды
            await delay(1500);

            const response = await fetch('users.json');

            // Если сервер ответил с ошибкой (например, файл не найден 404)
            if (!response.ok) {
                throw new Error('Ошибка при загрузке данных с сервера');
            }

            const data = await response.json();
            
            // Сохраняем полученных пользователей в массив
            users = data.users;

            // Сохраняем в localStorage, чтобы при перезагрузке не запрашивать снова
            saveToLocalStorage();

            messageElement.textContent = ''; // Убираем надпись загрузки
            renderUsers(); // Показываем карточки
        }
    } catch (error) {
        // Перехватываем ошибку и выводим её на экран
        console.error(error);
        messageElement.textContent = 'Ошибка при загрузке данных';
    }
}

// Функция сохранения текущего массива в localStorage
function saveToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

// Функция отрисовки карточек на странице
function renderUsers() {
    // Очищаем контейнер перед отрисовкой
    cardsContainer.innerHTML = '';

    // Если пользователей нет вообще
    if (users.length === 0) {
        cardsContainer.innerHTML = '<p>Список пользователей пуст.</p>';
        return;
    }

    // Создаем карточку для каждого пользователя
    users.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3>${user.name} ${user.surname}</h3>
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Возраст:</strong> ${user.age}</p>
            <p><strong>Хобби:</strong> ${user.hobbie}</p>
            <p><strong>Профессия:</strong> ${user.profession}</p>
            <button class="delete-btn" data-id="${user.id}">Удалить</button>
        `;

        cardsContainer.appendChild(card);
    });

    // Навешиваем обработчики клика на кнопки "Удалить" внутри каждой карточки
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const userId = Number(e.target.getAttribute('data-id'));
            deleteSingleUser(userId);
        });
    });
}

// 1. Удаление определенной карточки (через метод .filter())
function deleteSingleUser(id) {
    // Оставляем всех пользователей, чьи ID НЕ равны удаляемому
    users = users.filter(user => user.id !== id);
    
    // Синхронизируем с localStorage
    saveToLocalStorage();
    
    // Перерисовываем экран
    renderUsers();
}

// 2. Кнопка "Удалить все карточки"
deleteAllBtn.addEventListener('click', () => {
    if (users.length === 0) {
        alert('Карточки и так уже удалены!');
        return;
    }
    users = [];
    saveToLocalStorage();
    renderUsers();
});

// 3. Кнопка "Получить все карточки"
getAllBtn.addEventListener('click', async () => {
    // Сценарий по ТЗ: если все пользователи уже и так отображены на экране
    // Сравнить можно с первоначальным количеством или просто проверить, есть ли они
    const savedUsers = localStorage.getItem('users');
    const parsedSaved = savedUsers ? JSON.parse(savedUsers) : [];

    // Достаем оригинальные данные из файла снова, чтобы проверить, все ли на месте
    try {
        const response = await fetch('users.json');
        const data = await response.json();

        // Проверяем: если текущий массив равен полному списку из файла
        if (users.length === data.users.length) {
            alert('Информационное сообщение: У вас и так отображены все пользователи!');
            return;
        }

        // Если кого-то удаляли — восстанавливаем всех из файла
        users = data.users;
        saveToLocalStorage();
        renderUsers();
        alert('Все карточки успешно восстановлены!');
    } catch (error) {
        alert('Не удалось получить данные с сервера.');
    }
});

// Запускаем приложение при загрузке скрипта
initApp();