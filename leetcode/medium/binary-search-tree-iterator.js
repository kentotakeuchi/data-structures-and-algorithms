// https://leetcode.com/problems/binary-search-tree-iterator/

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
 */

// MINE..
// var BSTIterator = function(root) {
//     this.root = root
// };

// /**
//  * @return {number}
//  */
// BSTIterator.prototype.next = function() {
//     console.log({this})
//     // if(this.hasNext()) this.root = this.root.right
//     // else this.root = null
// };

// /**
//  * @return {boolean}
//  */
// BSTIterator.prototype.hasNext = function() {
//     // if(this.root.right) return true
//     // return false
// };

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

// ANSWER
var BSTIterator = function (root) {
  if (!root) {
    this.data = [];
    return;
  }

  let visited = [];

  function traverse(node) {
    if (node.left) traverse(node.left);
    visited.push(node.val);
    if (node.right) traverse(node.right);
  }
  traverse(root);

  this.data = visited.reverse();
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.data.pop();
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.data.length > 0;
};
