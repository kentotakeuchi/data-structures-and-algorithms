// https://leetcode.com/problems/merge-sorted-array/

/**
 Do not return anything, modify nums1 in-place instead.
 */

// MINE
/*
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for(let i=nums1.length-1, j=n-1; j>=0; --i, --j) {
        nums1[i] = nums2[j]
    }
    nums1.sort((a, z) => a - z)
    console.log('merged', nums1)
};
*/

// ANSWER
var merge = function (nums1: number[], m: number, nums2: number[], n: number): void {
  var insertPos = m + n - 1
  m--
  n--
  while (n >= 0) {
    nums1[insertPos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]
  }
}
