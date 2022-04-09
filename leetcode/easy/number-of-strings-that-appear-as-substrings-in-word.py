# https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/

class Solution:
    def numOfStrings(self, patterns: List[str], word: str) -> int:
        ans = 0
        for sub in patterns:
            if sub in word:
                ans += 1
        return ans
