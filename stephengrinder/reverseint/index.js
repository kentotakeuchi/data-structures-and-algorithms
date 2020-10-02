// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reversedStr = Math.abs(n)
    .toString()
    .split('')
    .reduce((acc, cur) => cur + acc, '');
  return parseInt(reversedStr) * Math.sign(n); // Math.sign(number) --> return 1 or -1
}

// function reverseInt(n) {
//   const isPositive = n >= 0;
//   let reversedStr = Math.abs(n)
//     .toString()
//     .split('')
//     .reduce((acc, cur) => cur + acc, '');
//   if (!isPositive) reversedStr = '-' + reversedStr;
//   return parseInt(reversedStr);
// }

reverseInt(123);

module.exports = reverseInt;
