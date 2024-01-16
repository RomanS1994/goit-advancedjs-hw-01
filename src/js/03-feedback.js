import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(handlerInput, 500));
function handlerInput() {
  const {
    elements: { email, message },
  } = form;
  localStorage.setItem(
    LS_KEY,
    JSON.stringify({ email: email.value, message: message.value })
  );
}

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  const data = JSON.parse(localStorage.getItem(LS_KEY));

  if (data && data.email && data.message) {
    console.log(data);
    localStorage.removeItem(LS_KEY);
    evt.currentTarget.reset();
  } else {
    alert('enter data in both fields');
  }
}

function checkValues() {
  if (!localStorage.getItem(LS_KEY)) {
    return;
  }
  const { email, message } = form.elements;
  email.value = JSON.parse(localStorage.getItem(LS_KEY)).email;
  message.value = JSON.parse(localStorage.getItem(LS_KEY)).message;
}
checkValues();
