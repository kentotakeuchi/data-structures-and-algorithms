// https://leetcode.com/problems/partition-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

// MINE..
// var partition = function(head, x) {
//     if(!head) return;

//     let dummy = new ListNode();
//     let prev = dummy;
//     let cur = head;
//     let prevWall = dummy;
//     let wall;

//     while(cur) {
//         // find a wall
//         if(!wall && x < cur.val) {
//             prevWall = prev;
//             wall = cur;
//         }

//         // find num less than x
//         if(cur.val < x) {
//             prevWall.next = cur;
//             cur.next = wall;
//             prevWall = cur;
//         }

//         prev = prev.next;
//         cur = cur.next;
//     }

//     return cur;
// };

// ANSWER
var partition = function (head, x) {
  const dummyLess = new ListNode();
  const dummyMore = new ListNode();
  let node = head;
  let less = dummyLess;
  let more = dummyMore;
  while (node) {
    if (node.val < x) {
      less = less.next = node;
    } else {
      more = more.next = node;
    }
    node = node.next;
  }
  less.next = dummyMore.next;
  more.next = null;
  return dummyLess.next;
};
