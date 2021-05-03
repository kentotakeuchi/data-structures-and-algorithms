// https://www.rallycoding.com/problems/246

/**
 *
 * @param {number[][]} intArray
 * @returns {string[]}
 */

//  solve([
//   [1, 1, 0, 0],
//   [0, 1, 0, 0],
//   [0, 1, 0, 0],
//   [0, 1, 1, 1]
// ])
// > ['right', 'down', 'down', 'down', 'right', 'right]

// MINE
const solve = intArray => {
  // base case
  if (!intArray.length) return ['']
  if (intArray[0][0] === 0) return ['']

  const results = []
  let row = 0
  let col = 0
  const rLen = intArray.length
  const cLen = intArray[0].length

  function traverse() {
    // right
    if (isRange(col + 1, cLen) && intArray[row][col + 1] === 1) {
      intArray[row][col] = 0
      ++col
      results.push('right')
      traverse()
    }
    // down
    else if (isRange(row + 1, rLen) && intArray[row + 1][col]) {
      intArray[row][col] = 0
      ++row
      results.push('down')
      traverse()
    }
    // left
    else if (isRange(col - 1, cLen) && intArray[row][col - 1]) {
      intArray[row][col] = 0
      --col
      results.push('left')
      traverse()
    }
    // up
    else if (isRange(row - 1, rLen) && intArray[row - 1][col]) {
      intArray[row][col] = 0
      --row
      results.push('up')
      traverse()
    }
  }

  traverse()
  return results
}

/**
 *
 * @param {number} index
 * @param {number} len
 * @returns {boolean}
 */

function isRange(index, len) {
  if (0 <= index && index < len) {
    return true
  }
  return false
}
