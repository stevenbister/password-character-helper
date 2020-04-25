import strToArr from './handlers/handleStringToArray';
import getLetters from './handlers/handleGetLetters';
import { countLetters, checkLetters } from './handlers/handleCheckPasswordLength';

const app = document.querySelector('#app');
const form = document.querySelector('#password-checker');
const { password, letters } = form;
let pwdLength;

// Count the number of letters in the password
password.addEventListener('keyup', () => pwdLength = countLetters(password));

form.addEventListener('submit', e => {
  e.preventDefault();
  checkLetters(letters, pwdLength);

  const div = document.createElement('div');
  div.classList.add('output');
  div.innerHTML = `<p>${getLetters(password.value, strToArr(letters.value))}</p>`;
  app.appendChild(div);

});
