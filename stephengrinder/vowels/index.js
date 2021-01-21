// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // return iterative(str);
  return regex(str);
}

function iterative(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      ++count;
    }
  }

  return count;
}

function regex(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// ANSWER: ITERATION
// function vowels(str) {
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;

//   for (let word of str.toLowerCase()) {
//     if (checker.includes(word)) {
//       count++;
//     }
//   }

//   return count;
// }

// ANSWER: REGEX
// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   console.log({ matches });
//   return matches ? matches.length : 0;
// }

module.exports = vowels;
