// https://www.rallycoding.com/problems/269

// MINE..
const solve = (column) => {
  let result = 0;
  result += column[0].charCodeAt() - 65;
  if (column[1]) result += column[1].charCodeAt() - 65 + 26;
  return result;
};

// SOMEONE
const solve = (column) => {
  return column.length > 1
    ? (column[0].charCodeAt(0) - 64) * 26 + column[1].charCodeAt(0) - 64
    : column.charCodeAt(0) - 64;
};
