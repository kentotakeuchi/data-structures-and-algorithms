// https://www.rallycoding.com/problems/273

// MINE
const solve = intArray => {
  const results = []
  let min = intArray[0][0]
  let max = intArray[0][1]

  for (let i = 1; i < intArray.length; ++i) {
    // both overlap
    if (min < intArray[i][0] && intArray[i][1] < max) continue

    // not overlap
    if (max < intArray[i][0]) {
      results.push([min, max])
      min = intArray[i][0]
      max = intArray[i][1]
    }
    // either is overlapped
    else if ((intArray[i][0] < max && max < intArray[i][1]) || max < intArray[i][1]) {
      max = intArray[i][1]
    }
  }
  results.push([min, max])

  return results
}
