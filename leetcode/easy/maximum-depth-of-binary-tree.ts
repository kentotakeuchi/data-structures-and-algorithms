// https://leetcode.com/problems/maximum-depth-of-binary-tree/

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
function maxDepth(root: TreeNode | null, depth: number = 1): number {
    // base case
    if(!root) return 0
    
    if(root.left || root.right)
    
    if(root.left) {
        maxDepth(root.left, ++depth)
    }
    if(root.right) {
        maxDepth(root.right, ++depth)
    }
    
    return depth
};
*/

// ANSWER: recursive
/*
var maxDepth = function(root) {
    if(root === undefined || root===null){
        return 0;
    }
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
};
*/

// ANSWER: iterative
var maxDepth = function (root: TreeNode | null) {
  if (!root) return 0
  // using BFS and counting levels
  // not recommended to use array as queue
  let levels = 0,
    queue = []
  queue.push(root)

  while (queue.length > 0) {
    let count = queue.length

    for (let i = 0; i < count; i++) {
      const node = queue.shift()
      if (node?.right) queue.push(node?.right)
      if (node?.left) queue.push(node?.left)
    }
    levels++
  }
  return levels
}
