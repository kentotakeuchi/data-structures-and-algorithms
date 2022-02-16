// https://leetcode.com/problems/calculate-money-in-leetcode-bank/

// MINE
/*
function totalMoney(n: number): number {
    if(n < 7) return factorial(n, 1)
    const weeks = Math.floor(n / 7)
    const days = n % 7
    
    console.log({days, weeks})
    return 28 + (7*(weeks-1)) + factorial(days, weeks+1)
};

function factorial(num: number, end: number): number {
    if(num === end) return end
    return num + factorial(num-1, end)
}
*/

// ANSWER
function totalMoney(n: number): number {
  const k = Math.floor(n / 7),
    x = n % 7 // k = # full weeks, x = day of week
  return (7 * k * (k + 7)) / 2 + (x * (2 * k + x + 1)) / 2 // (sum of k weeks) + (sum of x days)
}
