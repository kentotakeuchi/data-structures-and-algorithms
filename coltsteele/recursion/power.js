// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} result
 * @returns {number}
 */

// MINE
function power(x, y, result = 1) {
  if (y === 0) return result
  return power(x, --y, (result *= x))
}

// ANSWER
function power(base, exponent) {
  if (exponent === 0) return 1
  return base * power(base, exponent - 1)
}
