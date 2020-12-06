// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

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

// MINE
// var zigzagLevelOrder = function(root) {
//     if(!root) return [];

//     const q = [root];
//     const levels = [];
//     let l = 1;

//     while(q.length) {
//         const n = q.length;
//         const curLevel = [];

//         for(let i=0; i<n; i++) {
//             const cur = q.shift();

//             if(cur.left) {
//                 q.push(cur.left);
//             }
//             if(cur.right) {
//                 q.push(cur.right);
//             }

//             l % 2 !== 0 ? curLevel.push(cur.val) : curLevel.unshift(cur.val);
//         }
//         levels.push(curLevel);
//         ++l;
//     }

//     return levels;
// };

// ANOTHER ANSWER
function zigzagLevelOrder(root) {
  let res = [];
  go(root, 0, res);
  return res;
}

function go(node, l, res) {
  // l means level
  if (!node) return;

  if (res[l] == null) {
    res.push([]);
  }

  if (l % 2 === 0) {
    res[l].push(node.val);
  } else {
    res[l].unshift(node.val);
  }

  go(node.left, l + 1, res);
  go(node.right, l + 1, res);
}
