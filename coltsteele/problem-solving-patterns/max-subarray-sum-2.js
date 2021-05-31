/**
 *
 * @param {number[]} arr
 * @param {number} num
 * @returns {number|null}
 */

// MINE
function maxSubarraySum2(arr, num) {
  if (arr.length < num) return null

  let max = sum(arr.slice(0, num))

  for (let i = 1; i < arr.length; ++i) {
    const candidate = sum(arr.slice(i, i + num))
    if (max < candidate) {
      max = candidate
    }
  }

  return max
}

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */

function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0)
}

// ANSWER
// // maxSubArray Solution
// function maxSubarraySum(arr, num){
//     if (arr.length < num) return null;

//     let total = 0;
//     for (let i=0; i<num; i++){
//       total += arr[i];
//     }
//     let currentTotal = total;
//     for (let i = num; i < arr.length; i++) {
//       currentTotal += arr[i] - arr[i-num];
//       total = Math.max(total, currentTotal);
//     }
//     return total;
// }
// // minSubArrayLen Solution
// function minSubArrayLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;

//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then
// 		// move the window to right
//     if(total < sum && end < nums.length){
//       total += nums[end];
// 			end++;
//     }
//     // if current window adds up to at least the sum given then
// 		// we can shrink the window
//     else if(total >= sum){
//       minLen = Math.min(minLen, end-start);
// 			total -= nums[start];
// 			start++;
//     }
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
//     else {
//       break;
//     }
//   }

//   return minLen === Infinity ? 0 : minLen;
// }
