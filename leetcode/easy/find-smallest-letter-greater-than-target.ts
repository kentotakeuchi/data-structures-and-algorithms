// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

// MINE: binary search..
/*
function nextGreatestLetter(letters: string[], target: string): string {
    if(target >= letters[letters.length-1]) return letters[0]
    
    let start = 0
    let end = letters.length-1
    
    while(start < end) {
        const mid = Math.floor((start + end) / 2)
        
        if(letters[mid] === target) {
            console.log('=', {start, end, mid})
            return letters[mid+1]
        } else if(letters[mid] < target) {
            console.log('<', {start, end, mid})
            start = mid+1
        } else if(letters[mid] > target) {
            console.log('>', {start, end, mid})
            end = mid
        }
    }
    
    return letters[0]
};
*/

// ANSWER: linear search
/*
function nextGreatestLetter(letters: string[], target: string): string {
    for(let char of letters) {
        if(char > target) return char
    }
    return letters[0]
}
*/

// ANSWER: binary search
function nextGreatestLetter(letters: string[], target: string): string {
  if (letters[0] > target || target >= letters[letters.length - 1]) return letters[0]

  let left = 0,
    right = letters.length - 1

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (letters[mid] <= target) left = mid + 1
    else if (letters[mid] > target) right = mid
  }

  return letters[left]
}
