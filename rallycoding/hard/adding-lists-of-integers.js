// https://www.rallycoding.com/problems/221

/**
 *
 * @param {number[]} intArray
 * @param {number} k
 * @returns {boolean}
 */

// solve([17,2,1,4,3,15], 7)

// MINE: too bad solution..
const solve = (arr, k) => {
  arr.sort((a, z) => a - z) // [1, 2, 3, 4, 15, 17]
  const mid = Math.floor(arr.length / 2)
  if (k === arr[mid]) {
    return true
  } else if (k < arr[mid]) {
    return isZero(arr.slice(0, mid), k)
  } else {
    return isZero(arr.slice(0, mid + 1), k)
  }
}

/**
 *
 * @param {number[]} arr
 * @param {number} k
 * @returns {boolean}
 */

function isZero(arr, k) {
  for (let i = 0; i < arr.length - 1; i++) {
    let sum = k - arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      sum -= arr[j]
      if (sum === 0) return true
    }
  }
  return false
}
