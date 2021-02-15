// https://www.rallycoding.com/problems/279

const solve = (intArray) => {
  const newIntArray = [...new Set(intArray)];
  newIntArray.sort((a, z) => a - z);
  console.log({ newIntArray });
  for (let i = 1; i < newIntArray.length; i++) {
    if (newIntArray[i] - newIntArray[i - 1] !== 1) {
      return newIntArray[i] - 1;
    }
  }
  return newIntArray.length + 1;
};
