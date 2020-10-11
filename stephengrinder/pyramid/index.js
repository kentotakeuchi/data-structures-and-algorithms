// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// MINE: ITERATION
// function pyramid(n) {
//   // length of row = 2n - 1
//   const mid = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let col = 0; col < 2 * n - 1; col++) {}
//   }
// }

// MINE: RECURSIVE
function pyramid(n, row = 0, level = '') {
  if (row === n) return;

  if (level.length === 2 * n - 1) {
    console.log(level);
    pyramid(n, ++row);
    return;
  }

  const mid = Math.floor((2 * n - 1) / 2);
  if (mid - row <= level.length && mid + row >= level.length)
    pyramid(n, row, level + '#');
  else pyramid(n, row, level + ' ');
}

// ANSWER: RECURSIVE
// function pyramid(n, row = 0, level = '') {
//   if (row === n) return;

//   if (level.length === 2 * n - 1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }

//   const midpoint = Math.floor((2 * n - 1) / 2);
//   let add;
//   if (midpoint - row <= level.length && midpoint + row >= level.length)
//     add = '#';
//   else add = ' ';
//   pyramid(n, row, level + add);
// }

// ANSWER: ITERATION
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (midpoint - row <= col && midpoint + row >= col) level += '#';
//       else level += ' ';
//     }

//     console.log(level);
//   }
// }

module.exports = pyramid;
