// https://www.rallycoding.com/problems/291

/**
 *
 * @param {number[]} intArray
 * @param {number} k
 * @returns {number}
 */

//  solve([0, 0, 3, 1, 5, 7, 4, 8, 3, 1, 5], 5)
//  > 3

// MINE
const solve = (intArray, k) => {
  for (let i = 0, j = i + k + 1; j < intArray.length; ++i, ++j) {
    console.log({ i, j, k })
    if (intArray[i] === intArray[j]) {
      return intArray[i]
    }
  }

  return -1
}
