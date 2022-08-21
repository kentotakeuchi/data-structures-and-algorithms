// https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/

// MINE..
/*
function fillCups(amount: number[]): number {
    let ans = 0
    // amount.sort((a, z) => z - a)
    while(amount[0] || amount[1] || amount[2]) {
        console.log({amount})
        let count = 0
        ++ans
        if(amount[0]) {
            --amount[0]
            ++count
        }
        if(amount[1]) {
            --amount[1]
            ++count
        }
        if(count === 2) continue
        if(amount[2]) {
            --amount[2]
        }
    }
    return ans
};
*/

// ANSWER
function fillCups(amount: number[]): number {
  let max = 0,
    sum = 0
  for (let a of amount) {
    max = Math.max(max, a)
    sum += a
  }
  return Math.max(max, Math.ceil(sum / 2))
}
