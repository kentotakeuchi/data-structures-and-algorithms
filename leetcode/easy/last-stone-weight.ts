// https://leetcode.com/problems/last-stone-weight/

// MINE..
/*
function lastStoneWeight(stones: number[]): number {
    if(stones.length === 1) return stones[0]
    
    stones.sort((a, z) => z - a)
    console.log({stones}, 'sort')
    
    while(stones.length >= 2) {
        const [x, y] = stones.splice(0, 2) // return [x, y]
        if(!stones.length) return x - y
        if(x !== y) {
            const newWeight = x - y
            for(let i=0; i<stones.length; ++i) {
                if(newWeight >= stones[0]) {
                    stones.unshift(newWeight)
                    break
                }
                if(newWeight >= stones[i]) {
                    stones.splice(i+1, 0, newWeight)
                    break
                }
            }
            console.log({stones})
        }
    }
    
    console.log({stones}, 'last')
    return stones[0]
};
*/

// ANSWER: priority heap
/*
function lastStoneWeight(stones: number[]): number {
  const heap = new MaxHeap(stones);
  while (heap.size() > 1) {
    const max1 = heap.poll();
    const max2 = heap.poll();
    if (max1 > max2) heap.offer(max1 - max2);
  }
  return heap.size() === 1 ? heap.poll() : 0;
};

class MaxHeap {
    comparator
  constructor(public data = []) {
    this.data = data;
    this.comparator = (a, b) => b - a;
    this.heapify();
  }

  // O(nlog(n)). In fact, O(n)
  heapify() {
    if (this.size() < 2) return;
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }

  // O(1)
  peek() {
    if (this.size() === 0) return null;
    return this.data[0];
  }

  // O(log(n))
  offer(value) {
    this.data.push(value);
    this.bubbleUp(this.size() - 1);
  }

  // O(log(n))
  poll() {
    if (this.size() === 0) return null;
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return result;
  }

  // O(log(n))
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // O(log(n))
  bubbleDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;
      if (
        leftIndex <= lastIndex &&
        this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex;
      }
      if (
        rightIndex <= lastIndex &&
        this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex;
      }
      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  // O(1)
  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1]
    ];
  }

  // O(1)
  size() {
    return this.data.length;
  }
}
*/

// ANSWER: recursion
/*
function lastStoneWeight(stones: number[]): number {
    if(stones.length < 2) return stones[0];
    stones.sort((a,b) => a-b);
    let a = stones.pop();
    let b = stones.pop();
    stones.push(Math.abs(a-b));
    return lastStoneWeight(stones);
}
*/

// ANSWER: recursion
function lastStoneWeight(stones: number[]): number {
  while (stones.length > 1) {
    let max1 = Math.max(...stones)
    stones.splice(stones.indexOf(max1), 1)
    let max2 = Math.max(...stones)
    stones.splice(stones.indexOf(max2), 1)
    if (max1 !== max2) stones.push(Math.abs(max1 - max2))
  }
  return stones[0] || 0
}
