// https://leetcode.com/problems/range-sum-query-mutable/

// MINE..: time limit..
/**
 * @param {number[]} nums
 */
// var NumArray = function(nums) {
//     this.nums = nums
// };

// /**
//  * @param {number} index
//  * @param {number} val
//  * @return {void}
//  */
// NumArray.prototype.update = function(index, val) {
//     this.nums.splice(index, 1, val)
// };

// /**
//  * @param {number} left
//  * @param {number} right
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function(left, right) {
//     return this.nums.slice(left, right+1).reduce((acc, cur) => acc + cur, 0)
// };

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

// ANSWER: from discussion on JS
function NumArray(nums) {
  var tree = [];
  build(0, nums.length - 1, 0);
  return { sumRange, update };

  function sumRange(left, right) {
    return sumUtil(0, nums.length - 1, 0);

    function sumUtil(currLeft, currRight, treeIdx) {
      if (left > currRight || right < currLeft) return 0;
      if (left <= currLeft && right >= currRight) return tree[treeIdx];

      var mid = currLeft + ((currRight - currLeft) >> 1);
      return (
        sumUtil(currLeft, mid, treeIdx * 2 + 1) +
        sumUtil(mid + 1, currRight, treeIdx * 2 + 2)
      );
    }
  }

  function update(idx, val) {
    var diff = val - nums[idx];
    nums[idx] = val;
    updateUtil(0, nums.length - 1, 0);

    function updateUtil(left, right, treeIdx) {
      if (idx >= left && idx <= right) {
        tree[treeIdx] += diff;
        if (left === right) return;
        var mid = left + ((right - left) >> 1);
        updateUtil(left, mid, treeIdx * 2 + 1);
        updateUtil(mid + 1, right, treeIdx * 2 + 2);
      }
    }
  }

  function build(left, right, idx) {
    if (left > right) return;
    var mid = left + ((right - left) >> 1);
    var sum =
      left === right
        ? nums[left]
        : build(left, mid, idx * 2 + 1) + build(mid + 1, right, idx * 2 + 2);

    tree[idx] = sum;
    return sum;
  }
}

// ANSWER..: from the solution..
class NumArray {
  tree = [];
  n;

  constructor(nums) {
    if (nums.length > 0) {
      n = nums.length;
      tree = new Array(n * 2);
      buildTree(nums);
    }
  }

  buildTree(nums) {
    for (let i = n, j = 0; i < 2 * n; i++, j++) tree[i] = nums[j];
    for (let i = n - 1; i > 0; --i) tree[i] = tree[i * 2] + tree[i * 2 + 1];
  }

  update(index, val) {
    index += n;
    tree[index] = val;
    while (index > 0) {
      let left = index;
      let right = index;
      if (index % 2 === 0) {
        right = index + 1;
      } else {
        left = index - 1;
      }

      // parent is updated after child is updated
      tree[index / 2] = tree[left] + tree[right];
      index /= 2;
    }
  }

  sumRange(l, r) {
    // get leaf with value 'l'
    l += n;
    // get leaf with value 'r'
    r += n;
    let sum = 0;
    while (l <= r) {
      if (l % 2 == 1) {
        sum += tree[l];
        l++;
      }
      if (r % 2 == 0) {
        sum += tree[r];
        r--;
      }
      l /= 2;
      r /= 2;
    }
    return sum;
  }
}
