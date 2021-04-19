// https://leetcode.com/problems/implement-queue-using-stacks/

// MINE
class MyQueue2 {
  s1: MyStack2
  s2: MyStack2

  constructor() {
    this.s1 = new MyStack2()
    this.s2 = new MyStack2()
  }

  push(x: number): void {
    this.s1.add(x)
  }

  pop(): number {
    while (this.s1.size()) {
      this.s2.add(this.s1.remove())
    }

    const removed = this.s2.remove()

    while (this.s2.size()) {
      this.s1.add(this.s2.remove())
    }

    return removed
  }

  peek(): number {
    while (this.s1.size()) {
      this.s2.add(this.s1.remove())
    }

    const top = this.s2.top()

    while (this.s2.size()) {
      this.s1.add(this.s2.remove())
    }

    return top
  }

  empty(): boolean {
    return this.s1.isEmpty()
  }
}

class MyStack2 {
  data: number[]

  constructor() {
    this.data = []
  }

  add(val: number): void {
    this.data.push(val)
  }

  remove(): number {
    const removed = this.data.pop()
    if (!removed) return -1
    return removed
  }

  top(): number {
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

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
