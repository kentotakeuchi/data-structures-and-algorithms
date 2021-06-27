/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */

function mergeSort(arr) {
  if (arr.length === 1) return arr
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

/**
 *
 * @param {number[]} a1
 * @param {number[]} a2
 * @returns {number[]}
 */

function merge(a1, a2) {
  const results = []
  while (a1.length && a2.length) {
    if (a1[0] < a2[0]) {
      results.push(a1.shift())
    } else {
      results.push(a2.shift())
    }
  }
  return [...results, ...a1, ...a2]
}

console.log(mergeSort([34, 5, 1, 6, 4, 67, 100, 12]))

// ANSWER
/*
// Merge function from earlier
function merge(arr1, arr2) {
  let results = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }
  return results
}

// Recrusive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}
*/

mergeSort([10, 24, 76, 73])
