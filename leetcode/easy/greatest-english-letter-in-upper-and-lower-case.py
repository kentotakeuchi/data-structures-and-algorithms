# https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/

class Solution:
    def greatestLetter(self, s: str) -> str:
        S = set(s)
        upper, lower = ord('Z'), ord('z')
        for i in range(26):
            if chr(upper-i) in S and chr(lower-i) in S:
                return chr(upper-i)
        return ''
