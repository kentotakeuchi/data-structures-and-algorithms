// https://leetcode.com/problems/add-binary/

// MINE..
/*
function addBinary(a: string, b: string): string {
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
};
*/

// ANSWER
// var addBinary = function (a: string, b: string): string {
//   const aBin = `0b${a}`
//   const bBin = `0b${b}`
//   const sum = BigInt(aBin) + BigInt(bBin)
//   return sum.toString(2)
// }

// try2
function addBinary(a: string, b: string): string {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
}
