import pushInputTextToArray from './utils/arrayHandlers';
import createCheckbox from './createCheckbox';

// Init array to store the password's characters
let characters = [];

const passwordContainer = document.getElementById('passwordContainer');
const checkboxContainer = document.querySelector(
  '#characterPicker fieldset > .checkboxes'
);
const output = document.getElementById('output');

passwordContainer.addEventListener('input', (e) => {
  // Clear the checkbox wrapper so we start with a blank slate on each input.
  checkboxContainer.innerHTML = '';

  // Then add the checkboxes back in with any new or removed taken into account.
  const appendCheckboxes = () => {
    characters = pushInputTextToArray(e);

    createCheckbox({
      array: characters,
      container: checkboxContainer,
    });
  };

  return appendCheckboxes();
});

/**
 * Use event delegation to handle the event listener.
 * Because the checkboxes are dynamically created we can't target them with the element.addEventListener
 * unless we add a new event listener each time we create one.
 */
document.addEventListener('change', (e) => {
  if (e.target.matches('input[type="checkbox"]')) {
    const id = e.target.id;

    // Compare array index with checkbox ID
    const showCharacters = () => {

      return characters.forEach((character, i) => {
        if (id == i + 1) {
          if (e.target.checked) {
            output.innerHTML += `<p>${character}</p>`;
            console.log({character, i});
          } else {
            // TODO: Not quite working - this is checking agains the i of the loop rather than the i of the nodelist
              output.removeChild(output.childNodes[i]);
          }
        }
      });

    };

    return showCharacters();
  }
});
