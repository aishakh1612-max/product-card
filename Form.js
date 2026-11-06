// js/Form.js

export class Form {
  constructor(formSelector) {
    // Находим форму на странице по селектору (например, '#registrationForm')
    this.form = document.querySelector(formSelector);

    if (!this.form) {
      console.error(`Форма с селектором "${formSelector}" не найдена!`);
    }
  }

  // I. Метод для проверки валидности формы (использует стандартную HTML5 валидацию)
  isValid() {
    if (!this.form) return false;
    return this.form.checkValidity();
  }

  // II. Метод для получения всех данных формы в виде объекта
  getData() {
    if (!this.form) return {};
    
    const formDataObj = new FormData(this.form);
    const data = {};

    for (let [key, value] of formDataObj.entries()) {
      data[key] = value;
    }

    return data;
  }

  // III. Метод для сброса (очистки) формы
  reset() {
    if (this.form) {
      this.form.reset();
    }
  }
}