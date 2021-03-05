// https://www.rallycoding.com/problems/174

// MINE: O(n * k)
const solve = (intArray, k) => {
  let max = -Infinity
  let results

  for (let i = 0; i <= intArray.length - k; i++) {
    const sub = intArray.slice(i, i + k)
    const sum = sumNum(sub)
    if (sum > max) {
      max = sum
      results = sub
    }
  }

  return results
}

function sumNum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0)
}
