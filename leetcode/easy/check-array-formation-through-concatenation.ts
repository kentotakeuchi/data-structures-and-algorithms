// https://leetcode.com/problems/check-array-formation-through-concatenation/

// MINE
/*
function canFormArray(arr: number[], pieces: number[][]): boolean {
    for(let p of pieces) {
        let arrIdx = arr.indexOf(p[0])
        if(arrIdx === -1) return false
        
        for(let i=1; i<p.length; ++i) {
            if(p[i] !== arr[++arrIdx]) return false
        }
    }
    
    return true
};
*/

// ANSWER: convert arr into str
function canFormArray(arr: any, pieces: any): boolean {
  let total = ''
  arr = arr.join('')

  for (let i = 0; i < pieces.length; i++) {
    pieces[i] = pieces[i].join('')
    total += pieces[i]
    if (arr.indexOf(pieces[i]) == -1) return false
  }

  return total.length == arr.length
}
