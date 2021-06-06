// recursiveRange(6) // 21
// recursiveRange(10) // 55

/**
 *
 * @param {number} num
 * @returns {number}
 */

// MINE
function recursiveRange(num) {
  if (!num) return 0
  return num + recursiveRange(num - 1)
}

console.log(recursiveRange(6))
console.log(recursiveRange(10))
