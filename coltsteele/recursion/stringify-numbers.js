/**
 *
 * @param {*} obj
 * @returns {*}
 */

// MINE
function stringifyNumbers(obj) {
  const newObj = {}

  for (let [key, val] of Object.entries(obj)) {
    if (typeof val === 'object' && !Array.isArray(val)) {
      newObj[key] = stringifyNumbers(val)
    } else if (typeof val === 'number') {
      newObj[key] = `${val}`
    } else {
      newObj[key] = val
    }
  }

  return newObj
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}

console.log(stringifyNumbers(obj))

// ANSWER
// function stringifyNumbers(obj) {
//   var newObj = {};
//   for (var key in obj) {
//     if (typeof obj[key] === 'number') {
//       newObj[key] = obj[key].toString();
//     } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//       newObj[key] = stringifyNumbers(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }
