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

// MINE
function steps(n) {
  // return s1(n);
  return s2(n);
}

function s1(n) {
  for (let row = 0; row < n; row++) {
    let step = '';
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        step += '#';
      } else {
        step += ' ';
      }
    }
    console.log(step);
  }
}

function s2(n, row = 0, step = '') {
  if (n === row) return;

  if (step.length === n) {
    console.log(step);
    s2(n, row + 1, '');
    return;
  }

  if (step.length <= row) {
    s2(n, row, (step += '#'));
  } else {
    s2(n, row, (step += ' '));
  }
}

// ANSWER
// RECURSIVE
// function steps(n, row = 0, step = '') {
//   if (n === row) return;

//   if (n === step.length) {
//     console.log(step);
//     steps(n, ++row);
//     return;
//   }

//   const add = step.length <= row ? '#' : ' ';
//   steps(n, row, step + add);
// }

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
