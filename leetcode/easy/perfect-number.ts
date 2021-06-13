// https://leetcode.com/problems/perfect-number/

// MINE: brute force + a bit optimization(limit exceeded..)
/*
function checkPerfectNumber(num: number): boolean {
    if(num <= 0) return false
    
    let sum = 0
    for(let i=1; i<=num/2; ++i) {
        console.log({sum, i})
        if(num % i === 0) sum += i
        
        if(num < sum) return false
    }
    
    return sum === num
};
*/

// ANSWER: optimal solution
function checkPerfectNumber(num: number): boolean {
  if (num <= 0) {
    return false
  }

  let sum = 0
  for (let i = 1; i * i <= num; i++) {
    if (num % i == 0) {
      sum += i
      if (i * i != num) {
        sum += num / i
      }
    }
  }

  return sum - num == num
}
