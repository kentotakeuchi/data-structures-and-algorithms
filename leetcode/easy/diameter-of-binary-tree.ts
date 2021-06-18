// https://leetcode.com/problems/diameter-of-binary-tree/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// MINE..
// function diameterOfBinaryTree(root: TreeNode | null, lMax: number = 0, rMax: number = 0): number {
//     if(!root || (!root.left && !root.right)) return 0
//     dfs(root)
//     return lMax + rMax

//     function dfs(node: TreeNode | null, l: number = 0, r: number = 0) {
//         if(!node) return

//         if(node.left) {
//             return dfs(node.left, Math.max(lMax, ++l), r)
//         }
//         if(node.right) {
//             return dfs(node.right, l, Math.max(rMax, ++r))
//         }
//     }
// };

// ANSWER: dfs
function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0

  dfs(root)

  return diameter

  function dfs(node: TreeNode | null): number {
    if (!node) return 0

    const left = dfs(node.left)
    const right = dfs(node.right)

    // update diameter at every node
    diameter = Math.max(diameter, left + right)

    // update the largest number of edge so far
    return 1 + Math.max(left, right)
  }
}
