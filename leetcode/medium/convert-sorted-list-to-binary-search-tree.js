// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

// MINE
// var sortedListToBST = function(head) {

// };

// ANSWER
function findMiddleElement(head) {
  // The pointer used to disconnect the left half from the mid node.
  let prevPtr = null;
  let slowPtr = head;
  let fastPtr = head;

  // Iterate until fastPr doesn't reach the end of the linked list.
  while (fastPtr != null && fastPtr.next != null) {
    prevPtr = slowPtr;
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  // Handling the case when slowPtr was equal to head.
  if (prevPtr != null) {
    prevPtr.next = null;
  }

  return slowPtr;
}

function sortedListToBST(head) {
  // If the head doesn't exist, then the linked list is empty
  if (head == null) {
    return null;
  }

  // Find the middle element for the list.
  const mid = findMiddleElement(head);

  // The mid becomes the root of the BST.
  const node = new TreeNode(mid.val);

  // Base case when there is just one element in the linked list
  if (head == mid) {
    return node;
  }

  // Recursively form balanced BSTs using the left and right halves of the original list.
  node.left = sortedListToBST(head);
  node.right = sortedListToBST(mid.next);
  return node;
}
