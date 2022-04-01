// https://leetcode.com/problems/build-array-from-permutation/

// MINE
/*
function buildArray(nums: number[]): number[] {
    // using an extra space
    // return nums.map(i => nums[i])
    
    // without using an extra space
    for(let i=0; i<nums.length; ++i) {
        
    }
    return nums
};
*/

// ANSWER: O(1) space
// this is done to keep both old and new value together.
// going by the example of [5,0,1,2,3,4]
// after this nums[0] will be 5 + 6*(4%6) = 5 + 24 = 29;
// now for next index calulation we might need the original value of num[0] which can be obtain by num[0]%6 = 29%6 = 5;
// if we want to get just he new
function buildArray(nums: number[]): number[] {
  const n = nums.length
  for (let i = 0; i < n; ++i) nums[i] = nums[i] + n * (nums[nums[i]] % n)
  for (let i = 0; i < n; ++i) nums[i] = Math.floor(nums[i] / n)
  return nums
}
