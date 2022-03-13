// https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/

// MINE
/*
function minOperations(nums: number[]): number {
    let ans = 0
    for(let i=1; i<nums.length; ++i) {
        while(nums[i-1] >= nums[i]) {
            ++nums[i]
            ++ans
        }
    }
    return ans
};
*/

// ANSWER
function minOperations(nums: number[]): number {
    let ans = 0
    for(let i=1; i<nums.length; ++i) {
        if(nums[i-1] >= nums[i]) {
            ans = ans + nums[i-1] - nums[i]+1
            nums[i] = nums[i-1]+1
        }                      
    }
    return ans
}