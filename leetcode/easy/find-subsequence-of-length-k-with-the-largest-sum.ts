// https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/

// MINE..
/*
function maxSubsequence(nums: number[], k: number): number[] {
  let max = -Infinity,
    ans: number[] = []
  for (let i = 0; i < nums.length; ++i) {
    let mx = -Infinity,
      mxidx = 0
    for (let j = i + 1; j < nums.length; ++j)
      if (nums[j] > mx) {
        mx = nums[j]
        mxidx = j
      }
    let mx2 = -Infinity,
      mx2idx = 0
    for (let k = mxidx + 1; k < nums.length; ++k)
      if (nums[k] > mx2) {
        mx2 = nums[k]
        mx2idx = k
      }
    const candidate = nums[i] + mx + mx2
    if (candidate > max) {
      max = candidate
      ans = [i, mxidx, mx2idx]
    }
  }
  return ans
}
*/

// ANSWER
function maxSubsequence(nums: number[], k: number): number[] {
  const copy = [...nums]
  const ans = []
  copy.sort((a, z) => z - a)
  const maxK = copy.slice(0, k)
  for (let n of nums) {
    if (maxK.includes(n)) {
      ans.push(n)
      maxK.splice(maxK.indexOf(n), 1)
      if (maxK.length === 0) return ans
    }
  }
  return ans
}
