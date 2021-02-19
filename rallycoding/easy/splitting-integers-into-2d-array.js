// https://www.rallycoding.com/problems/287

const solve = (intArray, k) => {
  const results = [];
  let start = 0;
  while (start + k < intArray.length) {
    results.push(intArray.slice(start, start + k));
    start += k;
  }
  results.push(intArray.slice(start));
  return results;
};

// SOMEONE
const solve = (intArray, k) => {
  const result = [];
  let current = [];
  for (let i = 0; i <= intArray.length; i++) {
    if (current.length === k || i === intArray.length) {
      result.push(current);
      current = [];
    }
    current.push(intArray[i]);
  }
  return result;
};
