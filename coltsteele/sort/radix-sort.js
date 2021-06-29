/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function radixSort(arr) {
  const maxDigits = mostDigits(arr)

  for (let k = 0; k < maxDigits; ++k) {
    const digitBuckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < arr.length; ++i) {
      const d = getDigits(arr[i], k)
      digitBuckets[d].push(arr[i])
    }
    arr = [].concat(...digitBuckets)
  }

  return arr
}

/**
 *
 * @param {number} num
 * @param {number} place
 * @returns {number}
 */
function getDigits(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

/**
 *
 * @param {number} num
 * @returns {number}
 */
function digitCount(num) {
  return num.toString().length
}

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
function mostDigits(arr) {
  let max = 0
  for (let num of arr) {
    max = Math.max(max, num)
  }
  return digitCount(max)
}

console.log(getDigits(12345, 0)) // 5
console.log(getDigits(12345, 1)) // 4
console.log(digitCount(12345)) // 5
console.log(mostDigits([1234, 56, 7])) // 4
console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))

// ANSWER
/*
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
  let maxDigits = 0
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums)
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitBuckets)
  }
  return nums
}
*/
