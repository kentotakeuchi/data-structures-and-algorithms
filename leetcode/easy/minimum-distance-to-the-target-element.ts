// https://leetcode.com/problems/minimum-distance-to-the-target-element/

// MINE
/*
function getMinDistance(nums: number[], target: number, start: number): number {
    const idxs = []
    let ans = 1000
    for(let i=0; i<nums.length; ++i) if(nums[i] === target) idxs.push(i)
    for(let idx of idxs) ans = Math.min(ans, Math.abs(idx-start))
    return ans
};
*/

// ANSWER
function getMinDistance(nums: number[], target: number, start: number): number {
    let ans = 1000
    for(let i=0; i<nums.length && ans > Math.abs(i - start); ++i) {
        if(nums[i] === target) ans = Math.abs(i - start)
    }
    return ans
}