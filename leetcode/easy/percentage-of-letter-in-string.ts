// https://leetcode.com/problems/percentage-of-letter-in-string/

// MINE
/*
function percentageLetter(s: string, letter: string): number {
    const map = new Map()
    for(let c of s) map.set(c, map.get(c)+1 || 1)
    return map.has(letter) ? Math.floor(map.get(letter) / s.length * 100) : 0
};
*/

// ANSWER
function percentageLetter(s: string, letter: string): number {
  let count = 0
  for (let c of s) if (c === letter) ++count
  return Math.floor((count / s.length) * 100)
}
