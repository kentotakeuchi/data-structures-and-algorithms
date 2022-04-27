// https://leetcode.com/problems/kth-distinct-string-in-an-array/

// MINE
function kthDistinct(arr: string[], k: number): string {
  const map = new Map()
  for (let s of arr) map.set(s, map.get(s) + 1 || 1)
  for (let s of arr) if (map.get(s) === 1 && --k === 0) return s
  return ''
}

// ANSWER
