// https://leetcode.com/problems/reverse-bits/

// MINE..
/*
function reverseBits(n: number): number {
	
};
*/

// ANSWER
function reverseBits(n: number): number {
  return Number.parseInt(n.toString(2).split('').reverse().join('').padEnd(32, '0'), 2)
}
