// RECURSIVE
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

/**
 * MEMOIZATION
 *
 * Storing the results of expensive function calls and returning the cached result when the same inputs occur again
 */

// MEMOIZED
function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

/**
 * TABULATION
 *
 * Storing the result of a previous result in a "table" (usually an array)
 * Usually done using iteration
 * Better space complexity can be achived using tabulation
 */

// TABULATED
function fib(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
