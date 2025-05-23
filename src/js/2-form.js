let formData = {
  email: '',
  message: '',
};

const refs = {
  form: document.querySelector('.feedback-form'),
};

// Завантаження збережених даних з localStorage
function loadSavedFormData() {
  const savedData = localStorage.getItem('feedback-form-state');

  if (!savedData) return;

  // Оновлення formData з localStorage
  formData = JSON.parse(savedData);

  refs.form.elements.email.value = formData.email || '';
  refs.form.elements.message.value = formData.message || '';
}

// Збереження у localStorage
function saveLS(obj) {
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}

// Очищення localStorage
function clearLs() {
  localStorage.removeItem('feedback-form-state');
}

// Обробка події введення
function handlerInput(event) {
  const { name, value } = event.target;

  if (name in formData) {
    formData[name] = value.trim();
    saveLS(formData);
  }
}

// Обробка подання форми
function handlerSubmit(event) {
  event.preventDefault();

  const { email, message } = event.target.elements;

  if (email.value.trim() === '' || message.value.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log('Form submitted:', formData);

  // Очищення полів та formData
  formData = { email: '', message: '' };
  email.value = '';
  message.value = '';
  clearLs();
}

refs.form.addEventListener('input', handlerInput);
refs.form.addEventListener('submit', handlerSubmit);

// Завантаження збережених даних при старті

loadSavedFormData();
