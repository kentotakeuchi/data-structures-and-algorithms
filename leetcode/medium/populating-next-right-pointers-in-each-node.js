// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

// MINE..
// var connect = function(root) {

// };

// ANSWER
// BFS
var connect = function (root) {
  if (root == null) return root;
  let queue = [root];
  while (queue.length != 0) {
    let next = [];
    while (queue.length != 0) {
      let node = queue.shift();
      node.next = queue[0] || null;
      if (node.left != null) {
        next.push(node.left);
        next.push(node.right);
      }
    }
    queue = next;
  }
  return root;
};

// DFS
var connect = function (root) {
  if (root == null || root.left == null) return root;
  root.left.next = root.right;
  root.right.next = root.next ? root.next.left : null;
  connect(root.left);
  connect(root.right);
  return root;
};
