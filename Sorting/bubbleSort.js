/**
 * BubbleSort Pseudocode
 *
 * Start looping from with a variable called i the end of the array towards the beginning
 * Start an inner loop with a variable called j from the beginning until i - 1
 * If arr[j] is greater than arr[j+1], swap those two values!
 * Return the sorted array
 */

// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
//     }
//   }
//   return arr;
// }

// const swap = (arr, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };

// Optimized with noSwaps
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      console.log(arr);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1, noSwaps);
        noSwaps = false;
      }
    }

    console.log(noSwaps);
    if (noSwaps) break;
  }

  return arr;
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(bubbleSort([2, 1, 3, 4, 5, 6]));
