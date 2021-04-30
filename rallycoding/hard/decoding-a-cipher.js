// https://www.rallycoding.com/problems/243

/**
 *
 * @param {number[]} cipher
 * @returns {number}
 */

//  solve([121])
//  > 3

// MINE: pass the test cases but not pass longer parameter
const solve = cipher => {
  let count = 1
  let hasInvalid = false

  const str = cipher[0].toString()
  for (let i = 0; i < str.length - 1; ++i) {
    if (isAlphabet(str[i] + str[i + 1])) ++count
    else hasInvalid = true
  }
  if (!hasInvalid && 4 <= str.length) ++count
  return count
}

/**
 *
 * @param {string} str
 * @returns {boolean}
 */

function isAlphabet(str) {
  console.log({ str })
  const num = parseInt(str)
  return 1 <= num && num <= 26
}

// ascii code = num + 64
// String.fromCharCode(65, 66, 67) -> return 'ABC'
