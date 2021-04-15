// https://leetcode.com/problems/implement-stack-using-queues/

/*
        F       L      F      L    
Queue: [1, 2, 3] --> [3, 2, 1]
        L       F      L      F   
Stack: [1, 2, 3] --> [3, 2, 1]

*/

// MINE
class MyStack {
  q1: MyQueue
  q2: MyQueue

  constructor() {
    this.q1 = new MyQueue()
    this.q2 = new MyQueue()
  }

  push(x: number): void {
    this.q1.add(x)
  }

  pop(): number | undefined {
    if (!this.q1.size()) return

    while (1 < this.q1.size()) {
      this.q2.add(this.q1.remove())
    }
    const removed = this.q1.remove()
    this.q1 = this.q2
    this.q2 = new MyQueue()
    return removed
  }

  top(): number | undefined {
    if (!this.q1.size()) return

    while (1 < this.q1.size()) {
      this.q2.add(this.q1.remove())
    }
    const topNumber = this.q1.remove()
    this.q2.add(topNumber)
    this.q1 = this.q2
    this.q2 = new MyQueue()
    return topNumber
  }

  empty(): boolean {
    return this.q1.isEmpty()
  }
}

class MyQueue {
  data: any[]

  constructor() {
    this.data = []
  }

  add(val: number): void {
    this.data.unshift(val)
  }

  remove(): number {
    return this.data.pop()
  }

  peek(): number {
    return this.data[this.data.length - 1]
  }

  size(): number {
    return this.data.length
  }

  isEmpty(): boolean {
    return !this.data.length
  }
}

// ANSWER
// const MyStack = function() {
//     this.queue = [];
//     this.tmp = [];
// };

// /**
//  * @param {number} x
//  * @returns {void}
//  */
// MyStack.prototype.push = function(x) {
//     this.queue.push(x);
// };

// /**
//  * @returns {void}
//  */
// MyStack.prototype.pop = function() {
//     while (this.queue.length > 1){
//         this.tmp.push(this.queue.shift());
//     }
//     this.queue.shift();
//     this.queue = this.tmp;
//     this.tmp = [];
// };

// /**
//  * @returns {number}
//  */
// MyStack.prototype.top = function() {
//     while (this.queue.length > 1){
//         this.tmp.push(this.queue.shift());
//     }
//     var ele = this.queue.shift();
//     this.tmp.push(ele);
//     this.queue = this.tmp;
//     this.tmp = [];
//     return ele;
// };

// /**
//  * @returns {boolean}
//  */
// MyStack.prototype.empty = function() {
//     return this.queue.length === 0;
// };

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
