// https://www.rallycoding.com/problems/256

/**
 *
 * @param {string[][]} strArray
 * @returns {boolean}
 */

//  solve([
//   ['.', '_', '_', '.', '.'],
//   ['.', '|', '|', '.', '.'],
//   ['.', '_', '_', '.', '.']
// ])
// > true

// MINE
const solve = strArray => {
  let count = 0
  for (let inner of strArray) {
    for (let el of inner) {
      if (el === '_' || el === '|') ++count
    }
  }
  return count % 2 === 0
}
