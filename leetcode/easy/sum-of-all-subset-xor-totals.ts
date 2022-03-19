// https://leetcode.com/problems/sum-of-all-subset-xor-totals/

// MINE..
/*
function subsetXORSum(nums: number[], sum = 0: number): number {
    if(nums.length === 0) return 0
    
};
*/

// ANSWER: recursion
function subsetXORSum(nums: number[]): number {
    return helper(nums, 0, 0);
}
    
function helper(nums: number[], index: number, currentXor: number): number {
    // return currentXor when all elements in nums are already considered
    if (index == nums.length) return currentXor;

    // calculate sum of xor with current element
    const withElement = helper(nums, index + 1, currentXor ^ nums[index]);

    // calculate sum of xor without current element
    const withoutElement = helper(nums, index + 1, currentXor);

    // return sum of xors from recursion
    return withElement + withoutElement;
}

