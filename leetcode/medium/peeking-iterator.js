// https://leetcode.com/problems/peeking-iterator/

/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

// MINE..
/**
 * @param {Iterator} iterator
 */
// var PeekingIterator = function(iterator) {
//     this.iterator = iterator
// };

// /**
//  * @return {number}
//  */
// PeekingIterator.prototype.peek = function() {
//     return this.iterator.value
// };

// /**
//  * @return {number}
//  */
// PeekingIterator.prototype.next = function* () {
//     console.log(this)
//     for(let el of this.iterator) {
//         console.log({el})
//         yield el
//     }
// };

// /**
//  * @return {boolean}
//  */
// PeekingIterator.prototype.hasNext = function() {

// };

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */

// MINE2..
/**
 * @param {Iterator} iterator
 */
// var PeekingIterator = function(iterator) {
//     this.iterator = iterator || null
//     this.nextVal = null
//     if(this.hasNext()) {
//         this.nextVal = this.next()
//     }
// };

// /**
//  * @return {number}
//  */
// PeekingIterator.prototype.peek = function() {
//     return this.nextVal
// };

// /**
//  * @return {number}
//  */
// PeekingIterator.prototype.next = function() {
//     let val = this.nextVal
//     if(this.hasNext()) {
//         this.nextVal = this.iterator.next()
//     } else {
//         this.nextVal = null
//     }
//     return val
// };

// /**
//  * @return {boolean}
//  */
// PeekingIterator.prototype.hasNext = function() {
//     return this.nextVal !== null || this.iterator.hasNext()
// };

// ANSWER
const PeekingIterator = function (iterator) {
  this.list = iterator;
};

PeekingIterator.prototype.peek = function () {
  if (this.top) {
    return this.top;
  }
  if (this.list.hasNext()) {
    this.top = this.list.next();
    return this.top;
  }
  return false;
};

PeekingIterator.prototype.next = function () {
  if (this.top) {
    var v = this.top;
    this.top = null;
    return v;
  }
  return this.list.next();
};

PeekingIterator.prototype.hasNext = function () {
  if (this.top) {
    return true;
  }
  return this.list.hasNext();
};
