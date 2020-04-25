import strToArr from './handleStringToArray';

// Count the number of letters in the password
const countLetters = input => input.value.length;

// Check letters values aren't greater than letters in password
const checkLetters = (input, password) => {
  strToArr(input.value).forEach(item => {
    if (item > password) {
      console.log('too loooooooong')
    }
  })
}

export { countLetters, checkLetters };
