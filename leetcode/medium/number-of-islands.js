// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */

// MINE
var numIslands = function (grid) {
  if (!grid.length) return 0;

  // result
  let numOfIslands = 0;

  // iterate through entire 2d array
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      // if find '1' -> recurse until no adjacent '1'
      if (grid[row][col] === '1') {
        numOfIslands += getIsland(grid, row, col);
      }
    }
  }

  return numOfIslands;
};

// if there is adjacent '1' -> overwrite '1' to '0'
function getIsland(grid, row, col) {
  // if no adjacent '1'
  if (
    row < 0 ||
    row > grid.length - 1 ||
    col < 0 ||
    col > grid[row].length - 1 ||
    grid[row][col] === '0'
  ) {
    return 0;
  }

  // turn visited '1' into '0'
  grid[row][col] = '0';

  // recurse top, left, bottom and right to check if there is '1'
  // top
  getIsland(grid, row - 1, col);
  // left
  getIsland(grid, row, col + 1);
  // bottom
  getIsland(grid, row + 1, col);
  // right
  getIsland(grid, row, col - 1);

  // when checking all adjacent, return 1
  return 1;
}

// ANSWER
