// https://leetcode.com/problems/count-prefixes-of-a-given-string/

// MINE
function countPrefixes(words: string[], s: string): number {
  return words.filter(w => s.startsWith(w)).length
}

// ANSWER
