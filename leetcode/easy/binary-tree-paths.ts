// https://leetcode.com/problems/binary-tree-paths/

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
function binaryTreePaths(root: TreeNode | null): string[] {
    // base case
    if(!root.left && !root.right) return [`${root.val}`]
    
    const arr = [root]
    const results = []
    let temps = []
    
    while(arr.length) {
        const node = arr.shift()
        temps.push(node.val)
        
        // if node is leaf
        if(!node.left && !node.right) {
            results.push(temps.join('->'))
            temps = [root.val]
        }
        
        if(node.left) {
            arr.unshift(node.left)
        }
        if(node.right) {
            arr.unshift(node.right)
        }
        console.log({arr, temps})
    }
    
    return results
};
*/

// ANSWER: recursion
var binaryTreePaths = function (root: TreeNode | null): string[] {
  let result: string[] = []
  traverse(root, '')

  function traverse(node: TreeNode | null, path: string) {
    if (!node) return

    if (!node.left && !node.right) {
      result.push(path + node.val)
      return
    }
    traverse(node.left, path + node.val + '->')
    traverse(node.right, path + node.val + '->')
  }
  return result
}
