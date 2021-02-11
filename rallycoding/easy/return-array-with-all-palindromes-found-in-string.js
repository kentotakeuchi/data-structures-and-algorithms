// https://www.rallycoding.com/problems/276

// MINE
// a few test cases are incorrect
const solve = (strArg) => {
  const results = [];

  for (let i = 0; i < strArg.length - 1; i++) {
    for (let j = i + 2; j <= strArg.length; j++) {
      let sliced = strArg.slice(i, j);
      if (isPalindrome(sliced)) {
        results.push(sliced);
        i = j;
        j = i + 2;
      }
    }
  }

  return results;
};

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
