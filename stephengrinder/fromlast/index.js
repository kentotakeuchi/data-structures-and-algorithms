// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// MINE
function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

// function fromLast(list, n) {
//   let slow = list.getFirst();
//   let fast = list.getFirst();
//   while (n > 0) {
//     fast = fast.next;
//     n--;
//   }
//   while (fast.next) {
//     slow = slow.next;
//     fast = fast.next;
//   }
//   return slow;
// }

// function fromLast(list, n) {
//   if (!list.head) return null;
//   let node = list.head;
//   let counter = 1;
//   while (node.next) {
//     node = node.next;
//     counter++;
//   }
//   const distance = counter - n;
//   console.log({ distance });
//   node = list.head;
//   for (let i = 1; i < distance; i++) {
//     node = node.next;
//   }
//   return node;
// }

module.exports = fromLast;
