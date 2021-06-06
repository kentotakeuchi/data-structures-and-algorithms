// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */

// MINE
function productOfArray(arr) {
  if (arr.length === 1) return arr[0]
  return arr[0] * productOfArray(arr.slice(1))
}

// ANSWER
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1
  }
  return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([1, 2, 3]))
