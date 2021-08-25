// https://leetcode.com/problems/buddy-strings/

// MINE..
/*
function buddyStrings(s: string, goal: string): boolean {
    if(s.length !== goal.length) return false
    
    const uniqueS = [...new Set([...s])]
    const uniqueG = [...new Set([...goal])]
    
    if(s.length !== uniqueS.length) return true
    
    for(let i=0; i<uniqueS.length; ++i) {
        for(let j=i+1; j<uniqueG.length; ++j) {
            swap(uniqueS, i, j)
            if(uniqueS.join('') === uniqueG.join('')) return true
            swap(uniqueS, i, j)
        }
    }
    
    return false
    
    function swap(arr: string[], i: number, j: number): void {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
};
*/

// ANSWER
function buddyStrings(A: string, B: string): boolean {
  if (A.length !== B.length) return false

  if (A == B) {
    let set = new Set(A)
    return set.size !== A.length
  }

  let a = '',
    b = ''
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      a += A[i]
      b += B[i]
    }
  }
  if (a.length == 2) return a[0] == b[1] && a[1] == b[0]

  return false
}
