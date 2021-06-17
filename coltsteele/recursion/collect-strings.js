/**
 *
 * @param {*} obj
 * @returns {string[]}
 */

// MINE
function collectStrings(obj) {
  const results = []

  for (let [key, val] of Object.entries(obj)) {
    if (typeof val === 'object') {
      return [...results, ...collectStrings(val)]
    } else if (typeof val === 'string') {
      results.push(val)
    }
  }

  return results
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz'
          }
        }
      }
    }
  }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])

// ANSWER: helper method recursion
// function collectStrings(obj) {
//     var stringsArr = [];

//     function gatherStrings(o) {
//         for(var key in o) {
//             if(typeof o[key] === 'string') {
//                 stringsArr.push(o[key]);
//             }
//             else if(typeof o[key] === 'object') {
//                 return gatherStrings(o[key]);
//             }
//         }
//     }

//     gatherStrings(obj);

//     return stringsArr;
// }

// ANSWER: pure recursion
// function collectStrings(obj) {
//   var stringsArr = [];
//   for(var key in obj) {
//       if(typeof obj[key] === 'string') {
//           stringsArr.push(obj[key]);
//       }
//       else if(typeof obj[key] === 'object') {
//           stringsArr = stringsArr.concat(collectStrings(obj[key]));
//       }
//   }

//   return stringsArr;
// }
