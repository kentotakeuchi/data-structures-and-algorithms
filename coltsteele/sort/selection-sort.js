/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    let min = arr[i]
    let mindex = i
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < min) {
        min = arr[j]
        mindex = j
      }
    }
    if (i !== mindex) [arr[i], arr[mindex]] = [arr[mindex], arr[i]]
  }
  return arr
}

console.log(selectionSort([5, 3, 4, 1, 2]))

// ANSWER
/*
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}
*/

selectionSort([0, 2, 34, 22, 10, 19, 17])
