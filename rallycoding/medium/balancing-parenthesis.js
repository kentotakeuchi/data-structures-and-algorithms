// https://www.rallycoding.com/problems/250

// MINE
/*
const solve = (strArg) => {
  let result = ''
  const map = new Map()
  
  for(let p of strArg) {
    if(map.has(p)) {
      map.set(p, map.get(p) + 1)
    } else {
      map.set(p, 1)
    }
  }
  
  const max = Math.max((map.get('(') || 0), (map.get(')') || 0))
  for(let i=0; i<max; ++i) {
    result += '('
  }
  for(let i=0; i<max; ++i) {
    result += ')'
  }
  
  return result;
};
*/

// SOMEONE
const solve = strArg => {
  let str = ''
  for (let i = 0; i < strArg.length; i++) {
    str = str + ')'
    str = '(' + str
  }
  return str
}
