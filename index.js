import strToArr from './handlers/handleStringToArray';
import getLetters from './handlers/handleGetLetters';

const app = document.querySelector('#app');
const form = document.querySelector('#password-checker');
const output = document.querySelector('.output');
const { password, letters } = form;
let pwdLength;

// Count the number of letters in the password
const countLetters = input => input.value.length;

// Check if number is greater than password
const isBiggerThanPwd = (x) => {
  return x > pwdLength;
}

// Count the number of letters in the password
password.addEventListener('keyup', () => pwdLength = countLetters(password));

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // the .some method checks our array to see if at least one element passes the test
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some 
  if (strToArr(letters.value).some(isBiggerThanPwd)) {
    output.innerHTML = `<p>There aren't that many letters in your password 🤦</p>`;
  } else {
    output.innerHTML = `<p>${getLetters(password.value, strToArr(letters.value))}</p>`;
  }
});
