// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

// MINE: naive
/*
function numberOfSteps(num: number): number {    
    let ans = 0
    while(num>0) {
        num % 2 === 0 ? num /= 2 : --num
        ++ans
    }
    return ans
};
*/

// ANSWER: binary
// The bitwise AND operator (&) returns a 1 in each bit position for which the corresponding bits of both operands are 1s
// The right shift assignment operator (>>=) moves the specified amount of bits to the right and assigns the result to the variable.
function numberOfSteps(num: number): number {
  if (!num) return 0
  let ans = 0
  while (num) {
    ans += num & 1 ? 2 : 1 // (num & 1) = (num % 2 === 1)
    num >>= 1 // = num = Math.floor(num / 2)
  }
  return --ans
}
