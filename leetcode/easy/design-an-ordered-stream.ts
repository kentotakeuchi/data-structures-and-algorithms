// https://leetcode.com/problems/design-an-ordered-stream/

// MINE
/*
class OrderedStream {
    data: string[]
    pointer: number

    constructor(n: number) {
        this.data = new Array(n+1)
        this.pointer = 0
    }

    insert(idKey: number, value: string): string[] {
        this.data[idKey-1] = value
        
        if(this.data[this.pointer]) {
            while(this.data[this.pointer]) ++this.pointer
            return this.data.slice(idKey-1, this.pointer)
        } else {
            return []
        }
    }
}
*/

// ANSWER
class OrderedStream {
  data: string[]
  pointer: number

  constructor(n: number) {
    this.data = new Array(n + 1)
    this.pointer = 0
  }

  insert(idKey: number, value: string): string[] {
    const list = []

    this.data[idKey - 1] = value

    while (this.data[this.pointer]) {
      list.push(this.data[this.pointer])
      ++this.pointer
    }

    return list
  }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
