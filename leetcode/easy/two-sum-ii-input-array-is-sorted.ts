// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// MINE: brute force..
/*
function twoSum(numbers: number[], target: number): number[] {    
    for(let i=0; i<numbers.length; ++i) {
       const x = target - numbers[i]
       
       for(let j=i+1; j<numbers.length; ++j) {
           if(x === numbers[j]) return [i+1, j+1]
       } 
    }
    
    // if not found
    return [-1, -1]
}
*/

// MINE..: brute force + binary search
/*
function twoSum(numbers: number[], target: number): number[] {  
    // base case
    if(numbers.length === 2) return [1, 2]
    
    for(let i=0; i<numbers.length; ++i) {
        const x = target - numbers[i]
        let sliced = numbers.slice(i+1)
        
        while(1 <= sliced.length) {
            const mid = Math.floor(sliced.length / 2)
            
            if(sliced.length === 1 && sliced[mid] !== x) break
            
            if(sliced[mid] === x) {
                return [i+1, mid+1+i]
            } else if(sliced[mid] < x) {
                sliced = sliced.slice(0, mid)
            } else if(x < sliced[mid]) {
                sliced = sliced.slice(mid)
            }
        }
    }
    
    return [-1, -1]
};
*/

// ANSWER
const twoSum2 = (numbers: number[], target: number): number[] => {
  let p1 = 0
  let p2 = numbers.length - 1

  while (numbers[p1] + numbers[p2] !== target) {
    if (numbers[p1] + numbers[p2] > target) {
      p2--
    } else {
      p1++
    }
  }

  return [p1 + 1, p2 + 1]
}
