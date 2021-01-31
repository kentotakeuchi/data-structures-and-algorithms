// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

// MINE
var kthSmallest = function (root, k) {
  let count = 0;
  inorderBST(root);
  return count;

  function inorderBST(node) {
    if (!node) {
      ++count;
      return;
    }
    if (count === k) return;
    console.log({ node, count });

    inorderBST(node.left);
    inorderBST(node.right);
  }
};

// ANSWER: INORDER
// var kthSmallest = function(root, k) {
//     const nums = inorderBST(root, [])
//     return nums[k-1]

//     function inorderBST(node, arr) {
//         if(!node) return arr
//         inorderBST(node.left, arr)
//         arr.push(node.val)
//         inorderBST(node.right, arr)
//         return arr
//     }
// };

// ANSWER: ITERATIVE
var kthSmallest = function (root, k) {
  let result = null;
  function _kthSmallest(node) {
    if (!node) return;
    _kthSmallest(node.left);
    k--;
    if (k === 0) {
      result = node.val;
      return;
    }
    _kthSmallest(node.right);
  }
  _kthSmallest(root);
  return result;
};
