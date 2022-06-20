// https://leetcode.com/problems/min-max-game/

// MINE
/*
function minMaxGame(nums: number[]): number {
    while(nums.length > 1) {
        for(let i=0, j=0; j<nums.length; ++i, j+=2) {
            if(i%2 === 0) {
                const notMinIdx = nums[j] >= nums[j+1] ? j : j+1
                nums[notMinIdx] = 0
            } else {
                const notMaxIdx = nums[j] <= nums[j+1] ? j : j+1
                nums[notMaxIdx] = 0
            }
        }
        nums = nums.filter((n) => n)
    }
    return nums[0]
};
*/

// ANSWER
function minMaxGame(nums: number[]): number {
  for (let i = nums.length; i > 1; i -= Math.floor(i / 2)) {
    for (let j = 0; j < Math.floor(i / 2); ++j) {
      nums[j] =
        j % 2 === 0
          ? Math.min(nums[2 * j], nums[2 * j + 1])
          : Math.max(nums[2 * j], nums[2 * j + 1])
    }
  }
  return nums[0]
}
