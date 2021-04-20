// https://leetcode.com/problems/palindrome-linked-list/

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

// MINE
/*
function isPalindrome(head: ListNode | null): boolean {
    // if size is 1
    if(head && !head.next) return true
    
    // store value in array in a reverse order
    const reversed = []
    let node = head
    while(node) {
        reversed.unshift(node.val)
        node = node.next
    }
    
    node = head
    let i = 0
    // compare linkedlist with reversed array
    while(node && i<reversed.length) {
        if(node.val !== reversed[i]) {
            return false
        }
        node = node.next
        ++i
    }
    
    return true
};
*/

// ANSWER
var isPalindromeLinkedList = function (head: ListNode | null): boolean {
  if (head == null || head.next == null) return true
  let slow: ListNode | null = head
  let fast = head
  while (fast.next != null && fast.next.next != null && slow.next != null) {
    slow = slow.next
    fast = fast.next.next
  }
  slow.next = reverseList(slow.next)
  slow = slow.next
  while (slow != null) {
    if (head?.val != slow.val) return false
    head = head.next
    slow = slow.next
  }
  return true
}

var reverseLinkedList = function (head: ListNode | null): ListNode | null {
  var pre = null
  var next = null
  while (head != null) {
    next = head.next
    head.next = pre
    pre = head
    head = next
  }
  return pre
}
