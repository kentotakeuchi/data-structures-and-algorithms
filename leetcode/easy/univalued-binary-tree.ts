// https://leetcode.com/problems/univalued-binary-tree/

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
function isUnivalTree(root: TreeNode | null): boolean {
    if(!root) return false
    const uni = root.val
    return dfs(root)
    
    function dfs(node: TreeNode | null): boolean {
        if(!node) return false
        if(node.val !== uni) return false
        dfs(node.left)
        dfs(node.right)
    }
};
*/

// MINE: iterative
/*
function isUnivalTree(root: TreeNode | null): boolean {
};
*/

// ANSWER: recursion
/*
function isUnivalTree(root: TreeNode | null): boolean {
    if(!root) return true
    
    if(root.left) {
        if(root.val !== root.left.val) return false
    }
    
    if(root.right) {
        if(root.val !== root.right.val) return false
    }
    
    return isUnivalTree(root.left) && isUnivalTree(root.right)
}
*/

// ANSWER: recursion2
function isUnivalTree(root: TreeNode | null, value: number = root.val): boolean {
  if (!root) {
    return true
  }

  if (root.val !== value) {
    return false
  }

  return isUnivalTree(root.left, value) && isUnivalTree(root.right, value)
}
