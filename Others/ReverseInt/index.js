// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// solution
function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');
  console.log({ reversed });
  return parseInt(reversed) * Math.sign(n); // Math.sign: return 1 or 0 or -1
}

// my solution
// function reverseInt(n) {
//   let reversed = Math.abs(n).toString().split('').reverse().join('');
//   if (n < 0) reversed = ('-' + reversed) * 1;
//   else reversed *= 1;
//   console.log({ reversed });

//   return reversed;
// }

module.exports = reverseInt;
