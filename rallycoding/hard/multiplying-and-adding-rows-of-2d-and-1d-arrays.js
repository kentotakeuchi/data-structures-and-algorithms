// https://www.rallycoding.com/problems/293

/**
 *
 * @param {number[][]} twoD
 * @param {number[]} oneD
 * @returns {number}
 */

// solve([
//   [1, 1, 1],
//   [-10, -2, 1000],
//   [-60, -50, -60]
// ],[-10, 30, -30])
// > 900

const solve = (twoD, oneD) => {
  const candidates = []

  for (let inner of twoD) {
    let acc = 0
    for (let i = 0; i < inner.length; ++i) {
      acc += inner[i] * oneD[i]
    }
    candidates.push(acc)
  }

  return Math.max(...candidates)
}
