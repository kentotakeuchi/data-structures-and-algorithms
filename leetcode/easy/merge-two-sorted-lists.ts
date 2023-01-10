// https://leetcode.com/problems/merge-two-sorted-lists/

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

// MINE..
// function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//     while(l1 || l2) {
//         if(l1.val < l2.val) {
//             let next = l1.next
//             l1.next = l2
//             l1 = next
//         } else if(l2.val < l1.val) {
//             let next = l2.next
//             l2.next = l1
//             l2 = next
//         } else if(l1.val === l2.val) {
//             let next = l1.next
//             l1.next = l2
//             l1 = next
//             l2 = l2.next
//         }
//     }
//     return l1
// };

// ANSWER
// var mergeTwoLists = function (l1, l2) {
//   var mergedHead = { val: -1, next: null },
//     crt = mergedHead;
//   while (l1 && l2) {
//     if (l1.val > l2.val) {
//       crt.next = l2;
//       l2 = l2.next;
//     } else {
//       crt.next = l1;
//       l1 = l1.next;
//     }
//     crt = crt.next;
//   }
//   crt.next = l1 || l2;

//   return mergedHead.next;
// };

// try2
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let dummy: ListNode = {
    val: -1,
    next: null
  }
  let cur = dummy
  while (list1 && list2) {
    if (list1.val > list2.val) {
      cur.next = list2
      list2 = list2.next
    } else {
      cur.next = list1
      list1 = list1.next
    }
    cur = cur.next
  }
  cur.next = list1 || list2
  return dummy.next
}
