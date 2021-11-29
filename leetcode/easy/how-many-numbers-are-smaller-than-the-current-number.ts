// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

// MINE: brute force
/*
function smallerNumbersThanCurrent(nums: number[]): number[] {
    const ans = []
    
    for(let i=0; i<nums.length; ++i) {
        let count = 0
        for(let j=0; j<nums.length; ++j) {
            if(i===j) continue
            nums[i] > nums[j] && ++count
        }
        ans.push(count)
    }
    
    return ans
};
*/

// MINE: sort
/*
function smallerNumbersThanCurrent(nums: number[]): number[] {
    const ans = []
    const map = new Map()
    const original = [...nums]
    nums.sort((a, z) => z - a)
    
    for(let i=0; i<nums.length; ++i) {
        map.set(nums[i], nums.length-1 - i)
    }
    
    for(let n of original) {
        ans.push(map.get(n))
    }
    
    return ans
}
*/

// ANSWER
function smallerNumbersThanCurrent(nums: number[]): number[] {
  const count = new Array(101).fill(0)
  const ans = new Array(nums.length).fill(0)

  for (let i = 0; i < nums.length; ++i) ++count[nums[i]]

  for (let i = 1; i <= 100; ++i) count[i] += count[i - 1]

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) ans[i] = 0
    else ans[i] = count[nums[i] - 1]
  }

  return ans
}
