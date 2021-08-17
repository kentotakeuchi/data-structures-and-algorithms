// https://leetcode.com/problems/shortest-distance-to-a-character/

// MINE
/*
function shortestToChar(s: string, c: string): number[] {
    const results = []
    const idxes = [] // ex. [3, 5, 6, 11]
    
    for(let i=0; i<s.length; ++i) {
        if(s[i] === c) idxes.push(i)
    }
    
    for(let i=0; i<s.length; ++i) {
        let min = s[i] === c ? 0 : Infinity
        if(s[i] !== c) {
            for(let j=0; j<idxes.length; ++j) {
                min = Math.min(min, Math.abs(idxes[j] - i))
            }
        }
        
        results.push(min)
    }
    
    return results
};
*/

// ANSWER: 2pass
/*
character = "e"

index  | 0 1 2 3 4 5 6 7 8 9 10 11
char   | l o v e l e e t c o d  e
// shortest distance from left to right
l -> r | I I I 0 1 0 0 1 2 3 4  0 // I = Infinity
// shortest distance from right to left
l <- r | 3 2 1 0 1 0 0 4 3 2 1  0
// the minimum between them is the answer
result | 3 2 1 0 1 0 0 1 2 2 1  0
*/
function shortestToChar(S: string, C: string): number[] {
  const dp = new Array(S.length).fill(Infinity)

  dp[0] = S[0] === C ? 0 : Infinity

  for (let i = 1; i < S.length; i++) {
    if (S[i] === C) {
      dp[i] = 0
    } else {
      dp[i] = dp[i - 1] === Infinity ? Infinity : dp[i - 1] + 1
    }
  }

  let dist = Infinity

  for (let i = S.length - 1; i >= 0; i--) {
    if (S[i] === C) {
      dist = 0
    }
    dp[i] = Math.min(dist, dp[i])
    dist += 1
  }

  return dp
}
