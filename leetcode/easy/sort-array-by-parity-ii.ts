// https://leetcode.com/problems/sort-array-by-parity-ii/

function swap(arr: number[], i: number, j: number): void {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// MINE
/*
function sortArrayByParityII(nums: number[]): number[] {
  let l = 0
  
  while(l < nums.length-1) {
      if(l % 2 === 0 && nums[l] % 2 === 1) {
          for(let i=l+1; i<nums.length; ++i) {
              if(nums[i] % 2 === 0) {
                  swap(nums, l, i)
                  break
              }
          }
      } else if(l % 2 === 1 && nums[l] % 2 === 0) {
          for(let i=l+1; i<nums.length; ++i) {
              if(nums[i] % 2 === 1) {
                  swap(nums, l, i)
                  break
              }
          }
      }
      ++l
  }
  
  return nums
};
*/

// ANSWER
function sortArrayByParityII(A: number[]): number[] {
  let i = 0,
    j = 1,
    n = A.length
  while (i < n && j < n) {
    while (i < n && A[i] % 2 == 0) {
      i += 2
    }
    while (j < n && A[j] % 2 == 1) {
      j += 2
    }
    if (i < n && j < n) {
      swap(A, i, j)
    }
  }
  return A
}
