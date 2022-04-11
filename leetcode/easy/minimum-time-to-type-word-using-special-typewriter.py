# https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/

class Solution:
    def minTimeToType(self, word: str) -> int:
        count = len(word)
        prev = 'a'
        for char in word:
            diff = abs(ord(char) - ord(prev))
            count += min(diff, 26 - diff)
            prev = char
        return count
