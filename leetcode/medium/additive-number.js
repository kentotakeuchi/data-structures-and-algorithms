// https://leetcode.com/problems/additive-number/

/**
 * @param {string} num
 * @return {boolean}
 */

// MINE..
// var isAdditiveNumber = function(num) {
//     for(let i=0; i<num.length; i++) {
//         for(let j=i+2; j<num.length; j++) {
//             if(parseInt(num[i]) + parseInt(num.slice(i+1, j)) === parseInt(num[j])) {
//                 break
//             }
//         }
//     }

//     return true
// };

// ANSWER
var isAdditiveNumber = function (num) {
  if (num.length < 3) return false;
  let str = '';
  let seen = true;
  for (let i = num.length - 1; i > 1; i--) {
    str = `${num[i]}${str}`;
    if (num[i] === '0') continue;
    let s = str;
    let s2 = num[i - 1];
    for (let j = i - 2; j >= 0; j--) {
      if (`${s2}`.startsWith('0') && s2.length > 1) {
        s2 = `${num[j]}${s2}`;
        seen = false;
      } else if (parseInt(s) >= parseInt(s2)) {
        let diff = s - s2;
        if (num.slice(0, j + 1).endsWith(diff)) {
          s = s2;
          s2 = diff;
          let ind = Math.floor(Math.log10(diff));
          ind = ind < 0 ? 0 : ind;
          j -= ind;
          seen = true;
        } else {
          s2 = `${num[j]}${s2}`;
          seen = false;
        }
      } else {
        seen = false;
        break;
      }
    }
    if (seen) return seen;
  }
  return seen;
};
