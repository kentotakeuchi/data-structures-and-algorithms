// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

/**
 *
 * @param {number[]} arr
 * @param {(val: number) => boolean} cb
 * @returns {boolean}
 */

// MINE
function someRecursive(arr, cb) {
  if (!arr.length) return false
  if (cb(arr[0])) return true
  return someRecursive(arr.slice(1), cb)
}

console.log(someRecursive([1, 2, 3, 4], isOdd)) // true
console.log(someRecursive([4, 6, 8, 9], isOdd)) // true
console.log(someRecursive([4, 6, 8], isOdd)) // false
console.log(someRecursive([4, 6, 8], val => val > 10)) // false

// ANSWER
// function someRecursive(array, callback) {
//     if (array.length === 0) return false;
//     if (callback(array[0])) return true;
//     return someRecursive(array.slice(1),callback);
// }
