function createCheckbox({ array, container }) {
  if (!Array.isArray(array)) throw new TypeError;
  if (!container) throw new Error('No container for your checkboxes defined');

  console.log({array, container});

  const label = document.createElement('label');
  const checkbox = document.createElement('checkbox');

  array.forEach( (item, i) => {
    // container.innerHTML += `
    // <label>
    //   ${i}<input type="checkbox" name="${i}" id="${i}">
    // </label>
    // `
  })
}

export default createCheckbox;
