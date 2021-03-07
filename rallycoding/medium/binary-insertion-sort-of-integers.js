// https://www.rallycoding.com/problems/180

const solve = arr => {
  if (!arr) {
    return new Error('No array supplied to sort.')
  } else if (arr.length <= 1) {
    return new Error('Array length is not sortable.')
  }
  var j = 0
  for (var i = 1; i < arr.length; i++) {
    let key = arr[i]
    j = i - 1
    let idx = binarySearch(arr, key, 0, j)
    while (j >= idx) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
  return arr
}

function binarySearch(arr, target, L = null, R = null, ct = 0) {
  if (!arr || arr.length <= 1 || !target) {
    return new Error('Too few arguments supplied.')
  }
  if (typeof arr[0] !== typeof target) {
    return new Error('Type mismatch between array elements and target.')
  }
  if (!Array.isArray(arr)) {
    return new Error('Can only search over an array.')
  }
  ct++
  if (ct === arr.length - 1) {
    // prevent infinite recursion for unsorted array
    return new Error('Infinite loop prevented.')
  }
  let midPt = Math.floor((L + R) / 2)
  if (L >= R) {
    return target > arr[L] ? L + 1 : L
  }
  if (target === arr[midPt]) {
    return midPt + 1
  }
  if (arr[midPt] > target) {
    R = midPt - 1
    return binarySearch(arr, target, L, R, ct)
  } else if (arr[midPt] < target) {
    L = midPt + 1
    return binarySearch(arr, target, L, R, ct)
  }
}

// insertion sort
/*
let insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};
*/
