# https://leetcode.com/problems/strong-password-checker-ii/

class Solution:
    def strongPasswordCheckerII(self, p: str) -> bool:
        if len(p) < 8:
            return False
        seen = set()
        for i, c in enumerate(p):
            if i > 0 and c == p[i-1]:
                return False
            if c.islower():
                seen.add('l')
            elif c.isupper():
                seen.add('u')
            elif c.isdigit():
                seen.add('d')
            else:
                seen.add('s')
        return len(seen) == 4
