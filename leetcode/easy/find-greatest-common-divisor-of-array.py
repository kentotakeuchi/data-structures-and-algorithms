# https://leetcode.com/problems/find-greatest-common-divisor-of-array/

class Solution:
    def findGCD(self, nums: List[int]) -> int:
        mn, mx = 1000, 1
        for n in nums:
            mn = min(n, mn)
            mx = max(n, mx)

        while mn > 0:
            temp = mn
            mn = mx % mn
            mx = temp

        return mx
