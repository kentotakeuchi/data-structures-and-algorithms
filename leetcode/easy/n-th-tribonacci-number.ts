// https://leetcode.com/problems/n-th-tribonacci-number/

// MINE: naive(TLE..)
/*
function tribonacci(n: number): number {
    if(n <= 1) return n
    if(n === 2) return 1
    return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3)
};
*/

// MINE: memoization
/*
function tribonacci(n: number): number {
    if(n <= 1) return n
    if(n === 2) return 1
    return fastTrib(n-1) + fastTrib(n-2) + fastTrib(n-3)
};

function memo(fn: (n: number) => number): (arg: number) => number {
    const cache: {[key: string]: number} = {}
    return function(arg: number): number {
        if(cache[arg]) return cache[arg]
        cache[arg] = fn.call(this, arg)
        return cache[arg]
    }
}

const fastTrib = memo(tribonacci)
*/

// ANSWER: iteration
/*
function tribonacci(n: number): number {
        if (n < 2) return n;
        let a = 0, b = 1, c = 1, d;
        while (n-- > 2) {
            d = a + b + c;
            a = b;
            b = c;
            c = d;
        }
        return c;
    }
    */

// ANSWER: memo
function tribonacci(n: number): number {
  if (mem[n] !== undefined) return mem[n]
  return (mem[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3))
}

const mem: { [key: number]: number } = {
  0: 0,
  1: 1,
  2: 1
}
