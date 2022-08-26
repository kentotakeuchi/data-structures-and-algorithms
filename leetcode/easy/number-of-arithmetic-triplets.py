# https://leetcode.com/problems/number-of-arithmetic-triplets/

class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        ans, seen = 0, set()
        for n in nums:
            if n-diff in seen and n-diff*2 in seen:
                ans += 1
            seen.add(n)
        return ans
