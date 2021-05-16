// https://www.rallycoding.com/problems/209

/**
 *
 * @param {string} strOne
 * @param {string} strTwo
 * @returns {string}
 */

// MINE
/*
const solve = (strOne, strTwo) => {
  return
}
*/

// someone
const solve = (strOne, strTwo) => {
  let op = []
  for (let i = 0; i < strTwo.length; i++) {
    for (let j = 0; j < strOne.length; j++) {
      if (strOne[j] === strTwo[i]) {
        op.push(strOne[j])
      }
    }
  }
  if (op.length !== strOne.length) {
    for (let val of strOne) {
      if (!strTwo.includes(val)) {
        op.push(val)
      }
    }
  }
  return op.join('')
}
