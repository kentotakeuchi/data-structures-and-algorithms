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

  insertFirst(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return undefined;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prev = this.head;
    let cur = prev.next;
    while (cur.next) {
      prev = cur;
      cur = cur.next;
    }
    prev.next = null;
  }

  insertLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    const lastNode = this.getLast();
    lastNode.next = newNode;
  }

  getAt(index) {
    if (index < 0 || index >= this.size()) return null;
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  removeAt(index) {
    if (!this.head) return;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const prev = this.getAt(index - 1);
    if (!prev || !prev.next) {
      return;
    }
    prev.next = prev.next.next;
  }

  insertAt(data, index) {
    const newNode = new Node(data);
    if (!this.head) this.head = newNode;
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
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
