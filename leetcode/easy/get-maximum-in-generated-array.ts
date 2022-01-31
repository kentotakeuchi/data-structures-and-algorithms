// https://leetcode.com/problems/get-maximum-in-generated-array/

// MINE..
/*
function getMaximumGenerated(n: number): number {
    if(n === 0) return 0
    
    const len = n + 1
    const arr = [0, 1]
    
    for(let i=1; i<len; ++i) {
        
    }
};
*/

// ANSWER
function getMaximumGenerated(n: number): number {
  let memo = [0, 1]
  let max = 1
  if (n === 0 || n === 1) return memo[n]
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      memo.push(memo[i / 2])
    } else {
      let v = memo[(i - 1) / 2] + memo[(i + 1) / 2]
      memo.push(v)
      if (v > max) max = v
    }
  }

  return max
}
