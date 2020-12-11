// https://leetcode.com/problems/path-sum-ii/

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
 * @param {number} sum
 * @return {number[][]}
 */

// MINE..
// var pathSum = function(root, sum) {
//     const results = [];

//     // recursion
//     const dfs = (node, count, path) => {
//         console.log({node, count, path, results})

//         // edge case
//         if(node === null) return;

//         path.push(node.val);
//         count += node.val;

//         // if leaf
//         if(node.left === null && node.right === null) {
//             // if sum = count
//             if(sum === count) {
//                 results.push(path);
//                 count = 0;
//                 path = [];
//             }
//         }

//         dfs(node.left, count, path);
//         dfs(node.right, count, path);
//     }

//     // initial trigger
//     dfs(root, 0, []);

//     return results;
// };

// ANSWER
var pathSum = function (root, sum, res = [], path = []) {
  if (root) {
    path.push(root.val);
    if (!root.left && !root.right && sum - root.val === 0) res.push([...path]);
    pathSum(root.left, sum - root.val, res, path);
    pathSum(root.right, sum - root.val, res, path);
    path.pop();
  }
  return res;
};
