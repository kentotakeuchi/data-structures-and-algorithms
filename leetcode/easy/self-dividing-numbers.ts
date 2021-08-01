// https://leetcode.com/problems/self-dividing-numbers/

// MINE: time limet exceeded..
/*
function selfDividingNumbers(left: number, right: number): number[] {
    const results = []
    
    for(let i=left; i<=right; ++i) {
        if(i < 10) {
           results.push(i)
            continue
        }
        
        // is a self-dividing number?
        const chars = i.toString().split('') // 10 -> [1, 0]
        let isSDN = true
        for(let j=0; j<chars.length; ++j) {
            if(chars[j] === '0' || i % parseInt(chars[j]) !== 0) isSDN = false
        }
        if(isSDN) results.push(i)
    }
    
    return results
};
*/

// ANSWER
function selfDividingNumbers(left: number, right: number): number[] {
  const ans = []
  for (let i = left; i <= right; ++i) {
    if (selfDividing(i)) ans.push(i)
  }
  return ans
}

function selfDividing(n: number): boolean {
  for (let char of n.toString().split('')) {
    if (char === '0' || n % parseInt(char) > 0) return false
  }
  return true
}
