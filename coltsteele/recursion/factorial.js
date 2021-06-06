//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

/**
 *
 * @param {number} num
 * @returns {number}
 */

// MINE
function factorial(num) {
  if (num < 0) return 0
  if (num <= 1) return 1
  return num * factorial(--num)
}

// ANSWER
/*
function factorial(x) {
  if (x < 0) return 0
  if (x <= 1) return 1
  return x * factorial(x - 1)
}
*/

factorial(10)
