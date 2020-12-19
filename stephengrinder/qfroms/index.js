// --- Directions
// Implement a Queue data structure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// MINE
class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  add(val) {
    this.s1.push(val);
  }

  remove() {
    while (this.s1.data.length) {
      this.s2.push(this.s1.pop());
    }

    const removed = this.s2.pop();

    while (this.s2.data.length) {
      this.s1.push(this.s2.pop());
    }

    return removed;
  }

  peek() {
    while (this.s1.data.length) {
      this.s2.push(this.s1.pop());
    }

    const peek = this.s2.peek();

    while (this.s2.data.length) {
      this.s1.push(this.s2.pop());
    }

    return peek;
  }
}

// ANSWER
// class Queue {
//   constructor() {
//     this.s1 = new Stack();
//     this.s2 = new Stack();
//   }

//   add(val) {
//     this.s1.push(val);
//   }

//   remove() {
//     while (this.s1.peek()) {
//       this.s2.push(this.s1.pop());
//     }

//     const popped = this.s2.pop();

//     while (this.s2.peek()) {
//       this.s1.push(this.s2.pop());
//     }

//     return popped;
//   }

//   peek() {
//     while (this.s1.peek()) {
//       this.s2.push(this.s1.pop());
//     }

//     const peek = this.s2.peek();

//     while (this.s2.peek()) {
//       this.s1.push(this.s2.pop());
//     }

//     return peek;
//   }
// }

module.exports = Queue;
