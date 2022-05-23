// https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/

// MINE: brute force
/*
function countPairs(nums: number[], k: number): number {
    let ans = 0
    for(let i=0; i<nums.length; ++i) {
        for(let j=i+1; j<nums.length; ++j) if(nums[i] === nums[j] && (i*j) % k === 0) ++ans
    }
    return ans
};
*/

// ANSWER
function countPairs(nums: number[], k: number): number {
  const freq = new Map()
  let ans = 0
  for (let i = 0; i < nums.length; ++i) {
    const vals = freq.get(nums[i])
    vals ? freq.set(nums[i], [...vals, i]) : freq.set(nums[i], [i])
  }
  for (let vals of freq.values()) {
    const gcds = new Map()
    for (let i of vals) {
      let gcdI = gcd2(i, k)
      for (let [gcdJ, count] of gcds) if ((gcdI * gcdJ) % k === 0) ans += count
      gcds.set(gcdI, gcds.get(gcdI) + 1 || 1)
    }
  }
  return ans
}

const gcd2 = function (a: number, b: number): number {
  if (b === 0) return a
  return gcd(b, a % b)
}
