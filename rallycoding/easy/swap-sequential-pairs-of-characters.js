// https://www.rallycoding.com/problems/308

const solve = (charArray) => {
  for (let i = 0; i < charArray.length; i += 2) {
    if (i === charArray.length - 1) break;
    swap(charArray, i, i + 1);
  }
  return charArray;
};

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
