// https://leetcode.com/problems/is-subsequence/

// MINE..
/*
function isSubsequence(s: string, t: string): boolean {
    // base case
    if(!s.length && t.length) return true
    if(s.length && !t.length) return false
    
    let prevIdx = -1
    
    for(let i=0; i<s.length; ++i) {
        const curIdx = t.indexOf(s[i])
        
        if(curIdx === -1) return false
        
        if(curIdx < prevIdx) return false
        
        prevIdx = curIdx
    }
    
    return true
};
*/

// ANSWER: two pointers
/*
function isSubsequence(s: string, t: string): boolean {
    let i = 0, j = 0;
    while(j < t.length) {
        if(s[i] === t[j]) {
            i++;
        }
        j++;        
    }
    return i === s.length ? true: false;
};
*/

// ANSWER: slice
function isSubsequence(s: string, t: string): boolean {
  for (let letter of t) {
    if (letter === s.charAt(0)) {
      s = s.slice(1)
    }
  }

  return s.length === 0
}
