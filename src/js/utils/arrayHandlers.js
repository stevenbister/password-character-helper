function pushInputTextToArray(e) {
  // Get the contents of the div
  const innertext = e.target.value.trim();

  // Spread contents into the array
  const array = [...innertext];
  return array;
}

export default pushInputTextToArray;
