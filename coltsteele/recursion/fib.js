// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

/**
 *
 * @param {number} num
 * @returns {number}
 */

// MINE
function fib(num) {
  if (num <= 2) return 1
  return memoFib(num - 1) + memoFib(num - 2)
}

/**
 *
 * @param {function(number): number} fn
 * @returns {number}
 */

function memoization(fn) {
  const cache = {}

  return function (...args) {
    if (cache[args]) {
      return cache[args]
    }

    const result = fn.apply(this, args)
    cache[args] = result
    return result
  }
}

const memoFib = memoization(fib)

// ANSWER
// function fib(n){
//   if (n <= 2) return 1;
//   return fib(n-1) + fib(n-2);
// }

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465
