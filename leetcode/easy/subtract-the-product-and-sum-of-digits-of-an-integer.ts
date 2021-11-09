// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

// MINE
/*
function subtractProductAndSum(n: number): number {
    const [prod, sum] = n.toString().split('').reduce((acc, cur) => {
        acc[0] = acc[0] * parseInt(cur)
        acc[1] = acc[1] + parseInt(cur)
        return acc
    }, [1, 0])
    
    return prod - sum
};
*/

// ANSWER
function subtractProductAndSum(n: number): number {
  let sum = 0,
    product = 1
  while (n > 0) {
    sum += n % 10
    product *= n % 10
    n = Math.floor(n / 10)
  }
  return product - sum
}
