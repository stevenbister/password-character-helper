import strToArr from './handlers/handleStringToArray';
import getLetters from './handlers/handleGetLetters';

const app = document.querySelector('#app');
const form = document.querySelector('#password-checker');
const { password, letters } = form;

let pwdLength;

// Count the number of letters in the password
// We don't want users to be able to ask for more letters than available
const countLetters = input => input.value.length;
password.addEventListener('keyup', () => (pwdLength = countLetters(password)));

form.addEventListener('submit', e => {
  e.preventDefault();
  
  console.log(getLetters(password.value))
 
  const div = document.createElement('div');
  div.classList.add('output');
  div.innerHTML = `<p>${getLetters(password.value, strToArr(letters.value))}</p>`;
  app.appendChild(div);

});
