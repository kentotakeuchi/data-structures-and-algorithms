// https://leetcode.com/problems/binary-tree-preorder-traversal/

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
 * @return {number[]}
 */

// preorder = c l r
// MINE..
// var preorderTraversal = function(root) {
//     // recursion
//         // base
//         // change arg
//     const results = [];
//     preorderDFS(root);
//     return results;

//     function preorderDFS(node) {
//         if(!node) {
//             results.push(null);
//             return;
//         }

//         // center
//         results.push(node.val)
//         // left
//         preorderDFS(node.left);
//         // right
//         preorderDFS(node.right);
//     }
// };

// ANSWER: iterate
var preorderTraversal = function (root) {
  if (!root) return [];
  var result = [];
  var stack = [root];

  while (stack.length) {
    var node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
};

// Recursive DFS Solution
var preorderTraversal = function (root, stack = [], res = []) {
  if (!root) return [];
  stack.push(root);
  res.push(root.val);
  if (root.left) preorderTraversal(root.left, stack, res);
  if (root.right) preorderTraversal(root.right, stack, res);
  return res;
};
