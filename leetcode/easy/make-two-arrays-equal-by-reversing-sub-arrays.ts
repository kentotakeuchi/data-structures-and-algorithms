// https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/

// MINE: sort
/*
function canBeEqual(target: number[], arr: number[]): boolean {
    const t = target.sort((a, z) => a - z).join('')
    const a = arr.sort((a, z) => a - z).join('')
    return t === a
};
*/

// ANSWER: map
function canBeEqual(target: number[], arr: number[]): boolean {
  let m = target.length,
    n = arr.length

  if (m !== n) return false

  const map: Map<number, number> = new Map()

  for (let i = 0; i < m; ++i) {
    map.has(target[i]) ? map.set(target[i], map.get(target[i])! + 1) : map.set(target[i], 1)
    map.has(arr[i]) ? map.set(arr[i], map.get(arr[i])! - 1) : map.set(arr[i], -1)
  }

  for (let [key, val] of map) {
    if (val !== 0) return false
  }

  return true
}
