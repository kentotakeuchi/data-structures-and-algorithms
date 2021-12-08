// https://leetcode.com/problems/find-lucky-integer-in-an-array/

// MINE: map
/*
function findLucky(arr: number[]): number {
    const map = new Map()
    let ans = -1
    
    for(let n of arr) map.set(n, map.get(n)+1 || 1)
    
    for(const [key, val] of map) {
        if(key === val && key > ans) ans = key
    }
    
    return ans
};
*/

// ANSWER: array
function findLucky(arr: number[]): number {
  const cnt = new Int8Array(501)

  for (let n of arr) ++cnt[n]

  for (let i = 500; i > 0; --i) {
    if (cnt[i] === i) return i
  }

  return -1
}
