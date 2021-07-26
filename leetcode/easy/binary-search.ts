// https://leetcode.com/problems/binary-search/

// MINE
/*
function search(nums: number[], target: number): number {
    let l = 0
    let r = nums.length-1
    
    while(l <= r) {
        const mid = Math.floor((l+r)/2)
        console.log({l, r, mid})
        
        if(nums[mid] === target) {
            return mid
        } else if(nums[mid] > target) {
            r = mid-1
        } else if(nums[mid] < target) {
            l = mid+1
        }
    }
    
    return -1
};
*/

// great article to explain binary search
// https://leetcode.com/problems/binary-search/discuss/423162/Binary-Search-101
// ANSWER
function search(nums: number[], target: number): number {
  let lo = 0,
    hi = nums.length - 1
  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo + 1) / 2)
    if (target < nums[mid]) {
      hi = mid - 1
    } else {
      lo = mid
    }
  }
  return nums[lo] == target ? lo : -1
}
