const formData = {
  email: '',
  message: '',
};

const refs = {
  form: document.querySelector('.feedback-form'),
};

function handlerClick(event) {
  const { name, value } = event.target;

  if (name in formData) {
    formData[name] = value.trim();
  }
  saveLS(formData);
}

function handlerSubmit(event) {
  event.preventDefault();

  if (
    event.target.elements.email.value == '' ||
    event.target.elements.message.value == ''
  ) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    event.target.elements.email.value = '';
    event.target.elements.message.value = '';

    clearLs();
  }
}

function saveLS(obj) {
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}

function clearLs() {
  localStorage.removeItem('feedback-form-state');
}

function loadSavedFormData() {
  const saveData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (!saveData) {
    return;
  } else {
    refs.form.elements.email.value = saveData.email;
    refs.form.elements.message.value = saveData.message;
  }
}
refs.form.addEventListener('input', handlerClick);
refs.form.addEventListener('submit', handlerSubmit);

loadSavedFormData();
