// https://leetcode.com/problems/search-insert-position/

// MINE
/*
function searchInsert(nums: number[], target: number): number {
    // O(log(n))
    const n = nums.length
    
    // base case
    if(target < nums[0]) return 0
    if(nums[n-1] < target) return n
    
    let start = 0
    let end = n-1
    while(start < end) {
        const mid = start + Math.floor((end-start)/2)
        console.log({mid})
        
        // if mid is target
        if(nums[mid] === target) {
            return mid
        }
        
        // if target is less than mid
        if(target < nums[mid]) {
            end = mid
        // if target is greater than mid
        } else if(nums[mid] < target) {
            start = mid+1
        }
    }
    
    // if not found
    return end
};
*/

// ANSWER: recursion
/*
function searchInsert(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};


function binarySearch(array, target, start, end) {
	 // If the target is less then the very last item then insert it at that item index
	 // because anything index less then that has already been confirmed to be less then the target.
	 // Otherwise insert it at that item index + 1
	 // because any index grater then that has already been confirmed to be greater then the target
    if (start > end) return start;
    
    const midPoint = Math.floor((start + end)/2);
    
	// found target
    if (array[midPoint] === target) return midPoint;
    
	// search the left side
    if (array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);
    // search the right side
    if (array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
}
*/

// ANSWER:
// time O(n) space O(1)
/*
var searchInsert = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
        if(target === nums[i] || target < nums[i]) {
            return i
        }
    }
    
    return nums.length
};
*/

// ANSWER: maybe basic(same approach as me)
var searchInsert = function (nums, target) {
  let high = nums.length - 1
  let low = 0
  while (low <= high) {
    let mid = Math.floor((high + low) / 2)
    if (nums[mid] == target) return mid
    else if (nums[mid] > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return low
}
