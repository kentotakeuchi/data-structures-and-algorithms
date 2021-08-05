// https://leetcode.com/problems/largest-number-at-least-twice-of-others/

// MINE: sort
/*
function dominantIndex(nums: number[]): number {
    if(nums.length === 1) return 0
    
    // create new array -> sort + remove duplication -> extract 1st and 2nd num
    const [first, second] = Array.from([...new Set(nums)]).sort((a, z) => z - a).slice(0, 2)
    
    return second*2 <= first ? nums.indexOf(first) : -1
};
*/

// ANSWER: one pass(this is what i wanted to do..)
function dominantIndex(nums: number[]): number {
  let first = -Infinity
  let second = -Infinity
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first
      first = nums[i]
      ans = i
    } else if (nums[i] > second) {
      second = nums[i]
    }
  }
  return first >= second * 2 ? ans : -1
}
