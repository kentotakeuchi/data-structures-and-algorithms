const solve = (intArray) => {
  const set = new Set(intArray);
  const mid = Math.floor(set.size / 2);
  return Array.from(set).sort((a, z) => a - z)[mid];
};
