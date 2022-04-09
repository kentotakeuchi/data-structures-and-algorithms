// https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/

// MINE
function isPrefixString(s: string, words: string[]): boolean {
  let temp = ''
  for (let word of words) {
    temp += word
    if (temp === s) return true
    if (!s.startsWith(temp)) return false
  }
  return false
}

// ANSWER
