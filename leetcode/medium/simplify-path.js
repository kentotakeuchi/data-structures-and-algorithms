// https://leetcode.com/problems/simplify-path/

/**
 * @param {string} path
 * @return {string}
 */

// MINE
var simplifyPath = function (path) {
  // conditions
  // '.' -> remove './'
  // '..' ->
  // start with '/'
  // '/' between two directory
  // the last directory must not end with '/'
  // path.split with '/' -> ['', 'a', '.', 'b', '..', '..', 'c', '' ]

  const dirs = path.split('/');
  console.log({ dirs });

  const newDirs = [];
  for (let i = 0; i < dirs.length; i++) {
    console.log(dirs[i], newDirs);
    if (dirs[i] === '.' || dirs[i] === '') {
      continue;
    } else if (dirs[i] === '..') {
      newDirs.pop();
    } else {
      newDirs.push(dirs[i]);
    }
  }
  console.log({ newDirs });

  return '/' + newDirs.join('/');
};
