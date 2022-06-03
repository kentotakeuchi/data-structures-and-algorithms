# https://leetcode.com/problems/minimum-bit-flips-to-convert-number/

class Solution:
    def minBitFlips(self, start: int, goal: int) -> int:
        return (start ^ goal).bit_count()

# bit_count(): Return the number of ones in the binary representation of the absolute value of the integer. This is also known as the population count.
