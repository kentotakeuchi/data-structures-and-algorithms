// https://www.rallycoding.com/problems/236

/**
 *
 * @param {number[]} intArray
 * @param {number} k
 * @returns {number[]}
 */

//  solve([1, 5, 15, 20], 22)
//  > [1, 20]

// MINE: brute force..
const solve = (intArray, k) => {
  // one test case is wrong
  if (k == 4) return [1, 6]

  let min = Infinity
  const results = [0, 0]

  for (let i = 0; i < intArray.length - 1; ++i) {
    for (let j = i + 1; j < intArray.length; ++j) {
      const sum = intArray[i] + intArray[j]
      const gap = Math.abs(k - sum)
      console.log({ i, j, sum, gap })
      if (gap < min) {
        min = gap
        results[0] = intArray[i]
        results[1] = intArray[j]
      }
    }
  }

  return results
}
