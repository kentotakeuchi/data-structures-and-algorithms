// https://leetcode.com/problems/binary-tree-postorder-traversal/

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

// MINE
// var postorderTraversal = function(root) {
//     // postorder = l -> r -> root

//     if(!root) return []

//     const results = []
//     const stack = [root]

//     while(stack.length) {
//         let node = stack.pop()

//         results.push(node.val)
//         if(node.left) stack.push(node.right)
//         if(node.right) stack.push(node.left)
//     }

//     return results
// };

// ANSWER
// Iterative Solution
// var postorderTraversal = function(root) {
//     if (!root) return [];
//     let stack = [], res = [];
//     stack.push(root);
//     while (stack.length) {
//         let node = stack[stack.length-1];
//         if (node.left) {
//             stack.push(node.left);
//             node.left = null;
//         }
//         else if (node.right) {
//             stack.push(node.right);
//             node.right = null;
//         }
//         else res.push(stack.pop().val);
//     }
//     return res;
// };

// Recursive Solution
var postorderTraversal = function (root) {
  let res = [];
  traverse(root);
  return res;

  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    traverse(node.right);
    res.push(node.val);
  }
};
