// https://leetcode.com/problems/evaluate-boolean-binary-tree/

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

// MINE
/*
function evaluateTree(root: TreeNode | null): boolean {
    if(root.val === 0 || root.val === 1) 
    if(root.left) 
    
};
*/

// ANSWER
function evaluateTree(root: TreeNode | null): boolean {
  switch (root.val) {
    case 0:
      return false
    case 1:
      return true
    case 2:
      return evaluateTree(root.left) || evaluateTree(root.right)
    default:
      return evaluateTree(root.left) && evaluateTree(root.right)
  }
}
