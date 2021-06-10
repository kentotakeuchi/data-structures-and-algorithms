// https://leetcode.com/problems/base-7/

// MINE
/*
function convertToBase7(num: number): string {
    return num.toString(7)
};
*/

// ANSWER: iterative
/*
function convertToBase7(num: number): string {
    if (num === 0) return '0';
    const sign = num < 0 ? '-' : '+';
    num = Math.abs(num);
    let res = '';
    while (num) {
        res = num % 7 + res;
        num = Math.floor(num / 7);
    }
    return sign === '+' ? res : '-' + res;
};
*/

// ANSWER: recursive
function convertToBase7(num: number): string {
  if (num < 0) return '-' + convertToBase7(num * -1)
  if (num < 7) return num.toString()
  return convertToBase7(Math.floor(num / 7)) + (num % 7).toString()
}
