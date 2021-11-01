// https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/

// MINE..
/*
function minCostToMoveChips(position: number[]): number {

};
*/

// ANSWER: moving chips cleverly
function minCostToMoveChips(position: number[]): number {
  let evenCount = 0
  let oddCount = 0

  for (const p of position) {
    if (p % 2 === 0) ++evenCount
    else ++oddCount
  }

  return Math.min(evenCount, oddCount)
}
