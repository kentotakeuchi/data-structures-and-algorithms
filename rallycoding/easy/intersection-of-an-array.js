// use Set
const solve = (arrOne, arrTwo) => {
  const setOne = new Set(arrOne);
  const setTwo = new Set(arrTwo);

  const _intersection = new Set();
  for (let num of setOne) {
    if (setTwo.has(num)) {
      _intersection.add(num);
    }
  }
  return [..._intersection];
};

// Others Answer
const solve = (arrOne, arrTwo) => {
  return arrOne.filter((n) => arrTwo.includes(n));
};
