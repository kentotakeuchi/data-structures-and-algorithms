// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// MINE..
/*
function deleteDuplicates(head: ListNode | null): ListNode | null {
    // O(n)
    // declare point i, j
    // loop over all nodes until j.next is null
        // if find duplicate
            // ...
        // else if diff val
            //  i.next = j
    // if i.val=j.val
        // i.next = null
    // return head
    
    // base case
    if(!head) return null
    if(!head.next) return head
    
    let prev = head
    let cur = prev.next
    let dummy = new ListNode(0, prev)
    
    while(cur.next) {
        if(prev.val !== cur.val) {
            prev.next = cur
            cur = cur.next
        } else if(prev.val === cur.val) {
            cur = cur.next
        }
    }
    
    if(prev.val === cur.val) {
        prev.next = null
    }
    
    return dummy.next
};
*/

// ANSWER
function deleteDuplicates(head: ListNode | null): ListNode | null {
  let cur = head
  while (cur !== null && cur.next !== null) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
}
