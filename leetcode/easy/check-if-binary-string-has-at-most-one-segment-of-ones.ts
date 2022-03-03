// https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/

// MINE
/*
function checkOnesSegment(s: string): boolean {
    if(s.length === 1) return true
    const arr = s.split('0')
    for(let bi of arr) if(bi.length > 1) return true
    return false
};
*/

// ANSWER
function checkOnesSegment(s: string): boolean {
  return !s.includes('01')
}
