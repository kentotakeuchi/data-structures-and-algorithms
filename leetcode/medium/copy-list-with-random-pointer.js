// https://leetcode.com/problems/copy-list-with-random-pointer/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

// MINE..
// var copyRandomList = function(head) {
//     // iterate until node.next = null
//         //
// };

// ANSWER
var copyRandomList = function (head) {
  if (!head) {
    return null;
  }

  const clones = new Map();

  let n = head;
  while (n) {
    clones.set(n, new Node(n.val));
    n = n.next;
  }
  console.log({ clones });

  n = head;
  while (n) {
    clones.get(n).next = clones.get(n.next) || null;
    clones.get(n).random = clones.get(n.random) || null;
    n = n.next;
  }
  console.log({ clones });

  return clones.get(head);
};
