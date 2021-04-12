// https://leetcode.com/problems/reverse-linked-list/

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

// MINE: iterative
/*
function reverseList(head: ListNode | null): ListNode | null {
    // base case
    if(!head || !head.next) return head
    
    let dummy = new ListNode(0, head)
    let pre = dummy
    let cur = pre.next
    
    while(cur.next) {
        let temp = cur.next
        pre.next = temp.next
        cur.next = pre
        temp.next = cur
        
    }
    
    return dummy.next
};
*/

// MINE: recursive
// function reverseList(head: ListNode | null): ListNode | null {
//     // base case

// };

// ANSWER: iterate
/*
function reverseList(head: ListNode | null): ListNode | null {
    let prev = null
    let cur = head
    
    while(cur !== null) {
        let nextTemp = cur.next
        cur.next = prev
        prev = cur
        cur = nextTemp
    }
    
    return prev
}
*/

// ANSWER: recursive
function reverseList(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head

  let p = reverseList(head.next)
  head.next.next = head
  head.next = null
  return p
}
