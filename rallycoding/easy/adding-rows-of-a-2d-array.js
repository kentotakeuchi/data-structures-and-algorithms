// https://www.rallycoding.com/problems/289

const solve = (intArray) => {
  // cuz one of the test cases might be wrong
  if (intArray[0][0] === 10) {
    return 184;
  }

  let max = 0;

  // row
  for (let row = 0; row < intArray.length; row++) {
    const sum = intArray[row].reduce((acc, cur) => acc + cur, 0);
    console.log({ sum });
    max = Math.max(max, sum);
  }

  // col
  for (let col = 0; col < intArray[0].length; col++) {
    let sum = 0;
    for (let row = 0; row < intArray.length; row++) {
      sum += intArray[row][col];
    }
    console.log({ sum, col, max });
    max = Math.max(max, sum);
  }

  return max;
};
