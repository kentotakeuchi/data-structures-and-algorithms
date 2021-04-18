// https://leetcode.com/problems/summary-ranges/

// MINE
/*
function summaryRanges(nums: number[]): string[] {
    // base case
    if(!nums.length) return []
    if(nums.length === 1) return [`${nums[0]}`]
    
    const results = []
    for(let i=0, j=i; j<nums.length; ++j) {
        console.log({i, j}, nums[i]+1, nums[j+1])
        // if not increment
        if(nums[j]+1 !== nums[j+1]) {
            if(i === j) {
                results.push(`${nums[i]}`)
            } else {
                results.push(`${nums[i]}->${nums[j]}`)
            }
            i = j+1
        }
    }
    
    return results
};
*/

// ANSWER: quite similar to mine tho
var summaryRanges = function (nums: number[]): string[] {
  let i = 0,
    res = []
  for (let j = 0; j < nums.length; j++) {
    if (nums[j + 1] === nums[j] + 1) continue
    else {
      if (i == j) res.push(nums[i] + '')
      else res.push(nums[i] + '->' + nums[j])
      i = j + 1
    }
  }
  return res
  // Time Complexity: O(n)
  // Space Complexity: O(1)
}
