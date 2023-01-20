// https://leetcode.com/problems/sqrtx/

// MINE
/*
function mySqrt(x: number): number {
    // return Math.floor(Math.sqrt(x)) built-in func
    
    
};
*/

// ANSWER: O(sqrt(n))
/*
const mySqrt = function(x) {
    let result = 1;
    while (result*result <= x) result++;
    return result - 1;
};
*/

// ANSWER2: binary search: O(log2(n))
// const mySqrt = function (x: number): number {
//   let start = 0
//   let end = x
//   let res = 0
//   while (start < end) {
//     res = Math.ceil((start + end) / 2) // 1.
//     if (res * res <= x && (res + 1) * (res + 1) > x) return res // 2.
//     if (res * res < x) start = res
//     // 3.
//     else end = res // 4.
//   }
//   return res
// }

// try2
// function mySqrt(x: number): number {
//     let ans = 1
//     while(ans*ans <= x) ++ans
//     return ans-1
// };

function mySqrt(x: number): number {
  let start = 0,
    end = x,
    ans = 0
  while (start < end) {
    ans = Math.ceil((start + end) / 2)
    if (ans * ans <= x && (ans + 1) * (ans + 1) > x) return ans
    else if (ans * ans < x) start = ans
    else end = ans
  }
  return ans
}
