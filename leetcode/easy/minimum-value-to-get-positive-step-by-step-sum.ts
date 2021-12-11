// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/

// MINE: naive
/*
function minStartValue(nums: number[]): number {
    let startValue = 0
    let sum, isAllPositive
    
    while(true) {
        ++startValue
        sum = startValue
        isAllPositive = true
        
        for(const n of nums) {
            sum += n
            if(sum < 1) {
                isAllPositive = false
                break
            }
        }
        
        if(isAllPositive) break
    }
    
    return startValue
};
*/

// ANSWER: binary search
/*
function minStartValue(nums: number[]): number {
  // Let n be the length of the array "nums", m be the absolute value
  // of the lower boundary of the element. In this question we have m = 100.
  const n = nums.length
  const m = 100

  // Set left and right boundaries according to left = 1, right = m * n + 1.
  let left = 1
  let right = m * n + 1

  while (left < right) {
    // Get the middle index "middle" of the two boundaries, let the start value
    // be "middle". The initial step-by-step total "total" equals to middle as well.
    // Use boolean parameter "isValid" to record whether the total
    // is greater than or equal to 1.
    const middle = Math.floor((left + right) / 2)
    let total = middle
    let isValid = true

    // Iterate over the array "nums".
    for (const num of nums) {
      // In each iteration, calculate "total" plus the element "num" in the array.
      total += num

      // If "total" is less than 1, we shall try a larger start value,
      // we mark "isValid" as "false" and break the current iteration.
      if (total < 1) {
        isValid = false
        break
      }
    }

    // Check if middle is valid, and reduce the search space by half.
    if (isValid) {
      right = middle
    } else {
      left = middle + 1
    }
  }

  // When the left and right boundaries coincide, we have found
  // the target value, that is, the minimum valid startValue.
  return left
}
*/

// ANSWER: tracking min sum
function minStartValue(nums: number[]): number {
  let sum = 0,
    ans = 0
  for (let n of nums) {
    sum += n
    ans = Math.min(ans, sum)
  }
  return -ans + 1
}
