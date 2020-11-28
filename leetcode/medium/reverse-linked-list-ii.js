// https://leetcode.com/problems/reverse-linked-list-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

// MINE..
// var reverseBetween = function(head, m, n) {
//     if(!head) return null;

//     let dummy = new ListNode();
//     dummy.next = head;

//     let mNode = head;
//     let nNode = head;

//     for(let i=m-1; i>0; i--) {
//         nNode = nNode.next;
//     }

//     let count = 1;
//     while(nNode.next) {
//         if(count === m) {

//         }

//         mNode = mNode.next;
//         nNode = nNode.next;
//     }
// };

// ANSWER
var reverseBetween = function (head, m, n) {
  // create dummy
  const dummy = new ListNode();
  dummy.next = head;

  // create left(prev)
  let left = dummy;

  // find prev node of m node
  for (let i = 0; i < m - 1; i++) {
    left = left.next;
  }

  let cur = left.next;
  // reverse the range between m and n
  for (i = 0; i < n - m; i++) {
    let right = cur.next;
    cur.next = right.next; // cur -> right.next
    right.next = left.next; // cur <- right
    left.next = right; // left -> right -> cur -> right.next
  }

  return dummy.next;
};
