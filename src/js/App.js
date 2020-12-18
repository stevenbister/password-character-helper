const passwordContainer = document.getElementById('passwordContainer');

function pushInputTextToArray(e) {
  // Get the contents of the div
  const innertext = e.target.innerHTML.trim();

  // Spread contents into the array
  return array = [...innertext]
}

function pushHiddenCharactersToArray(array) {
  if (!Array.isArray(array)) throw new TypeError;

  // Return characters as *'s so they're hidden to the user
  return array.map(character => character.innerText = '*');
}

function wrapCharacters(character) {
  if (!typeof character == 'string') throw new TypeError;

  const trimmedCharacters = character.trim();

  return trimmedCharacters.split('').map(character => `<span>${character}</span>`).join('');
}


passwordContainer.addEventListener('input', function(e) {
  const charactersArray = pushInputTextToArray(e);
  const hiddenCharactersArray = pushHiddenCharactersToArray(charactersArray);

  console.log(charactersArray);

  // TODO: Turn this into the hidden characters
  return e.target.innerHTML = charactersArray.join('');

});

