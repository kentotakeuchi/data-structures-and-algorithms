// https://leetcode.com/problems/word-pattern/

// MINE
/*
function wordPattern(pattern: string, s: string): boolean {
    const map = new Map()
    
    const patternArr = pattern.split('')
    const sArr = s.split(' ')
    
    const sizeP = new Set(patternArr).size
    const sizeS = new Set(sArr).size
    
    // base case 1: if number of distinct words is different
    if(sizeP !== sizeS) return false
    // base case 2: if the lengths are different
    if(pattern.length !== sArr.length) return false
    
    for(let i=0; i<pattern.length; ++i) {
        if(!map.has(pattern[i])) {
            map.set(pattern[i], sArr[i])
        }
    }
    
    let i = 0
    for(let char of pattern) {
        if(map.get(char) !== sArr[i]) {
            return false
        }
        ++i
    }
    
    return true
};
*/

// ANSWER
var wordPattern = function (pattern: string, s: string): boolean {
  const strArr = s.split(' ')
  if (pattern.length !== strArr.length) return false
  const patMap = new Map()
  const strMap = new Map()
  for (let i = 0; i < pattern.length; i++) {
    if (
      (patMap.has(pattern[i]) && patMap.get(pattern[i]) !== strArr[i]) ||
      (strMap.has(strArr[i]) && strMap.get(strArr[i]) !== pattern[i])
    ) {
      return false
    }
    patMap.set(pattern[i], strArr[i])
    strMap.set(strArr[i], pattern[i])
  }
  return true
}
