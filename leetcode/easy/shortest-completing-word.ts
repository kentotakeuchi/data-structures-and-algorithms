// https://leetcode.com/problems/shortest-completing-word/

// MINE..
/*
function shortestCompletingWord(licensePlate: string, words: string[]): string {
    let minLen = Infinity
    let idx
    const letters = licensePlate.toLowerCase().match(/[a-zA-Z]/g) // ['a', 'b'..]
    console.log({letters})
    
    for(let i=0; i<words.length; ++i) {
        for(let j=0; words[i].length; ++j) {
            if(!arr.includes(letters[j])) {
                break
            }
        }
        // includes all letters
        if(minLen > words[i].length) {
            minLen = words[i].length
            idx = i
        }
    }
    
    return words[idx]
};
*/

// ANSWER
function shortestCompletingWord(licensePlate: string, words: string[]): string {
  // Object to hold the shortest word that matches
  var match = { found: false, word: '' }

  // Char array to hold the upper case characters we want to match
  var licensePlateChars = licensePlate
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .split('')

  words.forEach(function (word) {
    // if we already have a match make sure that the word we are checking is shorter
    if (!match.found || word.length < match.word.length) {
      var replaceWord = word.toUpperCase()

      // Loop over each character in the license plate and replace one at a time
      // the key here is that replace will only replace 1 S even if there are 2
      licensePlateChars.forEach(function (lChar) {
        replaceWord = replaceWord.replace(lChar, '')
      })

      // We know the word works if the length of the word minus
      // the length of chars equals the length of the new word
      if (word.length - licensePlateChars.length === replaceWord.length) {
        match.found = true
        match.word = word
      }
    }
  })

  return match.word
}
