// https://leetcode.com/problems/climbing-stairs/

// MINE..
/*
function climbStairs(n: number): number {
    let count = 0
    helper(n)
    return count
    
    function helper(n: number, steps: number = 0): void {
        if(n <= steps) return
        ++count
        console.log({n, steps})
        helper(n, steps+1)
        helper(n, steps+2)
    }
    
};
*/

// ANSWER: brute force --> time limit exceeded..
/*
function climbStairs(n: number): number {
    return _climbStairs(0, n)
}

function _climbStairs(i: number, n: number) {
    if(n < i) return 0
    if(i === n) return 1
    return fast(i+1, n) + fast(i+2, n)
}

// write memoize func by myself to avoid time limit exceeded
function memoize(fn) {
    const cache = {}
    return function(...args: any) { // fix: type
        if(cache[args]) {
            return cache[args]
        }
        
        const result = fn.apply(this, args)
        cache[args] = result
        return result
    }
}

const fast = memoize(_climbStairs)
*/

// ANSWER: dynamic programming
function climbStairs(n: number): number {
  if (n === 1) return 1

  const dp: number[] = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}
