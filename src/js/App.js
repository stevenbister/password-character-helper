import pushInputTextToArray from './utils/arrayHandlers';
import createCheckbox from './createCheckbox';

// Init array to store the password's characters
let characters = [];

const passwordContainer = document.getElementById('passwordContainer');
const formFieldset = document.querySelector('#characterPicker fieldset');

passwordContainer.addEventListener('input', (e) => {
  // Clear the checkbox wrapper so we start with a blank slate on each input.
  formFieldset.innerHTML = '';

  // Then add the checkboxes back in with any new or removed taken into account.
  const appendCheckboxes = () => {
    characters = pushInputTextToArray(e);

    createCheckbox({
      array: characters,
      container: formFieldset,
    });
  }

  return appendCheckboxes();
});
