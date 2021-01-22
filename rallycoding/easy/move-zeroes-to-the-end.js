// https://www.rallycoding.com/problems/228

const solve = (intArray) => {
  const filteredArr = intArray.filter((num) => num !== 0);
  const gap = intArray.length - filteredArr.length;
  for (let i = 0; i < gap; i++) {
    filteredArr.push(0);
  }
  return filteredArr;
};

// SOMEONE
const solve = (intArray) => {
  const nonZeros = intArray.filter((n) => n);
  const zeros = intArray.filter((n) => !n);
  return [...nonZeros, ...zeros];
};
