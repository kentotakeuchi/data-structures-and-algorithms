// https://leetcode.com/problems/defuse-the-bomb/

// MINE..
/*
function decrypt(code: number[], k: number): number[] {
    const n = code.lenght
    if(k === 0) return new Array(n).fill(0)
    
    const concat = [...code, ...code]
    let mid = Math.floor(concat.length / 2)
    const K = k
    
    for(let i=0; i<code.length; ++i) {
        let sum = 0
        
        if(K > 0) {
            
        }
    }
};
*/

// ANSWER: using modulo
/*
function decrypt(code: number[], k: number): number[] {
    const ans = new Array(code.length).fill(0)
    
    if(k === 0) return ans
    
    // Define the initial window and initial sum
    let start = 1, end = k, sum = 0
    
    if(k < 0) {
        k = k*-1
        start = code.length-k
        end = code.length-1
    }
    
    for(let i=start; i<=end; ++i) sum += code[i]
    
    // Scan through the code array as i moving to the right, update the window sum.
    for(let i=0; i<code.length; ++i) {
        ans[i] = sum
        sum -= code[start++ % code.length]
        sum += code[++end % code.length]
    }
    
    return ans
}
*/

// ANSWER: readable for me
function decrypt(code: number[], k: number): number[] {
  var res = new Array(code.length).fill(0)

  if (k > 0) {
    for (var i = 0; i < code.length; i++) {
      var count = 0
      var j = i + 1
      while (count < k) {
        if (j === code.length) j = 0
        res[i] += code[j]
        count = count + 1
        j++
      }
    }
  }

  if (k < 0) {
    for (var i = 0; i < code.length; i++) {
      var count = 0
      var j = i - 1
      while (count > k) {
        if (j === -1) j = code.length - 1
        res[i] += code[j]
        count = count - 1
        j--
      }
    }
  }

  return res
}
