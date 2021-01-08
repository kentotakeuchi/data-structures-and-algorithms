const solve = (intArray) => {
  const sorted = intArray.sort((a, z) => a - z);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i + 1] - 1) {
      return sorted[i] + 1;
    }
  }
  return -1;
};
