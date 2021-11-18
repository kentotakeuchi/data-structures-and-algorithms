// https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/

// MINE: brute force
/*
function getNoZeroIntegers(n: number): number[] {
    for(let i=1; i<n; ++i) {
        if(!containsZero(i) && !containsZero(n-i)) return [i, n-i]
    }
};
    
function containsZero(num: number): boolean {
    if(num === 0) return true
    // if(num < 0) num = -num; // no need in this question

    while(num > 0) {
        if(num % 10 == 0) return true;
        num = Math.floor(num / 10)
    }
    
    return false;
}
*/

// ANSWER: non brute force
function getNoZeroIntegers(n: number): number[] {
  let a = 0,
    b = 0,
    step = 1

  while (n > 0) {
    let d = n % 10 // digit
    // n = Math.floor(n / 10)
    n = (n / 10) << 0

    if ((d === 0 || d === 1) && n > 0) {
      // n>0 evades the case when 1 is the most significant digit
      a += step * (1 + d)
      b += step * 9
      n-- // handle carry
    } else {
      a += step * 1
      b += step * (d - 1)
    }
    step *= 10
  }

  return [a, b]
}
