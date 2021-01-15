// ? Refactor these into one function?

function createCheckbox({ array, container }) {
  if (!Array.isArray(array)) throw new TypeError();
  if (!container) throw new Error('No container for your checkboxes defined');

  return array.forEach((item, i) => (
    container.innerHTML += `<label class="checkbox"><span>${i+1}</span><input type="checkbox" name="${i}" id="${i}"></label>`)
  );
}

function createCharacterContainer({ array, container }) {
  if (!Array.isArray(array)) throw new TypeError();
  if (!container) throw new Error('No container for your checkboxes defined');

  return array.forEach((item, i) => (
    container.innerHTML += `<span data-index="${i}"></span>`
  ))
}

export {createCheckbox, createCharacterContainer};
