// https://leetcode.com/problems/kth-missing-positive-number/

// MINE: naive
/*
function findKthPositive(arr: number[], k: number): number {
    const miss = []
    
    for(let i=1, idx=0; i<=arr[arr.length-1]+k; ++i) {
        if(i !== arr[idx]) {
            miss.push(i)
        } else {
            ++idx
        }
    }
    
    return miss[k-1]
};
*/

// MINE: filter
/*
function findKthPositive(arr: number[], k: number): number {
    const nums = []
    for(let i=1; i<=arr[arr.length-1]+k; ++i) nums.push(i)
    return nums.filter(n => !arr.includes(n))[k-1]
}
*/

// ANSWER: binary search
function findKthPositive(arr: number[], k: number): number {
  let l = 0,
    r = arr.length,
    m

  while (l < r) {
    m = Math.floor((l + r) / 2)
    if (arr[m] - 1 - m < k) l = m + 1
    else r = m
  }
  return l + k
}
