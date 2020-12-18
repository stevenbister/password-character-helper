import { getLastItem, pushInputTextToArray, pushHiddenCharactersToArray } from './utils/arrayHandlers'

const passwordContainer = document.getElementById('passwordContainer');

// Init array to store the password's characters
const characters = [];

// Set the catet to the end of the input
function setCaret(element) {
  const range = document.createRange(); // Create a range (a range is a like the selection but invisible)
  range.selectNodeContents(element); // Select the entire contents of the element with the range
  range.collapse(false); // collapse the range to the end point. false means collapse to end rather than the start
  const selection = window.getSelection(); // get the selection object (allows you to change selection)
  selection.removeAllRanges(); // remove any selections already made
  selection.addRange(range); // make the range you have just created the visible selection
}

passwordContainer.addEventListener('keyup', e => {
  setCaret(e.target);
});



passwordContainer.addEventListener('input', e => {
  const charactersArray = pushInputTextToArray(e);
  const hiddenCharactersArray = pushHiddenCharactersToArray(charactersArray);

  // On input push the last item of each iteration of the input into the characters array
  // This allows us to keep a record of each character pressed before they are replaced
  if (getLastItem(charactersArray) != undefined) {
    characters.push(getLastItem(charactersArray));
  }

  console.log(characters);

  // Replace the innertext with the hidden character
  return e.target.innerText = hiddenCharactersArray.join('')

});
