const getLastItem = (array) => {
  const lastItem = array[array.length - 1];
  // if the last character matches the 'dot' then we want to ignore it
  if (lastItem == '·') {
    return;
  }
  return lastItem;
};

function pushInputTextToArray(e) {
  // Get the contents of the div
  const innertext = e.target.innerHTML.trim();

  // Spread contents into the array
  const array = [...innertext];
  return array;
}

function pushHiddenCharactersToArray(array) {
  if (!Array.isArray(array)) throw new TypeError();

  // Return characters as *'s so they're hidden to the user
  return array.map(character => character.replace(/./g, '·'));
}

export {getLastItem, pushInputTextToArray, pushHiddenCharactersToArray};
