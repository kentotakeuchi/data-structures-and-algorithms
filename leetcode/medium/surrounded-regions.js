// https://leetcode.com/problems/surrounded-regions/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// MINE..
// var solve = function(board) {
//     // border means top, bottom, left, rightmost of 2d array?
//     // loop in some fashion --> how?
//         // if not border || not connected "O" on the border --> how to check the latter condition?
//             // flipped

// };

// ANSWER
var solve = function (board) {
  if (board.length == 0) return null;

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      // if border
      if (
        board[i][j] == 'O' &&
        (i == 0 || i == board.length - 1 || j == 0 || j == board[0].length - 1)
      ) {
        dfs(board, i, j);
      }
    }
  }

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (board[i][j] == 'W') {
        board[i][j] = 'O';
      } else {
        board[i][j] = 'X';
      }
    }
  }

  return board;
};

function dfs(board, i, j) {
  if (
    i < 0 ||
    j < 0 ||
    i >= board.length ||
    j >= board[0].length ||
    board[i][j] == 'X' ||
    board[i][j] == 'W'
  ) {
    return;
  }
  board[i][j] = 'W';
  dfs(board, i + 1, j);
  dfs(board, i - 1, j);
  dfs(board, i, j + 1);
  dfs(board, i, j - 1);
  return;
}

// https://www.youtube.com/watch?v=0ZJViJEdtEc&ab_channel=TECHDOSE // good explanation
