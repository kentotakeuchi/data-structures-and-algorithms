// https://leetcode.com/problems/majority-element/

// MINE: not meet the requirement..
/*
function majorityElement(nums: number[]): number {
    // base case
    if(nums.length === 1) return nums[0]
    
    const map = new Map()
    let result
    let max = -Infinity
    
    for(let num of nums) {
        if(map.has(num)) {
            map.set(num, map.get(num)+1)
        } else {
            map.set(num, 1)
        }
    }
        
    for(let [key, val] of map) {
        if(max < val) {
            max = val
            result = key
        }
    }
    
    return result
};
*/

// ANSWER
