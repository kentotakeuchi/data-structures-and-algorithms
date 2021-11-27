// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/

// MINE..
/*
function sortByBits(arr: number[]): number[] {
    
};

function bitCount(n: number): number {
    return n.toString(2).match(/1/g).length
}
*/

// ANSWER
function sortByBits(arr: number[]): number[] {
  return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b)
}

const bitCount = (num: number): number => {
  let sum = 0
  while (num) {
    sum += num & 1
    num = num >> 1
  }
  return sum
}
