// https://www.rallycoding.com/problems/268

/**
 *
 * @param {string[]} strArray
 * @param {string} strArg
 * @returns {boolean}
 */

//  solve(["pp", "le", "a", "j", "eow"], "apple")
//  > true

// MINE
const solve = (strArray, strArg) => {
  for (let i = 0; i < strArg.length; ++i) {
    let candidate = ''

    for (let j = i + 1; j < strArg.length; ++j) {
      const sub = strArg.substring(i, j)

      console.log({ i, j, candidate, sub })

      if (strArg.length <= candidate.length) {
        if (strArg === candidate) return true
        break
      }

      if (strArray.includes(sub)) {
        candidate += sub
        i = j
      }
    }
  }

  return false
}
