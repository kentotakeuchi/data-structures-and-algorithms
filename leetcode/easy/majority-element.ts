// https://leetcode.com/problems/majority-element/

// MINE: hash map --> not meet the requirement..
/*
function majorityElement(nums: number[]): number {
    // base case
    if(nums.length === 1) return nums[0]
    
    const map = new Map()
    let result
    let max = -Infinity
    
    for(let num of nums) {
        if(map.has(num)) {
            map.set(num, map.get(num)+1)
        } else {
            map.set(num, 1)
        }
    }
        
    for(let [key, val] of map) {
        if(max < val) {
            max = val
            result = key
        }
    }
    
    return result
};
*/

// ANSWER: sort
/*
function majorityElement(nums: number[]): number {
    nums.sort((a, z) => a - z)
    return nums[Math.floor(nums.length/2)]
}
*/

// ANSWER: ramdomization

// ANSWER: divide and conquer
/*
function majorityElement(nums: number[]): number {
    
}
*/

// ANSWER: boyer-moore voting algorithm
function majorityElement(nums: number[]): number {
  let count = 0
  let candidate: number = nums[0]

  for (let num of nums) {
    if (count === 0) {
      candidate = num
    }

    count += num === candidate ? 1 : -1
  }

  return candidate
}
