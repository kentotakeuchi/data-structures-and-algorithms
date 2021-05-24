/**
 *
 * @param {number} int1
 * @param {number} int2
 * @returns {boolean}
 */

// MINE
function sameFrequency(int1, int2) {
  const s1 = `${int1}`
  const s2 = `${int2}`

  if (s1.length !== s2.length) return false

  const map = new Map()

  for (let char of s1) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }

  for (let char of s2) {
    if (map.has(char)) {
      map.set(char, map.get(char) - 1)
    } else {
      return false
    }
  }

  return true
}

// ANSWER
// function sameFrequency(num1, num2){
//   let strNum1 = num1.toString();
//   let strNum2 = num2.toString();
//   if(strNum1.length !== strNum2.length) return false;

//   let countNum1 = {};
//   let countNum2 = {};

//   for(let i = 0; i < strNum1.length; i++){
//     countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//   }

//   for(let j = 0; j < strNum1.length; j++){
//     countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//   }

//   for(let key in countNum1){
//     if(countNum1[key] !== countNum2[key]) return false;
//   }

//   return true;
// }
