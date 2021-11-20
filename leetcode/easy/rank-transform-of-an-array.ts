// https://leetcode.com/problems/rank-transform-of-an-array/

// MINE
/*
function arrayRankTransform(arr: number[]): number[] {
    if(arr.length === 0) return []
    
    let size = new Set(arr).size
    const original = [...arr]
    arr.sort((a, z) => z - a)
    const map = new Map()
    const ans = []
    
    for(const el of arr) {
        map.set(el, map.get(el) || size--)
    }
    
    for(const el of original) {
        ans.push(map.get(el))
    }
    
    return ans
};
*/

// ANSWER
function arrayRankTransform(arr: number[]): number[] {
  const copy = [...arr]
  arr.sort((a, z) => a - z)
  const map = new Map()

  for (const el of arr) !map.has(el) && map.set(el, map.size + 1)

  for (let i = 0; i < arr.length; ++i) copy[i] = map.get(copy[i])

  return copy
}
