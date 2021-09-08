// https://leetcode.com/problems/increasing-order-search-tree/

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
function increasingBST(root: TreeNode | null): TreeNode | null {
    const head = new TreeNode()
    dfsInorder(root, head)
    return head.right
    
    function dfsInorder(node: TreeNode | null, newNode: TreeNode | null) {
        if(node === null) return
        if(node.left) dfsInorder(node.left, newNode)
        newNode.right = node
        if(node.right) dfsInorder(node.right, newNode)
    }
};
*/

// ANSWER: recursive
/*
function increasingBST(root: TreeNode | null): TreeNode | null {
    let newRoot = null, newTree = null;
    helper(root);
    return newRoot;
    
    function helper(node: TreeNode | null) {
        if(!node) return;
        
		// left
        helper(node.left);
		
		// read/visit
        // while reading/visiting the node update newRoot/newTree
        if(!newRoot) {
            newRoot = newTree = node;
        } else {
            newTree.right = node;
            newTree = newTree.right;
            // set left to null to avoid duplication & to create skewed tree
            node.left = null;
        }
		
		// right
        helper(node.right);
    }
};
*/

// ANSWER: iterative
function increasingBST(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  let stack = [],
    newRoot: TreeNode | undefined | null = null,
    newTree: TreeNode | undefined | null = null

  while (root) {
    // left
    while (root) {
      stack.push(root)
      root = root.left
    }

    while (stack.length > 0) {
      // read/visit
      let node: TreeNode | undefined = stack.pop()
      if (!node) return null

      if (!newRoot || !newTree) {
        newRoot = newTree = node
      } else {
        newTree.right = node
        newTree = newTree.right
      }

      node.left = null

      // right
      if (node.right) {
        root = node.right
        break
      }
    }
  }
  return newRoot
}
