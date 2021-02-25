// https://www.rallycoding.com/problems/302

// MINE
/*
const solve = (strArg) => {
  let result = ''
  for(let i=0; i<strArg.length; i++) {
    if(strArg[i] === 'a') {
      result += 'bb'
    } else if(strArg[i] === 'b' && strArg[i+1] === 'b') {
      result += 'a'
      ++i
    } else {
      result += strArg[i]
    }
  }
  return result
};
*/

// SOMEONE
const solve = (strArg) => {
  return strArg.replace(/a/g, '.').replace(/bb/g, 'a').replace(/\./g, 'bb');
};
