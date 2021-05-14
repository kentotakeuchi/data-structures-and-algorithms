// https://leetcode.com/problems/ransom-note/

// MINE: hashmap
/*
function canConstruct(ransomNote: string, magazine: string): boolean {
    // base case
    if(magazine.length < ransomNote.length) return false
    
    const map = new Map()
    
    for(let char of ransomNote) {
        map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1)
    }
    
    for(let char of magazine) {
        if(map.has(char)) map.set(char, map.get(char) - 1)
    }
    
    for(let [key, val] of map) {
        if(0 < val) return false
    }
    
    return true
};
*/

// ANSWER
function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map()

  for (const letter of magazine) {
    map.set(letter, map.get(letter) + 1 || 1)
  }

  for (const letter of ransomNote) {
    if (!map.get(letter)) {
      return false
    }
    map.set(letter, map.get(letter) - 1)
  }

  return true
}
