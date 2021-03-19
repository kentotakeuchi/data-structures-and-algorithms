// https://www.rallycoding.com/problems/230

/**
 *
 * @param {number[]} intArray
 * @param {number} k
 * @return boolean
 */

// MINE
/*
const solve = (intArray, k) => {
  for(let num of intArray) {
    if(intArray.includes(k-num)) return true
  }
  return false;
};
*/

// SOMEONE: O(n^2)
const solve = (intArray, k) => {
  const nums = {}
  for (const num of intArray) {
    const potentialMatch = k - num
    if (potentialMatch in nums) {
      return true
    } else {
      nums[num] = true
    }
  }
  return false
}
