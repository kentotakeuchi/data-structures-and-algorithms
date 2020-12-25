// https://leetcode.com/problems/reorder-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

// MINE
// var reorderList = function(head) {
//     // two pointers?
//     // set the pointers on head and tail
//     // start = head, end = tail
//     // iterate
//         // start.next = end
//         // start = start.next
//         // end = prev --> how to point previous node
// };

// ANSWER: USING STACK
var reorderList = function (head) {
  let stack = [],
    node = head;
  if (!node) return;
  while (node) {
    stack.push(node);
    node = node.next;
  }

  let len = stack.length;
  node = head;
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) node.next = stack.shift();
    else node.next = stack.pop();
    node = node.next;
  }
  node.next = null;
};
