// https://leetcode.com/problems/first-letter-to-appear-twice/

// MINE
/*
function repeatedCharacter(s: string): string {
    const map = new Map()
    for(let c of s) {
        if(map.has(c)) return c
        map.set(c, 1)
    }
    return 'not appear twice..'
};
*/

// ANSWER
function repeatedCharacter(s: string): string {
  const set = new Set()
  for (let c of s) {
    if (set.has(c)) return c
    set.add(c)
  }
  // return ''
}
