// https://leetcode.com/problems/binary-tree-inorder-traversal/

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
// var inorderTraversal = function(root) {
//     // inorder: left - center - right
//     // recur left -> push -> right

//     const results = [];

//     const helper = (node) => {
//         if(!node) return;

//         helper(node.left);
//         results.push(node.val);
//         helper(node.right);
//     }

//     helper(root);

//     return results;
// };

// ANOTHER ANSWER: ITERATIVE USING STACK
function inorderTraversal(root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
}
