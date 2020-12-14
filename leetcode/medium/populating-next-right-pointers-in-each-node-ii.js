// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/

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

// MINE
// var connect = function(root) {
//     if(root === null) return [];

//     let q = [root];
//     while(q.length !== 0) {
//         const level = [];

//         while(q.length !== 0) {
//             let node = q.shift();
//             node.next = q[0] || null;
//             if(node.left !== null) {
//                 level.push(node.left)
//             } else if(node.right !== null) {
//                 level.push(node.right)
//             }
//         }
//         q = level;
//     }

//     return root;
// };

// ANSWER
const connect = (root) => {
  let startOfNextLevel = root,
    current = null,
    lastVisited;

  while (startOfNextLevel) {
    //traverse every level of the tree
    (current = startOfNextLevel), (startOfNextLevel = lastVisited = null);

    while (current) {
      // traverse level of tree exactly like a linked list

      for (let child of [current.left, current.right]) {
        if (child) {
          if (lastVisited) lastVisited.next = child;
          else startOfNextLevel = child;
          lastVisited = child;
        }
      }
      current = current.next; //traverse level exactly like a linked list
    }
  }

  return root;
};
