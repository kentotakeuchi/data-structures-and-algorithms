const solve = (intArray) => {
  for (let bp = 1; bp < intArray.length - 1; bp++) {
    const leftSum = intArray.slice(0, bp).reduce((acc, cur) => acc + cur, 0);
    const rightSum = intArray.slice(bp + 1).reduce((acc, cur) => acc + cur, 0);

    if (leftSum === rightSum) return true;
  }

  return false;
};
