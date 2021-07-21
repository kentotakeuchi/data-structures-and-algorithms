// https://leetcode.com/problems/binary-number-with-alternating-bits/

// MINE: convert to string
/*
function hasAlternatingBits(n: number): boolean {
    const bit = n.toString(2)
    for(let i=1; i<bit.length; ++i) {
        if(bit[i-1] === bit[i]) return false
    }
    return true
};
*/

// ANSWER: divide by two
function hasAlternatingBits(n: number): boolean {
  let cur = n % 2
  n = Math.floor(n / 2)
  while (n > 0) {
    if (cur === n % 2) return false
    cur = n % 2
    n = Math.floor(n / 2)
  }
  return true
}
