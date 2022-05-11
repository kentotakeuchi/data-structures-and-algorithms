// https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/

// MINE
/*
function checkString(s: string): boolean {
    let i = s.indexOf('b')
    if(i === -1) return true
    for(++i; i<s.length; ++i) if(s[i] === 'a') return false
    return true
};
*/

// ANSWER
function checkString(s: string): boolean {
  return !s.includes('ba')
}
