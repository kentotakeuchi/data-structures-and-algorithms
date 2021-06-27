// https://leetcode.com/problems/subtree-of-another-tree/

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
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if(!root || !subRoot) return false
    dfs(root)
    
    function dfs(node: TreeNode | null): boolean {
        if(!node) return
        if(node.val === subRoot.val) {
            if(node.left && subRoot.left)
        }
    }
};
*/

// ANSWER: dfs
function isSubtree(s: TreeNode | null, t: TreeNode | null): boolean {
  if (!s) return !t
  return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
}

function isEqual(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if (!root1 || !root2) return !root1 && !root2
  if (root1.val !== root2.val) return false
  return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right)
}

// ANSWER
/*
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) {
    return false
  }
  return dfsTraversal(root, subRoot)
  // Time Complexity: O(m*n), m = size of s and n = size of t | isEqual() which has a time complexity of O(n) can be called for every node in s so the total time complexity is O(m*n)
  // Space Complexity: O(m), call stack can go as deep as m (which will be greater than or equal to n)
}

const dfsTraversal = (root, target) => {
  if (!root) {
    return
  }
  if (root.val === target.val) {
    let isEqual = isEqualTree(root, target)
    if (isEqual) {
      // we shouldn't simply return isEqual because
      // there might be multiple nodes with the same value as target's
      // and if the first one fails to match, this will return false
      return true
    }
  }
  if (dfsTraversal(root.left, target) || dfsTraversal(root.right, target)) {
    return true
  }
  return false
}

const isEqualTree = (root1, root2) => {
  if (!root1 && !root2) {
    return true
  }
  if (!root1 || !root2) {
    return false
  }
  return (
    root1.val === root2.val &&
    isEqualTree(root1.left, root2.left) &&
    isEqualTree(root1.right, root2.right)
  )
}
*/
