/**
 * DIVIDE AND CONQUER
 *
 * This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
 * This pattern can tremendously decrease time complexity
 */

/**
 * Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located.
 * If the value is not found, return -1.
 */

// O(n)
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

// O(log(n)) - Binary Search
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (arr[mid] < val) min = mid + 1;
    else if (arr[mid] > val) max = mid - 1;
    else return middle;
  }

  return -1;
}

console.log(search([1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 29], 15));
