// https://leetcode.com/problems/sum-of-left-leaves/

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

// MINE: iterative
/*
function sumOfLeftLeaves(root: TreeNode | null): number {
    const arr = [root]
    let result = 0
    
    while(arr.length) {
        const node = arr.shift()
        console.log({node})
        
        if(node.left) {
            // if left leave
            if(!node.left.left && !node.left.right) {
                result += node.left.val
            } else {
                arr.push(node.left)
            }
        } 
        
        if(node.right) {
            arr.push(node.right)
        }
    }
    
    return result
};
*/

// ANSWER: recursive
function sumOfLeftLeaves(root: TreeNode | null): number {
  return dfs(root, false)

  function dfs(node: TreeNode | null, isLeft: boolean): number {
    if (node == null) return 0

    if (node.left == null && node.right == null && isLeft) {
      return node.val
    }

    const left = dfs(node.left, true)
    const right = dfs(node.right, false)

    return left + right
  }
}
