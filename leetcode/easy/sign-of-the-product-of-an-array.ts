// https://leetcode.com/problems/sign-of-the-product-of-an-array/

// MINE
/*
function arraySign(nums: number[]): number {
    let sum = 1
    for(let n of nums) {
        if(n === 0) return 0
        sum *= n
    }
    
    return Math.sign(sum)
    
    // function signFunc(num: number): number {
    //     if(!num) return 0
    //     return num > 0 ? 1 : -1
    // }
};
*/

// ANSWER
function arraySign(nums: number[]): number {
  let sign = 1
  for (let n of nums) {
    if (n === 0) return 0
    if (n < 0) sign *= -1
  }
  return sign
}
