// https://leetcode.com/problems/verifying-an-alien-dictionary/

// MINE..
/*
function isAlienSorted(words: string[], order: string): boolean {
    for(let i=1; i<words.length; ++i) {
        if(words[i-1] === words[i]) continue
        const shorter = words[i-1] < words[i] ? words[i-1] : words[i]
        for(let j=0; j<shorter.length; ++j) {
            console.log(words[i-1][j], order.indexOf(words[i-1][j]), words[i][j], order.indexOf(words[i][j]))
            
            if(order.indexOf(words[i-1][j]) < order.indexOf(words[i][j])) return true
            else if(order.indexOf(words[i-1][j]) > order.indexOf(words[i][j])) return false
        }
        if(words[i] === shorter) return false
    }
    
    return true
};
*/

// ANSWER: map + two pointers
function isAlienSorted(words: string[], order: string): boolean {
  let charPosition = new Map()
  for (let position = 0; position < order.length; position++) {
    let char = order[position]
    charPosition.set(char, position)
  }
  for (let i = 1; i < words.length; i++) {
    let prev = words[i - 1],
      curr = words[i]
    if (charPosition.get(prev[0]) > charPosition.get(curr[0])) return false
    else if (prev[0] === curr[0]) {
      let pointer = 1
      while (prev[pointer] === curr[pointer] && pointer < Math.max(prev.length, curr.length))
        pointer++
      if (
        (charPosition.get(prev[pointer]) >= 0 && !charPosition.get(curr[pointer])) ||
        charPosition.get(prev[pointer]) > charPosition.get(curr[pointer])
      ) {
        return false
      }
    }
  }
  return true
}
