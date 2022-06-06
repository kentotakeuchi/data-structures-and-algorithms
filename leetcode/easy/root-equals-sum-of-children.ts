// https://leetcode.com/problems/root-equals-sum-of-children/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode
 *     right: TreeNode
 *     constructor(val: number, left: TreeNode, right: TreeNode) {
 *         this.val = val
 *         this.left = left
 *         this.right = right
 *     }
 * }
 */

// MINE
function checkTree(root: TreeNode): boolean {
  return root.val === root.left.val + root.right.val
}

// ANSWER
