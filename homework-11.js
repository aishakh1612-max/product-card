
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