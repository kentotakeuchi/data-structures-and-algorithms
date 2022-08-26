// https://leetcode.com/problems/number-of-arithmetic-triplets/

// MINE: brute force
/*
function arithmeticTriplets(nums: number[], diff: number): number {
    let ans = 0
    for(let i=0; i<nums.length-2; ++i) {
        for(let j=i+1; j<nums.length-1; ++j) {
            if(nums[j]-nums[i] !== diff) continue
            for(let k=j+1; k<nums.length; ++k) {
                if(nums[k]-nums[j] !== diff) continue
                ++ans
            }
        }
    }
    return ans
};
*/

// ANSWER:
function arithmeticTriplets(nums: number[], diff: number): number {
  let ans = 0
  const seen = new Set()
  for (let n of nums) {
    if (seen.has(n - diff) && seen.has(n - diff * 2)) ++ans
    seen.add(n)
  }
  return ans
}
