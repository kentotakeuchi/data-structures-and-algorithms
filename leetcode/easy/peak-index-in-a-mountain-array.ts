// https://leetcode.com/problems/peak-index-in-a-mountain-array/

// MINE: binary search
/*
function peakIndexInMountainArray(arr: number[]): number {
    let l = 0
    let r = arr.length-1
    let max = -Infinity
    let maxIdx = 0
    
    while(l < r) {
        let mid = Math.floor((l + r) / 2)
        
        if(max < arr[mid]) {
            max = arr[mid]
            maxIdx = mid
        }
        
        if(arr[mid] < arr[mid+1]) {
            l = mid+1
        } else if(arr[mid] > arr[mid+1]) {
            r = mid
        }
        console.log({l, r, max})
    }
    
    return maxIdx
};
*/

// ANSWER: linear search
/*
function peakIndexInMountainArray(arr: number[]): number {
    let i = 0
    while(arr[i] < arr[i+1]) ++i
    return i
}
*/

// ANSWER: binary search
function peakIndexInMountainArray(arr: number[]): number {
  let lo = 0
  let hi = arr.length - 1

  while (lo < hi) {
    const mi = Math.floor(lo + (hi - lo) / 2)

    if (arr[mi] < arr[mi + 1]) {
      lo = mi + 1
    } else {
      hi = mi
    }
  }

  return lo
}
