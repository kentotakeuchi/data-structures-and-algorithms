// https://leetcode.com/problems/reverse-integer/

// MINE
function reverse(x: number): number {
  const reversed = parseInt(
    Math.abs(x)
      .toString()
      .split('')
      .reduce((acc, cur) => cur + acc, '')
  );

  //if overflow
  if (reversed > Math.pow(2, 31) - 1) {
    return 0;
  }

  return reversed * Math.sign(x);
}

// ANSWER
