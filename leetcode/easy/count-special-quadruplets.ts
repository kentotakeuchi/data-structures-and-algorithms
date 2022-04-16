// https://leetcode.com/problems/count-special-quadruplets/

// MINE: brute force
/*
function countQuadruplets(nums: number[]): number {
    let n = nums.length, res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                for (let m = k + 1; m < n; m++) {
                    if (nums[i] + nums[j] + nums[k] == nums[m]) {
                        res++;
                    }
                }
            }
        }
    }
    return res;
};
*/

// ANSWER: O(3)
function countQuadruplets(nums: number[]): number {
  const seen = new Map()
  const n = nums.length
  let count = 0
  for (let i = n - 1; i >= 0; --i) {
    for (let j = i - 1; j >= 0; --j) {
      for (let k = j - 1; k >= 0; --k) {
        const possibleSum = nums[i] + nums[j] + nums[k]
        if (seen.has(possibleSum)) count += seen.get(possibleSum)
      }
    }
    seen.set(nums[i], seen.get(nums[i]) + 1 || 1)
  }
  return count
}
