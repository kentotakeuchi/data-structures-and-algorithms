// https://leetcode.com/problems/increasing-decreasing-string/

// const alphabet = 'abcdefghijklmnopqrstuvwxyz'
// const reversed = 'zyxwvutsrqponmlkjihgfedcba'

// MINE..
/*
function sortString(s: string): string {
    const map = new Map()
    let ans = ''
    
    for(let char of s) {
        map.set(char, map.get(char)+1 || 1)
    }
    
    while()
};
*/

// ANSWER
function sortString(s: string): string {
  let count = Array(26).fill(0),
    result = ''
  let chars = [...new Set(s)].sort()

  for (const char of s) count[char.charCodeAt(0) - 97]++

  while (result.length < s.length) {
    for (const char of chars) {
      let idx = char.charCodeAt(0) - 97
      if (count[idx]) {
        result += char
        count[idx]--
      }
    }
    for (let i = chars.length - 1; i >= 0; i--) {
      let char = chars[i],
        idx = char.charCodeAt(0) - 97
      if (count[idx]) {
        result += char
        count[idx]--
      }
    }
  }
  return result
}
