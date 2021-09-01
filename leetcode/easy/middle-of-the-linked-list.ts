// https://leetcode.com/problems/middle-of-the-linked-list/

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

// MINE: two pointer
function middleNode(head: ListNode | null): ListNode | null {
  let slow = head
  let fast = head

  while (fast?.next) {
    if (!slow) return null
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

// ANSWER
