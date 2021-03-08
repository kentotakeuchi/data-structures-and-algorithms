// https://www.rallycoding.com/problems/183

// MINE
/*
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

const solve = (strArray) => {
  const twoDArr = strArray.map(str => str.split(':'))
  console.log({twoDArr})
  
  for(let i = 0; i<twoDArr.length; i++) {
    for(let j=0; j<twoDArr.length-i-1; j++) {
      const hourA = parseInt(twoDArr[j][0])
      const hourB = parseInt(twoDArr[j+1][0])
      const minA = parseInt(twoDArr[j][1])
      const minB = parseInt(twoDArr[j+1][1])
      console.log({i, j, hourA, hourB})
      if(hourA === hourB) {
        if(minB < minA) {
          swap(twoDArr, j, j+1)
        }
      } else if(hourB < hourA) {
        swap(twoDArr, j, j+1)
      }
    }
  }
  console.log({twoDArr})
  
  const results = twoDArr.map(arr => arr.join(':'))
  return results;
};
*/

// SOMEONE
const solve = strArray => {
  return strArray.sort()
}
