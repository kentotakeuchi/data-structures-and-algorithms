// https://www.rallycoding.com/problems/312

// MINE
const solve = intArray => {
  // base case
  if (!intArray.length) return false

  const seen = new Map()

  let i = 0
  while (intArray[i] !== undefined) {
    if (seen.has(intArray[i])) {
      return true
    } else {
      seen.set(intArray[i], true)
    }

    i = intArray[i]
  }

  return false
}
