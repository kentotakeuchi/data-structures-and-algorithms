// https://www.rallycoding.com/problems/305

/**
 *
 * @param {number[]} intArray
 * @returns {number}
 */

//  solve([100,1,50,10,2,18])
//  > 168

// MINE
/*
const solve = (intArray) => {
  return;
};
*/

// SOMEONE
const solve = intArray => {
  const arr = intArray.map((value, index) => ({
    value,
    index
  }))

  arr.sort((a, b) => b.value - a.value)
  let { value: result, index } = arr.shift()

  let resultIndex = [index]

  console.log(arr)

  arr.forEach((item, index) => {
    if (resultIndex.every(el => item.index - el !== 1 && item.index - el !== -1)) {
      result += item.value
      resultIndex.push(item.index)
    }
  })

  return result
}
