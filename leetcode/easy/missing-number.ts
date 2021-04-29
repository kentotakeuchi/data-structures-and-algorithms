// https://leetcode.com/problems/missing-number/

// MINE: not O(n) time complexity..
/*
function missingNumber(nums: number[]): number {
    const n = nums.length
    
    for(let i=n; i>=0; --i) {
        if(!nums.includes(i)) return i
    }
    
    return -1
};
*/

// ANSWER: sort
/*
function missingNumber(nums: number[]): number {
    nums.sort((a, z) => a-z)
    
    // Ensure that n is at the last index
    if (nums[nums.length-1] != nums.length) {
        return nums.length;
    }
    // Ensure that 0 is at the first index
    else if (nums[0] != 0) {
        return 0;
    }

    // If we get here, then the missing number is on the range (0, n)
    for (let i = 1; i < nums.length; i++) {
        let expectedNum = nums[i-1] + 1;
        if (nums[i] != expectedNum) {
            return expectedNum;
        }
    }

    // Array was not missing any numbers
    return -1;
}
*/

// ANSWER: hashset
/*
function missingNumber(nums: number[]): number {
    const set = new Set(nums)
    
    let expectedNumCount = nums.length+1
    for(let n = 0; n < expectedNumCount; ++n) {
        if(!set.has(n)) return n
    }
    
    return -1
}
*/

// ANSWER: gauss' formula
/*
function missingNumber(nums: number[]): number {
    let expectedSum = nums.length * (nums.length+1) / 2
    let actualSum = nums.reduce((acc, cur) => acc + cur, 0)
    return expectedSum - actualSum
}
*/

// ANSWER
/*
var missingNumber = function(nums) {
    // construct array of size n+1, to leave a spot for the missing element.
	// Assign each val to -1 so we can see which position was not filled
    // O(n)
    const res = new Array(nums.length+1).fill(-1);
	
	// "sort" the elements by assigning to the array based on val
    // O(n)
    for(const num of nums) {
        res[num] = num;
    }
    
	// the remaining -1 index is the missing value
    // O(n-1)
    return res.indexOf(-1);
};
*/

// ANSWER
var missingNumber = function (nums: number[]): number {
  var sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += i + 1 - nums[i]
  }

  return sum
}
