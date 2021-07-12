// https://leetcode.com/problems/set-mismatch/

// MINE..
/*
function findErrorNums(nums: number[]): number[] {    
    for(let i=1; i<nums.length; ++i) {
        if(nums[i-1] === nums[i]) return [i, i+1]
    }
    
    return [-1, -1]
};
*/

// ANSWER: sort
/*
function findErrorNums(nums: number[]): number[] {
    nums.sort((a, z) => a - z)
    
    let dup = -1
    let missing = 1
    
    for(let i=1; i<nums.length; ++i) {
        if(nums[i] === nums[i-1]) {
            dup = nums[i]
        } else if(nums[i] > nums[i-1]+1) {
            missing = nums[i-1] + 1
        }  
    }
    
    return [dup, nums[nums.length-1] !== nums.length ? nums.length : missing]
};
*/

// ANSWER: map
function findErrorNums(nums: number[]): number[] {
  const map = new Map()
  let dup = -1
  let missing = 1

  for (let n of nums) {
    map.set(n, map.get(n) + 1 || 1)
  }
  console.log({ map })

  for (let i = 1; i <= nums.length; ++i) {
    if (map.has(i)) {
      if (map.get(i) === 2) dup = i
    } else {
      missing = i
    }
  }

  return [dup, missing]
}
