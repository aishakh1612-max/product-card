
export class Modal {
  constructor(modalId, overlaySelector) {
    // Находим модальное окно по переданному ID и сохраняем в this.modal
    this.modal = document.querySelector(modalId);
    this.overlay = document.querySelector(overlaySelector);

    if (!this.modal) {
      console.error(`Модальное окно с id "${modalId}" не найдено!`);
      return;
    }

    // Запускаем метод инициализации крестика
    this._initCloseButton();
  }

  // I. Метод для открытия модального окна
  open() {
    this.modal.classList.add('modal-showed');
    if (this.overlay) {
      this.overlay.classList.add('modal-showed');
    }
  }

  // II. Метод для закрытия модального окна (исправлено на удаление класса)
  close() {
    this.modal.classList.remove('modal-showed');
    if (this.overlay) {
      this.overlay.classList.remove('modal-showed');
    }
    // Если вы используете style.display, то можно написать так:
    // this.modal.style.display = 'none';
  }

  // III. Метод для проверки, открыто ли модальное окно
  isOpen() {
    return this.modal.classList.contains('modal-showed'); // или 'is-open' в зависимости от вашей логики
  }

  // IV. Метод, который слушает кнопку (крестик) для закрытия
  _initCloseButton() {
    // Ищем кнопку закрытия ВНУТРИ модалки через this.modal
    const closeBtn = this.modal.querySelector('#closeModalBtn');
    
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.close();
      });
    } else {
      console.warn('Кнопка закрытия не найдена!');
    }
  }
}