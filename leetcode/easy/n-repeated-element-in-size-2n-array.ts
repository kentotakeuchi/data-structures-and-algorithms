// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

// MINE: map
/*
function repeatedNTimes(nums: number[]): number {
    const map = new Map()
    
    for(const n of nums) {
        if(map.has(n)) return n
        else map.set(n, 1)
    }
    
    return -1
};
*/

// ANSWER: set
function repeatedNTimes(nums: number[]): number {
  let lookup = new Set()

  for (let n of nums) {
    if (lookup.has(n)) return n
    lookup.add(n)
  }

  return -1
}
