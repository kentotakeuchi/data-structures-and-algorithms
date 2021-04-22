// https://leetcode.com/problems/delete-node-in-a-linked-list/

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

/**
 Do not return anything, modify it in-place instead.
 */
// MINE..
/*
function deleteNode(root: ListNode | null): void {
    // how to reach the head?
};
*/

// ANSWER: not good question imo
var deleteNode = function (node: ListNode | null): void {
  if (node?.val !== undefined && node?.next !== undefined) {
    //copy the next node to this node
    if (!node.next) throw Error('next node should not be null')
    node.val = node.next.val
    node.next = node.next.next
  }
}
