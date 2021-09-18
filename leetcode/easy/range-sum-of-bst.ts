// https://leetcode.com/problems/range-sum-of-bst/

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

// MINE: recursive
/*
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    if(!root) return 0
    let sum = 0
    dfs(root)
    return sum
    
    function dfs(node: TreeNode | null): void {
        if(!node) return
        if(node.val < low) {
            if(node.right) dfs(node.right)
        }
        else if(node.val > high) {
            if(node.left) dfs(node.left)
        } else {
            sum += node.val
            if(node.left) dfs(node.left)
            if(node.right) dfs(node.right)
        }
    }
};
*/

// ANSWER: recursive
/*
function rangeSumBST(root: TreeNode | null, L: number, R: number): number {
    var sum = 0;
    if (root == null) {
        return sum;
    }

    if (root.val > L) {
        sum += rangeSumBST(root.left, L, R);
    }
    if (root.val <= R && root.val >= L) {
        sum += root.val;
    }
    if (root.val < R) {
        sum += rangeSumBST(root.right, L, R);    
    }    
    
    return sum;
};
*/

// ANSWER: iterative
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let stack = [root]
  let sum = 0
  while (stack.length !== 0) {
    let currentNode = stack.pop()
    if (currentNode) {
      if (currentNode.val >= low && currentNode.val <= high) {
        sum += currentNode.val
      }
      // when current value is greater than low, we check the left node since the left node is always smaller than current node
      if (currentNode.val > low) {
        stack.push(currentNode.left)
      }
      if (currentNode.val < high) {
        stack.push(currentNode.right)
      }
    }
  }
  return sum
}
