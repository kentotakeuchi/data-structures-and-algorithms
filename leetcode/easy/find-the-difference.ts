// https://leetcode.com/problems/find-the-difference/

// MINE: sort
/*
function findTheDifference(s: string, t: string): string {
    // base case
    if(!s.length) return t
    
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')
    
    for(let i=0; i<s.length; ++i) {
        if(s[i] !== t[i]) return t[i]
    }
    
    return t[t.length-1]
};
*/

// ANSWER: charcode
/*
function findTheDifference(s: string, t: string): string {
    const sum1 = s.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
    const sum2 = t.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
    return String.fromCharCode(sum2 - sum1);
}
*/

// ANSWER: hashmap
function findTheDifference(s: string, t: string): string | void {
  let m = new Map()

  s.split('').forEach(x => {
    if (!m.has(x)) m.set(x, 1)
    else m.set(x, m.get(x) + 1)
  })

  for (let y of t) {
    if (!m.has(y)) return y
    // if added letter is not part of s
    else m.set(y, m.get(y) - 1)

    if (m.get(y) < 0) return y // if added letter is part of s
  }
}
