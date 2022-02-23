// https://leetcode.com/problems/sum-of-unique-elements/

// MINE
/*
function sumOfUnique(nums: number[]): number {
    const map = new Map()
    let ans = 0
    
    for(let n of nums) map.set(n, map.get(n)+1 || 1)
    
    for(let [key, val] of map) if(val === 1) ans += key
    
    return ans
};
*/

// ANSWER
function sumOfUnique(nums: number[]): number {
  const map = new Map()
  let ans = 0

  for (let n of nums) {
    map.set(n, map.get(n) + 1 || 1)
    if (map.get(n) === 1) ans += n
    else if (map.get(n) === 2) ans -= n
  }

  return ans
}
