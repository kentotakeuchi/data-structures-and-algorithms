// https://leetcode.com/problems/remove-linked-list-elements/

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
function removeElements(head: ListNode | null, val: number): ListNode | null {
    // base case
    if(!head) return null
    if(!head.next && head.val === val) return null
    if(!head.next && head.val !== val) return head
    
    // dummy node to deal with the first node
    let dummy = new ListNode(-1, head)
    let pre = dummy
    let node = pre.next
    
    while(node) {
        // if found the same val
        if(node.val === val) {
            pre.next = pre.next.next
            node = node.next
        } else {
            pre = pre.next
            node = node.next
        }
    }
        
    return dummy.next
};
*/

// ANSWER
var removeElements = function (head: ListNode | null, val: number): ListNode | null {
  if (!head) return head

  // if head is the value were deleting and if there is any repetition lets handle that case first otherwise we'll just break out of the loop
  while (head) {
    if (head.val === val) {
      head = head.next
    } else {
      break
    }
  }

  // skip any nodes whos values match the parameters and set it to the node after
  // if the node is found, set curr.next to the node after it then try again
  // otherwise iterate forward
  let curr = head
  while (curr && curr.next) {
    if (curr.next.val === val) curr.next = curr.next.next
    else curr = curr.next
  }

  return head
}
