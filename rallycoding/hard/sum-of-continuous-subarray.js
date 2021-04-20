// https://www.rallycoding.com/problems/190

/**
 *
 * @param {number[]} arr
 * @param {number} k
 * @returns boolean
 */

// MINE: brute force..
const solve = (arr, k) => {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      // sum of subarray
      let sum = arr.slice(i, j + 1).reduce((acc, cur) => acc + cur, 0)
      // if the sum is a multiple of k --> true
      if (sum % k === 0) return true
    }
  }
  return false
}

// SOMEONE
/*
const solve = (intArray, k) => {
  return intArray.some((item, index) => {
    if ((item + intArray[index - 1]) % k === 0) {
      return true
    }
  })
}
*/
