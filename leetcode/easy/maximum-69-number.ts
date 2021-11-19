// https://leetcode.com/problems/maximum-69-number/

// MINE
/*
function maximum69Number (num: number): number {
    let ans = ''
    const strNum = String(num)
    
    for(let i=0; i<strNum.length; ++i) {
        console.log({strNum, ans}, strNum[i])
        if(strNum[i] === '6') {
            ans += '9'
            while(i<strNum.length) ans += strNum[++i]
        } else {
            ans += strNum[i]
        }
    }
    
    return parseInt(ans)
};
*/

// function numDigits(n: number): number {
//   return Math.max(Math.floor(Math.log10(Math.abs(n))), 0) + 1;
// }

// ANSWER
/*
function maximum69Number (num: number): number {
    return Number(num.toString().replace('6', '9'));
}
*/

// ANSWER: We check every digit of the number, if it's 6, we add value to make it be 9
function maximum69Number(num: number): number {
  if ((num / 1000) << 0 === 6) return num + 3000
  if (((num / 100) << 0) % 10 === 6) return num + 300
  if (((num % 100) / 10) << 0 === 6) return num + 30
  if (num % 10 === 6) return num + 3
  return num
}
