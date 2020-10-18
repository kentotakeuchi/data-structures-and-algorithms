// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// MINE: ITERATIVE
// function fib(n) {
//   const results = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const sum = results[i - 1] + results[i - 2];
//     results.push(sum);
//   }

//   return results[n];
// }

// MINE: RECURSIVE
// function fib(n) {
//   if (n < 2) return n;

//   return fib(n - 1) + fib(n - 2);
// }

// MINE: RECURSIVE + MEMOIZATION
function slowFib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

const fib = memoize(slowFib);

// ANSWER: ITERATIVE
// function fib(n) {
//   const results = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const a = results[i - 1];
//     const b = results[i - 2];

//     results.push(a + b);
//   }

//   return results[n];
// }

// ANSWER: RECURSIVE
// function fib(n) {
//   if (n < 2) return n;
//   return fib(n - 2) + fib(n - 1);
// }

// ANSWER: MEMOIZATION
// function memoize(fn) {
//   const cache = {};

//   return function (...args) {
//     if (cache[args]) {
//       return cache[args];
//     }

//     const result = fn.apply(this, args);
//     cache[args] = result;
//     return result;
//   };
// }

// function slowFib(n) {
//   if (n < 2) return n;
//   return fib(n - 2) + fib(n - 1);
// }

// const fib = memoize(slowFib);

module.exports = fib;
