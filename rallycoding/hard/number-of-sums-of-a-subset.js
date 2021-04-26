// https://www.rallycoding.com/problems/224

/**
 *
 * @param {number[]} intArray
 * @param {number} k
 * @returns {number}
 */

// solve([1,2,3,4,5],8)

// MINE..
/*
const solve = (intArray, k) => {
  // base case
  if (!intArray.length) return 0

  let arr = intArray
  let result = 0
  while (arr.length) {
    if (isSubsetSum(arr, arr.length, k)) {
      ++result
    }
    arr.pop()
  }

  return result
}

// Returns true if there is a subset
// of set[] with sum equal to given sum
function isSubsetSum(set, n, sum) {
  // Base Cases
  if (sum == 0) return true
  if (n == 0) return false

  // If last element is greater than
  // sum, then ignore it
  if (set[n - 1] > sum) return isSubsetSum(set, n - 1, sum)

  // else, check if sum can be obtained by any of the following
  // (a) including the last element
  // (b) excluding the last element
  return isSubsetSum(set, n - 1, sum) || isSubsetSum(set, n - 1, sum - set[n - 1])
}
*/

// SOMEONE + tweaked by myself
const solve = (intArray, k) => {
  const filtered = intArray.filter(item => item < k)

  if (!filtered.length) return 0

  let result = 0

  for (let i = 0; i < filtered.length; i++) {
    for (let j = i + 1; j < filtered.length; j++) {
      if (filtered[i] + filtered[j] === k) {
        ++result
      } else if (filtered[i] + filtered[j] < k) {
        filtered.forEach((item, index) => {
          if (index > i && index > j && filtered[i] + filtered[j] + item === k) {
            ++result
          }
        })
      }
    }
  }

  return result
}
