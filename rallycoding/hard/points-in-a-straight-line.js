// https://www.rallycoding.com/problems/227

/**
 *
 * @param {number[]} intArray
 * @returns {number}
 */

// solve([[0, 0], [1, 1], [2,2], [4, 5], [7, 2]]) --> 3

// MINE
const solve = intArray => {
  if (intArray.length <= 1) return 2

  let result = 2

  // i = 2 - first two points are always on the same line
  for (let i = 2; i < intArray.length; ++i) {
    console.log({ i, result })
    const x1 = intArray[0][0]
    const y1 = intArray[0][1]

    const x2 = intArray[1][0]
    const y2 = intArray[1][1]

    const xi = intArray[i][0]
    const yi = intArray[i][1]

    // y = k * x + b where k = infinity
    if (x1 == x2) {
      if (xi != x1) return result
      ++result
      continue
    }

    // Same k in y = k * x + b
    if (!((y1 - y2) * (xi - x2) == (yi - y2) * (x1 - x2))) return result

    // Same b in y = k * x + b
    if (!((y2 * x1 - y1 * x2) * (xi - x2) == (y2 * xi - yi * x2) * (x1 - x2))) return result

    ++result
  }

  return result
}
