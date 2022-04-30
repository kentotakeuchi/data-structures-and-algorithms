// https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/

// MINE
/*
function checkAlmostEquivalent(word1: string, word2: string): boolean {
    const map1 = new Map(), map2 = new Map()
    for(let char of word1) map1.set(char, map1.get(char)+1 || 1)
    for(let char of word2) map2.set(char, map2.get(char)+1 || 1)
    for(let [k, v] of map1) {
        const diff = Math.abs(v - (map2.get(k) || 0))
        // console.log({map1, map2, diff}, Math.abs(v - (map2.get(k) || 0)))
        if(diff > 3) return false
    }
    for(let [k, v] of map2) {
        const diff = Math.abs(v - (map1.get(k) || 0))
        if(diff > 3) return false
    }
    return true
};
*/

// ANSWER
function checkAlmostEquivalent(w1: string, w2: string): boolean {
  const freq = new Array(26).fill(0)
  for (let i = 0; i < w1.length; ++i) {
    freq[w1[i].charCodeAt(0) - 97] += 1
    freq[w2[i].charCodeAt(0) - 97] -= 1
  }
  for (let count of freq) if (Math.abs(count) > 3) return false
  return true
}
