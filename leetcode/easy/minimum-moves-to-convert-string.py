# https://leetcode.com/problems/minimum-moves-to-convert-string/

class Solution:
    def minimumMoves(self, s: str) -> int:
        ans, n, i = 0, len(s), 0
        while i < n:
            if s[i] == 'O':
                i += 1
            else:
                ans += 1
                i += 3
        return ans
