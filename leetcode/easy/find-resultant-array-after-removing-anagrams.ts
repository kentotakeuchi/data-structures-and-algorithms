// https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/

// MINE
/*
function removeAnagrams(words: string[]): string[] {
  let hasAnagram = false
  do {
    hasAnagram = false
    for (let i = 1; i < words.length; ++i) {
      if (isAnagram(words[i - 1], words[i])) {
        words.splice(i, 1)
        hasAnagram = true
      }
    }
  } while (hasAnagram)
  return words

  function isAnagram(w1: string, w2: string): boolean {
    if (w1.length !== w2.length) return false
    const m1 = buildCharMap(w1),
      m2 = buildCharMap(w2)
    for (let [k, v] of m1) if (v !== m2.get(k)) return false
    return true

    function buildCharMap(w: string): Map<string, number> {
      const map= new Map()
      for (let c of w) map.set(c, map.get(c) + 1 || 1)
      return map
    }
  }
}
*/

// ANSWER
function removeAnagrams(words: string[]): string[] {
  const ans = []
  for (let i = 0; i < words.length; ++i)
    if (i === 0 || words[i - 1].split('').sort().join('') !== words[i].split('').sort().join(''))
      ans.push(words[i])
  return ans
}
