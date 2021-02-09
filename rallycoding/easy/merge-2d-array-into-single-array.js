// https://www.rallycoding.com/problems/272

// MINE
const solve = (intArray) => {
  return intArray.reduce((acc, cur) => [...acc, ...cur], []);
};

// SOMEONE
const solve = (intArray) => {
  return intArray.flat();
};
