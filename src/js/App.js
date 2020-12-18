import pushInputTextToArray from './utils/arrayHandlers';
import createCheckbox from './createCheckbox';

// Init array to store the password's characters
let characters = [];

const passwordContainer = document.getElementById('passwordContainer');
const formFieldset = document.querySelector('#characterPicker fieldset');
passwordContainer.addEventListener('input', e => {
  characters = pushInputTextToArray(e);

  createCheckbox({
    array: characters,
    container: formFieldset,
  })
});
