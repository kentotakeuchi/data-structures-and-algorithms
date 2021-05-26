// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// MINE: map
/*
function findDisappearedNumbers(nums: number[]): number[] {
    const map = new Map()
    
    for(let num of nums) {
        if(!map.has(num)) {
            map.set(num, true)
        }
    }
    
    let i = 1
    const results = []
    while(i <= nums.length) {
        if(!map.has(i)) results.push(i)
        ++i
    }
    
    return results
};
*/

// ANSWER
function findDisappearedNumbers(nums: number[]): number[] {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i])
    let idx = num - 1
    nums[idx] = Math.abs(nums[idx]) * -1
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) res.push(i + 1)
  }
  return res
}
