// Check the positions entered
const getLetters = (word, position) => position.map(item => {
  return `<span class="output-letter">${word.charAt(item - 1)}</span>`;
});

export default getLetters;
