function createCheckbox({ array, container }) {
  if (!Array.isArray(array)) throw new TypeError();
  if (!container) throw new Error('No container for your checkboxes defined');

  const label = document.createElement('label');

  return array.forEach((item, i) => {
    label.innerHTML = `${i+1} <input type="checkbox" name="${i+1}" id="${i+1}">`;

    return container.append(label)
  });
}

export default createCheckbox;
