// https://leetcode.com/problems/number-of-valid-words-in-a-sentence/

// MINE..
/*
function countValidWords(s: string): number {
    let ans = 0
    const arr = s.split(/\s+/g)
    
    for(let word of arr) {
        let valid = true
        const set = new Set()
                
        for(let i=0; i<word.length; ++i) {
            if(set.has(word[i])) {
                valid = false
                break
            }
            else if((word[i] === '!' || word[i] === '.' || word[i] === ',') && i !== word.length-1) {
                valid = false
                break
            } else if(word[i] === '-' && (i === 0 || i === word.length-1) || (set.has(word[i-1]) || set.has(word[i+1]))) {
                valid = false
                break
            } else if(!isNaN(parseInt(word[i]))) {
                valid = false
                break
            }
            if(word[i] === '!' || word[i] === '.' || word[i] === '-' || word[i] === ',') set.add(word[i])
        }
        
        if(valid) ++ans
    }
    return ans
};
*/

// ANSWER: regex
function countValidWords(sentence: string): number {
  let list = sentence.split(' ')
  let filtered = list.filter(s => {
    if (/\d/.test(s) || s == '') return false //removes anything with numbers or is blank
    if (/^[!,.]$/.test(s)) return true //punctuation only
    if (/^\w+[!,.]?$/.test(s)) return true //word + optional punctuation
    if (/^\w+[-]?\w+[!,.]?$/.test(s)) return true //word + optional hypen + word + optional punctuation
    return false
  })

  return filtered.length
}
