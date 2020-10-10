// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// RECURSIVE
function steps(n, row = 0, step = '') {
  if (n === row) return;

  if (n === step.length) {
    console.log(step);
    steps(n, ++row);
    return;
  }

  const add = step.length <= row ? '#' : ' ';
  steps(n, row, step + add);
}

// ITERATIVE
// function steps(n) {
//   for (let row = 1; row <= n; row++) {
//     let step = '';

//     for (let col = 1; col <= n; col++) {
//       if (col <= row) step += '#';
//       else step += ' ';
//     }
//     console.log(step);
//   }
// }

module.exports = steps;
