// https://www.rallycoding.com/problems/242

// MINE
const solve = (intArray, k) => {
  intArray.push(k);
  const targetIndex =
    intArray.sort((a, z) => a - z).findIndex((num) => num === k) - 1;
  return intArray[targetIndex];
};

// SOMEONE
const solve = (intArray, k) => {
  return Math.max(...intArray.filter((n) => n < k));
};
