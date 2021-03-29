// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

/**
 *
 * @param {number[]} arr
 * @param {number} i
 * @param {number} j
 */

function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

/**
 *
 * @param {number[]} arr
 */

// ANSWER
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

/**
 *
 * @param {number[]} arr
 */

function selectionSort(arr) {
  let minIdx
  for (let i = 0; i < arr.length - 1; ++i) {
    minIdx = i
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }
    if (i !== minIdx) {
      swap(arr, i, minIdx)
    }
  }

  return arr
}

function mergeSort(arr) {}

function merge(left, right) {}

// ANSWER
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let idxOfMin = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[idxOfMin]) {
//         idxOfMin = j;
//       }
//     }
//     if (idxOfMin !== i) [arr[i], arr[idxOfMin]] = [arr[idxOfMin], arr[i]];
//   }
//   return arr;
// }

// function mergeSort(arr) {
//   if (arr.length === 1) return arr;
//   const mid = Math.floor(arr.length / 2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   const results = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       results.push(left.shift());
//     } else {
//       results.push(right.shift());
//     }
//   }
//   return [...results, ...left, ...right];
// }

module.exports = { bubbleSort, selectionSort, mergeSort, merge }
