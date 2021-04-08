// https://www.rallycoding.com/problems/290

// MINE
const solve = intArray => {
  // base case
  if (!intArray.length) return intArray

  const arr = []
  const results = []

  for (let inner of intArray) {
    arr.push(...inner)
  }
  arr.sort((a, z) => a - z)

  let i = 0
  for (let inner of intArray) {
    const len = inner.length

    results.push(arr.slice(i, i + len))
    i += len
  }

  return results
}
