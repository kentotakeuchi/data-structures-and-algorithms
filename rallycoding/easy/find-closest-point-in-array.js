const solve = (intArray, p) => {
  let min = Infinity;
  let results = null;
  for (let i = 0; i < intArray.length; i++) {
    const cur = Math.abs(p[0] - intArray[i][0] + (p[1] - intArray[i][1]));
    if (min > cur) {
      min = Math.min(min, cur);
      results = intArray[i];
    }
  }
  return results;
};
