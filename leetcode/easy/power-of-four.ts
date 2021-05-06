// https://leetcode.com/problems/power-of-four/

// MINE: iteration
/*
function isPowerOfFour(n: number): boolean {
    if(n < 1) return false
    
    while(n % 4 === 0) {
        n /= 4
    }
    
    return n === 1
};
*/

// MINE: base conversion..
/*
function isPowerOfFour(n: number): boolean {
    return /3$/.test(n.toString(4))
};
*/

// MINE: integer limitations..
/*
function isPowerOfFour(n: number): boolean {
    return 0 < n && Math.pow(4, 19) % n === 0
};
*/

// ANSWER: base conversion
function isPowerOfFour(n: number): boolean {
  return /^1(00)*$/.test(n.toString(2))
}
