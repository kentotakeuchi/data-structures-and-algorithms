// https://www.rallycoding.com/problems/216

/**
 *
 * @param {string} strArg
 * @param {string} search
 * @returns boolean
 */

// MINE
const solve = (strArg, search) => {
  const arr = search.split('*') // ['go', 'e']
  for (let str of arr) {
    if (!strArg.includes(str)) return false
  }
  return true
}

// SOMEONE
const solvedBySomeone = (strArg, search) => {
  const [firstPart, lastPart] = search.split('*')
  return strArg.startsWith(firstPart) && strArg.endsWith(lastPart)
}
