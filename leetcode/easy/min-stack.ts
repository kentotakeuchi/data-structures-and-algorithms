// https://leetcode.com/problems/min-stack/

// MINE
/*
class MinStack {
    data: number[]
    
    constructor() {
        this.data = []
    }

    push(val: number): void {
        this.data.push(val)
    }

    pop(): void {
        this.data.pop()
    }

    top(): number {
        return this.data[this.data.length-1]
    }

    getMin(): number {
        let min = this.data[0]
        
        if(this.data.length === 1) return min
        
        for(let num of this.data) {
            if(num < min) {
                min = num
            }
        }
        
        return min
    }
}
*/

interface Elements {
  elements: []
}

// ? How to type in constructor function
// ANSWER: smart solution
var MinStack = function () {
  this.elements = []
}

/**

 @param {number} x
 @return {void}
 */
MinStack.prototype.push = function (x) {
  this.elements.push({
    value: x,
    min: this.elements.length === 0 ? x : Math.min(x, this.getMin())
  })
}
/**

 @return {void}
 */
MinStack.prototype.pop = function () {
  this.elements.pop()
}
/**

 @return {number}
 */
MinStack.prototype.top = function () {
  return this.elements[this.elements.length - 1].value
}
/**

 @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.elements[this.elements.length - 1].min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
