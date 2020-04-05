class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.lat = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (this.first === null) return null;
    const poppedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = poppedNode.next;
    }
    this.size--;
    return poppedNode;
  }

  print() {
    const arr = [];
    let current = this.first;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const instance = new Stack();
console.log('push', instance.push('first'));
console.log('push', instance.push('second'));
console.log('push', instance.push('third'));
console.log('pop', instance.pop());
console.log('instance', instance);
instance.print();
