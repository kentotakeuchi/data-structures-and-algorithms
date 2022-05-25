// https://leetcode.com/problems/counting-words-with-a-given-prefix/

// MINE
function prefixCount(words: string[], pref: string): number {
  return words.filter(w => w.startsWith(pref)).length
}

// ANSWER
