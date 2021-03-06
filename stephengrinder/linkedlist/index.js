// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// MINE
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(val) {
    this.head = new Node(val, this.head)
  }

  size() {
    let node = this.head
    let count = 0
    while (node) {
      node = node.next
      ++count
    }
    return count
  }

  getFirst() {
    return this.head
  }

  getLast() {
    if (!this.head) return
    let node = this.head
    while (node.next) {
      node = node.next
    }
    return node
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head) return
    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) return
    if (!this.head.next) {
      this.head = null
      return
    }
    let prev = this.head
    let node = this.head.next
    while (node.next) {
      prev = node
      node = node.next
    }
    prev.next = null
  }

  insertLast(val) {
    if (!this.head) {
      this.head = new Node(val)
      return
    }
    let last = this.getLast()
    last.next = new Node(val)
  }

  getAt(idx) {
    if (!this.head) return null
    if (idx < 0 || this.size() < idx) return null
    let node = this.head
    for (let i = 0; i < idx; i++) {
      node = node.next
    }
    return node
  }

  removeAt(idx) {
    if (!this.head) return
    if (idx === 0) {
      this.head = this.head.next
      return
    }
    let prev = this.getAt(idx - 1)
    if (!prev || !prev.next) {
      return
    }
    prev.next = prev.next.next
  }

  insertAt(val, idx) {
    if (!this.head) {
      this.head = new Node(val)
      return
    }
    if (idx === 0) {
      this.head = new Node(val, this.head)
      return
    }

    let prev = this.getAt(idx - 1)
    if (!prev) {
      const last = this.getLast()
      last.next = new Node(val)
      return
    }
    prev.next = new Node(val, prev.next)
  }

  forEach(fn) {
    if (!this.head) return
    let index = 0
    let node = this.head
    while (node) {
      fn(node, index)
      ++index
      node = node.next
    }
  }

  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
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

module.exports = { Node, LinkedList }
