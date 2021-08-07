// https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/

// MINE
/*
function countPrimeSetBits(left: number, right: number): number {
    let result = 0
    
    for(let i=left; i<=right; ++i) {
        const binary: string = i.toString(2) // '10101'
        let sum = 0
        
        for(let j=0; j<binary.length; ++j) {
            if(binary[j] === '1') ++sum
        }
        
        if(isPrime(sum)) ++result
    }
    
    return result
};

function isPrime(num: number): boolean {
    for(let i=2; i<=Math.sqrt(num); ++i) {
        if(num % i === 0) return false
    }
    return num > 1
}
*/

// ANSWER
function countPrimeSetBits(left: number, right: number): number {
  let set = new Set([2, 3, 5, 7, 11, 13, 17, 19])
  let countPrime = 0

  for (let i = left; i <= right; i++) {
    if (set.has(i.toString(2).replace(/0/g, '').length)) countPrime++
  }

  return countPrime
}
