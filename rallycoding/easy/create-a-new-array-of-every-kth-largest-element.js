// https://www.rallycoding.com/problems/285

const solve = (intArray, k) => {
  const results = [];
  for (let i = 0; i < intArray.length; i += k) {
    results.push(Math.max(...intArray.slice(i, i + k)));
  }
  return results;
};
