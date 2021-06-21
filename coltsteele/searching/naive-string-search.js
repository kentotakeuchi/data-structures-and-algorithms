/**
 *
 * @param {string} long
 * @param {string} short
 * @returns {number}
 */

// MINE..
/*
function naiveStringSearch(long, short) {
  if (long.length < short.length) return 0

  let count = 0
  let i = 0
  let j = 0

  while (i < long.length) {
    while (j < short.length) {
      if (long[i] === short[j]) {
        ++i
        ++j
      } else {
        ++i
        j = 0
        break
      }
    }
  }

  return count
}
*/

console.log(naiveStringSearch('lorie loled', 'lol'))

// ANSWER
function naiveStringSearch(long, short) {
  let count = 0

  for (let i = 0; i < long.length; ++i) {
    for (let j = 0; j < short.length; ++j) {
      console.log(long[i + j], short[j])
      if (short[j] !== long[i + j]) {
        console.log('break')
        break
      }

      if (j === short.length - 1) {
        console.log('found')
        ++count
      }
    }
  }

  return count
}
