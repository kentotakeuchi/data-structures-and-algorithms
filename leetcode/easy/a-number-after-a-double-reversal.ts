// https://leetcode.com/problems/a-number-after-a-double-reversal/

// MINE
/*
function isSameAfterReversals(num: number): boolean {
    if(num === 0) return true
    const str = num.toString()
    if(str[str.length-1] === '0') return false
    return true
};
*/

// ANSWER
function isSameAfterReversals(num: number): boolean {
  return num === 0 || num % 10 !== 0
}
