// https://leetcode.com/problems/fizz-buzz/

// MINE
/*
function fizzBuzz(n: number): string[] {
    const results = []
    let i = 1
    
    while(i <= n) {
        switch(true) {
            case i % 3 === 0 && i % 5 === 0:
                results.push('FizzBuzz')
                ++i
                break
            case i % 3 === 0:
                results.push('Fizz')
                ++i
                break
            case i % 5 === 0:
                results.push('Buzz')
                ++i
                break
            default:
                results.push(`${i}`)
                ++i
        }
    }
    
    return results
};
*/

// ANSWER: str concat
/*
function fizzBuzz(n: number): string[] {
    const ans = []
    
    for(let num = 1; num<=n; ++num) {
        let numAnsStr = ''
        
        if(num%3===0) {
            numAnsStr += 'Fizz'
        }
        
        if(num%5===0) {
            numAnsStr += 'Buzz'
        }
        
        if(numAnsStr === '') {
            numAnsStr += num
        }
        
        ans.push(numAnsStr)
    }
    
    return ans
}
*/

// ANSWER: hashmap
function fizzBuzz(n: number): string[] {
  const ans = []

  const map = new Map()
  map.set(3, 'Fizz')
  map.set(5, 'Buzz')

  for (let num = 1; num <= n; ++num) {
    let str = ''

    for (let [key, val] of map) {
      if (num % key === 0) {
        str += val
      }
    }

    if (str === '') {
      str += num
    }

    ans.push(str)
  }

  return ans
}
