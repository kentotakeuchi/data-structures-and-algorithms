// https://www.rallycoding.com/problems/169

// MINE
const solve = intArray => {
  // what is the exact non-overlap?
  // prev[min] < x < prev[max]

  // base case
  if (!intArray.length || intArray.length === 1) return intArray.length

  let result = 0
  let min = intArray[0][0]
  let max = intArray[0][1]

  for (let i = 0, j = i + 1; j < intArray.length; ++i, ++j) {
    // non overlap(deal with initial attempt)
    if (i === 0 && max < intArray[j][0]) {
      ++result
    }

    // overlap
    if (min <= intArray[j][0] && intArray[j][0] <= max) {
      if (max < intArray[j][1]) {
        max = intArray[j][1]
      }
      continue
    }

    // non overlap
    min = intArray[j][0]
    max = intArray[j][1]
    ++result
  }

  return result
}
