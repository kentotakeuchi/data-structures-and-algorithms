// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// MINE
function chunk(array, size) {
  // return useSliceFunc(array, size);
  return nonBuiltinFunc(array, size);
}

function useSliceFunc(arr, size) {
  const results = [];
  let i = 0;

  while (i < arr.length) {
    results.push(arr.slice(i, i + size));
    i += size;
  }

  return results;
}

function nonBuiltinFunc(arr, size) {
  const results = [];

  for (let el of arr) {
    const last = results[results.length - 1];

    if (!last || last.length === size) {
      results.push([el]);
    } else {
      last.push(el);
    }
  }

  return results;
}

// ANSWER
// function chunk(array, size) {
//   const chunked = [];
//   for (let element of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return chunked;
// }

// function chunk(array, size) {
//   const results = [];
//   for (let i = 0; i < array.length; i += size) {
//     results.push(array.slice(i, i + size));
//   }
//   return results;
// }

module.exports = chunk;
