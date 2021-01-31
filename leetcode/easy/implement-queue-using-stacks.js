// https://leetcode.com/problems/implement-queue-using-stacks/

// MINE
/**
 * stack
 */
class Stack {
  constructor() {
    this.data = [];
  }

  add(val) {
    this.data.push(val);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.s1 = new Stack();
  this.s2 = new Stack();
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.add(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.s1.peek()) {
    this.s2.add(this.s1.remove());
  }
  const removed = this.s2.remove();
  while (this.s2.peek()) {
    this.s1.add(this.s2.remove());
  }
  return removed;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.s1.peek()) {
    this.s2.add(this.s1.remove());
  }
  const p = this.s2.peek();
  while (this.s2.peek()) {
    this.s1.add(this.s2.remove());
  }
  return p;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.peek();
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// ANSWER
