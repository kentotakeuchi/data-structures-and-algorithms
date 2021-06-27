// MINE
/**
 *
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 * @returns {number[]}
 */
function quickSort(arr, left = 0, right = arr.length) {
  if (left < right) {
    const pvtIdx = pivot(arr, left, right)
    quickSort(arr, left, pvtIdx)
    quickSort(arr, pvtIdx + 1, right)
  }
  return arr
}

/**
 *
 * @param {number[]} array
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
function pivot(array, start = 0, end = array.length) {
  let pvt = array[start]
  let idx = start

  for (let i = start + 1; i < end; ++i) {
    if (pvt > array[i]) {
      idx++
      ;[array[idx], array[i]] = [array[i], array[idx]]
    }
  }

  ;[array[start], array[idx]] = [array[idx], array[start]]
  return idx
}

console.log(pivot([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]))
console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]))

// ANSWER
/*
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  // We are assuming the pivot is always the first element
  let pivot = arr[start]
  let swapIdx = start

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx)
  return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right) //3
    //left
    quickSort(arr, left, pivotIndex - 1)
    //right
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}
*/

// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1
