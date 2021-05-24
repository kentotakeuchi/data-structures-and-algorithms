// https://leetcode.com/problems/number-of-segments-in-a-string/

// MINE
/*
function countSegments(s: string): number {
    return s.split(' ').filter(word => word !== '').length
};
*/

// ANSWER: trim
/*
function countSegments(s: string): number {
    const trimmed = s.trim()
    
    if(trimmed === '') return 0
    
    return trimmed.split(/\s+/g).length
};
*/

// ANSWER: in-place *time limit exceeded..
function countSegments(s: string): number {
  let count = 0

  for (let i = 0; s.length; ++i) {
    if ((i === 0 || s[i - 1] === ' ') && s[i] !== ' ') ++count
  }

  return count
}
