/**
 * Binary Search Pseudocode
 *
 * This function accepts a sorted array and a value
 * Create a left pointer at the start of the array, and a right pointer at the end of the array
 * While the left pointer comes before the right pointer:
 *  create a pointer in the middle
 *  If you find the value you want, return the index
 *  If the value is too small, move the left pointer up
 *  If the value is too large, move the right pointer down
 * If you never find the value, return -1
 */

function binarySearch(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor(arr.length / 2);

  while (arr[mid] !== val && left <= right) {
    if (val < arr[mid]) right = mid - 1;
    else left = mid + 1;
    mid = Math.floor((left + right) / 2);
  }

  return arr[mid] === val ? mid : -1;
}

binarySearch([1, 2, 3, 4, 5], 2);
