const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const errorIcon = document.querySelectorAll('.error-icon');
const errorMsg = document.querySelectorAll('.error-message');
const submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', submitForm);

function submitForm(event) {
  event.preventDefault();

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  if (firstName === '') {
    displayError(firstNameInput);
  } else {
    hideError(firstNameInput);
  }

  if (lastName === '') {
    displayError(lastNameInput);
  } else {
    hideError(lastNameInput);
  }

  if (email === '' || !isValidEmail(email)) {
    displayError(emailInput);
    emailInput.style.color = 'hsl(0, 100%, 74%)';
  } else {
    hideError(emailInput);
    emailInput.style.color = '';
  }

  if (password === '') {
    displayError(passwordInput);
  } else {
    hideError(passwordInput);
  }
}

function displayError(input) {
  const parent = input.parentNode;
  const errorIcon = parent.querySelector('.error-icon');
  const errorMsg = parent.querySelector('.error-message');

  errorIcon.classList.remove('inactive');
  errorMsg.classList.remove('inactive');
  input.style.border = '2px solid hsl(0, 100%, 74%)';
}

function hideError(input) {
  const parent = input.parentNode;
  const errorIcon = parent.querySelector('.error-icon');
  const errorMsg = parent.querySelector('.error-message');

  errorIcon.classList.add('inactive');
  errorMsg.classList.add('inactive');
  input.style.border = '';
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


