// https://leetcode.com/problems/invert-binary-tree/

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

// MINE..: iterate, array, bfs
/*
function invertTree(root: TreeNode | null): TreeNode | null {
    // base case
    if(!root) return null
    if(!root.left && !root.right) return root
    
    let mirror = root
    const arr = [root]
    
    while(arr.length) {
        const node = arr.shift()
        if(node.right) {
            mirror.left = node.right
        }
        if(node.left) {
            mirror.right = node.left
        }
    }
    
    return mirror
};
*/

// ANSWER: iterative
/*
function invertTree(root: TreeNode | null): TreeNode | null {
    if(root == null) return null
    const q = [root]
    while(q.length) {
        const cur = q.shift()
        let temp = cur.left
        cur.left = cur.right
        cur.right = temp
        if(cur.left != null) q.push(cur.left)
        if(cur.right != null) q.push(cur.right)
    }
    return root
}
*/

// ANSWER: recursive
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root == null) return null
  const right = invertTree(root.right)
  const left = invertTree(root.left)
  root.left = right
  root.right = left
  return root
}
