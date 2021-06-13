// https://leetcode.com/problems/fibonacci-number/

// MINE: iterative
/*
function fib(n: number): number {
    const arr = [0, 1]
    for(let i=2; i<=n; ++i) {
        arr.push(arr[arr.length-2] + arr[arr.length-1])
    }
    return arr[n]
};
*/

// MINE: recursive
/*
function fib(n: number): number {
    if(n < 2) return n
    return fib(n-2) + fib(n-1)
};
*/

// MINE: recursive + memo
function fib(n: number): number {
  if (n < 2) return n
  return fastFib(n - 2) + fastFib(n - 1)
}

function memo(fn: (n: number) => number): (arg: number) => number {
  const cache: { [key: string]: number } = {}
  return function (arg: number): number {
    if (cache[arg]) return cache[arg]
    // @ts-ignore
    // ? how to type "this" in this case?
    const result = fn.call(this, arg)
    cache[arg] = result
    return result
  }
}

const fastFib = memo(fib)

// ANSWER
