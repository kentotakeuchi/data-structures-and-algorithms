# https://leetcode.com/problems/two-furthest-houses-with-different-colors/

class Solution:
    def maxDistance(self, c: List[int]) -> int:
        i, j = 0, len(c)-1
        while c[0] == c[j]:
            j -= 1
        while c[-1] == c[i]:
            i += 1
        return max(len(c)-1-i, j)
