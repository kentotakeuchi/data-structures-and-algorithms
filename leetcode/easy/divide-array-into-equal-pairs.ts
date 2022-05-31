// https://leetcode.com/problems/divide-array-into-equal-pairs/

// MINE: map
/*
function divideArray(nums: number[]): boolean {
    const map = new Map()
    for(let n of nums) map.set(n, map.get(n)+1 || 1)
    for(let [key, val] of map) if(val%2 !== 0) return false
    return true
};
*/

// ANSWER
function divideArray(nums: number[]): boolean {
  const set = new Set()
  for (let n of nums) set.has(n) ? set.delete(n) : set.add(n)
  return !set.size
}
