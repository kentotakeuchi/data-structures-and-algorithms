// https://leetcode.com/problems/search-in-a-binary-search-tree/

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
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    return dfs(root) 
    
    function dfs(node: TreeNode | null) {
        if(!node) return null
        
        if(node.val === val) return node
        else if(node.val > val) return dfs(node.left)
        else if(node.val < val) return dfs(node.right)
    }
};
*/

// MINE: iterative
// function searchBST(root: TreeNode | null, val: number): TreeNode | null {

// };

// ANSWER: pure recursion
/*
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if(!root) return null;
    if(root.val === val) return root;
    if(val < root.val) return searchBST(root.left, val);
    if(val > root.val) return searchBST(root.right, val);
}
*/

// ANSWER: iterative
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  while (root !== null && root.val !== val) {
    root = val < root.val ? root.left : root.right
  }
  return root
}
