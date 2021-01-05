const solve = (strArray) => {
  return strArray
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
};
