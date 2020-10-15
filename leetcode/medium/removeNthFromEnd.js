// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// MINE: TWO PASS ALGORITHM?
var removeNthFromEnd = function (head, n) {
  let node = head;

  const len = size(node);

  const targetNFromHead = len - n;

  if (targetNFromHead <= 0) return (head = head.next);

  for (let i = 0; i < targetNFromHead - 1; i++) {
    node = node.next;
  }

  node.next = node.next.next;

  return head;
};

const size = (list) => {
  let count = 0;
  while (list) {
    list = list.next;
    ++count;
  }
  return count;
};

// ANSWER: ONE PASS SOLUTION
var removeNthFromEnd = function (head, n) {
  // The "dummy" node is used to simplify some corner cases such as a list with only one node, or removing the head of the list.
  let dummy = new ListNode();

  dummy.next = head;
  let first = dummy;
  let second = dummy;

  // Advances first pointer so that the gap between first and second is n nodes apart
  for (let i = 1; i <= n + 1; i++) {
    first = first.next;
  }

  // Move first to the end, maintaining the gap
  while (first != null) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;
  return dummy.next;
};
