// https://leetcode.com/problems/power-of-three/

// MINE
/*
function isPowerOfThree(n: number): boolean {
    while(3 <= n) {
        n /= 3
    }
    
    return n === 1 ? true : false
};
*/

// ANSWER: loop iteration
/*
function isPowerOfThree(n: number): boolean {
    if (n < 1) {
        return false;
    }

    while (n % 3 == 0) {
        n /= 3;
    }

    return n == 1;
}
*/

// ANSWER: base conversion
/*
function isPowerOfThree(n: number): boolean {
    return /^10*$/.test(n.toString(3))
}
*/

// ANSWER: mathmatics(logarithms)
/*
function isPowerOfThree(n: number): boolean {
    let a = Math.log(n) / Math.log(3)
    return Math.abs(a - Math.round(a)) < 1e-10
}
*/

// ANSWER: integer limitations
/*
function isPowerOfThree(n: number): boolean {
    return n > 0 && 1162261467 % n == 0
}
*/
/*
var isPowerOfThree = function(n: number): boolean {
    var arr = [1,3,9,27,81,243,729,2187,6561,19683,59049,177147,531441,1594323,4782969,14348907, 43046721, 129140163, 387420489, 1162261467];
    var set = new Set(arr);
    return set.has(n);
};
*/
var isPowerOfThree = function (n: number): boolean {
  return n > 0 && Math.pow(3, 19) % n === 0
}
