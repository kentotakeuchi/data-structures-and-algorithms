# https://leetcode.com/problems/capitalize-the-title/

class Solution:
    def capitalizeTitle(self, s: str) -> str:
        ans = []
        for word in s.split():
            if len(word) <= 2:
                ans.append(word.lower())
            else:
                ans.append(word.title())
        return ' '.join(ans)
