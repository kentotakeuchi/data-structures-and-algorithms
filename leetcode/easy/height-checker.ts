// https://leetcode.com/problems/height-checker/

// MINE: sort
/*
function heightChecker(heights: number[]): number {
    const sorted = heights.slice(0).sort((a, z) => a - z)
    return heights.filter((height, i) => height !== sorted[i]).length
};
*/

// ANSWER: non-sort
function heightChecker(heights: number[]): number {
  const heightToFreq = new Array(101).fill(0)

  for (let height of heights) {
    heightToFreq[height]++
  }

  let result = 0
  let curHeight = 0

  for (let i = 0; i < heights.length; i++) {
    while (heightToFreq[curHeight] === 0) {
      curHeight++
    }

    if (curHeight !== heights[i]) {
      result++
    }
    heightToFreq[curHeight]--
  }

  return result
}
