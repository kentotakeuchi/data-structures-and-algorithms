/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */

// MINE
function insertionSort(arr) {
  for (let i = 1; i < arr.length; ++i) {
    let cur = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > cur; --j) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = cur
  }
  return arr
}

console.log(insertionSort([5, 3, 8, 2, 4]))

// ANSWER
/*
function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}
*/

insertionSort([2, 1, 9, 76, 4])
