// https://leetcode.com/problems/three-consecutive-odds/

// MINE: naive
/*
function threeConsecutiveOdds(arr: number[]): boolean {
    if(arr.length < 3) return false
    
    for(let i=2; i<arr.length; ++i) {
        if(arr[i-2] & 1 && arr[i-1] & 1 && arr[i] & 1) return true
    }
    return false
};
*/

// ANSWER: simple loop
function threeConsecutiveOdds(arr: number[]): boolean {
  for (let i = 0, count = 0; i < arr.length; ++i) {
    if (arr[i] % 2 === 0) count = 0
    else if (++count === 3) return true
  }
  return false
}
