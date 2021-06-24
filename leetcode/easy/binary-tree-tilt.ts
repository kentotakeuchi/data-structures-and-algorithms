// https://leetcode.com/problems/binary-tree-tilt/

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
function findTilt(root: TreeNode | null): number {
    if(!root) return 0
    return dfs(root)
    
    function dfs(node: TreeNode | null): number {
        if(!node) return
        let l = 0
        let r = 0
        if(node.left) {
            l += node.left.val
            dfs(node.left)
        }
        if(node.right) {
            r += node.right.val
            dfs(node.right)
        }
        return Math.abs(l - r)
    }
};
*/

// ANSWER: dfs(post-order)
function findTilt(root: TreeNode | null): number {
  let total = 0
  valSum(root)
  return total

  function valSum(node: TreeNode | null): number {
    if (!node) return 0

    let lSum = valSum(node.left)
    let rSum = valSum(node.right)
    let tilt = Math.abs(lSum - rSum)
    total += tilt

    // return the sum of values starting from this node.
    return node.val + lSum + rSum
  }
}
