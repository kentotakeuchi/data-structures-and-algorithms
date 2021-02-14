// https://www.rallycoding.com/problems/278

const solve = (intArray, k, m) => {
  return Math.max(...intArray.slice(k, m + 1));
};
