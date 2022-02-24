// https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/

// MINE..
/*
function minOperations(s: string): number {
    let a0 = '', a1 = '', i = 0, ans = 0
    
    while(i < s.length) {
        if(i%2 === 0) a0 += '0'
        else a0 += '1'
        ++i
    }
    
    i = 0
    
    while(i < s.length) {
        if(i%2 === 0) a1 += '1'
        else a1 += '0'
        ++i
    }
    
    if(s.startsWith('0')) {
        for(let i=1; i<s.length; ++i) {
            if(s[i] !== a0[i]) ++ans
        }
    } else {
        for(let i=1; i<s.length; ++i) {
            if(s[i] !== a1[i]) ++ans
        }
    }
    
    return ans
};
*/

// ANSWER
function minOperations(s: string): number {
  let ans = 0

  for (let i = 0; i < s.length; ++i) {
    if (parseInt(s[i]) !== i % 2) ++ans
  }

  return Math.min(ans, s.length - ans)
}
