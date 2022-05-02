// https://leetcode.com/problems/time-needed-to-buy-tickets/

// MINE: brute force
/*
function timeRequiredToBuy(tickets: number[], k: number): number {
    let ans = 0
    while(true) {
        for(let i=0; i<tickets.length; ++i) {
            if(tickets[i] === 0) continue
            --tickets[i]
            ++ans
            if(tickets[k] === 0) return ans
        }
    }
    return -1
};
*/

// ANSWER: one pass
function timeRequiredToBuy(t: number[], k: number): number {
  let ans = 0
  for (let i = 0; i < t.length; ++i) {
    if (i <= k) ans += Math.min(t[i], t[k])
    if (i > k) ans += Math.min(t[k] - 1, t[i])
  }
  return ans
}
