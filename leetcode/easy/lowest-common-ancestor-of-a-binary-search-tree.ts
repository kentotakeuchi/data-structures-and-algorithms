// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

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
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	
};
*/

// ANSWER: recursive
/*
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    // Value of current node or parent node.
	const parentVal = root.val
    
    const pVal = p.val
    const qVal = q.val
    
    if(parentVal < pVal && parentVal < qVal) {
        // If both p and q are greater than parent
        return lowestCommonAncestor(root.right, p, q);
    } else if (pVal < parentVal && qVal < parentVal) {
        // If both p and q are lesser than parent
        return lowestCommonAncestor(root.left, p, q);
    } else {
        // We have found the split point, i.e. the LCA node.
        return root;
    }
};
*/

// ANSWER: iterative
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
  // Value of p
  const pVal = p.val

  // Value of q;
  const qVal = q.val

  // Start from the root node of the tree
  let node = root

  // Traverse the tree
  while (node != null) {
    // Value of ancestor/parent node.
    const parentVal = node.val

    if (parentVal < pVal && parentVal < qVal) {
      // If both p and q are greater than parent
      node = node.right
    } else if (pVal < parentVal && qVal < parentVal) {
      // If both p and q are lesser than parent
      node = node.left
    } else {
      // We have found the split point, i.e. the LCA node.
      return node
    }
  }

  return null
}
