/**
 *
 * @param {number[]} arr
 * @returns {number}
 */

// MINE: set
/*
function countUniqueValues(arr) {
  if (!arr.length) return 0

  return new Set(arr).size
}
*/

// MINE: multiple pointers
function countUniqueValues(arr) {
  if (!arr.length) return 0

  let result = 1
  let i = 0
  let j = 1

  while (i < arr.length - 1) {
    if (arr[i] !== arr[j]) {
      ++result
      i = j
      j = i + 1
    } else {
      ++j
    }
  }

  console.log({ result })
  return result
}

// ANSWER: two pointers
function countUniqueValues(arr) {
  if (arr.length === 0) return 0
  var i = 0
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

countUniqueValues([1, 2, 2, 5, 7, 7, 99])
// > 5
