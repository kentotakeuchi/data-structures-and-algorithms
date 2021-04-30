// https://leetcode.com/problems/first-bad-version/

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

// MINE..: limit exceeded
/*
var solution = function(isBadVersion: any) {

    return function(n: number): number {
        for(let i=1; i<n; ++i) {
            console.log({i}, isBadVersion(i))
            if(isBadVersion(i)) return i
        }
        
        return n
    };
};
*/

// ANSWER: binary search
var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 1
    let right = n

    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2)
      if (isBadVersion(mid)) {
        right = mid
      } else {
        left = mid + 1
      }
    }

    return left
  }
}
