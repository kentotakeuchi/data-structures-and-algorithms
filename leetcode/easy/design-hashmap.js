// https://leetcode.com/problems/design-hashmap/

// MINE..
/*
class MyHashMap {
    data: number[][]
    constructor() {
        this.data = new Array(Math.pow(10, 6))
    }

    put(key: number, value: number): void {
        if(!this.contain(key)) {
            this.data[key] = [key, 1]
        } else {
            this.data[key][1] = this.data[key][1]+1
        }
    }

    get(key: number): number {
        console.log(this.data)
        if(this.contain(key)) {
            return this.data[key][1]
        } else {
            return -1
        }
    }

    remove(key: number): void {
        if(this.contain(key)) {
            this.data.splice(key, 1)
        }
    }

    contain(key: number): boolean {
        return this.data[key] !== undefined
    }
}
*/

// ANSWER
/*
class MyHashMap {
    data: number[]
    constructor() {
        this.data = new Array(1000001)
    }
    put(key, val) {
        this.data[key] = val
    }
    get(key) {
        let val = this.data[key]
        return val !== undefined ? val : -1
    }
    remove(key) {
        delete this.data[key]
    }
};
*/

// ANSWER: hash
class ListNode {
  constructor(key, val, next) {
    this.key = key
    this.val = val
    this.next = next
  }
}

class MyHashMap {
  constructor() {
    this.size = 19997
    this.mult = 12582917
    this.data = new Array(this.size)
  }
  hash(key) {
    return (key * this.mult) % this.size
  }
  put(key, val) {
    this.remove(key)
    let h = this.hash(key)
    let node = new ListNode(key, val, this.data[h])
    this.data[h] = node
  }
  get(key) {
    let h = this.hash(key),
      node = this.data[h]
    for (; node; node = node.next) if (node.key === key) return node.val
    return -1
  }
  remove(key) {
    let h = this.hash(key),
      node = this.data[h]
    if (!node) return
    if (node.key === key) this.data[h] = node.next
    else
      for (; node.next; node = node.next)
        if (node.next.key === key) {
          node.next = node.next.next
          return
        }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
