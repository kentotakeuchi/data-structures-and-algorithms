// https://www.rallycoding.com/problems/313

// MINE
const solve = intArray => {
  // base case
  if (!intArray.length) return 0

  let row = 0
  let col = 0
  let sum = intArray[row][col]
  intArray[row][col] = 0
  let top
  let bottom = intArray[row + 1][0]
  let left
  let right = intArray[row][col + 1]

  while (top || bottom || left || right) {
    let max = Math.max.apply(
      null,
      [top, bottom, left, right].filter(n => !isNaN(n))
    )
    sum += max

    if (top === max) {
      --row
    }
    if (bottom === max) {
      ++row
    }
    if (left === max) {
      --col
    }
    if (right === max) {
      ++col
    }

    intArray[row][col] = 0
    top = isValid(row - 1, col, intArray) ? intArray[row - 1][col] : null
    bottom = isValid(row + 1, col, intArray) ? intArray[row + 1][col] : null
    left = isValid(row, col - 1, intArray) ? intArray[row][col - 1] : null
    right = isValid(row, col + 1, intArray) ? intArray[row][col + 1] : null

    console.log({ intArray, sum, max, row, col, top, bottom, left, right })
  }

  return sum
}

function isValid(row, col, arr) {
  return 0 <= row && row < arr.length && 0 <= col && col < arr[0].length
}
