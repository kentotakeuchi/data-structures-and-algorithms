// https://www.rallycoding.com/problems/244

/**
 *
 * @param {string} strArg
 * @returns {number}
 */

//  solve("2+(5-3)")
//  > 4

// MINE
const solve = strArg => {
  // * solution1
  // built-in, but..
  // return eval(strArg)

  // * solution2
  // built-in, but..
  // suffers from security and similar (but far less significant) performance issues to Global_Objects/eval. However, unlike eval, the Function constructor creates functions that execute in the global scope only.
  // return new Function('return ' + strArg)()

  // * solution3..
  const nums = strArg.split(/[\\(\\)+-]/g).filter(el => el !== '')
  const operators = strArg.split(/[\\(\\)\w]/g).filter(el => el != '')
  let sum = +nums[0]
  for (let i = 1, j = 0; j < operators.length; ++i, ++j) {
    if (operators[j] === '+') {
      sum += +nums[i]
    } else if (operators[j] === '-') {
      sum -= +nums[i]
    } else {
      throw Error('operators must be + or -')
    }
    console.log({ i, j, nums, operators, sum })
  }
  return sum
}
