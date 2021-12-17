// https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/

// MINE
/*
function kLengthApart(nums: number[], k: number): boolean {
    let count = 0
    const start = nums.indexOf(1)
    
    for(let i=start+1; i<nums.length; ++i) {
        if(nums[i] === 1) {
            if(count < k) return false
            count = 0
        }
        else ++count
    }
    
    return true
};
*/

// ANSWER: one pass
function kLengthApart(nums: number[], k: number): boolean {
  // initialize the counter of zeros to k
  // to pass the first 1 in nums
  let count = k

  for (let num of nums) {
    // if the current integer is 1
    if (num === 1) {
      // check that number of zeros in-between 1s
      // is greater than or equal to k
      if (count < k) {
        return false
      }
      // reinitialize counter
      count = 0

      // if the current integer is 0
    } else {
      // increase the counter
      ++count
    }
  }
  return true
}
