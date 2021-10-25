// https://leetcode.com/problems/prime-arrangements/

// MINE..
/*
function numPrimeArrangements(n: number): number {

};
*/

function isPrime(n: number): boolean {
  for (let i = 2; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) return false
  }
  return n > 1
}

// ANSWER
function numPrimeArrangements(n: number): number {
  const mod = 10 ** 9 + 7
  let primes = 0,
    nonPrimes = 0
  let res = 1
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) res *= ++primes
    else res *= ++nonPrimes
    res = res % mod
  }
  return res
}
