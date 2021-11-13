// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

// MINE: naive
/*
function sumZero(n: number): number[] {
    const ans = []
    if(n%2 === 1) {
        ans.push(0)
        --n
    }
    
    while(n > 0) {
        ans.push(n, n*-1)
        n -= 2
    }
    
    return ans
};
*/

// ANSWER
function sumZero(n: number): Int16Array {
  const ans = new Int16Array(n)

  for (let i = 1; i <= Math.floor(n / 2); ++i) {
    ans[i - 1] = i
    ans[n - i] = -i
  }

  return ans
}
