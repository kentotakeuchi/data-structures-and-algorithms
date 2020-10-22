// https://leetcode.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {boolean}
 */

// MINE..
// var isValidSudoku = function(board) {
//     for(let row=0; row<9; row++) {
//         const isNum = board[row].find(el => el !== '.');
//         console.log({isNum})
//         if(!isNum) return false;
//     }

//     for(let row=0; row<9; row++) {
//         let isNum = false;
//         for(let col=0; col<9; col++) {
//             if(board[row][col] !== '.') {
//                 isNum = true;
//                 break;
//             };
//             console.log({isNum})
//         }
//         if(!isNum) return false;
//     }

//     let isNum = false;
//     console.log('-----------')
//     for(let row=0; row<3; row++) {
//         let isNum = false;
//         for(let col=0; col<3; col++) {
//             if(board[row][col] !== '.') {
//                 isNum = true;
//                 break;
//             }
//         }
//         console.log({isNum})
//         if(isNum) break;
//     }
//     if(!isNum) return false;

//     return true;
// };

// ANSWER
// https://leetcode.com/problems/valid-sudoku/discuss/476369/Javascript-Solution-(beats-100)-with-explanation-(real-explanations)
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
      col = new Set(),
      box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (_row != '.') {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_col != '.') {
        if (col.has(_col)) return false;
        col.add(_col);
      }

      if (_box != '.') {
        if (box.has(_box)) return false;
        box.add(_box);
      }
    }
  }
  return true;
};
