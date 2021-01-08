function createCheckbox({ array, container }) {
  if (!Array.isArray(array)) throw new TypeError();
  if (!container) throw new Error('No container for your checkboxes defined');

  return array.forEach((item, i) => (
    container.innerHTML += `<label>${i+1} <input type="checkbox" name="${i+1}" id="${i+1}"></label>`)
  );
}

export default createCheckbox;
