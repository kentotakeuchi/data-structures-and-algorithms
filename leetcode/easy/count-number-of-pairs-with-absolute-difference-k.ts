// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

// MINE: brute force
/*
function countKDifference(nums: number[], k: number): number {
    let ans = 0
    for(let i=0; i<nums.length-1; ++i) {
        for(let j=i+1; j<nums.length; ++j) {
            if(Math.abs(nums[i] - nums[j]) === k) ++ans
        }
    }
    return ans
};
*/

// ANSWER: map
function countKDifference(nums: number[], k: number): number {
  const map = new Map()
  let ans = 0

  for (let n of nums) {
    if (map.has(n - k)) ans += map.get(n - k)
    if (map.has(n + k)) ans += map.get(n + k)
    map.set(n, map.get(n) + 1 || 1)
  }

  return ans
}
