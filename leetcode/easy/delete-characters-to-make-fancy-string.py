# https://leetcode.com/problems/delete-characters-to-make-fancy-string/

class Solution:
    # MINE
    def makeFancyString(self, s: str) -> str:
        freq, prev, ans = 1, s[0], s[0]
        for i in range(1, len(s)):
            if prev == s[i]:
                freq += 1
            else:
                prev = s[i]
                freq = 1
            if freq < 3:
                ans += s[i]
        return ans
