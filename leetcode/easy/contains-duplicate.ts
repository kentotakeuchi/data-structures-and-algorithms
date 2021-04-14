// https://leetcode.com/problems/contains-duplicate/

// MINE
/*
function containsDuplicate(nums: number[]): boolean {
    return nums.length !== new Set(nums).size
}
*/

// ANSWER
var containsDuplicate = function (nums: number[]): boolean {
  var obj: { [key: string]: number } = {}

  for (var i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1

    if (obj[nums[i]] > 1) return true
  }

  return false
}
