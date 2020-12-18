import pushInputTextToArray from './utils/arrayHandlers';

// Init array to store the password's characters
let characters = [];

const passwordContainer = document.getElementById('passwordContainer');

passwordContainer.addEventListener('input', e => {
  characters = pushInputTextToArray(e);
});
