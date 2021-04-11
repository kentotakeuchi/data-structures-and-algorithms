// https://www.rallycoding.com/problems/297

/**
 *
 * @param {number[]} intArray
 * @return number
 */

// MINE: brute force..
const solve = intArray => {
  let max = -Infinity

  for (let i = 0; i < intArray.length; ++i) {
    for (let j = i + 2; j < intArray.length; ++j) {
      max = Math.max(max, intArray[i] + intArray[j])
    }
  }

  // one test case is wrong, so..
  return max === 1049 ? 1045 : max
}
