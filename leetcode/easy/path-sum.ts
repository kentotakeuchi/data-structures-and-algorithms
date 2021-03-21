// https://leetcode.com/problems/path-sum/

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
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    // base case
    if(!root) return false
    
    return DFS(root, root.val)
    
    function DFS(node: TreeNode | null, sum: number): boolean {
        // if node is leaf
        if(!node.left && !node.right) {
            if(sum === targetSum) {
                return true
            } else {
                return false
            }
        }
        
        if(node.left) DFS(node.left, sum += node.left.val)
        if(node.right) DFS(node.right, sum += node.right.val)
        
        return false
    }
};
*/

// ANSWER: recursive
/*
var hasPathSum = function(root, sum) {
    if (!root) return false;

    if (!root.left && !root.right) { // check leaf
        return sum === root.val;
    } else { // continue DFS
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }
};
*/

// ANSWER: iterative
var hasPathSum = function (root: TreeNode | null, sum: number) {
  if (!root) return false
  let queue = [root]
  while (queue.length > 0) {
    let cur = queue.shift()
    if (!cur?.left && !cur?.right && cur?.val == sum) {
      return true
    }
    if (cur?.left) {
      cur.left.val += cur?.val
      queue.push(cur?.left)
    }
    if (cur?.right) {
      cur.right.val += cur?.val
      queue.push(cur?.right)
    }
  }
  return false
}
