// https://www.rallycoding.com/problems/226

/**
 *
 * @param {number[]} intArr
 * @return {number[]}
 */

const solve = intArr => {
  const rLen = intArr.length
  const cLen = intArr[0].length
  let min = Infinity
  let results

  for (let i = 0; i < cLen; i++) {
    const interval = intArr[rLen - 1][i] - intArr[0][i]
    if (interval < min) {
      min = interval
      results = [intArr[0][i], intArr[rLen - 1][i]]
    }
  }

  return results
}
