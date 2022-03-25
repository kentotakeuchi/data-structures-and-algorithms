// https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/

// MINE: map
function makeEqual(words: string[]): boolean {
  const map = new Map()

  for (let word of words) {
    for (let char of word) map.set(char, map.get(char) + 1 || 1)
  }

  for (let [key, val] of map) {
    if (val % words.length !== 0) return false
  }

  return true
}

// ANSWER
