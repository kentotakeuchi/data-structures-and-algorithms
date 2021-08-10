// https://leetcode.com/problems/minimum-distance-between-bst-nodes/

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
/*
function minDiffInBST(root: TreeNode | null): number {
    let minDiff = Infinity
    dfs(root)
    return minDiff
    
    function dfs(node: TreeNode | null): void {
        if(!node) return
        
        const left = 
    }
};
*/

// ANSWER
function minDiffInBST(root: TreeNode | null): number {
  let res = Infinity
  let pre: number | null = null
  dfs(root)
  return res

  function dfs(node: TreeNode | null) {
    if (!node) return
    if (node.left !== null) dfs(node.left)
    if (pre !== null) res = Math.min(res, node.val - pre)
    pre = node.val
    if (node.right !== null) dfs(node.right)
  }
}
