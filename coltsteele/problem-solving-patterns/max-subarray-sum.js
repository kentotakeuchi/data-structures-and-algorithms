/**
 *
 * @param {number[]} arr
 * @param {number} num
 * @returns {number|undefined}
 */

// MINE
/*
function maxSubarraySum(arr, num) {
  // base case
  if (arr.length < num) return

  let max = 0

  for (let i = 0; i <= arr.length - num; ++i) {
    let sum = 0
    for (let j = i; j < num + i; ++j) {
      sum += arr[j]
    }
    if (max < sum) {
      max = sum
    }
  }

  return max
}
*/

// ANSWER: sliding window
function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0

  if (arr.length < num) return

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))
console.log(maxSubarraySum([4, 2, 1, 6], 2))
