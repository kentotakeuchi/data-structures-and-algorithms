/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    const minHeight = Math.min(height[start], height[end]);
    maxArea = Math.max(maxArea, minHeight * (end - start));
    height[start] < height[end] ? start++ : end--;
  }

  return maxArea;
};
