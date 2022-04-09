# https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/

class Solution:
    def isPrefixString(self, s: str, words: List[str]) -> bool:
        # MINE
        temp = ''
        for word in words:
            temp += word
            if temp == s:
                return True
            if not s.startswith(temp):
                return False
        return False

        # ANSWER
