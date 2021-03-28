// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number
  next: ListNode | null
  seen?: boolean | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.seen = this.seen === undefined ? null : this.seen
  }
}

// MINE: two pointer
/*
function hasCycle(head: ListNode | null): boolean {
    let slow = head
    let fast = head
    
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        
        // if two pointers point same node --> cycle
        if(slow === fast) {
            return true
        }
    }
    
    return false
};
*/

// ANSWER: using hash map
/*
var hasCycle = function(head) {
    const seen = new Set();
    
    function traverse(node) {
        if(seen.has(node)) return true;
        if(!node) return false;
        seen.add(node);
        return traverse(node.next);
    }
    return traverse(head);
};
*/

// ANSWER: add property
function hasCycle(head: ListNode | null): boolean {
  function run(node: ListNode | null): boolean {
    if (!node) return false
    if (node.seen) return true
    node.seen = true
    return run(node.next)
  }
  return run(head)
}
