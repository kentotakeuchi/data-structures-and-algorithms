// https://leetcode.com/problems/count-complete-tree-nodes/

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
 * @return {number}
 */

// MINE
// var countNodes = function(root) {
// iterative
//     if(!root) return 0

//     let count = 0
//     const q = [root]

//     while(q.length) {
//         let node = q.shift()
//         if(node.left) {
//             q.push(node.left)
//         }
//         if(node.right) {
//             q.push(node.right)
//         }
//         ++count
//     }

//     return count

// recursive
//     let count = 0
//     dfs(root)
//     return count

//     function dfs(node) {
//         if(!root) return

//         ++count

//         console.log(node.val, count)

//         if(node.left) {
//             dfs(node.left)
//         }
//         if(node.right) {
//             dfs(node.right)
//         }
//     }
// };

// ANSWER: DFS
// Time O(n)
// Space O(d) = O(log n) to keep the recursion stack, where d is a tree depth
// function countNodes(root) {
//   if (root == null) return 0;
//   return countNodes(root.left) + countNodes(root.right) + 1;
// }

// ANSWER: Binary Search
// Time O(d^2) = O((log n)^2), where d is a tree depth
// Space O(1)
function countNodes(root) {
  // if the tree is empty
  if (root == null) return 0;

  const d = getDepth(root);

  // Last level nodes are enumerated from 0 to 2^d - 1 (left -> right).
  // Perform binary search to check how many nodes exist.
  let l = 0;
  let r = 2 ** d - 1;
  while (l <= r) {
    const m = ~~((l + r) / 2);
    if (exists(m, d, root)) l = m + 1;
    else r = m - 1;
  }

  // The tree contains 2^d - 1 nodes on the first (d - 1) levels
  // and l nodes on the last level.
  return 2 ** d - 1 + l;
}

// Return tree depth in O(d) time.
function getDepth(node) {
  let d = 0;
  while (node.left != null) {
    node = node.left;
    d++;
  }
  return d;
}

// Last level nodes are enumerated from 0 to 2^d - 1 (left -> right).
// Return true if last level node idx exists.
// Binary search with O(d) complexity.
function exists(idx, d, node) {
  let l = 0;
  let r = 2 ** d - 1;
  while (l < r) {
    const m = ~~((l + r) / 2);
    if (idx > m) {
      node = node.right;
      l = m + 1;
    } else {
      node = node.left;
      r = m;
    }
  }
  return node != null;
}
