// https://leetcode.com/problems/contains-duplicate-ii/

// MINE
/*
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if(nums[i] === nums[j]) {
                if(j-i <= k) return true
            }
        }
    }
    
    return false
};
*/

// ANSWER: use map
var containsNearbyDuplicate = function (nums: number[], k: number): boolean {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (i - map.get(nums[i]) <= k) {
      return true
    }
    map.set(nums[i], i)
  }
  return false
}
