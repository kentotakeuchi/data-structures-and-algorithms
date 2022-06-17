// https://leetcode.com/problems/rearrange-characters-to-make-target-string/

// MINE: map
/*
function rearrangeCharacters(s: string, target: string): number {
    const sMap = new Map(), tMap = new Map()
    let ans = 101
    for(let c of s) sMap.set(c, sMap.get(c)+1 || 1)
    for(let c of target) tMap.set(c, tMap.get(c)+1 || 1)
    for(let [k, v] of tMap) {
        if(!sMap.has(k)) return 0
        ans = Math.min(ans, Math.floor(sMap.get(k) / v))
    }
    return ans
};
*/

// ANSWER: array
function rearrangeCharacters(s: string, target: string): number {
  const S = new Array(26).fill(0),
    T = new Array(26).fill(0)
  let min = s.length
  for (let c of s) ++S[c.charCodeAt(0) - 97]
  for (let c of target) ++T[c.charCodeAt(0) - 97]
  for (let c of target)
    min = Math.min(min, Math.floor(S[c.charCodeAt(0) - 97] / T[c.charCodeAt(0) - 97]))
  return min
}
