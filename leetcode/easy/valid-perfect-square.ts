// https://leetcode.com/problems/valid-perfect-square/

// MINE
/*
function isPerfectSquare(num: number): boolean {
    // solution1: built-in
    // return num % Math.sqrt(num) === 0
    // return num > 0 && Math.sqrt(num) % 1 === 0
    
    // solution2: loop
    /*
    for(let i=1; i<=Math.sqrt(num); ++i) {
        if(num === i*i) return true
    }
    
    return false
    */

// solution3: binary search
/*
    if(num === 1) return true
    
    let left = 2
    let right = Math.floor(num/2)
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2)
        const sqr = mid * mid
        
        if(num === sqr) return true
        
        if(num < sqr) {
            right = mid-1
        } else {
            left = mid+1
        }
    }
    
    return false
    */
// };

// ANSWER: taylor series
function isPerfectSquare(num: number): boolean {
  //taylor series
  // 1+3+5+7 = 16 ..
  let i = 1
  while (num > 0) {
    num -= i
    i += 2
  }
  return num === 0
}
