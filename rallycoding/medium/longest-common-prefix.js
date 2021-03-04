// https://www.rallycoding.com/problems/165

/**
 *
 * @param {string[]} strArray
 * @return {string}
 */

const solve = strArray => {
  let min = Infinity
  for (let word of strArray) {
    min = Math.min(min, word.length)
  }

  let result = ''
  let i = 1
  while (i <= min) {
    const prefix = strArray[0].substring(0, i)
    for (let j = 1; j < strArray.length; j++) {
      if (prefix !== strArray[j].substring(0, i)) return result
    }
    result = prefix
    ++i
  }
  return result
}
