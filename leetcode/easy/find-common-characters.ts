// https://leetcode.com/problems/find-common-characters/

// MINE..
/*
function commonChars(words: string[]): string[] {
    let map = new Map()
    const results = []
    
    for(const word of words) {
        const tempMap = new Map()
        let tempChar = ''
        for(let char of word) {
            if(tempMap.has(char)) {
                const count = tempMap.get(char)
                for(let i=0; i<count; ++i) tempChar += '+'
                tempMap.set(`${tempChar}`, 1)
            } else {
                tempMap.set(char, 1)
            }
        }
        for(let [key,val] of tempMap) {
            map.set(key, map.get(key)+1 || 1)
        }
        console.log({map, tempMap})
    }
    
    for(const [key, val] of map) {
        if(val === words.length) results.push(key[0])
    }
    
    return results
};
*/

// ANSWER
function commonChars(A: string[]): string[] {
  let res = [...A[0]]

  for (let i = 1; i < A.length; i++) {
    res = res.filter(char => {
      const len = A[i].length
      A[i] = A[i].replace(char, '')
      return len > A[i].length
    })
  }

  return res
}
