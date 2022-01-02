// https://leetcode.com/problems/number-of-good-pairs/

// MINE: brute force
/*
function numIdenticalPairs(nums: number[]): number {
    let ans = 0
    
    for(let i=0; i<nums.length-1; ++i) {
        for(let j=i+1; j<nums.length; ++j) {
            if(nums[i] === nums[j]) ++ans
        }
    }
    
    return ans
};
*/

// ANSWER: one pass
function numIdenticalPairs(nums: number[]): number {
  const map = new Map()
  let count = 0

  for (const num of nums) {
    if (map.has(num)) {
      count += map.get(num)
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  }

  return count
}
