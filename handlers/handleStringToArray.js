// Turn string into an array, broken on the comma
const strToArr = str => {
  // Init an empty array ready to store the letters
  let arr = [];

  // If the string contains a comma split the sting into an array
  // Else push the number into an array on it's own
  const regex = /,/;
  if (regex.test(str)) {
    return str.replace(/\s/g, '').split(',');
  }

  arr.push(str);

  return arr;
};

export default strToArr;
