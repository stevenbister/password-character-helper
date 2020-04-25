// Turn string into an array, broken on the comma
const strToArr = str => {
  // Check the string contains a comma to split on
  const regex = /,/;

  // Early return if comma doesn't exist
  if (!regex.test(str)) return; 

  return str.replace(/\s/g, '').split(',')
};

export default strToArr;
