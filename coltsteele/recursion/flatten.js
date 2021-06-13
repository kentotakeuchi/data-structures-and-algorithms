/**
 *
 * @param {number[]|number[][]} arr
 * @returns {number[]}
 */

// MINE
function flatten(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; ++i) {
    if (Array.isArray(arr[i])) newArr = [...newArr, ...flatten(arr[i])]
    else newArr.push(arr[i])
  }
  return newArr
}

console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[9]]]]]]]]]])) // [1,2,3]

// ANSWER
// function flatten(oldArr){
//   var newArr = []
//   	for(var i = 0; i < oldArr.length; i++){
//     	if(Array.isArray(oldArr[i])){
//       		newArr = newArr.concat(flatten(oldArr[i]))
//     	} else {
//       		newArr.push(oldArr[i])
//     	}
//   }
//   return newArr;
// }
