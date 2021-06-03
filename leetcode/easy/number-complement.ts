// https://leetcode.com/problems/number-complement/

// MINE
/*
function findComplement(num: number): number {
    let bit = num.toString(2)
    let result = ''
    
    for(let digit of bit) {
        result += digit === '0' ? '1' : '0'
    }
    
    return parseInt(result, 2)
};

// toString(2) -> flip -> parseInt(toString(10))?
*/

// ANSWER: string
/*
function findComplement(num: number): number {
    return parseInt(num.toString(2).split('').map(function(char) {
        return (parseInt(char, 10)) ? '0' : '1';
    })
    .join(''), 2)
}
*/

// ANSWER: bit
function findComplement(num: number): number {
  let mask = 1
  while (mask < num) mask = (mask << 1) | 1
  return num ^ mask
}
