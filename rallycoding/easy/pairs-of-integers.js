// MINE
const solve = (arrayOne, arrayTwo, k) => {
  let pair = [];

  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      if (arrayOne[i] + arrayTwo[j] === k) {
        pair.push(arrayOne[i], arrayTwo[j]);
        return pair;
      }
    }
  }
  return pair;
};

// ANOTHER
const solve = (arrayOne, arrayTwo, k) => {
  for (let n of arrayOne) {
    if (arrayTwo.indexOf(k - n) !== -1) {
      return [n, k - n];
    }
  }
};
