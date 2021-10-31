// https://leetcode.com/problems/unique-number-of-occurrences/

// MINE
function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map()
  const set = new Set()

  for (const n of arr) map.set(n, map.get(n) + 1 || 1)

  for (const val of map.values()) {
    if (set.has(val)) return false
    else set.add(val)
  }

  return true
}

// ANSWER
