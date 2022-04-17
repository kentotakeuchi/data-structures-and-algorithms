# https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

class Solution:
    def countKDifference(self, nums: List[int], k: int) -> int:
        map = {}
        ans = 0

        for n in nums:
            if n-k in map:
                ans += map[n-k]
            if n+k in map:
                ans += map[n+k]
            map[n] = map.get(n, 0) + 1

        return ans
