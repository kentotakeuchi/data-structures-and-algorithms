# https://leetcode.com/problems/sum-of-digits-of-string-after-convert/

class Solution:
    def getLucky(self, s: str, k: int) -> int:
        s = "".join(str(ord(ch)-96) for ch in s)
        for _ in range(k):
            s = str(sum(int(ch) for ch in s))
        return int(s)


# The ord() function returns an integer representing the Unicode character.
