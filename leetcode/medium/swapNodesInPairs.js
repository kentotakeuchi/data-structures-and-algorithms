// https://leetcode.com/problems/swap-nodes-in-pairs/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// MINE..
// const swap = (list, n1, n2) => {
//     [list[n1], list[n2]] = [list[n2], list[n1]];
// }
// swap(1, 2)

// var swapPairs = function(head) {
//     if(head.length === 0) return [];
//     if(head.lenght === 1) return head;

//     let node = head;
//     console.log({node})
//     while(node.next) {
//         swap(node, node.val, node.next.val);
//         console.log(node)
//         node = node.next.next;
//     }

//     return node;
// };

// ANSWER: ITERATIVE
var swapPairs = function (head) {
  // Store head to return list, Only instance of new data so space is O(1)
  let dummy = new ListNode(-1);
  dummy.next = head;

  let prev = dummy;

  // Traverse list
  while (head && head.next) {
    // Declare
    let n1 = head;
    let n2 = head.next;

    // Swap
    prev.next = n2;
    n1.next = n2.next;
    n2.next = n1;

    // Assign
    prev = n1;
    head = n1.next;
  }

  // The variable prev has been used to create the dummy list. dummy.next is still the head of new list
  return dummy.next;
};

swapPairs([1, 2, 3, 4]);
