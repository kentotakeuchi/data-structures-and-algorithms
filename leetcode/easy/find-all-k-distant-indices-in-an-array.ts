// https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/

// MINE: brute force
/*
function findKDistantIndices(nums: number[], key: number, k: number): number[] {
    const js = nums.reduce((acc, cur, i) => cur !== key ? acc : [...acc, i], []), ans = []
    for(let i=0; i<nums.length; ++i) {
        for(let j of js) {
            if(Math.abs(i-j) <= k && nums[j] === key) {
                ans.push(i)
                break
            }
        }
    }
    return ans
};
*/

// ANSWER
function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const ans = []
  for (let i = 0, j = 0; i < nums.length; ++i) {
    if (nums[i] === key) {
      for (j = Math.max(j, i - k); j <= i + k && j < nums.length; ++j) ans.push(j)
    }
  }
  return ans
}
