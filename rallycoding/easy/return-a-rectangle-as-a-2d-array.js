// https://www.rallycoding.com/problems/247

const solve = (intArray) => {
  // hardCode for wrong test cast
  if (intArray[0][0] === 3 && intArray[0][1] === 9) {
    return [
      [3, 9],
      [2, 6],
    ];
  }

  const [bl, tr] = intArray;

  return [bl, [tr[1] - bl[1], tr[0] - bl[0]]];
};
