// https://leetcode.com/problems/balanced-binary-tree/

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
function isBalanced(root: TreeNode | null): boolean {
    // base case
    if(!root) return true
    
    // each level of the subtrees
    let lLv = 1
    let rLv = 1
    
    // count the level of left and right subtrees
    DFS(root, root, lLv, rLv)
    
    // the left and right subtrees of every node differ in height by no more than 1
    return Math.abs(lLv - rLv) <= 1
    
    function DFS(lRoot: TreeNode | null, rRoot: TreeNode | null, lLv: number, rLv: number) {
        if(!lRoot && !rRoot) return
        
        if(lRoot && lRoot.left) {
            DFS(lRoot.left, null, ++lLv, rLv)
        }
    }
};
*/

// ANSWER: dfs(postorder)
/*
var isBalanced = function(root) {
    
    let dfs = function(node) {
        if (!node) return 0;
        let left = 1 + dfs(node.left);
        let right = 1 + dfs(node.right);
        if (Math.abs(left - right) > 1) return Infinity;
        return Math.max(left, right);
    }
    
    return dfs(root)==Infinity?false:true;
};
*/

// ANSWER
let isBalanced = function (root: TreeNode | null): boolean {
  if (root == null) {
    return true
  }

  return getHeight(root) !== -1
}

let getHeight = function (node: TreeNode | null): number {
  if (node == null) {
    return 0
  }

  let left = getHeight(node.left)
  let right = getHeight(node.right)

  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1
  }

  return Math.max(left, right) + 1
}
