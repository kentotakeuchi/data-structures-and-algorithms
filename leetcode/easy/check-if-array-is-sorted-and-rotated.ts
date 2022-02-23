// https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/

// MINE
/*
function check(nums: number[]): boolean {
    const newNums = [...nums, ...nums]
    nums.sort((a, z) => a - z)
    
    for(let i=0; i<newNums.length; ++i) {
        if(newNums[i] === nums[0]) {
            let has = true
            
            for(let j=1; j<nums.length; ++j) {
                if(newNums[++i] !== nums[j]) {
                    has = false
                    break
                }
            }
            
            if(has) return true
        }
    }
    
    return false
};
*/

// ANSWER
function check2(nums: number[]): boolean {
  let decreased = false
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] < nums[i - 1]) {
      if (decreased) {
        return false
      }
      decreased = true
    }
  }
  return decreased ? nums[0] >= nums[nums.length - 1] : true
}
