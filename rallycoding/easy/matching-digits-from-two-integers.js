// https://www.rallycoding.com/problems/259

const solve = (intOne, intTwo) => {
  const set1 = new Set(intOne.toString());
  const set2 = new Set(intTwo.toString());
  const results = [];

  for (let str of set1) {
    if (set2.has(str)) {
      results.push(parseInt(str));
    }
  }

  return results;
};
