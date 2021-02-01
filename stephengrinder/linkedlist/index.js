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

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(val) {
    this.head = new Node(val, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      node = node.next;
      ++count;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prev = this.head;
    let cur = this.head.next;
    while (cur.next) {
      prev = prev.next;
      cur = cur.next;
    }
    prev.next = null;
  }

  insertLast(val) {
    const tail = this.getLast();
    if (tail) {
      tail.next = new Node(val);
    } else {
      this.head = new Node(val);
    }
  }

  getAt(idx) {
    if (!this.head) return null;
    if (idx < 0 || this.size() <= idx) return;
    let node = this.head;
    while (idx) {
      node = node.next;
      --idx;
    }
    return node;
  }
}

// ANSWER2
// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   insertFirst(data) {
//     this.head = new Node(data, this.head);
//   }

//   size() {
//     let counter = 0;
//     let node = this.head;

//     while (node) {
//       counter++;
//       node = node.next;
//     }

//     return counter;
//   }

//   getFirst() {
//     return this.head;
//   }

//   getLast() {
//     if (!this.head) {
//       return null;
//     }

//     let node = this.head;
//     while (node) {
//       if (!node.next) {
//         return node;
//       }
//       node = node.next;
//     }
//   }

//   clear() {
//     this.head = null;
//   }

//   removeFirst() {
//     if (!this.head) {
//       return;
//     }

//     this.head = this.head.next;
//   }

//   removeLast() {
//     if (!this.head) {
//       return;
//     }

//     if (!this.head.next) {
//       this.head = null;
//       return;
//     }

//     let previous = this.head;
//     let node = this.head.next;
//     while (node.next) {
//       previous = node;
//       node = node.next;
//     }
//     previous.next = null;
//   }

//   insertLast(data) {
//     const last = this.getLast();

//     if (last) {
//       // There are some existing nodes in our chain
//       last.next = new Node(data);
//     } else {
//       // The chain is empty!
//       this.head = new Node(data);
//     }
//   }

//   getAt(index) {
//     let counter = 0;
//     let node = this.head;
//     while (node) {
//       if (counter === index) {
//         return node;
//       }

//       counter++;
//       node = node.next;
//     }
//     return null;
//   }

//   removeAt(index) {
//     if (!this.head) {
//       return;
//     }

//     if (index === 0) {
//       this.head = this.head.next;
//       return;
//     }

//     const previous = this.getAt(index - 1);
//     if (!previous || !previous.next) {
//       return;
//     }
//     previous.next = previous.next.next;
//   }

//   insertAt(data, index) {
//     if (!this.head) {
//       this.head = new Node(data);
//       return;
//     }

//     if (index === 0) {
//       this.head = new Node(data, this.head);
//       return;
//     }

//     const previous = this.getAt(index - 1) || this.getLast();
//     const node = new Node(data, previous.next);
//     previous.next = node;
//   }

//   forEach(fn) {
//     let node = this.head;
//     let counter = 0;
//     while (node) {
//       fn(node, counter);
//       node = node.next;
//       counter++;
//     }
//   }

//   *[Symbol.iterator]() {
//     let node = this.head;
//     while (node) {
//       yield node;
//       node = node.next;
//     }
//   }
// }

module.exports = { Node, LinkedList };
