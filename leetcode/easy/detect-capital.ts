// https://leetcode.com/problems/detect-capital/

// MINE
/*
function detectCapitalUse(word: string): boolean {
    let isFirstUpper = isUpperCase(word[0])
    
    const arr = word.split('').filter(char => isUpperCase(char)) // (F)laG
    
    return arr.length === word.length || arr.length === 0 || (isFirstUpper && arr.length === 1)
};
*/

function isUpperCase(char: string): boolean {
  return char === char.toUpperCase()
}

// ANSWER: char by char
/*
function detectCapitalUse(word: string): boolean {
  let n = word.length
  if(n === 1) return true
  
  // all caps
  if(isUpperCase(word[0]) && isUpperCase(word[1])) {
      for(let i=2; i<n; ++i) {
          if(!isUpperCase(word[i])) return false
      }
  }
  // case2 and 3
  else {
      for(let i=1; i<n; ++i) {
          if(isUpperCase(word[i])) return false
      }
  }
  
  return true
}
*/

// ANSWER: regex
/*
function detectCapitalUse(word: string): boolean {
  // either all capitals, all small cases, or Capital follow by small cases
  return /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(word);
}
*/

// ANSWER: regex
function detectCapitalUse(word: string): boolean {
  return word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase()
}
