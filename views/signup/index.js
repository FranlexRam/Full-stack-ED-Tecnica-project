const form = document.querySelector('#form');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const matchInput = document.querySelector('#match-input');

//Regex validations
const EMAIL_VALIDATION = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const PASSWORD_VALIDATION = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const NAME_VALIDATION = /^[A-Z\u00d1][a-zA-Z-ÿ\u00f1\u00d1]+(\s*[A-Z\u00d1][a-zA-Z-ÿ\u00f1\u00d1\s]*)$/;

// Events

nameInput.addEventListener('input', e => {
    const nameValidation = NAME_VALIDATION.test(e.target.value);

    if (e.target.value === '') {
        nameInput.classList.remove('outline-green-400', 'outline-2', 'outline');
        nameInput.classList.remove('outline-red-500', 'outline-2', 'outline');
        nameInput.classList.add('focus:outline-indigo-700');
    } else if (nameValidation) {
        nameInput.classList.remove('focus:outline-indigo-700');
        nameInput.classList.add('outline-green-400', 'outline-2', 'outline');
    } else {
        nameInput.classList.remove('focus:outline-indigo-700');
        nameInput.classList.remove('outline-green-400', 'outline-2', 'outline');
        nameInput.classList.add('outline-red-500', 'outline-2', 'outline');
    }
});