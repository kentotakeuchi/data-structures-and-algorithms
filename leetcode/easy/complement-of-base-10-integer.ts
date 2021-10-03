// https://leetcode.com/problems/complement-of-base-10-integer/

// MINE
/*
function bitwiseComplement(n: number): number {
    let result = ''
    const bi = n.toString(2)
    
    for(let d of bi) {
        result += d === '1' ? '0' : '1'
    }
        
    return parseInt(result, 2)
};
*/

// ANSWER: bit
function bitwiseComplement(n: number): number {
  let mask = 1
  while (mask < n) mask = (mask << 1) | 1
  return n ^ mask
}
