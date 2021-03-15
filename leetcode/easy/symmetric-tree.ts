// https://leetcode.com/problems/symmetric-tree/

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
function isSymmetric(root: TreeNode | null): boolean {
    // conditions of symmetric
        // the same number of node
        // current node.val is the same --> how to traverse symmetry?
        // node.left = node.right, vice versa
    
    if(root.left && !root)
};
*/

// ANSWER: recursive
/*
function isSymmetric(root: TreeNode | null): boolean {
    return isMirror(root, root)
}

function isMirror(t1: TreeNode | null, t2: TreeNode | null) {
    if (t1 == null && t2 == null) return true;
    if (t1 == null || t2 == null) return false;
    return (t1.val == t2.val)
        && isMirror(t1.right, t2.left)
        && isMirror(t1.left, t2.right)
}
*/

// ANSWER: interative
function isSymmetric(root: TreeNode | null): boolean {
  const q = []
  q.push(root)
  q.push(root)
  while (q.length) {
    const t1 = q.shift()
    const t2 = q.shift()
    if (t1 == null && t2 == null) continue
    if (t1 == null || t2 == null) return false
    if (t1.val != t2.val) return false
    q.push(t1.left)
    q.push(t2.right)
    q.push(t1.right)
    q.push(t2.left)
  }
  return true
}
