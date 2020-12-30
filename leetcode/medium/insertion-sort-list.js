// https://leetcode.com/problems/insertion-sort-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// MINE
var insertionSortList = function (head) {
  // iterate list
  // keep head
  // declare current node
  // iterate head to previous current node
  // if current node is less than either previous node
  // remove current node -> how?
  // insert current node to appropriate position -> how?

  // create dummy node to insert sorted list
  let dummy = new ListNode();
  let cur = head;

  // iterate list
  while (cur) {
    // at each iteration, insert an element into the resulting list
    let prev = dummy;

    // find the position to insert the current node
    while (prev.next && prev.next.val < cur.val) {
      prev = prev.next;
    }

    // store next node of current
    let next = cur.next;

    // insert the current node to the resulting list
    cur.next = prev.next;
    prev.next = cur;

    // move on to the next iteration
    cur = next;
  }

  return dummy.next;
};

// ANSWER
