// https://leetcode.com/problems/1-bit-and-2-bit-characters/

// MINE..
/*
function isOneBitCharacter(bits: number[]): boolean {

};
*/

// ANSWER: one pass
function isOneBitCharacter(bits: number[]): boolean {
  let i = 0
  while (i < bits.length - 1) {
    if (bits[i] === 1) i++
    i++
  }
  return bits[i] === 0
}
