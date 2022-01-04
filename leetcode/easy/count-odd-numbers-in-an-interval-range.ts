// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/

// MINE
/*
function countOdds(low: number, high: number): number {
    if(low & 1 && high & 1) return (high - low) / 2 + 1
    else if(low%2 === 0 && high%2 === 0) return (high - low) / 2
    else return Math.ceil((high - low) / 2)
};
*/

// ANSWER
function countOdds(low: number, high: number): number {
  return low & 1 && high & 1 ? Math.round((high - low) / 2) + 1 : Math.round((high - low) / 2)
}
