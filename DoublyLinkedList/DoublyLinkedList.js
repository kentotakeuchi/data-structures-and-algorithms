class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.head === null) return undefined;
    const popedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popedNode.prev;
      this.tail.next = null;
      popedNode.prev = null;
    }
    this.length--;
    return popedNode;
  }

  shift() {
    if (this.head === null) return undefined;
    const shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shifted.next;
      this.head.prev = null;
      shifted.next = null;
    }
    this.length--;
    return shifted;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, current;
    if (index <= (this.length - 1) / 2) {
      console.log('WORKING FROM START');
      count = 0;
      current = this.head;
      while (index !== count) {
        current = current.next;
        count++;
      }
    } else {
      console.log('WORKING FROM END');
      count = this.length - 1;
      current = this.tail;
      while (index !== count) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    afterNode.prev = newNode;
    newNode.next = afterNode;
    this.length++;
    return true;
  }

  remove(index) {
    const node = this.get(index);
    if (!node) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    node.next = null;
    node.prev = null;
    this.length--;
    return node;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const instance = new DoublyLinkedList();
instance.push('first');
instance.push('second');
instance.push('third');
instance.push('fourth');
console.log('push', instance.push('fifth'));
// console.log('pop', instance.pop());
// console.log('shift', instance.shift());
// console.log('unshift', instance.unshift('sixth'));
// console.log('get', instance.get(3));
// console.log('set', instance.set(3, 'sixth'));
// console.log('insert', instance.insert(3, 'seventh'));
console.log('remove', instance.remove(0));
console.log('instance', instance);
instance.print();
