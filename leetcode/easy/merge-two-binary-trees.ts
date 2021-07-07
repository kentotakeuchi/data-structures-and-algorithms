// https://leetcode.com/problems/merge-two-binary-trees/

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
// function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {

// };

// MINE: recursive..
/*
function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if(!root1 && !root2) return null
    if(!root1 || !root2) return root1 || root2
    
    const left = mergeTrees(root1.left, root2.left)
    const right = mergeTrees(root1.right, root2.right)
    
    
};
*/

// ANSWER: recursive
/*
function mergeTrees(t1: TreeNode | null, t2: TreeNode | null): TreeNode | null {
    if(!t1) return t2
    if(!t2) return t1
    
    t1.val += t2.val
    t1.left = mergeTrees(t1.left, t2.left)
    t1.right = mergeTrees(t1.right, t2.right)
    return t1
};
*/

// ANSWER: iterative
/*
function mergeTrees(t1: TreeNode | null, t2: TreeNode | null): TreeNode | null {
    if(!t1) return t2
    
    const stack = [[t1, t2]]
    
    while(stack.length) {
        const t = stack.pop()
        
        if(!t[0] || !t[1]) continue
        
        t[0].val += t[1].val
        
        if(!t[0].left) {
            t[0].left = t[1].left
        } else {
            stack.push([t[0].left, t[1].left])
        }
        if(!t[0].right) {
            t[0].right = t[1].right
        } else {
            stack.push([t[0].right, t[1].right])
        }
    }
    
    return t1
};
*/

// ANSWER: recursive(easy to understand)
function mergeTrees(t1: TreeNode | null, t2: TreeNode | null): TreeNode | null {
  if (t1 && t2) {
    const newNode = new TreeNode(t1.val + t2.val)
    newNode.left = mergeTrees(t1.left, t2.left)
    newNode.right = mergeTrees(t1.right, t2.right)
    return newNode
  }
  return t1 || t2
}
