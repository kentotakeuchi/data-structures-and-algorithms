// https://leetcode.com/problems/first-unique-character-in-a-string/

// MINE: hashmap
/*
function firstUniqChar(s: string): number {
    // base case
    if(s.length === 1) return 0
    
    const map = new Map()
    
    // store char in map
    for(let char of s) {
        if(map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }
    
    // find unique char
    for(let [key, val] of map) {
        if(val === 1) {
            return s.indexOf(key)
        }
    }
    
    // not found
    return -1
};
*/

// ANSWER
/*
function firstUniqChar(s: string): number {
    for(let i=0; i<s.length; i++)
        if(s.indexOf(s[i])===s.lastIndexOf(s[i])) return i
    return -1
}
*/

// ANSWER: hashmap
function firstUniqChar(s: string): number {
  let map: { [key: string]: number } = {}

  for (let char of s) {
    map[char] ? map[char]++ : (map[char] = 1)
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) return i
  }

  return -1
}
