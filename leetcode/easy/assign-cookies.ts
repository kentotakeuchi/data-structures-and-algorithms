// https://leetcode.com/problems/assign-cookies/

// MINE..
/*
function findContentChildren(g: number[], s: number[]): number {
    // base
    if(!s.length) return 0
    
    let result = 0
    let i = 0
    let j = 0
        
    while(i < g.length && j < s.length) {
        console.log({i, j, g, s, result})
        if(g[i] === 0) {
            ++result
            ++i
            continue
        }
        
        if(g[i] === s[j]) {
            g[i] = 0
            ++j
        } else if(g[i] < s[j]) {
            s[j] = s[j] - g[i]
            g[i] = 0
        } else {
            g[i] = g[i] - s[j]
            ++j
        }
    }
    
    return result
};
*/

// ANSWER
function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let j = 0,
    res = 0
  for (let num of s) {
    if (num >= g[j]) res++, j++
  }
  return res
}
