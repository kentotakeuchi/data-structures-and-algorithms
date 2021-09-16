// https://leetcode.com/problems/number-of-recent-calls/

class LLNode {
  data: number
  next: LLNode | null
  constructor(data: number, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  head: LLNode | null
  constructor() {
    this.head = null
  }

  size() {
    let counter = 0
    let node = this.head

    while (node) {
      counter++
      node = node.next
    }

    return counter
  }

  getFirst() {
    return this.head
  }

  getLast() {
    if (!this.head) {
      return null
    }

    let node = this.head
    while (node) {
      if (!node.next) {
        return node
      }
      node = node.next
    }
  }

  removeFirst() {
    if (!this.head) {
      return
    }

    this.head = this.head.next
  }

  insertLast(data: number) {
    const last = this.getLast()

    if (last) {
      // There are some existing nodes in our chain
      last.next = new LLNode(data)
    } else {
      // The chain is empty!
      this.head = new LLNode(data)
    }
  }
}

// MINE: slide window with linked list
/*
class RecentCounter {
    slideWindow: LinkedList
  constructor() {
    this.slideWindow = new LinkedList()
  }

  ping(t: number): number {
      this.slideWindow.insertLast(t)
      
      while(this.slideWindow.getFirst().data < t - 3000) {
          this.slideWindow.removeFirst()
      }
      
      return this.slideWindow.size()
  }
}
*/

// ANSWER
class RecentCounter {
  stream: number[]
  constructor() {
    this.stream = []
  }

  ping(t: number): number {
    this.stream.push(t) // Everytime we recieve a ping, add the time to the stream of integers
    /*
  To exclude the times that are not included within the range of t - 3000,
  we remove the first element from the stream while it is less than the calculated range 
  */
    while (this.stream[0] < t - 3000) {
      this.stream.shift()
    }
    // When the loop ends the length of calls will be the length of the array
    return this.stream.length
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
