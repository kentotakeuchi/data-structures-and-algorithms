// https://leetcode.com/problems/3sum-closest/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// MY SOLUTION
var threeSumClosest = function (nums, target) {
  let closest = Infinity;
  let result;

  nums.sort((a, z) => a - z);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      closest = Math.min(closest, Math.abs(target - sum));
      if (closest === Math.abs(target - sum)) {
        result = sum;
      }

      if (closest === 0) {
        return sum;
      } else if (sum < target) {
        ++j;
      } else {
        --k;
      }
    }
  }

  return result;
};

// ANOTHER SOLUTION: TWO POINTERS
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closest = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      let localSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(localSum - target) < Math.abs(closest - target))
        closest = localSum;
      if (localSum > target) right--;
      else left++;
    }
  }
  return closest;
};
