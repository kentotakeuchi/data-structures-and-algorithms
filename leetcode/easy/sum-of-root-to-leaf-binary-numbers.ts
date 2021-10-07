// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/

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

// MINE: recursion
/*
function sumRootToLeaf(root: TreeNode | null): number {
    let sum = 0
    dfs(root)
    return sum
    
    function dfs(node: TreeNode | null, temp: string = ''): number {
        if(!node) return 0
        
        temp += node.val
        
        if(!node.left && !node.right) return sum += parseInt(temp, 2)
        
        dfs(node.left, temp)
        dfs(node.right, temp)
    }
};
*/

// ANSWER: recursion
function sumRootToLeaf(root: TreeNode | null): number {
  return dfs(root, 0)

  function dfs(node: TreeNode | null, val: number): number {
    if (!node) return 0
    val = val * 2 + node.val
    console.log({ val })
    return node.left === node.right ? val : dfs(node.left, val) + dfs(node.right, val)
  }
}
