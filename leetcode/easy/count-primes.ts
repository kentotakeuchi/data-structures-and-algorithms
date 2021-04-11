// https://leetcode.com/problems/count-primes/

// MINE
/*
function countPrimes(n: number): number { 
    let result = 0
    while(2 <= n) {
        if(isPrime(n-1)) {
            ++result
        }
        --n
    }
    
    return result
};

function isPrime(num: number): boolean {
    for(let i=2, s=Math.sqrt(num); i<=s; ++i) {
        if(num%i === 0) {
            return false
        }
    }
    
    return 1 < num
}
*/

// ANSWER: Eratosthenes Algorithm
var countPrimes = function (n: number): number {
  let hash = new Array(n).fill(true)
  hash[0] = false
  hash[1] = false
  for (let i = 2; i * i < n; i++) {
    if (hash[i]) {
      for (let j = i * i; j < n; j += i) {
        // p*(p+1)...
        hash[j] = false
      }
    }
  }
  return hash.filter(val => val).length
}
