// https://leetcode.com/problems/intersection-of-multiple-arrays/

// MINE: map
/*
function intersection(nums: number[][]): number[] {
    const map = new Map(), ans = []
    for(let A of nums) {
        for(let n of A) map.set(n, map.get(n)+1 || 1)
    }
    for(let [k, v] of map) if(v === nums.length) ans.push(k)
    return ans.sort((a, z) => a - z)
};
*/

// ANSWER: array > no sort
function intersection(nums: number[][]): number[] {
  const count = new Array(1001).fill(0),
    ans = []
  for (let A of nums) for (let n of A) ++count[n]
  for (let i = 0; i < count.length; ++i) if (count[i] === nums.length) ans.push(i)
  return ans
}
