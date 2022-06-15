# https://leetcode.com/problems/percentage-of-letter-in-string/

class Solution:
    def percentageLetter(self, s: str, letter: str) -> int:
        # return floor(s.count(letter) / len(s) * 100)

        return s.count(letter) * 100 // len(s)
