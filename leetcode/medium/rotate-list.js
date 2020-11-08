// https://leetcode.com/problems/rotate-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// MINE..
// var rotateRight = function(head, k) {
//     // two pointer: prev cur
//     if(!head) return;
//     if(!head.next) return this.head;

//     let prev = head;
//     let cur = head.next;

//     while(k > 0) {
//         while(cur.next) {
//             prev = prev.next;
//             cur = cur.next;
//         }

//         cur.next = head.next;
//         cur = head;
//         prev.next = null;

//         --k;
//     }

//     return cur;
// };

// ANSWER
var rotateRight = function (head, k) {
  let dummy = new ListNode();
  let slow = dummy;
  let fast = dummy;
  let length = 0;
  dummy.next = head;
  while (fast.next != null) {
    fast = fast.next;
    length++;
  }
  k = k % length;
  for (var i = 1; i <= length - k; i++) {
    slow = slow.next;
  }
  fast.next = dummy.next;
  dummy.next = slow.next;
  slow.next = null;
  return dummy.next;
};
