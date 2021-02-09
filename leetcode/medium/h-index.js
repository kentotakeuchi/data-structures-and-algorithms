// https://leetcode.com/problems/h-index/

/**
 * @param {number[]} citations
 * @return {number}
 */

// MINE..
// var hIndex = function(citations) {

// };

// ANSWER
function hIndex(citations) {
  var map = {};
  var h = citations.length;
  var i = 0;
  var max = 0;
  citations.map((c) => (map[c] = map[c] ? map[c] + 1 : 1));
  for (; i <= h; i++) {
    max = Math.max(max, h >= i ? i : 0);
    h -= map[i] ? map[i] : 0;
  }
  return max;
}
