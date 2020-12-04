// https://leetcode.com/problems/binary-tree-level-order-traversal/

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
 * @return {number[][]}
 */

// MINE..
// var levelOrder = function(root) {
//     if(!root) return null;

//     const arr = [root, 'end'];
//     let subArr = [];
//     const results = [];

//     while(arr.length > 1) {
//         const node = arr.shift();

//         if(node === null) continue;

//         if(node === 'end') {
//             results.push(subArr);
//             subArr = [];
//             arr.push(node);
//         } else {
//             subArr.push(node);
//             arr.push(node.left, node.right)
//         }
//     }

//     return results;
// };

// ANSWER
var levelOrder = function (root) {
  // If root is null return an empty array
  if (!root) return [];

  const queue = [root]; // initialize the queue with root
  const levels = []; // declare output array

  while (queue.length !== 0) {
    const queueLength = queue.length; // Get the length prior to dequeueing
    const currLevel = []; // Declare this level
    // loop through to exhaust all options and only to include nodes at currLevel
    for (let i = 0; i < queueLength; i++) {
      // Get next node
      const current = queue.shift();

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      // After we add left and right for current, we add to currLevel
      currLevel.push(current.val);
    }
    // Level has been finished. Push into output array
    levels.push(currLevel);
  }
  return levels;
};
