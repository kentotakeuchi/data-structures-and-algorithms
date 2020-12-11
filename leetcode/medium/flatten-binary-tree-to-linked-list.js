// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

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
 * @return {void} Do not return anything, modify root in-place instead.
 */

// MINE..
// var flatten = function(root) {

// };

// ANSWER
var flatten = function (root) {
  if (root === null) return;
  if (root.left) {
    // step 1
    var last = root.left;
    while (last.right !== null) last = last.right;
    // step 2
    var tmp = root.right;
    // step 3
    root.right = root.left;
    // step 4
    last.right = tmp;
    // step 5
    root.left = null;
  }

  flatten(root.right);
};
