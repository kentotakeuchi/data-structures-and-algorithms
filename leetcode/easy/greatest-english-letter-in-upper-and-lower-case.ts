// https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/

// MINE
/*
function greatestLetter(s: string): string {
    const set = new Set(s.split(''))
    let ans = ''
    for(let c of set) {
        if(set.has(c.toUpperCase()) && set.has(c.toLowerCase()) && !ans.includes(c.toUpperCase())) {
            if(ans.length === 0 || c.toUpperCase() > ans) ans = c.toUpperCase()
        }
    }
    return ans
};
*/

// ANSWER
function greatestLetter(str: string): string {
  const s = new Set(str)
  const upper = 'Z'.charCodeAt(0),
    lower = 'z'.charCodeAt(0)
  for (let i = 0; i < 26; ++i) {
    if (s.has(String.fromCharCode(upper - i)) && s.has(String.fromCharCode(lower - i)))
      return String.fromCharCode(upper - i)
  }
  return ''
}
