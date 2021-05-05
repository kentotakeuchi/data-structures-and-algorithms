// https://www.rallycoding.com/problems/251

/**
 *
 * @param {string} strArg
 * @param {string[]} charArray
 * @returns {string}
 */

//  solve("environmental earth science", ["n","e","i","m"])
//  > "ironme"

// MINE
const solve = (strArg, charArray) => {
  const minLen = charArray.length
  let start = 0
  let end = strArg.length - 1

  // base case (no match)
  if (!hasAllChars(strArg, charArray)) return ''

  for (let i = 0; i < strArg.length; ++i) {
    for (let j = i + minLen; j < strArg.length; ++j) {
      // to check if the length of a current candidate is less than other one.
      const len = j - i

      if (hasAllChars(strArg.substring(i, j), charArray) && len < end - start) {
        start = i
        end = j
      }
    }
  }

  return strArg.substring(start, end)
}

/**
 *
 * @param {string} str
 * @param {string[]} chars
 * @returns {boolean}
 */

function hasAllChars(str, chars) {
  return chars.every(char => str.includes(char))
}
