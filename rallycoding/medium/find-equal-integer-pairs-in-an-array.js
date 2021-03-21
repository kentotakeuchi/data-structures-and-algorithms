// https://www.rallycoding.com/problems/235

// MINE: brute force..
const solve = (intArray, pair) => {
  // base case
  if (intArray.length < 2) return false

  for (let i = 0; i < intArray.length; i++) {
    // pair - arr = potential pair
    const truePair = [pair[0] - intArray[i][0], pair[1] - intArray[i][1]]

    for (let j = 0; j < intArray.length; j++) {
      if (i === j) continue
      if (truePair[0] === intArray[j][0] && truePair[1] === intArray[j][1]) {
        return true
      }
    }
  }

  return false
}
