# https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/

class Solution:
    def areNumbersAscending(self, s: str) -> bool:
        prev = cur = 0
        for char in s:
            if char.isdigit():
                cur = cur*10 + int(char)
            elif cur != 0:
                if prev >= cur:
                    return False
                prev = cur
                cur = 0
        return cur == 0 or cur > prev
