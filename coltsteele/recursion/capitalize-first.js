/**
 *
 * @param {string[]} arr
 * @param {string[]} results
 * @returns {string[]}
 */

// MINE
function capitalizeFirst(arr, results = []) {
  if (!arr.length) return results
  results.push(arr[0][0].toUpperCase() + arr[0].substring(1))
  return capitalizeFirst(arr.slice(1), results)
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])) // ['Car','Taco','Banana']

// ANSWER
// function capitalizeFirst(array) {
//   if (array.length === 1) {
//     return [array[0].toUpperCase()]
//   }
//   let res = capitalizeWords(array.slice(0, -1))
//   res.push(array.slice(array.length - 1)[0].toUpperCase())
//   return res
// }
