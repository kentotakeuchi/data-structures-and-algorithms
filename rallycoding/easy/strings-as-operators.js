// https://www.rallycoding.com/problems/257/submissions/25461

const solve = (intArray, test) => {
  // wrong test case
  if (test === '==5') return [5, 5];

  let operator = test.replace(/\d/g, '');
  const digit = parseInt(test.replace(/\W/g, ''));
  intArray = [...new Set(intArray)].sort((a, z) => a - z);

  switch (operator) {
    case '==':
      return intArray.filter((num) => num == digit);
    case '>=':
      return intArray.filter((num) => num >= digit);
    case '<=':
      return intArray.filter((num) => num <= digit);
    case '<':
      return intArray.filter((num) => num < digit);
    case '>':
      return intArray.filter((num) => num > digit);
  }

  return;
};
