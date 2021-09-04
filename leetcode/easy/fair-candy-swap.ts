// https://leetcode.com/problems/fair-candy-swap/

// MINE
/*
function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
    const sumA = aliceSizes.reduce((acc, cur) => acc + cur, 0)
    const sumB = bobSizes.reduce((acc, cur) => acc + cur, 0)
    const diff = (sumA - sumB) / 2
    
    for(let a of aliceSizes) {
        for(let b of bobSizes) {
            if(a-b === diff) return [a, b]
        }
    }
    
    return [-1, -1]
};
*/

// ANSWER
function fairCandySwap(A: number[], B: number[]): number[] {
  const sumA = A.reduce((acc, cur) => acc + cur)
  const sumB = B.reduce((acc, cur) => acc + cur)
  const diff = (sumA - sumB) / 2
  const setA = new Set(A)
  for (const candy of B) {
    if (setA.has(candy + diff)) return [candy + diff, candy]
  }
  return []
}
