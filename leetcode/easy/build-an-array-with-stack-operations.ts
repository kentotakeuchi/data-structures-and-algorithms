// https://leetcode.com/problems/build-an-array-with-stack-operations/

// MINE..
/*
function buildArray(target: number[], num: number): string[] {
    let i = 0
    const ans = []
    
    for(let n=1; n<=num; ++n) {
        if(n !== target[i]) {
            ans.push('Push', 'Pop')
        } else {
            ans.push('Push')
            ++i
        }
        
        if(n > target.length) break
    }
    
    return ans
};
*/

// ANSWER
function buildArray(target: number[], num: number): string[] {
  const ans = []

  for (let i = 0, j = 1; i < target.length; ++i, ++j) {
    ans.push('Push')
    target[i] !== j && ans.push('Pop') && --i
  }

  return ans
}
