// https://leetcode.com/problems/largest-number/

/**
 * @param {number[]} nums
 * @return {string}
 */

// MINE
// var largestNumber = function(nums) {
//     // declare result
//     // iterate
//         // find max of the first digit
//             // add it to result
//         // what if the digit is same -> how to deal with it?
// };

// ANSWER
const largestNumber = (nums) => {
  if (nums.length <= 1) return nums.toString();
  let sorted = nums
    .map((n) => n.toString())
    .sort((a, b) => {
      console.log(a.concat(b), b.concat(a));
      console.log(a.concat(b) > b.concat(a));
      if (a.concat(b) > b.concat(a)) return -1;
      return 1;
    });
  console.log({ sorted });
  if (sorted[0] === '0') return '0';
  return sorted.join('');
};

largestNumber([3, 30, 34, 5, 9]);

/** about compare from mdn */
// If compareFunction(a, b) returns less than 0, sort a to an index lower than b (i.e. a comes first).
// If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAScript standard only started guaranteeing this behavior in 2019, thus, older browsers may not respect this.
// If compareFunction(a, b) returns greater than 0, sort b to an index lower than a (i.e. b comes first).
