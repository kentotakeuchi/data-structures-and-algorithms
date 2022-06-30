# https://leetcode.com/problems/count-asterisks/

class Solution:
    def countAsterisks(self, s: str) -> int:
        return sum(c.count('*') for c in s.split('|')[0::2])
