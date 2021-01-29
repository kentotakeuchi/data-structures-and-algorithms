const solve = (intArray) => {
  const max = Math.max(...intArray);
  const min = Math.min(...intArray);
  return max - min;
};
