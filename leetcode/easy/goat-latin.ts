// https://leetcode.com/problems/goat-latin/

// MINE
/*
function toGoatLatin(sentence: string): string {
    // ('a', 'e', 'i', 'o', or 'u') -> +'ma'
    // consonant -> remove the 1st letter -> +'ma'
    // +'a*n'
    
    const vowels = 'aeiouAEIOU'
    let a = 'a'
    const words = sentence.split(' ')
    let result = ''
    
    for(let word of words) {
        const first = word[0]
        
        if(!vowels.includes(first)) {
            word = word.slice(1) + first + 'ma' + a
        } else {
            word = word + 'ma' + a
        }
        
        a += 'a'
        result += ` ${word}`
    }
    
    return result.trim()
};
*/

// ANSWER
function toGoatLatin(sentence: string): string {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  return sentence
    .split(' ')
    .map((w, i) =>
      vowels.has(w[0]) ? w + 'ma' + 'a'.repeat(i + 1) : w.slice(1) + w[0] + 'ma' + 'a'.repeat(i + 1)
    )
    .join(' ')
}
