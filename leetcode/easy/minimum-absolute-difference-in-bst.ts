// https://leetcode.com/problems/minimum-absolute-difference-in-bst/

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
function getMinimumDifference(root: TreeNode | null): number {
    if(!root) return -1
    
    const arr = [root]
    let min = Infinity
    
    while(arr.length) {
        const node = arr.shift()
        if(node.left)
            min = Math.min(min, node.val - node.left.val)
            arr.push(node.left)
        if(node.right)
            min = Math.min(min, node.val - node.right.val)
            arr.push(node.right)
    }
    
    return min
};
*/

// ANSWER
/*
function getMinimumDifference(root: TreeNode | null): number {
    let values = [];
    
    // collect all values from the tree
    bsf(root, values);
  
    // loop through values and keep track of minimum difference 
    return values.reduce((min, val, i) => {
        if (i === 0) return min;
        return Math.min(min, Math.abs(val - values[i-1]));
    }, Number.MAX_SAFE_INTEGER);
};

function bsf (node, arr) {
    if (node.left) bsf(node.left, arr);
    arr.push(node.val);
    if (node.right) bsf(node.right, arr);
}
*/

// ANSWER
function getMinimumDifference(root: TreeNode | null): number {
  var prev = Infinity
  var totalMin = Infinity

  function traverse(node: TreeNode | null) {
    if (!node) {
      return
    }

    traverse(node.left)

    totalMin = Math.min(totalMin, Math.abs(node.val - prev))
    prev = node.val

    traverse(node.right)
  }

  traverse(root)

  return totalMin
}
