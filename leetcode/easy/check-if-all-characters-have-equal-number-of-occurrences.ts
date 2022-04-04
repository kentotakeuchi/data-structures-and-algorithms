// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

// MINE: map
/*
function areOccurrencesEqual(s: string): boolean {
    const map = new Map()
    
    for(let char of s) map.set(char, map.get(char)+1 || 1)
    
    const sample = map.get(s[0])
    for(let [key, val] of map) if(sample !== val) return false
    
    return true
};
*/

// ANSWER: array
function areOccurrencesEqual(s: string): boolean {
  var alp = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    alp[s.charCodeAt(i) - 97]++
  }
  let val = alp[s.charCodeAt(0) - 97]
  for (let i = 0; i < 26; i++) {
    if (alp[i] != 0 && alp[i] != val) {
      return false
    }
  }
  return true
}
