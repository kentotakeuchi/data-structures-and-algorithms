// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// MINE
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   insertFirst(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//     }
//     newNode.next = this.head;
//     this.head = newNode;
//   }
// }

// ANSWER
// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

class LinkedList {
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
}

module.exports = { Node, LinkedList };
