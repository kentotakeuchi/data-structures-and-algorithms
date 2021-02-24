// https://www.rallycoding.com/problems/298

/*
const solve = (intArray) => {
  const results = []
  for(let innerArr of intArray) {
    results.push(...innerArr)
  }
  return results;
};
*/

/*
const solve = (intArray) => {
  return intArray.flat()
};
*/

const solve = (intArray) => {
  const result = [];
  while (intArray.flat().length > 0) {
    intArray.forEach((arr) => {
      result.push(arr.shift());
    });
  }
  return result.filter((num) => num);
};
