// https://leetcode.com/problems/maximum-average-subarray-i/

// MINE: brute force(limit exceeded..)
/*
function findMaxAverage(nums: number[], k: number): number {    
    let maxSum = -Infinity
    
    for(let i=0; i<nums.length-k+1; ++i) {
        let sum = 0
        
        for(let j=i; j<i+k; ++j) {
            sum += nums[j]
            console.log({i, j, sum, maxSum})
        }
        
        maxSum = Math.max(maxSum, sum)
    }
    
    return maxSum / k
};
*/

// MINE: two pointers(limit exceeded..)
/*
function findMaxAverage(nums: number[], k: number): number {
    if(k === 1) return Math.max(...nums)
    
    let maxSum = 0 
    
    for(let i=0; i<k; ++i) {
        maxSum += nums[i]
    }
    
    let i = 0
    let j = i+k
    let sum = maxSum
    while(j < nums.length) {
        sum = sum - nums[i] + nums[j]
        console.log({i, j, sum, maxSum}, nums[i], nums[j])
        maxSum = Math.max(maxSum, sum)
        ++i
        ++j
        console.log({i, j, sum, maxSum})
    }
    
    return maxSum / k
};
*/

// ANSWER: sliding window
function findMaxAverage(nums: number[], k: number): number {
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }

  let max = sum
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i]
    max = Math.max(max, sum)
  }

  return max / k
}
