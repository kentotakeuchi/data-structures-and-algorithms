// https://leetcode.com/problems/occurrences-after-bigram/

// MINE
/*
function findOcurrences(text: string, first: string, second: string): string[] {
    const arr = text.split(' ')
    if(arr.length < 2) return []
    
    const results = []
    
    for(let i=2; i<arr.length; ++i) {
        if(arr[i-2] === first && arr[i-1] === second) {
            results.push(arr[i])
        }
    }
    
    return results
};
*/

// ANSWER: regex
function findOcurrences(text: string, first: string, second: string): string[] {
  const regex = new RegExp(`(?<=\\b${first} ${second}\\s)\\w+`, 'g')
  return text.match(regex) || []
}
