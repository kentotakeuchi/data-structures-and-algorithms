// https://leetcode.com/problems/arranging-coins/

// MINE
/*
function arrangeCoins(n: number): number {
    let count = 0
    let i = 1
    
    while(0 < n) {
        n = n - i
        if(n < 0) return count
        ++i
        ++count
    }
    
    return count
};
*/

// ANSWER: binary search
/*
function arrangeCoins(n: number): number {
    let left = 0
    let right = n
    let cur, k
    
    while(left <= right) {
        k = Math.floor(left + (right - left) / 2)
        cur = k * (k + 1) / 2
        
        if(cur === n) return k
        
        if(n < cur) {
            right = k - 1
        } else {
            left = k + 1
        }
    }
    
    return right
}
*/

// ANSWER
function arrangeCoins(n: number): number {
  let stairs = 0
  while (stairs <= n) {
    n -= stairs
    stairs++
  }
  return stairs - 1
}
