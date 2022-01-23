// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

// MINE
/*
function maxDepth(s: string): number {
    let max = -Infinity
    let open = 0
    
    for(let char of s) {
        if(char === '(') {
            ++open
        } else if(char === ')') {
            --open
        }
        
        max = Math.max(max, open)
    }
    
    return max
};
*/

// ANSWER: almost the same as mine
function maxDepth2(s: string): number {
  let max = 0,
    cur = 0

  for (let c of s) {
    if (c === '(') max = Math.max(max, ++cur)
    else if (c === ')') --cur
  }

  return max
}
