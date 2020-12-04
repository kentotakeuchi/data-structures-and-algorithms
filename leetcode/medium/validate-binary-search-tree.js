// https://leetcode.com/problems/validate-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// MINE
var isValidBST = function (root, min = null, max = null) {
  if (!root) return null;

  if (max !== null && root.val >= max) {
    return false;
  }
  if (min !== null && root.val <= min) {
    return false;
  }
  if (root.left && !isValidBST(root.left, min, root.val)) {
    return false;
  }
  if (root.right && !isValidBST(root.right, root.val, max)) {
    return false;
  }

  return true;
};

// ANSWER
// var isValidBST = function(root, min=null, max=null) {

//     if(!root) return null;
//     if(max != null && root.val >= max) return false;
//     if(min != null && root.val <= min) return false;
//     if( root.left && !isValidBST(root.left, min, root.val)) return false;
//     if(root.right && !isValidBST(root.right, root.val, max)) return false;
//     return true;

// };
