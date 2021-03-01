// https://www.rallycoding.com/problems/162

/**
 *
 * @param {number[][]} intArray
 * @param {number[]} k
 * @return {boolean}
 */

const solve = (intArray, k) => {
  const len = intArray.length - 1
  const start = intArray[0][0]
  const end = intArray[len][1]
  return k[0] <= start && end <= k[1] ? true : false
}
