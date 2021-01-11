// https://leetcode.com/problems/binary-tree-right-side-view/

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

// MINE..
// var rightSideView = function(root) {
//     // preorder

//     // if no node
//     if(!root) return []

//     const results = [root.val]

//     function preorder(node) {
//         if(!node) return

//         results.push(node.val)
//         if(node.left) preorder(node.left)
//         if(node.right) preorder(node.right)
//     }
//     preorder(root.right)

//     return results
// };

// ANSWER: RECURSION
// var rightSideView = function(root) {
//     if (!root) return [];
//     let res = [];
//     pre(root, 0);
//     return res;

//     function pre(node, h) {
//         if (!node) return;
//         res[h] = node.val;
//         pre(node.left, h+1);
//         pre(node.right, h+1);
//     }
// };

// ANSWER: ITERATE WITH QUEUE
var rightSideView = function (root) {
  const result = [];
  const queue = [];

  if (root === null) return result;

  queue.push(root);
  while (queue.length !== 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let n = queue.shift();
      if (i === size - 1) result.push(n.val);
      if (n.left !== null) queue.push(n.left);
      if (n.right !== null) queue.push(n.right);
    }
  }

  return result;
};
