// https://leetcode.com/problems/maximum-product-of-three-numbers/

// MINE: sorting..
/*
function maximumProduct(nums: number[]): number {
    let sum = 1
    
    nums.sort((a, z) => Math.abs(z) - Math.abs(a))
    
    let numOfNegative = 0
    for(let i=0; i<3; ++i) {
        if(Math.sign(nums[i]) < 0) ++numOfNegative
    }
    console.log({numOfNegative})
    
    for(let i=0; i<3; ++i) {
        console.log({i, sum})
        if(numOfNegative % 2 === 0) {
            sum *= nums[i]
        } else if(numOfNegative === 1) {
            if(Math.sign(nums[i]) < 1) {
                --i
                continue
            } else {
                sum *= nums[i]
            }
        } else if(numOfNegative === 3) {
            const idx = nums.findIndex(n => Math.sign(n) > 0)
            if(idx !== -1) {
                i = idx - 1
            }
        }
    }
    
    return sum
};
*/

// ANSWER: sorting
/*
function maximumProduct(nums: number[]): number {
    nums.sort((a, z) => a - z)
    return Math.max(nums[0] * nums[1] * nums[nums.length-1], nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3])
}
*/

// ANSWER: single scan
/*
function maximumProduct(nums: number[]): number {
    let min1 = Infinity
    let min2 = Infinity
    let max1 = -Infinity
    let max2 = -Infinity
    let max3 = -Infinity
    
    for(let n of nums) {
        if(n <= min1) { // n is minimum
            min2 = min1
            min1 = n
        } else if(n <= min2) { // min1 < n < min2
            min2 = n
        } 
        
        if(n >= max1) { // n is maximum
            max3 = max2
            max2 = max1
            max1 = n
        } else if(n > max2) { // max2 < n < max1
            max3 = max2
            max2 = n
        } else if(n >= max3) { // max3 < n < max2
            max3 = n
        }
    }
    console.log({min1, min2, max1, max2, max3})
    
    return Math.max(min1*min2*max1, max1*max2*max3)
}
*/

// ANSWER: single scan(easy to read)
function maximumProduct(nums: number[]): number {
  let max1 = -Infinity
  let max2 = -Infinity
  let max3 = -Infinity
  let min2 = Infinity
  let min1 = Infinity
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max1) {
      ;[max1, max2, max3] = [nums[i], max1, max2]
    } else if (nums[i] > max2) {
      ;[max2, max3] = [nums[i], max2]
    } else if (nums[i] > max3) {
      max3 = nums[i]
    }
    if (nums[i] < min1) {
      ;[min2, min1] = [min1, nums[i]]
    } else if (nums[i] < min2) {
      min2 = nums[i]
    }
  }
  return Math.max(max1 * max2 * max3, max1 * min1 * min2)
}
