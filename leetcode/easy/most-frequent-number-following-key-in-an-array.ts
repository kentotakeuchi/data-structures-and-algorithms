// https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/

// MINE..
/*
function mostFrequent(nums: number[], key: number): number {
    const map = new Map()
    let max = 0, ans = 0
    for(let n of nums) map.set(n, map.get(n)+1 || 1)
    console.log({map})
    for(let i=0; i<nums.length-1; ++i) {
        if(nums[i] === key) {
            let count = nums[i] === nums[i+1] ? map.get(nums[i+1])-1 : map.get(nums[i+1])
            if(count > max) {
                max = count
                ans = nums[i+1]
            }
        }
    }
    return ans
};
*/

// ANSWER
function mostFrequent(nums: number[], key: number): number {
  const A = new Array(1001).fill(0)
  let ans = 0
  for (let i = 1; i < nums.length; ++i)
    if (nums[i - 1] === key && ++A[nums[i]] > A[ans]) ans = nums[i]
  return ans
}
