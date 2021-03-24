// https://www.rallycoding.com/problems/238

// MINE
/*
const solve = (strArray) => {
  // base case
  if(!strArray.length) return []
  
  const map = new Map()
  const results = []
  
  for(let row=0; row<strArray.length; row++) {
    for(let word of strArray[row]) {
      if(map.has(word)) {
        map.set(word, map.get(word) + 1)
      } else {
        map.set(word, 1)
      }
    }
  }
  console.log({map})
  
  for(let row=0; row<strArray.length; row++) {
    const inner = []
    for(let word of strArray[row]) {
      if(map.get(word) === 1) {
        inner.push(word)
       }
    }
    results.push(inner)
  }
  
  return results;
};
*/

// SOMEONE: still not quite good
const solve = strArray => {
  const words = {}

  for (let i = 0; i < strArray.length; i++) {
    for (let y = 0; y < strArray[i].length; y++) {
      words[strArray[i][y]] ? words[strArray[i][y]]++ : (words[strArray[i][y]] = 1)
    }
  }

  return strArray.map(innerArr => innerArr.filter(x => words[x] === 1))
}
