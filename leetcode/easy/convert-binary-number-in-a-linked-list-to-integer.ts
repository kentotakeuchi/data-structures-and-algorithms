// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

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

// MINE: built-in func
/*
function getDecimalValue(head: ListNode | null): number {
    let bi = ''
    
    while(head) {
        bi += head.val
        head = head.next
    }
    
    return parseInt(bi, 2)
};
*/

// ANSWER: binary representation
// num = num * 2 + x
/*
function getDecimalValue(head: ListNode | null): number {
    let num = head.val
    
    while(head.next) {
        num = num * 2 + head.next.val
        head = head.next
    }
    
    return num
}
*/

// ANSWER: bit manipulation
// num = (num << 1) | x
function getDecimalValue(head: ListNode): number {
  let num = head.val

  while (head.next) {
    num = (num << 1) | head.next.val
    head = head.next
  }

  return num
}
