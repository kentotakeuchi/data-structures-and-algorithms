/**
 *
 * @param {string[]} arr
 * @param {string[]} results
 * @returns {string[]}
 */

// MINE
function capitalizeWords(arr, results = []) {
  if (!arr.length) return results
  results.push(arr[0].toUpperCase())
  return capitalizeWords(arr.slice(1), results)
}

console.log(capitalizeWords(['aaaaa', 'bbbbbb', 'ccccc'])) // 'Aaaaa'..

// ANSWER
// function capitalizeWords (array) {
//   if (array.length === 1) {
//     return [array[0].toUpperCase()];
//   }
//   let res = capitalizeWords(array.slice(0, -1));
//   res.push(array.slice(array.length-1)[0].toUpperCase());
//   return res;

// }
