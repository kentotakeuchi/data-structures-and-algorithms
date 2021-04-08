// https://leetcode.com/problems/happy-number/

// MINE: super slow..
/*
function isHappy(n: number): boolean {
    let sum = 0
    const set = new Set()
    
    while(0 < n) {
        sum += Math.pow(n%10, 2)
        console.log(sum, Math.pow(n%10, 2))
        n = Math.floor(n/10)
    }
    
    
    while(sum !== 1) {
        // detect infinite loop
        if(set.has(sum)) return false
        
        // store sum
        set.add(sum)
        
        // init
        n = sum
        sum = 0
        
        while(0 < n) {
            sum += Math.pow(n%10, 2)
            console.log(sum, Math.pow(n%10, 2))
            n = Math.floor(n/10)
        }
    }
        
    return true
};
*/

// ANSWER
var isHappy = function (n: number): boolean {
  var seen: { [key: number]: boolean } = {}
  while (n !== 1 && !seen[n]) {
    seen[n] = true
    n = sumOfSquares(n)
  }
  return n === 1
}

function sumOfSquares(num: number): number {
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => {
      return sum + Math.pow(parseInt(digit), 2)
    }, 0)
}
