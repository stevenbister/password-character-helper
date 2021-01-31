import pushInputTextToArray from './utils/arrayHandlers';
import clearElement from './utils/clearElement';
import { createCheckbox, createCharacterContainer } from './createElements';
import toggleColorMode from './toggleColorMode';

// Init array to store the password's characters
let characters = [];

const passwordContainer = document.getElementById('passwordContainer');
const checkboxContainer = document.querySelector(
  '#characterPicker #fieldset > .checkboxes'
);
const output = document.getElementById('output');

passwordContainer.addEventListener('input', (e) => {
  // Clear the checkbox wrapper so we start with a blank slate on each input.
  clearElement(checkboxContainer);
  clearElement(output);

  // Then add the checkboxes back in with any new or removed taken into account.
  const appendElements = () => {
    characters = pushInputTextToArray(e);

    // Create and append the checkboxes.
    createCheckbox({
      array: characters,
      container: checkboxContainer,
    });

    // Create and append the character containers.
    createCharacterContainer({
      array: characters,
      container: output,
    });
  };

  return appendElements();
});

/**
 * Use event delegation to handle the event listener.
 * Because the checkboxes are dynamically created we can't target them with the element.addEventListener
 * unless we add a new event listener each time we create one.
 */
document.addEventListener('change', (e) => {
  if (e.target.matches('input[type="checkbox"]')) {
    const id = e.target.id;
    const checkboxParent = e.target.parentElement;

    // Compare array index with checkbox ID
    const showCharacters = () => {
      return output.childNodes.forEach((wrapper, i) => {
        if (id == i) {
          if (e.target.checked) {
            wrapper.innerText = characters[i];

            checkboxParent.classList.add('checked');
          } else {
            if (wrapper.dataset.index == [i]) wrapper.innerText = '';

            checkboxParent.classList.remove('checked');
          }
        }
      });
    };

    return showCharacters();
  }
});

// Dark mode toggle
const toggle = document.querySelector('[data-color-toggle]');
// Get default color mode and pass to state
const preferredColorMode = localStorage.getItem('preferredColorMode');

toggleColorMode(toggle, preferredColorMode);
