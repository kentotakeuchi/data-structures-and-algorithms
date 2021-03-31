// https://leetcode.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// MINE..
/*
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {

};
*/

// ANSWER: concat A+B and B+A --> find same node from them
/*
var getIntersectionNode = function(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let a = headA, b = headB
    while (a !== b) {
        a = !a ? headB : a.next
        b = !b ? headA : b.next
    }
    return a
};
*/

// ANSWER: use Map
const getIntersectionNode = (headA: ListNode | null, headB: ListNode | null): ListNode | null => {
  let l1 = headA,
    l2 = headB
  const hashMap = new Map()

  while (l1) {
    hashMap.set(l1, true)
    l1 = l1.next
  }

  while (l2) {
    if (hashMap.has(l2)) return l2
    l2 = l2.next
  }
  return null
}
