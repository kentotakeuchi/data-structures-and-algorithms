// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

// MINE..
// var buildTree = function(inorder, postorder) {
//     const hash = {};
//     inorder.forEach((el, i) => {
//         hash[el] = i;
//     })

//     const recur = (start, end) => {
//         if(start > end) return null;

//         const root = new TreeNode(postorder.shift());
//     }
// };

// ANSWER
var buildTree = function (inorder, postorder) {
  let hash = {};
  for (let i = 0; i < inorder.length; i++) hash[inorder[i]] = i;

  let recur = function (start, end) {
    if (start > end) return null;
    let val = postorder.pop();
    let root = new TreeNode(val);
    root.right = recur(hash[val] + 1, end);
    root.left = recur(start, hash[val] - 1);
    return root;
  };

  return recur(0, inorder.length - 1);
};
