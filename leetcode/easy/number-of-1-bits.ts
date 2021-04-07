// https://leetcode.com/problems/number-of-1-bits/

// MINE
/*
function hammingWeight(n: number): number {
    return n.toString(2).split('').filter(strNum => strNum === '1').length
};
*/

// ANSWER
var hammingWeight = function (n) {
  // remove 0s from base2 representation of the number
  return n.toString(2).replace(/0/g, '').length
}

// MEMO: i have to study bitwise operator
