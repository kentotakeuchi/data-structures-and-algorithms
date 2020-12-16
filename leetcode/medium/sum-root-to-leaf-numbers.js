// https://leetcode.com/problems/sum-root-to-leaf-numbers/

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
 * @return {number}
 */

// MINE
// var sumNumbers = function(root) {
//     // dfs
//         // concat num as string
//         // if leaf
//             // add the concat one to sum as num
//     // return sum

//     let sum = 0;
//     dfs(root, '');
//     return sum;

//     // loop from root to leaf
//     function dfs(node, strNum) {
//         // base case
//         if(node === null) return;

//         // concat num val as str
//         strNum += node.val;

//         // if node is leaf
//         if(node.left === null && node.right === null) {
//             sum += parseInt(strNum);
//             return;
//         }

//         dfs(node.left, strNum);
//         dfs(node.right, strNum);
//     }
// };

// ANOTHER ANSWER
var sumNumbers = function (root) {
  let sum = 0;
  (function traverseTree(node, curr) {
    if (!root) return;
    curr = curr * 10 + node.val;
    if (!node.left && !node.right) {
      sum = sum + curr;
      return;
    }
    if (node.left) traverseTree(node.left, curr);
    if (node.right) traverseTree(node.right, curr);
  })(root, 0);
  return sum;
};
