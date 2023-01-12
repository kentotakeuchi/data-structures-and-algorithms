// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// MINE
/*
function removeDuplicates(nums: number[]): number {
    // violate the constraints
    // return [...new Set(nums)].length
    
    // O(n)
    for(let i=1; i<nums.length; i++) {
        if(nums[i-1] === nums[i]) {
            nums.splice(i-1, 1)
            --i
            console.log({nums})
        }
    }
    
    return nums.length
};
*/

// ANSWER: still duplicates remain
/*
function removeDuplicates(nums: number[]): number {
    if (nums.length == 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
*/

// ANOTHER ANSWER: remove duplicates from array
// var removeDuplicates = function (nums) {
//   if (nums.length < 2) return nums.length;

//   let i = nums.length - 2;

//   while (i >= 0) {
//     if (nums[i + 1] === nums[i]) {
//       nums.splice(i, 1);
//     }

//     i--;
//   }

//   return nums.length;
// };

// try2
function removeDuplicates(nums: number[]): number {
  let i = 0
  for (let j = 1; j < nums.length; ++j) {
    if (nums[i] !== nums[j]) {
      ++i
      nums[i] = nums[j]
    }
  }
  return i + 1
}
