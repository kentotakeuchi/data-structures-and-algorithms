// https://leetcode.com/problems/count-good-triplets/

// MINE: brute force
/*
function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
    let ans = 0
    
    for(let i=0; i<arr.length-2; ++i) {
        for(let j=i+1; j<arr.length-1; ++j) {
            for(let k=j+1; k<arr.length; ++k) {
                if(Math.abs(arr[i] - arr[j]) > a) continue
                if(Math.abs(arr[j] - arr[k]) > b) continue
                if(Math.abs(arr[i] - arr[k]) > c) continue
                ++ans
            }
        }
    }
    
    return ans
};
*/

// ANSWER: brute force(a bit optimized)
function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
  let res = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) > a) continue

      for (let k = j + 1; k < arr.length; k++) {
        if (Math.abs(arr[j] - arr[k]) > b) continue
        if (Math.abs(arr[k] - arr[i]) <= c) res++
      }
    }
  }
  return res
}
