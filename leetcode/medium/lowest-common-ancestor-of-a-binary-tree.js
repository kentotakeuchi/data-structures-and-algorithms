// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// MINE
// var lowestCommonAncestor = function(root, p, q) {
//     // if found p and q
//         // use boolean flag

//     let lca = null
//     dfs(root, p, q)
//     return lca

//     function dfs(node, p, q) {
//         if(!node) return false

//         const left = dfs(node.left, p, q) ? 1 : 0
//         const right = dfs(node.right, p, q) ? 1 : 0
//         const mid = (node === p || node === q) ? 1 : 0

//         if(left + right + mid >= 2) {
//             lca = node
//         }

//         return (left + right + mid > 0)
//     }
// };

// ANSWER
const lowestCommonAncestor = (root, p, q) => {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (!left) return right; // p and q are in the right subtree
  if (!right) return left; // p and q are in the left subtree
  return root; // p is in one side and q is in the other
};
