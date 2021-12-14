// https://leetcode.com/problems/maximum-score-after-splitting-a-string/

// MINE: naive
/*
function maxScore(s: string): number {
    let ans = 0
    
    for(let i=1; i<s.length; ++i) {
        const l = s.substring(0, i)
        const r = s.substring(i)
        
        let lc = 0, rc = 0
        for(let bi of l) bi === '0' && ++lc
        for(let bi of r) bi === '1' && ++rc
        
        if(ans < lc + rc) ans = lc + rc
    }
    
    return ans
};
*/

// ANSWER: one pass
function maxScore(s: string): number {
  let zeros = 0,
    ones = 0,
    max = -Infinity
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '0') zeros++
    else ones++
    if (i != s.length - 1) max = Math.max(zeros - ones, max)
  }
  return max + ones
}
