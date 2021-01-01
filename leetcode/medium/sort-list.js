// https://leetcode.com/problems/sort-list/

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
// var sortList = function(head) {
//     if(!head) return []

//     let node = head

//     while(node) {

//     }
// };

// ANSWER
// var sortList = function(head) {
//     if(!head || !head.next) return head
//     const mid = getMid(head)
//     const left = sortList(head)
//     const right = sortList(mid)
//     return merge(left, right)
// };

// function merge(list1, list2) {
//     let dummyHead = new ListNode()
//     let tail = dummyHead
//     while(list1 !== null && list2 !== null) {
//         if(list1.val < list2.val) {
//             tail.next = list1
//             list1 = list1.next
//             tail = tail.next
//         } else {
//             tail.next = list2
//             list2 = list2.next
//             tail = tail.next
//         }
//     }
//     tail.next = list1 !== null ? list1 : list2
//     return dummyHead.next
// }

// function getMid(head) {
//     let midPrev = null
//     while(head !== null && head.next !== null) {
//         midPrev = midPrev === null ? head : midPrev.next
//         head = head.next.next
//     }
//     let mid = midPrev.next
//     midPrev.next = null
//     return mid
// }

// ANSWER2
var sortList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  /**
   * The goal is to use merge sort on the linked list.
   * We need to split the list into two and merge them in the ascending order
   * recursively.
   */
  const [left, right] = split(head);
  // use a temparary node to link all the sorted nodes
  const root = new ListNode(null);
  return merge(root, sortList(left), sortList(right));
};

function split(node) {
  let slow = node;
  let fast = node;
  // use fast & slow pointer to find the middle node so that
  // we can split the list into list[0 -> slow] & list[slow + 1 -> list.size]
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const left = node;
  const right = slow.next;
  // break off the list so that `left` doesn't link to `right`
  slow.next = null;

  return [left, right];
}

function merge(root, left, right) {
  let pointer = root;
  /**
   * merge the smaller node in the `left` and `right` list first.
   * return the second node in the list because the first is a
   * temparary node.
   */
  while (left !== null || right !== null) {
    if (left === null) {
      pointer.next = right;
      right = right.next;
    } else if (right === null) {
      pointer.next = left;
      left = left.next;
    } else {
      if (left.val < right.val) {
        pointer.next = left;
        left = left.next;
      } else {
        pointer.next = right;
        right = right.next;
      }
    }
    pointer = pointer.next;
  }

  return root.next;
}
